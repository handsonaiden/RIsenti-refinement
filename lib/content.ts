export type IconName =
  | "cloud" | "ai" | "data" | "apps" | "work" | "shield" | "check" | "branch" | "star"
  | "spark" | "layers" | "bulb" | "brief" | "science" | "route" | "arrow" | "left"
  | "pin" | "phone" | "mail" | "globe";

export type Area = {
  slug: string;
  title: string;
  icon: IconName;
  tag: string;
  description: string;
  tech: string[];
  moduleTitle: string;
  moduleText: string;
};

export const SITE = {
  name: "Risenti",
  url: "https://risenti.com",
  email: "info@risenti.com",
  phones: [
    { label: "+254 100 052 002", href: "tel:+254100052002" },
    { label: "+254 140 680 570", href: "tel:+254140680570" },
  ],
  address: ["Risenti Place", "P.O. Box 24400-0010", "Nairobi, Kenya"],
  whatsapp:
    "https://wa.me/254140680570?text=Hello%20Risenti%2C%20I%27d%20like%20to%20discuss%20AI%20and%20cloud%20strategy.",
  x: "https://x.com/@risenti",
  linkedin: "https://www.linkedin.com/in/risenti",
  privacy: "https://risenti.com/privacy",
  terms: "https://risenti.com/terms-and-conditions",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About us" },
  { href: "/#values", label: "Values" },
  { href: "/#commitment", label: "Commitment" },
  { href: "/#services", label: "Services" },
];

export const STATS: { value: string; suffix?: string; label: string }[] = [
  { value: "25", label: "Years of experience" },
  { value: "50", label: "Completed projects" },
  { value: "75", label: "Trusted clients" },
  { value: "100", suffix: "%", label: "Satisfaction rate" },
];

export const PRINCIPLES: { icon: IconName; title: string; text: string; gold?: boolean }[] = [
  { icon: "bulb", title: "Clarity", text: "A plain view of the decision in front of you, the options, and what each one costs." },
  { icon: "layers", title: "Structure", text: "Environments, governance and roadmaps shaped around your business priorities." },
  { icon: "check", title: "Evidence", text: "Outcomes you can measure, so every investment can be justified.", gold: true },
];

export const VALUES: { icon: IconName; title: string; text: string; gold?: boolean }[] = [
  { icon: "check", title: "Integrity", text: "We provide objective and independent guidance." },
  { icon: "branch", title: "Independence", text: "We challenge assumptions and avoid vendor-driven thinking." },
  { icon: "star", title: "Excellence", text: "We pursue the highest standards in our work.", gold: true },
];

export const AREAS: Area[] = [
  {
    slug: "cloud-infrastructure",
    title: "Cloud infrastructure",
    icon: "cloud",
    tag: "Building secure, scalable, and resilient digital foundations.",
    description:
      "Cloud is the platform that enables modern organizations to operate, innovate, and scale. Risenti helps organizations define cloud strategies, structure environments, and ensure that technology investments support long-term business objectives.",
    tech: ["Microsoft Azure", "Microsoft Entra", "Microsoft Intune"],
    moduleTitle: "Cloud",
    moduleText: "Building secure, scalable, and resilient digital foundations that support long-term business objectives.",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial intelligence",
    icon: "ai",
    tag: "Applying AI to improve decision-making, automate processes, and unlock organizational intelligence.",
    description:
      "Artificial intelligence creates opportunities to transform how organizations work, but value is only realized when AI is aligned to business priorities. Risenti helps organizations identify use cases, govern adoption, and integrate AI into core operations.",
    tech: ["Azure AI", "Microsoft Copilot", "AI services within Microsoft 365", "AI services within Dynamics 365"],
    moduleTitle: "AI",
    moduleText: "Applying artificial intelligence to improve decision-making, automate processes, unlock insight, and create measurable business value.",
  },
  {
    slug: "data-intelligence",
    title: "Data & intelligence",
    icon: "data",
    tag: "Transforming data into insight and insight into action.",
    description:
      "Organizations generate enormous amounts of data but often struggle to convert it into intelligence. Risenti helps organizations establish data foundations, analytics capabilities, and reporting environments that support evidence-based decision-making.",
    tech: ["Microsoft Fabric", "Power BI", "Microsoft Purview", "Microsoft Search & Intelligence"],
    moduleTitle: "Data",
    moduleText: "Transforming data into insight and insight into action, with foundations built for evidence-based decisions.",
  },
  {
    slug: "business-applications",
    title: "Business applications",
    icon: "apps",
    tag: "Connecting people, processes, and information across the enterprise.",
    description:
      "Business applications enable organizations to manage operations, customers, finance, and service delivery more effectively. Risenti helps organizations maximize value from enterprise applications while aligning them with broader strategic goals.",
    tech: ["Dynamics 365", "Dynamics NAV / Business Central", "Power Apps", "Power Platform"],
    moduleTitle: "Applications",
    moduleText: "Connecting people, processes, and information across the enterprise.",
  },
  {
    slug: "modern-workplace",
    title: "Modern workplace",
    icon: "work",
    tag: "Enabling productivity, collaboration, and new ways of working.",
    description:
      "Modern organizations need tools that support communication, knowledge sharing, and flexibility. Risenti helps organizations design workplace environments that improve productivity and enhance collaboration.",
    tech: ["Microsoft 365", "Teams", "SharePoint", "OneDrive", "Exchange", "Viva Engage"],
    moduleTitle: "Workplace",
    moduleText: "Enabling productivity, collaboration, and new ways of working.",
  },
  {
    slug: "security-compliance",
    title: "Security & compliance",
    icon: "shield",
    tag: "Protecting information, managing risk, and ensuring trust.",
    description:
      "Technology decisions must balance innovation with security, governance, and compliance. Risenti helps organizations establish controls that protect business assets while supporting operational and regulatory requirements.",
    tech: ["Microsoft Defender", "Microsoft Purview", "Microsoft Entra", "Intune", "Exchange Security & Compliance", "Data Governance Solutions"],
    moduleTitle: "Security",
    moduleText: "Protecting information, managing risk, and ensuring trust.",
  },
];

export const MARQUEE = [
  "Microsoft Azure", "Microsoft Entra", "Microsoft Intune", "Azure AI", "Microsoft Copilot",
  "Microsoft Fabric", "Power BI", "Microsoft Purview", "Dynamics 365", "Business Central",
  "Power Platform", "Microsoft 365", "Teams", "SharePoint", "Microsoft Defender",
];

export const SERVICES: { icon: IconName; title: string; text: string; gold?: boolean }[] = [
  { icon: "spark", title: "AI strategy and advisory", text: "We help organizations identify and implement AI strategies aligned with their business objectives." },
  { icon: "layers", title: "Cloud architecture advisory", text: "Gain insight into structuring your cloud environment for optimal performance and scalability." },
  { icon: "bulb", title: "Innovation integration", text: "We make sure innovation translates into real change within your organization." },
  { icon: "brief", title: "Executive technology advisory", text: "We give leadership teams the insight they need to make informed technology decisions." },
  { icon: "science", title: "Data science solutions", text: "We turn data into actionable intelligence that informs strategic decisions." },
  { icon: "route", title: "Strategic technology planning", text: "We help you navigate the complexity of technology investments.", gold: true },
];

export const TESTIMONIALS = [
  { title: "Transformative impact on our business", text: "Risenti's strategic insights transformed our approach to AI and cloud development. Their guidance helped us make informed decisions that significantly improved our operational efficiency." },
  { title: "Exceptional advisory services", text: "The clarity and independence provided by Risenti helped us navigate complex technology decisions confidently. Their structured thinking led to measurable outcomes for our organization." },
  { title: "Partnering for success", text: "Working with Risenti was a game-changer. They helped us align our technology investments with our business goals, ensuring every decision was strategically sound." },
];
