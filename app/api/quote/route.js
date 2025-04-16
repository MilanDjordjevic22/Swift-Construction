import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    // Email sent to us
    await resend.emails.send({
        from: "Swift Construction <onboarding@resend.dev>", // ✅ safe default
        to: process.env.EMAIL_TO,
        subject: "📨 New Quote Request",
        html: `
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Message:</strong><br>${body.message}</p>
        `,
    });

    // Confirmation email to user
    await resend.emails.send({
        from: "Swift Construction <onboarding@resend.dev>",
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
