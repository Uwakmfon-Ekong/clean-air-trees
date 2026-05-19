import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import Navbar from "@/components/Navbar";
import founder from "../../public/founder.png";

const whyCards = [
  {
    title: "Cleaner Air",
    desc: "Producing oxygen and improving air quality for communities everywhere.",
    href: "/why-trees#air",
  },
  {
    title: "Flood Protection",
    desc: "Reducing flooding and protecting soil from erosion and degradation.",
    href: "/why-trees#flood",
  },
  {
    title: "Cooling Cities",
    desc: "Lowering heat in urban areas and reducing the urban heat island effect.",
    href: "/why-trees#heat",
  },
  {
    title: "Wildlife Support",
    desc: "Supporting birds and wildlife by restoring natural habitats.",
    href: "/why-trees#wildlife",
  },
  {
    title: "Better Health",
    desc: "Improving mental and physical health for people who live near green spaces.",
    href: "/why-trees#health",
  },
  {
    title: "Fight Climate Change",
    desc: "Absorbing carbon dioxide and slowing global warming for future generations.",
    href: "/why-trees#climate",
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

export default function Home() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6
  bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-forest-darkest/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Tag */}
          <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-bright animate-pulse" />
            Planting Trees. Restoring Nature. Protecting Our Future.
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-wide mb-6 drop-shadow-lg">
            Plant Trees. Save Lives.
            <br />
            <span className="text-forest-pale">Build the Future.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/85 text-lg md:text-xl leading-relaxed drop-shadow max-w-2xl mb-10">
            We’ve planted over{" "}
            <span className="font-semibold text-white">10 million trees</span>,
            restoring ecosystems, improving air quality, and creating a
            healthier future for communities across the globe.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/donate"
              className="bg-forest-light text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-bright transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Volunteer
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            {[
              { num: "10M+", label: "Trees Planted" },
              { num: "Global", label: "Reach" },
              { num: "100%", label: "Community-Driven" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white drop-shadow mb-1">
                  {s.num}
                </div>
                <div className="text-[11px] text-white/60 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TREES MATTER */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Why it matters
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Why Trees Matter
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Trees are more than plants — they are life-support systems for our
              planet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="bg-white border border-forest-mist rounded-2xl p-7 no-underline hover:-translate-y-1 hover:border-forest-light hover:shadow-md transition-all duration-200 block group"
              >
                <div className="w-10 h-10 bg-forest-mist rounded-xl flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-forest-light rounded-full group-hover:scale-110 transition-transform" />
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
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/why-trees"
              className="bg-forest-dark text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-forest-mid transition-colors no-underline"
            >
              Read More About Why Trees Matter
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="bg-forest-mid py-16 px-6 text-center">
        <blockquote className="text-3xl font-bold text-white max-w-2xl mx-auto leading-snug">
          "When we plant trees, we plant{" "}
          <span className="text-forest-pale italic">hope.</span>"
        </blockquote>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Our work
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              From planting events to community education — every action moves
              us closer to a greener planet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDoCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="border border-forest-mist rounded-2xl overflow-hidden no-underline group hover:border-forest-light hover:-translate-y-1 transition-all duration-200 block"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm font-semibold text-forest-bright mb-2 tracking-widest">
                    {c.num}
                  </div>
                  <h3 className="text-xl font-bold text-forest-dark mb-2">
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
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/what-we-do"
              className="bg-forest-dark text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-forest-mid transition-colors no-underline"
            >
              See All Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-forest-mid to-forest-dark rounded-3xl h-full flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-white/30">
              <Image
                src={founder}
                alt="Founder"
                className="rounded-full mx-auto mb-3"
              />
              
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-forest-darkest/80 rounded-2xl p-4">
              <p className="text-white font-semibold text-sm">David & Family</p>
              <p className="text-white/50 text-xs">
                Founder, Clean Air Trees Project
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Who we are
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5 leading-snug">
              A Promise to the Earth and to Our Children
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The Clean Air Trees Project is a mission-driven initiative focused
              on restoring ecosystems, improving public health, and inspiring
              environmental action through tree planting.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
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
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Support the mission
          </span>
          <h2 className="text-4xl font-bold text-white mb-5">
            Support a Greener Tomorrow
          </h2>
          <p className="text-white/60 leading-relaxed mb-10">
            Your donation helps us buy seedlings, tools, water supplies,
            transportation, and educational materials for communities. Every
            contribution plants hope.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <Link
              href="/donate?amount=20"
              className="border border-forest-pale/40 text-forest-pale px-7 py-3 rounded-full text-sm hover:bg-forest-pale/10 transition-colors no-underline"
            >
              Donate $20
            </Link>
            <Link
              href="/donate?amount=40"
              className="bg-forest-light text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-bright transition-colors no-underline"
            >
              Donate $40 ⭐
            </Link>
            <Link
              href="/donate"
              className="border border-forest-pale/40 text-forest-pale px-7 py-3 rounded-full text-sm hover:bg-forest-pale/10 transition-colors no-underline"
            >
              Custom Amount
            </Link>
          </div>
          <div className="flex gap-3 justify-center">
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

      {/* PROJECTS PREVIEW */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Impact in action
              </span>
              <h2 className="text-4xl font-bold text-forest-dark">
                Our Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-forest-light font-medium text-sm no-underline hover:text-forest-dark transition-colors"
            >
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="border border-gray-100 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 hover:shadow-md transition-all duration-200 block group"
              >
                {/* IMAGE SECTION */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="bg-forest-mist text-forest-dark text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                    {p.tag}
                  </span>

                  <h3 className="text-lg font-bold text-forest-dark mt-3 mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-forest-light py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Join thousands of people helping restore the earth one tree at a time.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
          >
            Become a Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}
