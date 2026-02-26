import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  //generate from Google (not your Official password)
            }
        });

        const mailOptions = {
            from: email, // The user's email address
            to: process.env.EMAIL_USER, // pre set email to which we want to collect responses from user
            subject: `New Message from ${name}: ${subject}`,
            text: message,
            html: `
                <h3>Query from a user of Buy Me A Matcha</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
    }
}