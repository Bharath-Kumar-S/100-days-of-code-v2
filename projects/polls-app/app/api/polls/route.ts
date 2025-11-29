import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { polls, options, users } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export const revalidate = 1; // ISR: 0 means always revalidate
export const dynamic = "force-dynamic"; // forces Next.js to skip caching

export async function POST(req: NextRequest) {
  try {
    const {
      title,
      description,
      created_by,
      poll_options: pollOptions,
      expires_at,
    } = await req.json();

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.id, created_by));

    if (existingUser.length === 0) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const existingPoll = await db
      .select()
      .from(polls)
      .where(eq(polls.title, title));

    if (existingPoll.length > 0) {
      return NextResponse.json(
        { error: "Poll already exists" },
        { status: 409 }
      );
    }

    const [poll] = await db
      .insert(polls)
      .values({
        title,
        description,
        created_by,
        expires_at: new Date(expires_at),
      })
      .returning();

    const createdOptions = [];
    for (const text of pollOptions) {
      const [option] = await db
        .insert(options)
        .values({ poll_id: poll.id, text })
        .returning();
      createdOptions.push(option);
    }

    return NextResponse.json(
      {
        poll,
        poll_options: createdOptions,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("DB Error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Unknown server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allPolls = await db
      .select()
      .from(polls)
      .orderBy(desc(polls.created_at));

    return NextResponse.json({
      total: allPolls.length,
      polls: allPolls,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("DB Error:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Unknown server error" },
      { status: 500 }
    );
  }
}
