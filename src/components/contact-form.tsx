"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please add your name, email, and a message.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Could not send the message.");
      }

      setStatus("sent");
      form.reset();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not send the message.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Name</span>
        <input name="name" type="text" autoComplete="name" required className="field" />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Email</span>
        <input name="email" type="email" autoComplete="email" required className="field" />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Message</span>
        <textarea name="message" rows={5} required className="area" />
      </label>
      <button type="submit" className="btn btn-fill w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" ? (
        <p className="font-mono text-xs text-paper">Thanks. I’ll get back to you.</p>
      ) : null}
      {status === "error" ? (
        <p className="font-mono text-xs text-mist">
          {error} You can also email{" "}
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
