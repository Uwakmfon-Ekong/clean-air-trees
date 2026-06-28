"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Why Trees", href: "/why-trees" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Global Awareness", href: "/projects/global-awareness" },
  { label: "Gallery", href: "/media" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-dark shadow-md">
      <div className="max-w-8xl mx-auto px-4 xl:px-10 flex items-center justify-between py-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <Image src={logo} alt="Logo" className="rounded-full w-10 xl:w-14" />
          <div>
            <div className="text-white font-semibold text-[14px] xl:text-[18px] leading-tight">THE CLEAN AIR</div>
            <div className="text-forest-pale text-[10px] xl:text-[12px] tracking-widest leading-tight">TREES PROJECT</div>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden xl:flex gap-3 list-none items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white/80 hover:text-white text-[11px] tracking-wide no-underline transition-colors px-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex shrink-0">
          <Link
            href="/donate"
            className="bg-white text-forest-dark text-[11px] font-semibold px-4 py-2 rounded-full hover:bg-forest-fog transition-colors no-underline"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-white text-xl w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden min-h-screen bg-forest-dark px-6 py-4 flex flex-col gap-3 border-t border-white/10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm py-1 no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="bg-white text-forest-dark text-sm font-semibold px-5 py-2.5 rounded-full text-center no-underline mt-2"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}