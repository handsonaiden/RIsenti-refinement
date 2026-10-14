"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { SITE } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error" | "invalid";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const org = (data.org || "").trim();
    const msg = (data.msg || "").trim();

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
      setStatus("invalid");
      setMessage("Please enter your name, a valid email, and a short message.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, org, msg, website: data.website || "" }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        setMessage("Thank you. Your message has been sent, and we will reply by email.");
        form.reset();
        return;
      }

      if (json && json.fallback) {
        const body = `${msg}\n\n${name}${org ? "\n" + org : ""}\n${email}`;
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry from " + name)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        setMessage("Opening your email app to send the message.");
        return;
      }

      setStatus("error");
      setMessage((json && json.error) || `Something went wrong. Please email ${SITE.email} directly.`);
    } catch {
      setStatus("error");
      setMessage(`Network error. Please email ${SITE.email} directly.`);
    }
  }

  const bad = status === "invalid";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h3>Send us a message</h3>
      <div className="row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required className={bad ? "bad" : undefined} />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={bad ? "bad" : undefined} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="org">Organization</label>
        <input id="org" name="org" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="msg">How can we support your organization?</label>
        <textarea id="msg" name="msg" rows={5} required className={bad ? "bad" : undefined} />
      </div>
      {/* honeypot: real visitors never see or fill this */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className={`note${status === "error" || status === "invalid" ? " err" : ""}`} role="status">{message}</p>
      <button className="btn btn-dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"} <Icon name="arrow" />
      </button>
    </form>
  );
}
