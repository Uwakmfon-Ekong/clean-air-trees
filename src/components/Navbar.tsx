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
  { label: "About Us", href: "/about" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-forest-dark shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src={logo} alt="Logo"  className="rounded-full w-20" />
          <div>
            <div className="text-white font-semibold text-[28px] leading-tight">THE CLEAN AIR</div>
            <div className="text-forest-pale text-lg tracking-widest leading-tight">TREES PROJECT</div>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex gap-6 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/80 hover:text-white text-[13px] tracking-wide no-underline transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-3">
          <Link href="/donate" className="bg-white text-forest-dark text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-forest-fog transition-colors no-underline">
            Donate Now
          </Link>
          {/* <Link href="/volunteer" className="border border-white/50 text-white text-[13px] px-5 py-2 rounded-full hover:bg-white/10 transition-colors no-underline">
            Volunteer
          </Link> */}
        </div>

        {/* Mobile */}
        <button className="lg:hidden text-white text-xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden h-[100vh] bg-forest-dark px-6 py-4 flex flex-col gap-3 border-t border-white/10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 text-sm py-1 no-underline">
              {l.label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)}
            className="bg-white text-forest-dark text-sm font-semibold px-5 py-2.5 rounded-full text-center no-underline mt-2">
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
