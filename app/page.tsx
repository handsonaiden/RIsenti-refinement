import Link from "next/link";
import { AREAS, MARQUEE, PRINCIPLES, SERVICES, STATS, TESTIMONIALS, VALUES } from "@/lib/content";
import { Icon, Tile } from "@/components/Icons";
import { ModuleCarousel, PracticeTabs } from "@/components/Interactive";

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="badge"><i />Welcome to Risenti</p>
          <h1>Technology decisions that deliver <em>measurable impact.</em></h1>
          <p className="hero-lead">
            Risenti turns AI and cloud capabilities into strategic impact. We give organizations investing in AI
            technologies and cloud environments the clarity and direction to get real results.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-gold" href="/contact">Get started <Icon name="arrow" /></Link>
            <Link className="btn btn-line" href="/#commitment">Explore our work</Link>
          </div>
        </div>

        <div className="dash" aria-hidden="true">
          <div className="card-glass dash-main">
            <div className="dash-top">
              <span className="dots"><i /><i /><i /></span>
              <span className="dash-title">Technology roadmap</span>
              <span className="pill">On track</span>
            </div>
            <svg className="chart" viewBox="0 0 460 230">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#E9B65B" stopOpacity=".3" />
                  <stop offset="1" stopColor="#E9B65B" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,.08)"><path d="M0 50H460M0 110H460M0 170H460" /></g>
              <path className="c-area" d="M10 200C90 200 110 150 170 140S270 112 310 84 400 40 446 22V230H10Z" fill="url(#area)" />
              <path className="c-line" pathLength={1} d="M10 200C90 200 110 150 170 140S270 112 310 84 400 40 446 22" />
              <g className="c-node a"><circle cx="170" cy="140" r="6" fill="#04121A" stroke="#5CC8D0" strokeWidth="2.5" /><text className="c-t" x="170" y="172" textAnchor="middle">Clarity</text></g>
              <g className="c-node b"><circle cx="310" cy="84" r="6" fill="#04121A" stroke="#5CC8D0" strokeWidth="2.5" /><text className="c-t" x="310" y="116" textAnchor="middle">Structure</text></g>
              <g className="c-node c"><circle cx="446" cy="22" r="8" fill="#E9B65B" /><circle cx="446" cy="22" r="16" fill="none" stroke="rgba(233,182,91,.4)" /><text className="c-t" x="436" y="54" textAnchor="end">Evidence</text></g>
            </svg>
            <ul className="rows">
              <li><Icon name="cloud" /><span className="l">Cloud foundation</span><span className="bar"><i style={{ width: "88%" }} /></span><span className="pill">Structured</span></li>
              <li><Icon name="ai" /><span className="l">AI use cases</span><span className="bar"><i style={{ width: "72%" }} /></span><span className="pill gold">Governed</span></li>
              <li><Icon name="data" /><span className="l">Data and reporting</span><span className="bar"><i style={{ width: "80%" }} /></span><span className="pill">Evidence-led</span></li>
            </ul>
          </div>
          <div className="card-glass chip c1"><Tile name="spark" gold /><span><b>Azure AI and Copilot</b><small>Aligned to business priorities</small></span></div>
          <div className="card-glass chip c2"><Tile name="shield" /><span><b>Security and compliance</b><small>Controls that build trust</small></span></div>
        </div>
      </div>

      <div className="wrap">
        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}{s.suffix ? <sup>{s.suffix}</sup> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-label="Microsoft technologies we advise on">
      <div className="marquee-in">
        <span className="marquee-label">Microsoft technologies we advise on</span>
        <div className="marquee-win">
          <div className="marquee-rail">
            <ul className="track">{MARQUEE.map((m) => <li key={m}>{m}</li>)}</ul>
            <ul className="track" aria-hidden="true">{MARQUEE.map((m) => <li key={m}>{m}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="section" id="about">
        <div className="wrap about">
          <div>
            <h2 className="h2">Who we are</h2>
            <p className="lede">Risenti is a leading AI and cloud consultancy dedicated to helping organizations make informed technology decisions.</p>
            <p className="body">
              With a focus on strategic alignment, we make sure every technology investment delivers real, measurable
              impact. Our principle is simple: clarity, structure, and evidence are the keys to successful technology adoption.
            </p>
            <Link className="link" href="/#commitment">Learn more about our work <Icon name="arrow" /></Link>
          </div>
          <div className="stack">
            {PRINCIPLES.map((p) => (
              <div className="layer" key={p.title}>
                <Tile name={p.icon} gold={p.gold} />
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-sec" id="values">
        <div className="wrap">
          <div className="head"><h2 className="h2">Our core values</h2></div>
          <div className="values">
            {VALUES.map((v) => (
              <article className="value" key={v.title}>
                <Tile name={v.icon} gold={v.gold} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark commit" id="commitment">
        <div className="wrap">
          <div className="head">
            <h2 className="h2">Our commitment</h2>
            <p className="sub">Six practice areas, one goal: technology that serves your business objectives.</p>
          </div>
          <PracticeTabs />
        </div>
      </section>

      <section className="section modules-sec" id="modules">
        <div className="wrap"><ModuleCarousel /></div>
      </section>

      <section className="section" id="services" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="head">
            <h2 className="h2">What we offer</h2>
            <p className="sub">Advisory that sits beside your leadership team, from first strategy to measurable outcome.</p>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <article className="svc" key={s.title}>
                <Tile name={s.icon} gold={s.gold} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
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

      <section className="section" id="testimonials">
        <div className="wrap">
          <div className="head"><h2 className="h2">What clients say</h2></div>
          <div className="quotes">
            <figure className="q main">
              <blockquote>{TESTIMONIALS[0].text}</blockquote>
              <h3>{TESTIMONIALS[0].title}</h3>
            </figure>
            {TESTIMONIALS.slice(1).map((t) => (
              <figure className="q" key={t.title}>
                <div className="stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3z" /></svg>
                  ))}
                </div>
                <h3>{t.title}</h3>
                <blockquote>{t.text}</blockquote>
              </figure>
            ))}
          </div>
          {/* Trusted by: add client logos here when you have the files */}
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="sub" style={{ margin: "0 auto 22px" }}>Have a technology decision to make?</p>
          <Link className="btn btn-dark" href="/contact">Talk to Risenti <Icon name="arrow" /></Link>
        </div>
      </section>

      <div style={{ height: 120 }} />
    </>
  );
}
