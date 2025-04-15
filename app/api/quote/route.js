import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.live.com", // for hotmail.com / outlook.com
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    });      

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "📨 New Quote Request",
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong><br>${body.message}</p>
      `,
    });

    // Optional: confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: "✅ We've received your quote request!",
      html: `
        <p>Hi ${body.name},</p>
        <p>Thanks for reaching out! We’ve received your request and will be in touch shortly.</p>
        <p>Swift Construction Ltd</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
