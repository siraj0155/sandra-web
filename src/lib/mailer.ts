import nodemailer from "nodemailer";

export function createMailer() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP is not configured. Add SMTP_USER and SMTP_PASS to .env.local.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}
