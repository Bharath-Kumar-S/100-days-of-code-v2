import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get("name") || "world";

  return NextResponse.json({ message: "Hello, world!", data: name });
}
