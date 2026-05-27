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
    { label: "Partner With Us", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ],
  Learn: [
    { label: "Why Trees Matter", href: "/why-trees" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
  Contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faqs" },
    { label: "Media", href: "/contact#media" },
  ],
};

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
            © 2025 The Clean Air Trees Project. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/CleanAirTreesProject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/40 hover:text-forest-pale transition-colors no-underline"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
