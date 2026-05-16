import Link from "next/link";

const reasons = [
  { num: "01", title: "Protects Human Health", desc: "Cleaner air reduces diseases like asthma, lung cancer, heart disease, allergies, and breathing problems." },
  { num: "02", title: "Improves Quality of Life", desc: "Fresh air helps people feel healthier, sleep better, and have more energy for daily activities." },
  { num: "03", title: "Protects Children and Elderly", desc: "Young children and older adults are more sensitive to polluted air. Cleaner air keeps them safer and healthier." },
  { num: "04", title: "Helps the Environment", desc: "Clean air protects trees, animals, rivers, and crops from harmful pollution." },
  { num: "05", title: "Reduces Climate Change", desc: "Less pollution means fewer harmful gases in the atmosphere, helping to slow global warming." },
  { num: "06", title: "Increases Productivity", desc: "People work and study better when the air is clean because their brains and bodies function more effectively." },
  { num: "07", title: "Creates Healthier Communities", desc: "Cleaner neighborhoods encourage outdoor activities like walking, exercise, and recreation." },
  { num: "08", title: "Saves Money", desc: "Better air quality reduces medical expenses and healthcare costs caused by pollution-related illnesses." },
];

const ways = [
  "Plant more trees",
  "Use public transportation or carpool",
  "Avoid burning trash",
  "Use clean energy sources",
  "Recycle and reduce waste",
];

export default function EducationPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Learn & Act
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">Education</h1>
        <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
          Clean air is very important for human health, nature, and the environment.
          Here are key reasons why cleaner air matters.
        </p>
      </section>

      {/* WHY CLEAN AIR MATTERS */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Why it matters
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Why Clean Air Matters
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              The air we breathe affects every part of our lives — our health, our communities, and our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.num}
                className="bg-white border border-forest-mist rounded-2xl p-6 hover:-translate-y-1 hover:border-forest-light hover:shadow-md transition-all duration-200">
                <div className="text-xs font-bold text-forest-bright tracking-widest mb-3">{r.num}</div>
                <div className="w-full h-32 rounded-xl overflow-hidden mb-4">
                  <img
                    src={`https://source.unsplash.com/400x200/?air,nature,clean`}
                    alt={r.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-forest-dark mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="bg-forest-mid py-16 px-6 text-center">
        <blockquote className="text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
          "Cleaner air means a healthier life and a{" "}
          <span className="text-forest-pale italic">better future</span> for everyone."
        </blockquote>
        <p className="text-white/50 text-sm mt-4 uppercase tracking-widest">
          Cleaner Air, Better Life Vision
        </p>
      </section>

      {/* WAYS TO HELP */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Take Action
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Ways to Help Keep the Air Clean
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Small everyday actions add up to a big difference for our planet.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {ways.map((w, i) => (
              <div key={w}
                className="flex items-center gap-5 bg-forest-fog border border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light hover:shadow-sm transition-all">
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark font-medium text-base">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-dark py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Start With a Tree 🌱
        </h2>
        <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
          The simplest and most powerful thing you can do for cleaner air is plant a tree. Join us today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/donate"
            className="bg-forest-light text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-bright transition-colors no-underline">
            Donate Now
          </Link>
          <Link href="/volunteer"
            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline">
            Volunteer
          </Link>
        </div>
      </section>

    </main>
  );
}