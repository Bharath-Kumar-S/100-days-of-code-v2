import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  ctx: RouteContext<"/api/[id]">
) {
  const { id } = await ctx.params;

  return NextResponse.json(
    { msg: `You requested ID: ${id}` },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // "Cache-Control": "no-store",
        "Cache-Control": `public, max-age=60, s-maxage=60`,
      },
    }
  );
}
