import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "agcompanies.official@gmail.com";

// Very small in-memory rate limiter (per server instance). Good enough to
// blunt basic abuse; not a substitute for a real WAF/rate-limit service if
// this ever needs to scale.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidEmail(email: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    // Honeypot field — real users never fill this in; bots often do.
    website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();
  const honeypot = (body.website ?? "").trim();

  // Honeypot tripped -> silently report success so bots don't learn anything,
  // but never actually send the message.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !message) {
    return NextResponse.json(
      { ok: false, error: "Name and message are required." },
      { status: 400 }
    );
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (name.length > 200 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "One of the fields is too long." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    // No SMTP credentials configured in this environment yet. Report this
    // honestly instead of pretending the email was sent.
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email sending is not yet configured on the server (missing SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS environment variables).",
      },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"HIDAYAH365 Website" <${smtpUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: subject
        ? `[HIDAYAH365 Contact] ${subject}`
        : `[HIDAYAH365 Contact] New message from ${name}`,
      text: `From: ${name}${email ? ` <${email}>` : ""}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)}${
        email ? ` &lt;${escapeHtml(email)}&gt;` : ""
      }</p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
