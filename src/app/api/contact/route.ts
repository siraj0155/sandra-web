import { NextResponse } from "next/server";
import { profile } from "@/data/portfolio";
import { createMailer } from "@/lib/mailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let name = "";
  let email = "";
  let message = "";

  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };
    name = String(body.name ?? "").trim();
    email = String(body.email ?? "").trim();
    message = String(body.message ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in every field." }, { status: 400 });
  }

  try {
    const mailer = createMailer();
    const from = process.env.SMTP_USER ?? profile.email;

    await mailer.sendMail({
      from: `"${profile.name}" <${from}>`,
      to: profile.email,
      replyTo: email,
      subject: `Website message from ${name}`,
      text: `${message}\n\n— ${name}\n${email}`,
      html: `<p>${escapeHtml(message).replaceAll("\n", "<br>")}</p><p>— ${escapeHtml(name)}<br>${escapeHtml(email)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Could not send the message.";
    return NextResponse.json({ ok: false, error: detail }, { status: 502 });
  }
}
