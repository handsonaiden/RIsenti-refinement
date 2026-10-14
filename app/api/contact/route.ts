import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = { name?: string; email?: string; org?: string; msg?: string; website?: string };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // honeypot: bots fill this hidden field, so pretend success
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const org = clean(body.org, 160);
  const msg = clean(body.msg, 5000);

  if (!name || !msg || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter your name, a valid email, and a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // not configured yet: tell the form to fall back to the visitor's email app
    return NextResponse.json({ fallback: true }, { status: 501 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@risenti.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Risenti Website <onboarding@resend.dev>";

  const text = `New enquiry from the Risenti website\n\nName: ${name}\nEmail: ${email}\nOrganization: ${org || "-"}\n\n${msg}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry from ${name}`, text }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "We could not send your message right now. Please email info@risenti.com." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send your message right now. Please email info@risenti.com." }, { status: 502 });
  }
}
