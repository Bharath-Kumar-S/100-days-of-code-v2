import { db } from "@/db/client";
import { options, polls } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1; // ISR: 0 means always revalidate
export const dynamic = "force-dynamic"; // forces Next.js to skip caching

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const idStr = (await params).id;
    const idNum = Number(idStr);

    if (isNaN(idNum)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const poll = await db
      .select()
      .from(polls)
      .where(eq(polls.id, idNum))
      .limit(1)
      .then((res) => res[0] || null);

    if (!poll) {
      return NextResponse.json({ error: "Poll not found" }, { status: 404 });
    }

    const pollOptions = await db
      .select({
        id: options.id,
        text: options.text,
        votes_count: options.votes_count,
      })
      .from(options)
      .where(eq(options.poll_id, poll.id))
      .orderBy(desc(options.votes_count));

    return NextResponse.json({ ...poll, options: pollOptions });
  } catch (err: unknown) {
    console.error("DB Error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown server error" },
      { status: 500 }
    );
  }
}
