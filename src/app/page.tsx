"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import founder from "../../public/davidandwife.jpg";
import {
  Wind,
  Droplets,
  ThermometerSun,
  Bird,
  HeartPulse,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Intersection observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const whyCards = [
  {
    title: "Cleaner Air",
    desc: "Producing oxygen and improving air quality for communities everywhere.",
    href: "/why-trees#air",
    icon: Wind,
  },
  {
    title: "Flood Protection",
    desc: "Reducing flooding and protecting soil from erosion and degradation.",
    href: "/why-trees#flood",
    icon: Droplets,
  },
  {
    title: "Cooling Cities",
    desc: "Lowering heat in urban areas and reducing the urban heat island effect.",
    href: "/why-trees#heat",
    icon: ThermometerSun,
  },
  {
    title: "Wildlife Support",
    desc: "Supporting birds and wildlife by restoring natural habitats.",
    href: "/why-trees#wildlife",
    icon: Bird,
  },
  {
    title: "Better Health",
    desc: "Improving mental and physical health for people who live near green spaces.",
    href: "/why-trees#health",
    icon: HeartPulse,
  },
  {
    title: "Fight Climate Change",
    desc: "Absorbing carbon dioxide and slowing global warming for future generations.",
    href: "/why-trees#climate",
    icon: Globe2,
  },
];

const projects = [
  {
    image: "/communityplanting.png",
    title: "Community Tree Planting",
    tag: "Ongoing",
    desc: "Organizing tree planting events in schools, parks, and neighborhoods.",
    href: "/projects/community-planting",
  },
  {
    image: "/school-green.jpg",
    title: "School Green Programs",
    tag: "Education",
    desc: "Teaching the next generation about environmental responsibility and tree care.",
    href: "/projects/school-programs",
  },
  {
    image: "/education.jpeg",
    title: "Volunteer Initiatives",
    tag: "Community",
    desc: "Mobilizing volunteers and youth groups to drive grassroots environmental action.",
    href: "/projects/volunteer-initiatives",
  },
];

const whatWeDoCards = [
  {
    num: "01",
    title: "Tree Planting Programs",
    desc: "We organize tree planting events in schools, neighborhoods, parks, and open lands across communities.",
    href: "/what-we-do#planting",
    image: "/planting.jpeg",
  },
  {
    num: "02",
    title: "Community Engagement",
    desc: "We work with volunteers, youth groups, schools, and local leaders to drive grassroots environmental action.",
    href: "/what-we-do#community",
    image: "/education.jpeg",
  },
  {
    num: "03",
    title: "Education & Awareness",
    desc: "We teach communities the power of trees and sustainable living through workshops and campaigns.",
    href: "/what-we-do#education",
    image: "/community.jpeg",
  },
];

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Fade in section wrapper
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-16 overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6">
        {/* Optimised background — uses a blurred low-quality placeholder feel */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-darkest/70 via-forest-darkest/50 to-forest-darkest/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Animated tag */}
          <div
            className="lg:inline-flex hidden items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest mb-6 sm:mb-8"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(-16px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest-bright animate-pulse" />
            Planting Trees. Restoring Nature. Protecting Our Future.
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-wide mb-5 drop-shadow-lg"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            Plant Trees. Save Lives.
            <br />
            <span className="text-forest-pale">Build the Future.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow max-w-2xl mb-8 sm:mb-10 px-2"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
            }}
          >
            We've planted over{" "}
            <span className="font-semibold text-white">3 million trees</span>,
            restoring ecosystems, improving air quality, and creating a
            healthier future for communities across the globe.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-12 sm:mb-16"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
            }}
          >
            <Link
              href="/donate"
              className="bg-forest-light text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-bold hover:bg-forest-bright transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white text-forest-dark px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Volunteer
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/70 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 sm:gap-12 justify-center"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transition: "opacity 1s ease 0.7s",
            }}
          >
            {[
              { num: 3, suffix: "M+", label: "Trees Planted" },
              { num: 100, suffix: "K+", label: "People Reached" },
              { num: 20, suffix: "+", label: "Years of Impact" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow mb-1">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <span className="text-white/40 text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* WHY TREES MATTER */}
      <section className="bg-forest-fog py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Why it matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
              Why Trees Matter
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Trees are more than plants — they are life-support systems for our
              planet.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 80}>
                  <Link
                    href={c.href}
                    className="bg-white border border-forest-mist rounded-2xl p-5 sm:p-7 no-underline hover:-translate-y-1 hover:border-forest-light hover:shadow-md transition-all duration-200 block group h-full"
                  >
                    <div className="w-10 h-10 bg-forest-mist rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-light/15 transition-colors">
                      <Icon
                        size={20}
                        className="text-forest-dark group-hover:text-forest-light transition-colors"
                      />
                    </div>
                    <h3 className="text-base font-semibold text-forest-dark mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {c.desc}
                    </p>
                    <span className="text-forest-light text-sm mt-3 block group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="text-center mt-8 sm:mt-10">
            <Link
              href="/why-trees"
              className="bg-forest-dark text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-forest-mid transition-colors no-underline"
            >
              Read More About Why Trees Matter
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE BAND */}
      <FadeIn>
        <section className="bg-forest-mid py-12 sm:py-16 px-4 sm:px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
            "When we plant trees, we plant{" "}
            <span className="text-forest-pale italic">hope.</span>"
          </blockquote>
        </section>
      </FadeIn>

      {/* WHAT WE DO */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Our work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              From planting events to community education — every action moves
              us closer to a greener planet.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {whatWeDoCards.map((c, i) => (
              <FadeIn key={c.title} delay={i * 100}>
                <Link
                  href={c.href}
                  className="border border-forest-mist rounded-2xl overflow-hidden no-underline group hover:border-forest-light hover:-translate-y-1 transition-all duration-200 block h-full"
                >
                  <div className="relative h-44 sm:h-48 w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="text-sm font-semibold text-forest-bright mb-2 tracking-widest">
                      {c.num}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-forest-dark mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {c.desc}
                    </p>
                    <span className="text-forest-light text-sm group-hover:translate-x-1 transition-transform block">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8 sm:mt-10">
            <Link
              href="/what-we-do"
              className="bg-forest-dark text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-forest-mid transition-colors no-underline"
            >
              See All Our Programs
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-forest-fog py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src="/davidandwife.jpg"
                alt="David and Wife"
                className="rounded-3xl w-full h-[700px] object-cover object-[center_0%]"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-forest-darkest/80 rounded-2xl p-3 sm:p-4">
                <p className="text-white font-semibold text-sm">
                  David & Family
                </p>
                <p className="text-white/50 text-xs">
                  Founder, Clean Air Trees Project
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Who we are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-5 leading-snug">
              A Promise to the Earth and to Our Children
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
              The Clean Air Trees Project is a mission-driven initiative focused
              on restoring ecosystems, improving public health, and inspiring
              environmental action through tree planting.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
              We believe small actions create lasting change. Founded with the
              simple belief that every human being deserves clean, fresh,
              healthy air to breathe.
            </p>
            <Link
              href="/about"
              className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline"
            >
              Learn More About Us →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* DONATE */}
      <FadeIn>
        <section className="bg-forest-dark py-16 sm:py-24 px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
              Support the mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Support a Greener Tomorrow
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
              Your donation helps us buy seedlings, tools, water supplies,
              transportation, and educational materials for communities. Every
              contribution plants hope.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <Link
                href="/donate?amount=20"
                className="border border-forest-pale/40 text-forest-pale px-6 sm:px-7 py-3 rounded-full text-sm hover:bg-forest-pale/10 transition-colors no-underline"
              >
                Donate $20
              </Link>
              <Link
                href="/donate?amount=50"
                className="bg-forest-light text-white px-6 sm:px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-bright transition-colors no-underline"
              >
                Donate $50
              </Link>
              <Link
                href="/donate"
                className="border border-forest-pale/40 text-forest-pale px-6 sm:px-7 py-3 rounded-full text-sm hover:bg-forest-pale/10 transition-colors no-underline"
              >
                Custom Amount
              </Link>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/donate#monthly"
                className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs hover:border-white/40 transition-colors no-underline"
              >
                Monthly Donation
              </Link>
              <Link
                href="/donate#stock"
                className="border border-white/20 text-white/60 px-5 py-2 rounded-full text-xs hover:border-white/40 transition-colors no-underline"
              >
                Stock Donation
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* PROJECTS PREVIEW */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Impact in action
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark">
                Our Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-forest-light font-medium text-sm no-underline hover:text-forest-dark transition-colors"
            >
              View All Projects →
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <Link
                  href={p.href}
                  className="border border-gray-100 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 hover:shadow-md transition-all duration-200 block group h-full"
                >
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="bg-forest-mist text-forest-dark text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                      {p.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-forest-dark mt-3 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <FadeIn>
        <section className="bg-forest-light py-12 sm:py-16 px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Join thousands of people helping restore the earth one tree at a
            time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-forest-dark px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Become a Volunteer
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
