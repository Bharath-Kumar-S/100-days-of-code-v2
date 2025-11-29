import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const revalidate = 1; // ISR: 0 means always revalidate
export const dynamic = "force-dynamic"; // forces Next.js to skip caching

export async function GET() {
  try {
    const allUsers = await db.select().from(users);

    return NextResponse.json({
      total: allUsers.length,
      users: allUsers,
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

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user] = await db
      .insert(users)
      .values({ name, email, password: hashedPassword })
      .returning();

    return NextResponse.json(
      { id: user.id, name: user.name, email: user.email },
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
