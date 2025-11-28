import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
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

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, idNum))
      .limit(1)
      .then((res) => res[0] || null);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err: unknown) {
    console.error("DB Error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown server error" },
      { status: 500 }
    );
  }
}
