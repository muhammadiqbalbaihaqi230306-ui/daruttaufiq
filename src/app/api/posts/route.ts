import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = searchParams.get("limit");
  
  try {
    const posts = await prisma.post.findMany({
      where: category ? { category } : undefined,
      orderBy: { publishedAt: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
