import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { votes, options, polls, users } from "@/db/schema";
import { eq, and, sql } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const { poll_id, option_id, user_id } = await req.json();

  const validation = await db
    .select({
      pollId: polls.id,
      optionId: options.id,
      optionPollId: options.poll_id,
      userId: users.id,
    })
    .from(polls)
    .innerJoin(options, eq(polls.id, options.poll_id))
    .innerJoin(users, eq(users.id, user_id))
    .where(and(eq(polls.id, poll_id), eq(options.id, option_id)));

  if (validation.length === 0) {
    return NextResponse.json(
      { error: "Invalid poll or option or user" },
      { status: 400 }
    );
  }

  const existingVote = await db
    .select()
    .from(votes)
    .where(and(eq(votes.poll_id, poll_id), eq(votes.user_id, user_id)));

  if (existingVote.length > 0) {
    return NextResponse.json(
      { error: "User has already voted on this poll" },
      { status: 400 }
    );
  }

  await db.transaction(async (tx) => {
    await tx.insert(votes).values({ poll_id, option_id, user_id });

    await tx
      .update(options)
      .set({
        votes_count: sql`votes_count + 1`,
      })
      .where(eq(options.id, option_id));
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
