
import { Resend } from 'resend';
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req : Request, res : Response) {
  try {
    // const data = await resend.emails.send({
    //   from: 'bivu <onboarding@resend.dev>',
    //   to: ['mukherjee4004@gmail.com'],
    //   subject: 'Hello world',
    //   html: '<h1>hello</h1>',
    // });

    return NextResponse.json({ok : "ok"});
  } catch (error) {
    return Response.json({ error });
  }
}
