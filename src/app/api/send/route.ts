import { NextRequest } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {  
  const incomingBody = await request.json();
  await sendEmail(incomingBody.name, incomingBody.email, incomingBody.text);
  return new Response(null, {status: 200, statusText: "OK"});
}

async function sendEmail(name: string, email: string, text: string): Promise<void> {
  const user = process.env["GMAIL_USERNAME"];
  const pass = process.env["GMAIL_PASS"];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to: "neemiassgc@outlook.com",
    subject: `${name} - ${email}`,
    text,
  });
}