/**
 * -----------------------------------------------------------------------------
 * PORTFOLIO CONTENT — edit this file only.
 * -----------------------------------------------------------------------------
 * Every word shown on the website comes from here. Search for "[" to find all
 * placeholders that still need your details.
 *
 * Rules to keep this portfolio safe to publish:
 * - Do NOT add police internal systems, IPs, URLs, network/infrastructure
 *   details, case information, credentials, API keys or any confidential data.
 * - Do NOT invent experience, skills, projects or achievements. Replace the
 *   placeholders with facts only.
 * - Delete any entry you do not want to show — the layout adapts automatically.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
  credential?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export type AchievementItem = {
  title: string;
  year: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

/* --------------------------------------------------------------------------- */
/* Site-wide settings                                                          */
/* --------------------------------------------------------------------------- */

export const site = {
  /** Your full name (also used in the page title and meta description). */
  name: "[Your Full Name]",
  /** Short monogram shown in the header, e.g. "RS". */
  monogram: "[YN]",
  designation: "Head Constable",
  department: "IT & Communications (IT&C)",
  organisation: "Telangana Police",
  /** One-line positioning statement used in the hero and the page description. */
  tagline:
    "Head Constable in the IT & Communications (IT&C) domain of the Telangana Police, with [X+] years of hands-on experience supporting reliable, secure and practical technology for public safety.",
  location: "[City, State]",
  email: "[your.email@example.com]",
  phone: "[+91 XXXXX XXXXX]",
  github: "https://github.com/[your-username]",
  linkedin: "https://www.linkedin.com/in/[your-username]",
  /** Path to your resume in the /public folder. */
  resumePath: "/resume.pdf",
  /** Your deployed domain — used for canonical/OG tags. */
  url: "https://[your-domain].vercel.app",
  /** Change to "dark", "light" or "system". */
  defaultTheme: "dark" as "dark" | "light" | "system",
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* --------------------------------------------------------------------------- */
/* Hero                                                                        */
/* --------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Head Constable · IT & Communications",
  intro:
    "I work in the IT & Communications domain of the Telangana Police, where I [describe your day-to-day contribution in one or two sentences]. My focus is on [your focus areas], and I care about technology that is dependable, secure and simple to operate.",
  /** Short facts shown under the hero introduction. */
  facts: [
    { label: "Role", value: "Head Constable, IT&C" },
    { label: "Department", value: "Telangana Police" },
    { label: "Experience", value: "[X+] years" },
    { label: "Location", value: "[City, State]" },
  ],
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "Download resume", href: site.resumePath },
};

/* --------------------------------------------------------------------------- */
/* About                                                                       */
/* --------------------------------------------------------------------------- */

export const about = {
  heading: "A practical technology professional in public service",
  paragraphs: [
    "I am a Head Constable serving in the IT & Communications (IT&C) wing of the Telangana Police. My work sits at the intersection of [your domain areas] and day-to-day operations, where availability, clarity and consistency matter more than novelty.",
    "Over the years I have developed experience in [area 1], [area 2] and [area 3]. I enjoy taking an ambiguous problem, breaking it down, documenting it clearly and delivering something the team can rely on.",
    "I am always learning. Outside of my core duties I spend time on [interests, technologies or learning goals], and I am open to collaborating on sensible, non-sensitive technology projects.",
  ],
  /** Small "quick facts" list rendered beside the about text. */
  quickFacts: [
    { label: "Current focus", value: "[Your current focus area]" },
    { label: "Domains", value: "[e.g. networking, systems, support]" },
    { label: "Approach", value: "Documented, repeatable, secure" },
    { label: "Open to", value: "[collaboration / knowledge sharing]" },
  ],
};

/* --------------------------------------------------------------------------- */
/* Professional experience                                                     */
/* --------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    role: "Head Constable — IT & Communications",
    organisation: "Telangana Police",
    period: "[YYYY] – Present",
    location: "[City, State]",
    summary:
      "[Describe your scope of work in the IT & Communications domain in one or two sentences. Keep it factual and free of internal system names, IPs, URLs or infrastructure details.]",
    highlights: [
      "[Responsibility or contribution you are comfortable sharing publicly]",
      "[A task you improved, documented or made more reliable]",
      "[Technology, tool or process you work with regularly]",
    ],
  },
  {
    role: "[Previous Role / Designation]",
    organisation: "[Organisation / Unit]",
    period: "[YYYY] – [YYYY]",
    location: "[City, State]",
    summary:
      "[Short description of what you did in this role — one or two sentences.]",
    highlights: [
      "[Key responsibility or achievement]",
      "[Another factual highlight]",
    ],
  },
];

/* --------------------------------------------------------------------------- */
/* Technical skills                                                            */
/* --------------------------------------------------------------------------- */
/* Add or remove groups freely. Only list skills you actually have.            */

export const skills: SkillGroup[] = [
  {
    category: "Programming & Scripting",
    items: ["[Add skill]", "[Add skill]", "[Add skill]", "[Add skill]"],
  },
  {
    category: "Systems & Networking",
    items: ["[Add skill]", "[Add skill]", "[Add skill]", "[Add skill]"],
  },
  {
    category: "Databases & Data",
    items: ["[Add skill]", "[Add skill]", "[Add skill]"],
  },
  {
    category: "Tools & Platforms",
    items: ["[Add skill]", "[Add skill]", "[Add skill]", "[Add skill]"],
  },
  {
    category: "Security & Operations",
    items: ["[Add skill]", "[Add skill]", "[Add skill]"],
  },
  {
    category: "Professional Skills",
    items: ["[Add skill]", "[Add skill]", "[Add skill]"],
  },
];

/* --------------------------------------------------------------------------- */
/* Projects / technical work                                                   */
/* --------------------------------------------------------------------------- */
/* Only describe work you are allowed to share publicly. Never include        */
/* internal systems, IPs, URLs, network diagrams, case data or credentials.    */

export const projects: ProjectItem[] = [
  {
    name: "[Project / Work Item Name]",
    period: "[YYYY]",
    role: "[Your role]",
    description:
      "[What the project was, the problem it solved and the outcome — written for a public audience. Do not mention internal tools, hostnames, IPs or confidential details.]",
    stack: ["[Technology]", "[Technology]", "[Technology]"],
    link: { label: "View on GitHub", href: site.github },
  },
  {
    name: "[Project / Work Item Name]",
    period: "[YYYY]",
    role: "[Your role]",
    description:
      "[Another publicly shareable piece of technical work — keep it short, factual and outcome focused.]",
    stack: ["[Technology]", "[Technology]"],
  },
  {
    name: "[Open-source or personal project]",
    period: "[YYYY]",
    role: "[Your role]",
    description:
      "[Something you built or contributed to outside of work, if applicable.]",
    stack: ["[Technology]", "[Technology]"],
  },
];

/* --------------------------------------------------------------------------- */
/* Certifications & training                                                   */
/* --------------------------------------------------------------------------- */

export const certifications: CertificationItem[] = [
  {
    name: "[Certification Name]",
    issuer: "[Issuing Organisation]",
    year: "[YYYY]",
    credential: "[Credential ID or verification link]",
  },
  {
    name: "[Certification Name]",
    issuer: "[Issuing Organisation]",
    year: "[YYYY]",
  },
  {
    name: "[Course / Training Programme]",
    issuer: "[Training Institute]",
    year: "[YYYY]",
  },
];

export const trainings = {
  heading: "Professional training",
  note: "[Add any departmental or external training programmes you are comfortable listing publicly.]",
  items: [
    { name: "[Training Name]", provider: "[Provider]", duration: "[Duration]" },
    { name: "[Training Name]", provider: "[Provider]", duration: "[Duration]" },
  ],
};

/* --------------------------------------------------------------------------- */
/* Education                                                                   */
/* --------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    degree: "[Degree / Qualification]",
    institution: "[Institution / University]",
    period: "[YYYY] – [YYYY]",
    details: "[Optional: specialization, honours or relevant coursework]",
  },
  {
    degree: "[Earlier Qualification]",
    institution: "[Institution / Board]",
    period: "[YYYY]",
  },
];

/* --------------------------------------------------------------------------- */
/* Achievements                                                                */
/* --------------------------------------------------------------------------- */

export const achievements: AchievementItem[] = [
  {
    title: "[Achievement / Award / Recognition]",
    year: "[YYYY]",
    description:
      "[One line describing the achievement — factual, public and free of operational details.]",
  },
  {
    title: "[Achievement / Recognition]",
    year: "[YYYY]",
    description: "[One line describing the achievement.]",
  },
  {
    title: "[Appreciation / Certificate of merit]",
    year: "[YYYY]",
    description: "[One line describing the achievement.]",
  },
];

/* --------------------------------------------------------------------------- */
/* Contact                                                                     */
/* --------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's connect",
  intro:
    "I am open to professional conversations, knowledge sharing and sensible technology collaboration. Reach out through any channel below.",
  emailNote: "[Add a short note about what you are open to, optional]",
  links: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
    {
      label: "LinkedIn",
      value: site.linkedin.replace("https://", ""),
      href: site.linkedin,
    },
    { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s|\[|\]/g, "")}` },
  ] satisfies ContactLink[],
};

export const footer = {
  note: "Built with Next.js, TypeScript and Tailwind CSS.",
};
