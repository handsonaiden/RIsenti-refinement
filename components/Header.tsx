"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { Logo } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="wrap header-in">
        <Link className="brand" href="/" aria-label="Risenti home" onClick={() => setOpen(false)}>
          <Logo />
          <b>Risenti</b>
        </Link>

        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="cta" href="/contact" onClick={() => setOpen(false)}>
            Get started
          </Link>
        </nav>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
