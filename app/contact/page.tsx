import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { Icon, Tile } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in touch",
  description: "Tell Risenti what you are deciding on. We will come back with a clear next step.",
};

export default function ContactPage() {
  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>Get in touch</span>
          </nav>
          <h1>Get in touch</h1>
          <p className="lead">Tell us what you are deciding on. We will come back with a clear next step.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 70 }}>
        <div className="wrap contact">
          <div className="info">
            <h2 className="h2">Reach us directly</h2>
            <p className="sub">Prefer to talk? Call, email, or message us on WhatsApp.</p>
            <ul>
              <li><Tile name="pin" /><address>{SITE.address.map((l, i) => <span key={l}>{l}{i < SITE.address.length - 1 ? <br /> : null}</span>)}</address></li>
              <li><Tile name="phone" /><span>{SITE.phones.map((p, i) => <span key={p.href}><a href={p.href}>{p.label}</a>{i < SITE.phones.length - 1 ? <br /> : null}</span>)}</span></li>
              <li><Tile name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Tile name="globe" /><a href="https://www.risenti.com">www.risenti.com</a></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
      <div style={{ height: 120 }} />
    </>
  );
}
