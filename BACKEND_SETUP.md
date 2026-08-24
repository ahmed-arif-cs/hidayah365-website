# Backend Setup — Contact Form & Launch Notifications

This website now has two real server-side API routes:

- `POST /api/contact` — sends the contact form message as a real email.
- `POST /api/notify` — saves a "notify me at launch" email signup and
  (optionally) emails the team about it.

## Required environment variables (for real email sending)

Create a `.env` file in the project root (or set these in your hosting
platform's environment settings) with:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

These can come from any standard SMTP provider (e.g. Gmail with an App
Password, SendGrid, Mailgun, Amazon SES SMTP, etc.). The "from" address used
will be `SMTP_USER`; all messages are sent **to**
`agcompanies.official@gmail.com`.

### If you use Gmail as the sending account
Gmail requires an **App Password** (not your normal Gmail password) for SMTP.
Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER` to the Gmail
address, and `SMTP_PASS` to the generated App Password.

## What happens if these variables are NOT set

- `/api/contact` will return a clear error, and the contact form on the
  website will automatically fall back to opening the visitor's own email
  app (a `mailto:` link) instead of silently failing.
- `/api/notify` will still save the email signup to
  `data/notify-signups.jsonl` on the server (so no signups are lost), but it
  will not send a notification email to the team until SMTP is configured.

## Notify-signup storage

Signups are appended to `data/notify-signups.jsonl` (one JSON object per
line: `{"email": "...", "at": "ISO timestamp"}`). This is simple file-based
storage suitable for a self-hosted Node/`next start` deployment. If you
later deploy to a serverless platform where the filesystem is not
persistent between requests, replace this with a real database instead —
the API route is written so that swapping the storage call is a small,
isolated change.
