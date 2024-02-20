import { revalidateTag } from "next/cache";
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/require-await
export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag")

  try {
    if (!tag || tag.length === 0) throw new Error("Tag not found!")

    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      error: error instanceof Error ? error.message : "Unknown error!"
    })
  }
  
}