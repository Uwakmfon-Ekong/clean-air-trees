import Link from "next/link";

const reasons = [
  { id: "air", icon: "🌬️", title: "Cleaner Air", desc: "Trees produce oxygen and absorb carbon dioxide, dramatically improving air quality in every community they're planted in. A single mature tree can absorb up to 48 pounds of CO₂ per year." },
  { id: "flood", icon: "🌧️", title: "Flood Protection", desc: "Tree root systems absorb rainfall and reduce surface runoff, protecting soil from erosion and communities from devastating floods. Forests are nature's sponges." },
  { id: "heat", icon: "🌡️", title: "Cooling Cities", desc: "Urban trees can reduce city temperatures by up to 8°C, lowering energy bills, reducing the urban heat island effect, and making cities more liveable." },
  { id: "wildlife", icon: "🐦", title: "Supporting Wildlife", desc: "Trees are home to thousands of species. By planting trees we restore habitats, protect biodiversity, and give birds, insects, and wildlife the ecosystems they need to thrive." },
  { id: "health", icon: "❤️", title: "Improving Health", desc: "Research consistently shows that access to green spaces improves mental health, reduces stress, lowers blood pressure, and increases life expectancy in communities." },
  { id: "climate", icon: "🌎", title: "Fighting Climate Change", desc: "Forests are one of our most powerful tools against climate change. Trees sequester carbon, regulate rainfall, and help stabilise global temperatures for future generations." },
];

export default function WhyTreesPage() {
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Why It Matters</span>
        <h1 className="text-5xl font-bold text-white mb-5">Why Trees Matter</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Trees are more than plants — they are life-support systems for our planet and every community on it.
        </p>
      </section>

      <section className="bg-forest-fog py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {reasons.map((r) => (
            <a key={r.id} href={`#${r.id}`} className="bg-white border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full no-underline hover:border-forest-light hover:bg-forest-mist transition-all">
              {r.title}
            </a>
          ))}
        </div>
      </section>

      {reasons.map((r, i) => (
        <section key={r.id} id={r.id} className={`py-24 px-6 ${i % 2 === 0 ? "bg-white" : "bg-forest-fog"}`}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {i % 2 === 0 ? (
              <>
                <div>
                  <div className="text-5xl mb-5">{r.icon}</div>
                  <h2 className="text-4xl font-bold text-forest-dark mb-5">{r.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-lg">{r.desc}</p>
                  <Link href="/donate" className="inline-block mt-8 bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline">
                    Help Plant a Tree
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-forest-mist to-forest-fog rounded-3xl h-64 flex items-center justify-center text-8xl">
                  {r.icon}
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-forest-mist to-forest-fog rounded-3xl h-64 flex items-center justify-center text-8xl">
                  {r.icon}
                </div>
                <div>
                  <div className="text-5xl mb-5">{r.icon}</div>
                  <h2 className="text-4xl font-bold text-forest-dark mb-5">{r.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-lg">{r.desc}</p>
                  <Link href="/donate" className="inline-block mt-8 bg-forest-dark text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline">
                    Help Plant a Tree
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="bg-forest-light py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link href="/donate" className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline">Donate Now</Link>
          <Link href="/volunteer" className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline">Volunteer</Link>
        </div>
      </section>
    </main>
  );
}
