import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "agcompanies.official@gmail.com";
const DATA_FILE = path.join(process.cwd(), "data", "notify-signups.jsonl");

const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
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

  let body: { email?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const honeypot = (body.website ?? "").trim();

  if (honeypot) {
    // Bot detected — report success without actually storing/sending anything.
    return NextResponse.json({ ok: true });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Persist the signup locally (best-effort; this is a simple file-based
  // store suitable for a self-hosted Node deployment, not a serverless one).
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    const entry = JSON.stringify({ email, at: new Date().toISOString() }) + "\n";
    await fs.appendFile(DATA_FILE, entry, "utf8");
  } catch (err) {
    console.error("Failed to persist notify signup to disk:", err);
    // Do not fail the whole request just because local persistence failed —
    // fall through and still attempt the email notification below.
  }

  // Best-effort notification email to the team, only if SMTP is configured.
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpPort && smtpUser && smtpPass) {
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
        subject: "[HIDAYAH365] New launch-notification signup",
        text: `New signup for launch notification: ${email}`,
      });
    } catch (err) {
      console.error("Notify-signup email failed (signup was still saved):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
