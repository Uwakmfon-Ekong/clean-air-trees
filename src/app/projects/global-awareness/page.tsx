import Image from "next/image";
import Link from "next/link";
import globalawareness from "../../../../public/globalawareness.png"

const purposes = [
  "Raise awareness about the dangers of air pollution",
  "Encourage tree planting in communities and cities",
  "Promote environmental education and sustainable living",
  "Support cleaner transportation and renewable energy",
  "Inspire global action for a healthier future",
];

const whyMatters = [
  "Reduce respiratory diseases and asthma",
  "Improve heart and lung health",
  "Protect wildlife and ecosystems",
  "Increase energy and productivity",
  "Create healthier and safer communities",
];

const activities = [
  { icon: "🌳", title: "Tree Planting Drives", desc: "Organized community planting events in cities, schools, and open lands." },
  { icon: "🏫", title: "School Environmental Programs", desc: "Teaching the next generation about clean air and sustainable living." },
  { icon: "🧹", title: "Community Clean-Up Events", desc: "Working together to keep our neighborhoods clean and green." },
  { icon: "♻️", title: "Recycling & Waste Reduction", desc: "Raising awareness about responsible waste management." },
  { icon: "🎤", title: "Public Workshops & Seminars", desc: "Educating communities through hands-on learning and open dialogue." },
  { icon: "📱", title: "Social Media Campaigns", desc: "Spreading the message of clean air and environmental action globally." },
];

const whatYouCan = [
  "Plant trees",
  "Recycle waste",
  "Save energy",
  "Use public transportation",
  "Avoid open burning",
  "Educate others about environmental protection",
];

export default function GlobalAwarenessPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Global Awareness Campaign
        </span>
        <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
          Plant Trees. Clean Air. Better Life.
        </h1>
        <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
          A global campaign dedicated to promoting cleaner air, healthier communities, and environmental sustainability through tree planting and education.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link href="/donate" className="bg-forest-light text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-bright transition-colors no-underline">
            Join the Campaign
          </Link>
          <Link href="/volunteer" className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline">
            Volunteer
          </Link>
        </div>
      </section>

      {/* ABOUT THE CAMPAIGN */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-80 rounded-3xl overflow-hidden">
            <Image src={globalawareness} alt="" className="" />
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">About the Campaign</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5 leading-snug">
              A Movement for a Healthier Planet
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The Clean Air Trees Project is a global awareness campaign encouraging individuals, schools, businesses, and governments to work together in reducing air pollution and protecting the planet for future generations.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Trees play a vital role in improving air quality by absorbing CO₂, releasing oxygen, filtering harmful pollutants, and helping reduce climate change. Unfortunately, increasing pollution from vehicles, industries, deforestation, and waste burning continues to threaten human health worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Our Purpose</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Why This Campaign Exists</h2>
          </div>
          <div className="flex flex-col gap-4">
            {purposes.map((p, i) => (
              <div key={p} className="flex items-center gap-5 bg-white border border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light hover:shadow-sm transition-all">
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLEANER AIR MATTERS */}
      <section className="bg-forest-mid py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">Impact</span>
            <h2 className="text-4xl font-bold text-white mb-4">Why Cleaner Air Matters</h2>
            <p className="text-white/60 max-w-xl mx-auto">Cleaner air helps communities thrive in every way.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyMatters.map((w) => (
              <div key={w} className="bg-white/10 border border-white/15 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-6 h-6 min-w-[24px] rounded-full bg-forest-bright flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-white/85 text-sm leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN ACTIVITIES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">What We Do</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Campaign Activities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From the ground to the internet — here's how we're spreading the message.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="border border-forest-mist rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="h-40 overflow-hidden">
                  <img src="https://source.unsplash.com/400x200/?nature,community,environment" alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-3">{a.icon}</div>
                  <h3 className="text-base font-bold text-forest-dark mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Take Action</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">What You Can Do</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everyone can make a difference. Start with one small action today.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatYouCan.map((w, i) => (
              <div key={w} className="flex items-center gap-4 bg-white border border-forest-mist rounded-2xl px-6 py-4 hover:border-forest-light transition-all">
                <div className="w-9 h-9 min-w-[36px] rounded-full bg-forest-mist flex items-center justify-center text-forest-dark font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark font-medium text-sm">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + FINAL MESSAGE */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Vision for the Future</span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-snug">
            Greener Cities. Cleaner Air.<br />Healthier People.
          </h2>
          <p className="text-white/60 leading-relaxed mb-10">
            Through education, teamwork, and environmental responsibility, we can create a better life for present and future generations.
          </p>
          <blockquote className="text-2xl font-bold text-forest-pale italic mb-10">
            "One Tree Today, A Better Tomorrow for All."
          </blockquote>

          

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="bg-forest-light text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-bright transition-colors no-underline">
              Donate Now
            </Link>
            <Link href="/volunteer" className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}