import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Our Work
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">What We Do</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          From planting events to community education — every action moves us
          closer to a greener planet.
        </p>
      </section>

      {[
        {
          id: "planting",
          icon: "🌱",
          title: "Tree Planting Programs",
          desc: "We organize tree planting events in schools, neighborhoods, parks, and open lands. Our team works with local governments, landowners, and community leaders to identify the best planting sites and tree species for each location. Every event is a celebration of our shared commitment to the planet.",
          cta: "Join a Planting Event",
          href: "/volunteer",
          image:"/planting.jpeg"
        },
        {
          id: "community",
          icon: "👨‍👩‍👧‍👦",
          title: "Community Engagement",
          desc: "We work with volunteers, youth groups, schools, and local leaders to drive grassroots environmental action. By empowering communities from within, we create lasting change that outlives any single project. We believe that when communities own the solution, they sustain it.",
          cta: "Get Involved",
          href: "/volunteer",
          
        },
        {
          id: "education",
          icon: "📚",
          title: "Education & Awareness",
          desc: "We teach communities the power of trees and sustainable living through workshops, school programs, social media campaigns, and community events. Knowledge is the first seed — plant it and watch a movement grow.",
          cta: "Read Our Blog",
          href: "/blog",
        },
      ].map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 px-6 ${i % 2 === 0 ? "bg-white" : "bg-forest-fog"}`}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {i % 2 === 0 ? (
              <>
                <div>
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h2 className="text-4xl font-bold text-forest-dark mb-5">
                    {s.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline"
                  >
                    {s.cta} →
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-forest-mist to-forest-fog rounded-3xl h-64 flex items-center justify-center text-8xl">
                  {s.icon}
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-forest-mist to-forest-fog rounded-3xl h-64 flex items-center justify-center text-8xl">
                  {s.icon}
                </div>
                <div>
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h2 className="text-4xl font-bold text-forest-dark mb-5">
                    {s.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline"
                  >
                    {s.cta} →
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="bg-forest-light py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join the Movement
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold no-underline"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold no-underline"
          >
            Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}
