"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { AREAS, type Area } from "@/lib/content";
import { Icon, Tile } from "@/components/Icons";

export function PracticeTabs({ areas = AREAS }: { areas?: Area[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (i: number) => {
    const n = (i + areas.length) % areas.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(areas.length - 1); }
  };

  const area = areas[active];

  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-label="Practice areas" aria-orientation="vertical">
        {areas.map((a, i) => (
          <button
            key={a.slug}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            type="button"
            id={`tab-${a.slug}`}
            aria-controls={`panel-${a.slug}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="t"><Icon name={a.icon} /></span>
            {a.title}
          </button>
        ))}
      </div>

      <div className="card-glass panels">
        <div className="panel" role="tabpanel" id={`panel-${area.slug}`} aria-labelledby={`tab-${area.slug}`} key={area.slug}>
          <Tile name={area.icon} gold />
          <h3>{area.title}</h3>
          <p className="tag">{area.tag}</p>
          <p className="desc">{area.description}</p>
          <p className="lab">Microsoft technologies</p>
          <ul className="chips">
            {area.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <Link className="link" href={`/services/${area.slug}`}>
            Read more <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ModuleCarousel({ areas = AREAS }: { areas?: Area[] }) {
  const rail = useRef<HTMLDivElement>(null);

  const step = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".mod");
    const w = card ? card.offsetWidth + 22 : 340;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <>
      <div className="mod-head">
        <div>
          <h2 className="h2">Modules</h2>
          <p className="sub">Pick a focus area and see how we approach it.</p>
        </div>
        <div className="arrows">
          <button type="button" aria-label="Previous module" onClick={() => step(-1)}><Icon name="left" /></button>
          <button type="button" aria-label="Next module" onClick={() => step(1)}><Icon name="arrow" /></button>
        </div>
      </div>
      <div className="rail" ref={rail}>
        {areas.map((a) => (
          <article className="mod" key={a.slug}>
            <div className="mod-art"><Tile name={a.icon} /></div>
            <div className="mod-body">
              <h3>{a.moduleTitle}</h3>
              <p>{a.moduleText}</p>
              <Link className="mod-link" href={`/services/${a.slug}`}>
                See the approach <Icon name="arrow" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
