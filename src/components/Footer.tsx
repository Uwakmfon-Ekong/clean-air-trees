import Link from "next/link";


const cols = {
  About: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Vision", href: "/about#vision" },
    { label: "Founder", href: "/about#founder" },
  ],
  "Get Involved": [
    { label: "Plant a Tree", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Donate", href: "/donate" },
    { label: "Corporate Partnerships", href: "/corporate-partnerships" }
  ],
  Learn: [
    { label: "Why Trees Matter", href: "/why-trees" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Projects", href: "/projects" },
  ],
  Contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faqs" },
    { label: "Gallery", href: "/media" },
  ],
};

const socials = [
  {
    href: "https://www.facebook.com/share/1BknwHDH9i/?mibextid=wwXIfr",
    label: "Facebook",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/cleanairtreesproject",
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@cleanairtreesproject",
    label: "TikTok",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/132803997",
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];
export default function Footer() {
  return (
    <footer className="bg-forest-darkest text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="text-lg font-bold mb-1">
              The Clean Air Trees Project
            </div>
            <p className="text-white/40 text-xs leading-relaxed mt-3">
              Planting trees. Restoring nature. Protecting our future — one
              community at a time.
            </p>
          </div>
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[11px] text-white/35 uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {items.map((i) => (
                  <li key={i.label}>
                    <Link
                      href={i.href}
                      className="text-[13px] text-white/55 hover:text-forest-pale transition-colors no-underline"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/30">
            © 2026 The Clean Air Trees Project. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              
               <a key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center text-white/40 hover:bg-forest-light hover:text-white transition-colors no-underline"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}