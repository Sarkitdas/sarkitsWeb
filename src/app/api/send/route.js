// src/app/api/send/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email: piudassaikat@gmail.com
        pass: process.env.EMAIL_PASS, // Your 16-character App Password
      },
    });

    const mailOptions = {
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: "piudassaikat@gmail.com",
      subject: "Project Query",
      text: `Hello, I am interested to connect with you. I have a project idea.\n\nSender Email: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}