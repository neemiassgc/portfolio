import { NextRequest } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {  
  const incomingBody = await request.json();
  await sendEmail(incomingBody.name, incomingBody.email, incomingBody.message);
  return new Response(null, {status: 200, statusText: "OK"});
}

async function sendEmail(name: string, email: string, message: string): Promise<void> {
  const user = process.env["GMAIL_USERNAME"] as string;
  const pass = process.env["GMAIL_PASS"] as string;
  const targetEmail = process.env["TARGET_EMAIL"] as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to: targetEmail,
    subject: `${name} - ${email}`,
    text: message,
  });
}