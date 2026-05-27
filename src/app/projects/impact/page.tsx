import Link from "next/link";
import Image from "next/image";

const achievements = [
  { num: "10,000+", label: "Seedlings Distributed" },
  { num: "3,500+", label: "Trees Planted" },
  { num: "15+", label: "Diverse Communities" },
  { num: "850", label: "Youth Volunteers" },
];

const indicators = [
  { indicator: "Seedlings Distributed", target: "8,000", achievement: "10,000" },
  { indicator: "Trees Planted", target: "3,000", achievement: "3,500" },
  { indicator: "Community Participants", target: "2,000", achievement: "2,800" },
  { indicator: "Youth Volunteers", target: "500", achievement: "850" },
  { indicator: "Environmental Workshops", target: "20", achievement: "28" },
];

const activities = [
  {
    title: "Tree Planting Campaigns",
    desc: "Community tree planting activities were organized in schools, parks, roadside areas, and open community spaces. Volunteers worked together to plant different species of trees suitable for the local climate.",
    image: "/planting.jpeg",
    outcomes: [
      "Reduced environmental degradation",
      "Increased public participation in environmental activities",
      "Improved green coverage in targeted communities",
    ],
  },
  {
    title: "Seedling Distribution Program",
    desc: "Seedlings were distributed to households, schools, churches, mosques, and local organizations to encourage continuous environmental participation. Each beneficiary received guidance on proper planting techniques, watering schedules, and tree maintenance.",
    image: "/seedlingdistribution.png",
    outcomes: [
      "Increased household participation",
      "Expansion of home gardening initiatives",
      "Greater awareness about climate change",
    ],
  },
];

const impacts = [
  {
    title: "Social Impact",
    color: "bg-blue-50 border-blue-200",
    accent: "bg-blue-400",
    items: ["Increased community unity", "Greater youth engagement", "Promotion of volunteer culture", "Improved environmental education"],
  },
  {
    title: "Environmental Impact",
    color: "bg-green-50 border-green-200",
    accent: "bg-green-400",
    items: ["Improved air quality", "Reduction in soil erosion", "Increased biodiversity", "Improved urban greenery", "Enhanced awareness of climate action"],
  },
  {
    title: "Economic Impact",
    color: "bg-yellow-50 border-yellow-200",
    accent: "bg-yellow-400",
    items: ["Temporary employment opportunities", "Support for local nurseries", "Skills development in environmental management"],
  },
];

const challenges = [
  { challenge: "Limited funding for expansion", solution: "Partnerships with local organizations" },
  { challenge: "Weather-related planting delays", solution: "Community watering schedules established" },
  { challenge: "Some seedling losses due to drought", solution: "Increased volunteer mobilization" },
  { challenge: "Transportation challenges in rural areas", solution: "Awareness campaigns on tree maintenance" },
];

const futureActivities = [
  "School environmental clubs",
  "Urban gardening programs",
  "Recycling awareness campaigns",
  "Annual environmental festivals",
  "Climate change education seminars",
];

export default function ImpactMonitoringPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center relative overflow-hidden">
      
        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Impact Monitoring Report
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            Global Awareness &<br />Tree Planting Initiative
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg mb-4">
            Prepared by Green Earth Community Initiative
          </p>
          <p className="text-white/40 text-sm uppercase tracking-widest">
            Reporting Period: January 2026 – December 2026
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {["Overview", "Activities", "Impact", "Monitoring", "Success Stories"].map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full hover:bg-white/25 hover:scale-105 transition-all no-underline">
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ACHIEVEMENTS */}
      <section id="overview" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Executive Summary</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">Key Achievements</h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              The Global Awareness and Tree Planting Initiative was launched to promote environmental sustainability, climate action, and community engagement. The project successfully brought together people from African, Asian, American, European, and Indian communities to work toward a greener future.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((a, i) => (
              <div key={a.label}
                className="bg-forest-fog border-2 border-forest-mist rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-md hover:border-forest-light transition-all duration-200"
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}>
                <div className="text-4xl font-bold text-forest-dark mb-2">{a.num}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{a.label}</div>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <div className="bg-forest-dark rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Project Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Increase environmental awareness in local communities",
                "Encourage tree planting and climate action",
                "Distribute healthy seedlings to households and institutions",
                "Promote global unity through environmental collaboration",
                "Improve green spaces and biodiversity",
              ].map((o, i) => (
                <div key={o} className="flex items-start gap-3 bg-white/8 border border-white/12 rounded-2xl p-4">
                  <div className="w-6 h-6 min-w-[24px] rounded-full bg-forest-light flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="bg-forest-fog py-24 px-6">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {activities.map((a) => (
    <div
      key={a.title}
      className="bg-white border-2 border-forest-mist rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-forest-light transition-all duration-200"
    >
      {/* Image */}
      <div className="w-full h-60 relative">
        <Image
          src={a.image}
          alt={a.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-forest-dark mb-3">
          {a.title}
        </h3>

        <p className="text-gray-500 leading-relaxed text-sm mb-5">
          {a.desc}
        </p>

        <p className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">
          Outcomes
        </p>

        <ul className="flex flex-col gap-2">
          {a.outcomes.map((o, i) => (
            <li key={`${a.title}-${i}`} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="text-forest-light font-bold mt-0.5">→</span>
              {o}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section id="impact" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Community Impact</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Impact Across Every Area</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              The initiative created positive change across social, environmental, and economic dimensions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impacts.map((imp, i) => (
              <div key={imp.title}
                className={`border-2 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-200 ${imp.color}`}
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}>
                <div className={`w-12 h-2 rounded-full mb-5 ${imp.accent}`} />
                <h3 className="text-xl font-bold text-forest-dark mb-5">{imp.title}</h3>
                <ul className="flex flex-col gap-3">
                  {imp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-forest-light font-bold mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONITORING & EVALUATION */}
      <section id="monitoring" className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Monitoring & Evaluation</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Measuring Our Impact</h2>
          </div>

          {/* Indicators table */}
          <div className="bg-white border border-forest-mist rounded-2xl overflow-hidden mb-10 shadow-sm">
            <div className="grid grid-cols-3 bg-forest-dark text-white text-xs uppercase tracking-widest font-semibold px-6 py-4">
              <span>Indicator</span>
              <span className="text-center">Target</span>
              <span className="text-center">Achievement</span>
            </div>
            {indicators.map((row, i) => (
              <div key={row.indicator}
                className={`grid grid-cols-3 px-6 py-4 border-t border-forest-mist items-center ${i % 2 === 0 ? "bg-white" : "bg-forest-fog"}`}>
                <span className="text-sm font-medium text-forest-dark">{row.indicator}</span>
                <span className="text-center text-sm text-gray-500">{row.target}</span>
                <span className="text-center text-sm font-bold text-forest-light">{row.achievement} ✓</span>
              </div>
            ))}
          </div>

          {/* Challenges & Solutions */}
          <h3 className="text-2xl font-bold text-forest-dark mb-6 text-center">Challenges & Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {challenges.map((c) => (
              <div key={c.challenge} className="bg-white border border-forest-mist rounded-2xl p-6 hover:border-forest-light hover:-translate-y-0.5 transition-all">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">Challenge</p>
                  <p className="text-sm text-gray-600">{c.challenge}</p>
                </div>
                <div className="pt-4 border-t border-forest-mist">
                  <p className="text-xs font-semibold text-forest uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-sm text-gray-600">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="success-stories" className="bg-forest-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">Success Stories</span>
            <h2 className="text-4xl font-bold text-white mb-4">Real Change, Real People</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Community Transformation", desc: "Many communities reported cleaner surroundings, improved public participation, and stronger environmental awareness after the project implementation." },
              { title: "Youth Leadership Development", desc: "Young volunteers developed leadership, teamwork, and environmental advocacy skills through active participation in the initiative." },
              { title: "Sustainability Plan", desc: "The project will continue seedling distribution annually, expand environmental education programs, and build partnerships with schools and NGOs." },
            ].map((s, i) => (
              <div key={s.title}
                className="bg-white/8 border border-white/12 rounded-2xl p-7 hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
                style={{ animation: `popIn 0.5s ${i * 0.1}s ease both` }}>
                <div className="w-10 h-1.5 rounded-full bg-forest-bright mb-5" />
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-forest-mid rounded-3xl p-10 text-center">
            <blockquote className="text-xl font-bold text-white leading-relaxed mb-4 italic">
              "This project has brought people together from different backgrounds to care for our environment. The trees we planted today will benefit future generations."
            </blockquote>
            <p className="text-white/50 text-xs uppercase tracking-widest">— Community Beneficiary</p>
          </div>
        </div>
      </section>

      {/* FUTURE ACTIVITIES */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Appendix</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Recommended Future Activities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Building on our success to create even greater impact in the years ahead.</p>
          </div>
          <div className="flex flex-col gap-4">
            {futureActivities.map((f, i) => (
              <div key={f}
                className="flex items-center gap-5 bg-white border-2 border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light hover:shadow-md hover:scale-[1.01] transition-all"
                style={{ animation: `fadeInUp 0.5s ${i * 0.1}s ease both` }}>
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark font-semibold">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-light py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Be Part of the Next Chapter</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Every tree planted is a step toward a healthier planet. Join us and help write the next success story.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/donate" className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog hover:scale-105 transition-all no-underline shadow-lg">
            Donate Now
          </Link>
          <Link href="/volunteer" className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all no-underline">
            Volunteer
          </Link>
        </div>
      </section>

    </main>
  );
}