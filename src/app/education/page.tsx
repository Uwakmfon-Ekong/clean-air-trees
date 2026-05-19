import Link from "next/link";
import Image from "next/image";
import cleanair from "../../../public/cleanair.png";
import { Wind, Leaf, HeartPulse, ShieldCheck } from "lucide-react";

const iconMap = {
  Wind,
  Leaf,
  HeartPulse,
  ShieldCheck,
};

const whyMatters = [
  {
    num: "01",
    title: "Protects Human Health",
    desc: "Cleaner air reduces diseases like asthma, lung cancer, heart disease, allergies, and breathing problems.",
    color: "bg-green-50 border-green-200",
  },
  {
    num: "02",
    title: "Improves Quality of Life",
    desc: "Fresh air helps people feel healthier, sleep better, and have more energy for daily activities.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    num: "03",
    title: "Protects Children & Elderly",
    desc: "Young children and older adults are more sensitive to polluted air. Cleaner air keeps them safer.",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    num: "04",
    title: "Helps the Environment",
    desc: "Clean air protects trees, animals, rivers, and crops from harmful pollution.",
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    num: "05",
    title: "Reduces Climate Change",
    desc: "Less pollution means fewer harmful gases in the atmosphere, helping to slow global warming.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    num: "06",
    title: "Increases Productivity",
    desc: "People work and study better when the air is clean because their brains and bodies function more effectively.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    num: "07",
    title: "Creates Healthier Communities",
    desc: "Cleaner neighborhoods encourage outdoor activities like walking, exercise, and recreation.",
    color: "bg-pink-50 border-pink-200",
  },
  {
    num: "08",
    title: "Saves Money",
    desc: "Better air quality reduces medical expenses and healthcare costs caused by pollution-related illnesses.",
    color: "bg-teal-50 border-teal-200",
  },
];

const trainingTopics = [
  {
    title: "Pollution Awareness",
    image: "/airpollution.jpg",
    badge: "Air Quality",
    icon: "Wind",
    points: [
      "Causes of air pollution",
      "Types of pollutants",
      "Effects on health and the environment",
    ],
  },
  {
    title: "Environmental Protection",
    image: "/enviromental.jpg",
    badge: "Sustainability",
    icon: "Leaf",
    points: [
      "Recycling methods",
      "Waste management",
      "Energy conservation",
      "Tree planting",
    ],
  },
  {
    title: "Healthy Living Practices",
    image: "/healthyliving.jpg",
    badge: "Wellbeing",
    icon: "HeartPulse",
    points: [
      "Walking and cycling",
      "Public transport use",
      "Reducing smoke exposure",
      "Ventilation habits",
    ],
  },
  {
    title: "Workplace Safety",
    image: "/chemical.jpg",
    badge: "Safety",
    icon: "ShieldCheck",
    points: [
      "Chemical handling",
      "Ventilation systems",
      "Air filtration",
      "Protective equipment",
    ],
  },
];

const advantages = [
  {
    title: "Health",
    accent: "bg-red-400",
    bg: "bg-red-50",
    border: "border-red-200",
    items: [
      "Reduces asthma attacks",
      "Reduces lung diseases",
      "Reduces allergies",
      "Reduces heart disease",
    ],
  },
  {
    title: "Environment",
    accent: "bg-green-400",
    bg: "bg-green-50",
    border: "border-green-200",
    items: [
      "Protects forests & wildlife",
      "Improves water quality",
      "Supports healthy ecosystems",
      "Reduces acid rain",
    ],
  },
  {
    title: "Economy",
    accent: "bg-yellow-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    items: [
      "Reduces healthcare costs",
      "Increases productivity",
      "Supports tourism",
      "Improves agriculture",
    ],
  },
  {
    title: "Society",
    accent: "bg-blue-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
    items: [
      "Safer communities",
      "Better outdoor activities",
      "Improved mental health",
      "Better living conditions",
    ],
  },
];

const future = [
  {
    title: "Renewable Energy",
    desc: "Solar, wind, hydropower, and electric transport to reduce harmful emissions.",
    accent: "bg-yellow-400",
    image: "/renewable-energy.jpg",
  },
  {
    title: "Smart Cities",
    desc: "Electric buses, green buildings, air quality monitoring, and more parks and trees.",
    accent: "bg-blue-400",
    image: "/smartcity.jpg",
  },
  {
    title: "Advanced Technology",
    desc: "Better air filters, carbon capture systems, and eco-friendly products.",
    accent: "bg-purple-400",
    image: "/ecofriendly.jpg",
  },
  {
    title: "Young Leaders",
    desc: "Youth promoting awareness and becoming future environmental champions.",
    accent: "bg-green-400",
    image: "/youngleaders.jpg",
  },
];

const recommendations = [
  {
    group: "Individuals",
    items: [
      "Plant more trees",
      "Reduce vehicle use",
      "Recycle waste",
      "Save electricity",
      "Avoid open burning",
    ],
  },
  {
    group: "Schools",
    items: [
      "Teach environmental education",
      "Organize clean-air campaigns",
      "Encourage recycling programs",
    ],
  },
  {
    group: "Governments",
    items: [
      "Enforce pollution control laws",
      "Invest in renewable energy",
      "Improve public transportation",
    ],
  },
  {
    group: "Businesses",
    items: [
      "Reduce factory emissions",
      "Use cleaner technologies",
      "Protect workers from pollution",
    ],
  },
];

const ways = [
  "Plant more trees",
  "Use public transportation or carpool",
  "Avoid burning trash",
  "Use clean energy sources",
  "Recycle and reduce waste",
];

const pollutionSources = [
  "Vehicle exhaust",
  "Factory smoke",
  "Burning trash",
  "Wildfires",
  "Dust and chemicals",
  "Household pollution",
];

export default function EducationPage() {
  return (
    <main className="pt-16 overflow-x-hidden">
      {/* HERO */}
      <section className="bg-forest-dark py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://source.unsplash.com/1600x600/?forest,air,nature"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* floating blobs */}
        <div
          className="absolute top-10 left-10 w-16 h-16 rounded-full bg-forest-light/20"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
        <div
          className="absolute top-20 right-16 w-10 h-10 rounded-full bg-forest-bright/20"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-10 left-24 w-8 h-8 rounded-full bg-forest-pale/20"
          style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
        />
        <div
          className="absolute bottom-16 right-10 w-12 h-12 rounded-full bg-forest-light/20"
          style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
        />

        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Learn & Act
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ animation: "fadeInDown 0.7s ease forwards" }}
          >
            Breathe Better.
            <br />
            <span className="text-forest-pale">Live Better.</span>
          </h1>
          <p
            className="text-white/70 max-w-xl mx-auto leading-relaxed text-lg mb-8"
            style={{ animation: "fadeInUp 0.7s 0.3s ease both" }}
          >
            Clean air is one of the most important things on Earth — and
            together we can protect it.
          </p>
          <div
            className="flex flex-wrap gap-3 justify-center"
            style={{ animation: "fadeInUp 0.7s 0.5s ease both" }}
          >
            {[
              "Why It Matters",
              "Training",
              "Advantages",
              "The Future",
              "Recommendations",
            ].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full hover:bg-white/25 hover:scale-105 transition-all no-underline"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CLEAN AIR */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-sm overflow-hidden shadow-lg">
            <Image src={cleanair} alt="" className="" />
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Introduction
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              What Is Cleaner Air?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Cleaner air means air that is free from harmful pollutants, smoke,
              dust, chemicals, and dangerous gases. Every person breathes
              thousands of times each day — making air the most important
              natural resource on Earth.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5 font-medium">
              Air pollution comes from:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pollutionSources.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 bg-forest-fog border border-forest-mist rounded-xl px-3 py-2 text-sm text-forest-dark hover:border-forest-light hover:scale-[1.02] transition-all cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-forest-light min-w-[8px]" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section id="why-it-matters" className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Why It Matters
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              8 Reasons Clean Air Matters
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              hover each card to learn more
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyMatters.map((r, i) => (
              <div
                key={r.num}
                className={`border-2 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-200 cursor-default ${r.color}`}
                style={{ animation: `popIn 0.5s ${i * 0.08}s ease both` }}
              >
                <div className="text-xs font-bold text-forest-bright tracking-widest mb-3">
                  {r.num}
                </div>
                <h3 className="text-base font-bold text-forest-dark mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="bg-forest-mid py-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/5"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
        <blockquote className="text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
          "Cleaner air means a healthier life and a{" "}
          <span className="text-forest-pale italic">better future</span> for
          everyone."
        </blockquote>
        <p className="text-white/50 text-sm mt-4 uppercase tracking-widest">
          Cleaner Air, Better Life Vision
        </p>
      </section>

      {/* WAYS TO HELP */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Take Action
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              5 Ways You Can Help
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Small everyday actions add up to a big difference for our planet.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {ways.map((w, i) => (
              <div
                key={w}
                className="flex items-center gap-5 bg-forest-fog border-2 border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light hover:shadow-md hover:scale-[1.01] transition-all cursor-default"
                style={{ animation: `fadeInUp 0.5s ${i * 0.1}s ease both` }}
              >
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark font-semibold text-base">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Training
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Training for Cleaner Air
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Learn practical ways to reduce pollution and improve air quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingTopics.map((t, i) => (
              <div
                key={t.title}
                className="bg-white border-2 border-forest-mist rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-lg hover:border-forest-light transition-all duration-200"
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* optional overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-forest-dark mb-3">
                    {t.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <span className="text-forest-light font-bold mt-0.5">
                          ✓
                        </span>{" "}
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Benefits
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Advantages of Cleaner Air
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cleaner air benefits everyone — from individuals to entire
              nations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className={`border-2 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-200 ${a.bg} ${a.border}`}
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}
              >
                <div className={`w-10 h-2 rounded-full mb-4 ${a.accent}`} />
                <h3 className="text-lg font-bold text-forest-dark mb-4">
                  {a.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {a.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-forest-light font-bold mt-0.5">
                        →
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FUTURE */}
      <section id="the-future" className="bg-forest-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">
              Looking Ahead
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Future of Cleaner Air
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              The future is green — and it starts today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {future.map((f, i) => (
              <div
                key={f.title}
                className="bg-white/8 border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 hover:-translate-y-2 hover:border-forest-bright/50 transition-all duration-200"
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}
              >
                {/* IMAGE SPACE */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                  />

                  {/* soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className={`w-10 h-2 rounded-full mb-5 ${f.accent}`} />
                  <h3 className="text-base font-bold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section id="recommendations" className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Recommendations
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              What Everyone Can Do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              It takes all of us to make the change.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recommendations.map((r, i) => (
              <div
                key={r.group}
                className="bg-white border-2 border-forest-mist rounded-2xl p-7 hover:border-forest-light hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}
              >
                <h3 className="text-lg font-bold text-forest-dark mb-5 pb-3 border-b border-forest-mist">
                  {r.group} Should:
                </h3>
                <ul className="flex flex-col gap-3">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 min-w-[20px] rounded-full bg-forest-mist flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-forest-light" />
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-forest-light py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-around opacity-10 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full bg-white"
              style={{
                animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cleaner Air = Better Health +<br />
            Better Environment + Better Future
          </h2>
          <p className="text-white/85 leading-relaxed mb-3">
            Every action matters. Together, we can create a cleaner, healthier
            world for everyone.
          </p>
          <p className="text-white font-bold text-xl mb-10 italic">
            "Every action matters."
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog hover:scale-105 transition-all no-underline shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all no-underline"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
