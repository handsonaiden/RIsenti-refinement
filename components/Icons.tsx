import type { ReactNode } from "react";
import type { IconName } from "@/lib/content";

const PATHS: Record<IconName, ReactNode> = {
  cloud: (<><path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9H7z" /><path d="M9 14.5l3-3 3 3" /></>),
  ai: (<><rect x="6.5" y="6.5" width="11" height="11" rx="2.5" /><path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" /><path d="M12 9.5l.9 1.6 1.6.9-1.6.9-.9 1.6-.9-1.6-1.6-.9 1.6-.9z" /></>),
  data: (<><path d="M4 20h16" /><path d="M7 16v-5M12 16V6M17 16v-8" /><circle cx="7" cy="8" r="1.2" /><circle cx="17" cy="5" r="1.2" /></>),
  apps: (<><rect x="4" y="4" width="6.5" height="6.5" rx="1.6" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" /><path d="M16.75 13.5v6.5M13.5 16.75H20" /></>),
  work: (<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16.5 14.2A5 5 0 0 1 21 19" /></>),
  shield: (<><path d="M12 3l7 3v5.2c0 4.4-3 7.8-7 9.8-4-2-7-5.4-7-9.8V6l7-3z" /><path d="M9 12l2 2 4-4" /></>),
  check: (<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.5" /></>),
  branch: (<><path d="M12 21v-8" /><path d="M12 13L6 7M12 13l6-6" /><path d="M6 7V3M18 7V3" /></>),
  star: (<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3z" />),
  spark: (<><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /><path d="M18.5 16v4M16.5 18h4" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 16.5l9 5 9-5" /></>),
  bulb: (<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></>),
  brief: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" /></>),
  science: (<><path d="M4 4v16h16" /><circle cx="9" cy="14" r="1.4" /><circle cx="13" cy="9" r="1.4" /><circle cx="17.5" cy="12" r="1.4" /><path d="M10 13l2-3M14.2 9.8l2 1.4" /></>),
  route: (<><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="5.5" r="2" /><path d="M7.5 18.5H14a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7h6" /></>),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  left: (<path d="M19 12H5M11 6l-6 6 6 6" />),
  pin: (<><path d="M12 21s7-5.7 7-11a7 7 0 0 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></>),
};

export function Icon({ name, className = "ico" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  );
}

export function Tile({ name, gold = false, className = "" }: { name: IconName; gold?: boolean; className?: string }) {
  return (
    <span className={`tile${gold ? " gold" : ""}${className ? " " + className : ""}`}>
      <Icon name={name} />
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="14" fill="#0F6370" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" fill="none" stroke="rgba(255,255,255,.28)" />
      <path d="M17 35V13h9.5a7 7 0 0 1 0 14H17" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 27l10.5 9" fill="none" stroke="#E9B65B" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M33 8.5l2.4 2.4L33 13.3l-2.4-2.4z" fill="#E9B65B" />
    </svg>
  );
}
