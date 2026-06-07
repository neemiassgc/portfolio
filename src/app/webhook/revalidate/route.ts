import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import  { createHmac } from "node:crypto";

export async function POST(request: NextRequest) {
  const isValid = await validateRequest(request, "X-Hub-Signature-256" )
    || await validateRequest(request, "X-Notion-Signature");

  if (!isValid) return new NextResponse(null, { status: 403 });

  revalidatePath("/");
  return new NextResponse("Ok", { status: 200 });
}

async function validateRequest(request: NextRequest, signatureHeader: string): Promise<boolean> {
  const headerList = await headers();
  const signature = headerList.get(signatureHeader);
  
  if (!signature) return false;

  const body = await request.text();
  const sha256 = generateSha(body, signatureHeader);
  return sha256 === signature.slice(7);
}

function generateSha(input: string, signatureHeader: string): string {
  const secret = signatureHeader === "X-Hub-Signature-256" ?
    process.env.GITHUB_SECRET as string :
    process.env.NOTION_SECRET as string;
  const hash = createHmac('sha256', secret)
    .update(input)
    .digest('hex');

  return hash;
}