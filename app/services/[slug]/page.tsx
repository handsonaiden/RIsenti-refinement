import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AREAS } from "@/lib/content";
import { Icon, Tile } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.title, description: area.tag };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const others = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/#commitment">Our commitment</Link><span>/</span>
            <span>{area.title}</span>
          </nav>
          <Tile name={area.icon} gold />
          <h1>{area.title}</h1>
          <p className="lead">{area.tag}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap detail">
          <div>
            <p className="desc">{area.description}</p>
            <p className="lab">Microsoft technologies</p>
            <ul className="chips">{area.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            <div style={{ marginTop: 40 }}>
              <Link className="btn btn-dark" href="/contact">Talk to us about this <Icon name="arrow" /></Link>
            </div>
          </div>
          <aside className="aside">
            <h3>Other practice areas</h3>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`}>{o.title} <Icon name="arrow" /></Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-in">
          <div>
            <h2>Ready to make impactful decisions?</h2>
            <p>Transform your AI and cloud strategies with confidence.</p>
          </div>
          <Link className="btn btn-gold" href="/contact">Get started <Icon name="arrow" /></Link>
        </div>
      </section>
      <div style={{ height: 120 }} />
    </>
  );
}
