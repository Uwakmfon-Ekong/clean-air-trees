import Link from "next/link";

const objectives = [
  "Improve air quality by increasing urban tree canopy coverage",
  "Reduce the environmental impacts of climate change through carbon sequestration",
  "Beautify neighborhoods, parks, schools, and public spaces",
  "Promote community participation and environmental awareness",
  "Create habitats for birds, pollinators, and other wildlife",
  "Foster partnerships among residents, local governments, educational institutions, and businesses",
];

const involvement = [
  { title: "Volunteer at Planting Events", desc: "Join hands-on community planting days and help transform public spaces across Nigeria." },
  { title: "Donate Trees or Resources", desc: "Support the project by funding seedlings, tools, and materials needed for planting events." },
  { title: "Sponsor a Greening Project", desc: "Partner with us to sponsor a neighborhood, school, or park greening initiative." },
  { title: "Monitor & Care for Trees", desc: "Help ensure newly planted trees survive and thrive through ongoing care and maintenance." },
];

export default function CommunityPlantingPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/communityplant.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Ongoing
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            Community Tree Planting
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
            Organizing tree planting events in schools, parks, and neighborhoods — building healthier, greener communities together.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-72 rounded-3xl overflow-hidden">
            <img src="/community.jpeg" alt="Community Tree Planting" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">Introduction</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Building Healthier, Greener Communities
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The Clean Air Trees Project is committed to creating healthier, greener, and more sustainable communities through organized tree-planting initiatives. By bringing together local residents, volunteers, schools, businesses, and community organizations, we are transforming public spaces while promoting environmental stewardship and civic engagement.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every tree planted contributes to cleaner air, reduced carbon emissions, improved biodiversity, and enhanced community wellbeing. Our planting events provide opportunities for people of all ages to work together toward a common goal — building a healthier environment for current and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">What Participants Gain</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Hands-On Environmental Action
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Through these initiatives, participants gain hands-on experience in environmental conservation, learn proper tree planting and maintenance techniques, and develop a deeper understanding of the critical role trees play in combating climate change.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Community members are encouraged to take ownership of newly planted trees, ensuring their long-term growth and success.
            </p>
          </div>
          <div className="h-72 rounded-3xl overflow-hidden">
            <img src="/communityplant.png" alt="Hands-on Planting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Goals</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Key Objectives</h2>
          </div>
          <div className="flex flex-col gap-4">
            {objectives.map((o, i) => (
              <div key={o} className="flex items-start gap-5 bg-forest-fog border border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light transition-all">
                <div className="w-9 h-9 min-w-[36px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark text-sm leading-relaxed pt-1">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="bg-forest-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Impact</span>
          <h2 className="text-4xl font-bold text-white mb-6">Community Impact</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Our tree planting activities have already contributed to greener streets, cooler neighborhoods, and stronger community connections. By engaging volunteers in meaningful environmental action, we are cultivating a culture of sustainability and responsibility.
          </p>
          <p className="text-white/70 leading-relaxed">
            Each planted tree represents a long-term investment in cleaner air, healthier ecosystems, and a more resilient future.
          </p>
        </div>
      </section>

      {/* HOW TO GET INVOLVED */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">Take Action</span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">How You Can Get Involved</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Every contribution, no matter how small, helps expand our collective impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {involvement.map((item) => (
              <div key={item.title} className="bg-white border border-forest-mist rounded-2xl p-6 hover:border-forest-light hover:-translate-y-1 transition-all duration-200">
                <div className="w-10 h-1.5 rounded-full bg-forest-light mb-4" />
                <h3 className="text-base font-bold text-forest-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-light py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            One Tree, One Neighborhood, One Community
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Together, we are planting the seeds of change. Join us in building cleaner air and healthier communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/volunteer" className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline">
              Volunteer Now
            </Link>
            <Link href="/donate" className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline">
              Donate
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}