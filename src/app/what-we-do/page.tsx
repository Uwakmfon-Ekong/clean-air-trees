import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    id: "planting",
    title: "Tree Planting Programs",
    desc: "We organize tree planting events in schools, neighborhoods, parks, and open lands. Our team works with local governments, landowners, and community leaders to identify the best planting sites and tree species for each location. Every event is a celebration of our shared commitment to the planet.",
    cta: "Join a Planting Event",
    href: "/volunteer",
    image: "/planting.jpeg",
  },
  {
    id: "community",
    title: "Community Engagement",
    desc: "We work with volunteers, youth groups, schools, and local leaders to drive grassroots environmental action. By empowering communities from within, we create lasting change that outlives any single project. We believe that when communities own the solution, they sustain it.",
    cta: "Get Involved",
    href: "/volunteer",
    image: "/education.jpeg",
  },
  {
    id: "education",
    title: "Education & Awareness",
    desc: "We teach communities the power of trees and sustainable living through workshops, school programs, social media campaigns, and community events. Knowledge is the first seed — plant it and watch a movement grow.",
    cta: "Learn More",
    href: "/projects/global-awareness",
    image: "/community.jpeg",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="pt-16 overflow-x-hidden">
      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/forest-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Our Work
          </span>

          <h1 className="text-5xl font-bold text-white mb-5">
            What We Do
          </h1>

          <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
            From planting events to community education — every action
            moves us closer to a greener planet.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 px-6 ${
            i % 2 === 0 ? "bg-white" : "bg-forest-fog"
          }`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {i % 2 === 0 ? (
              <>
                {/* TEXT */}
                <div>
                  <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                    Our Initiative
                  </span>

                  <h2 className="text-4xl font-bold text-forest-dark mb-5 leading-tight">
                    {s.title}
                  </h2>

                  <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid hover:scale-105 transition-all duration-200 no-underline"
                  >
                    {s.cta}
                    <span>→</span>
                  </Link>
                </div>

                {/* IMAGE */}
                <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl group">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </>
            ) : (
              <>
                {/* IMAGE */}
                <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl group">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* TEXT */}
                <div>
                  <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                    Our Initiative
                  </span>

                  <h2 className="text-4xl font-bold text-forest-dark mb-5 leading-tight">
                    {s.title}
                  </h2>

                  <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid hover:scale-105 transition-all duration-200 no-underline"
                  >
                    {s.cta}
                    <span>→</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-forest-light py-16 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-all duration-200 no-underline"
            >
              Donate Now
            </Link>

            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-200 no-underline"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}