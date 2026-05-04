import Link from "next/link";

const projects = [
  { emoji: "🌊", title: "Community Tree Planting", tag: "Ongoing", desc: "Organizing tree planting events in schools, parks, and neighborhoods across communities. Every event brings families and volunteers together for a greener tomorrow.", href: "/projects/community-planting" },
  { emoji: "🏫", title: "School Green Programs", tag: "Education", desc: "Teaching the next generation about environmental responsibility and tree care. We partner with schools to build green corners and outdoor learning spaces.", href: "/projects/school-programs" },
  { emoji: "🤝", title: "Volunteer Initiatives", tag: "Community", desc: "Mobilizing volunteers and youth groups to drive grassroots environmental action in communities that need it most.", href: "/projects/volunteer-initiatives" },
  { emoji: "🌍", title: "Global Awareness Campaign", tag: "Campaign", desc: "Raising awareness online and offline about the importance of trees, clean air, and environmental responsibility worldwide.", href: "/projects/awareness-campaign" },
  { emoji: "🌱", title: "Seedling Distribution", tag: "Ongoing", desc: "Distributing free seedlings to families, schools, and community centers so everyone can plant a tree close to home.", href: "/projects/seedlings" },
  { emoji: "📊", title: "Impact Monitoring", tag: "Research", desc: "Tracking the health and growth of planted trees to measure our environmental impact over time.", href: "/projects/impact" },
];

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Impact in Action</span>
        <h1 className="text-5xl font-bold text-white mb-5">Our Projects</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          From community planting events to school programs — here's where your support goes.
        </p>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.title} href={p.href}
              className="border border-gray-100 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 hover:shadow-md transition-all duration-200 block group">
              <div className="h-44 bg-gradient-to-br from-forest-mist to-forest-fog flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {p.emoji}
              </div>
              <div className="p-6">
                <span className="bg-forest-mist text-forest-dark text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-forest-dark mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                <span className="text-forest-light text-sm group-hover:translate-x-1 transition-transform inline-block">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest-light py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Support Our Projects</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link href="/donate" className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold no-underline">Donate Now</Link>
          <Link href="/volunteer" className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold no-underline">Volunteer</Link>
        </div>
      </section>
    </main>
  );
}
