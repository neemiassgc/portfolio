import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import  { createHmac } from "node:crypto";

export async function POST(request: NextRequest) {
  const isValid = await validateRequest(request);

  if (!isValid) return new NextResponse(null, { status: 403 });

  revalidatePath("/");
  return new NextResponse("Ok", { status: 200 });
}

async function validateRequest(request: NextRequest): Promise<boolean> {
  const headerList = await headers();
  const signature = headerList.get("X-Hub-Signature-256");
  if (!signature) return false;

  const body = await request.text();
  const sha256 = generateSha(body);
  return sha256 === signature.slice(7);
}

function generateSha(input: string): string {
  const secret = process.env.GITHUB_SECRET as string;
  const hash = createHmac('sha256', secret)
    .update(input)
    .digest('hex');

  return hash;
}
