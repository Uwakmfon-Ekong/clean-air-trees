import Link from "next/link";

const posts = [
  { emoji: "♻️", date: "April 28, 2026", tag: "Environment", title: "From Waste to Wealth: How Communities Are Turning Waste Into Green Gold", excerpt: "Across the world, communities are discovering that agricultural and organic waste can be composted, turned to biochar, or used to create fertile soil for tree nurseries.", href: "/blog/waste-to-wealth" },
  { emoji: "🌡️", date: "April 15, 2026", tag: "Climate", title: "How Trees Help Cool Our Cities and Save Lives", excerpt: "Urban heat is one of the deadliest climate impacts — but trees are nature's air conditioning. Here's the science behind why they work.", href: "/blog/cooling-cities" },
  { emoji: "🐦", date: "March 30, 2026", tag: "Wildlife", title: "Why Biodiversity Begins With a Tree", excerpt: "A single oak tree can support over 500 different species. Learn how tree planting is one of the most effective ways to restore wildlife habitats.", href: "/blog/biodiversity" },
  { emoji: "👨‍👩‍👧", date: "March 12, 2026", tag: "Community", title: "Meet the Families Who Are Changing Their Neighbourhoods One Tree at a Time", excerpt: "From backyards to public parks, families around the world are leading the green revolution — and you can too.", href: "/blog/community-stories" },
  { emoji: "🌬️", date: "February 20, 2026", tag: "Health", title: "The Air We Breathe: Why Clean Air Is a Human Right", excerpt: "Millions of people live in areas with dangerous air pollution. Trees are one of the most affordable and scalable solutions available.", href: "/blog/clean-air-right" },
  { emoji: "🌱", date: "February 5, 2026", tag: "Tips", title: "How to Plant and Care for a Tree: A Beginner's Guide", excerpt: "Think you need to be an expert to plant a tree? Think again. Here's everything you need to know to get started today.", href: "/blog/planting-guide" },
];

export default function BlogPage() {
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Knowledge & Stories</span>
        <h1 className="text-5xl font-bold text-white mb-5">Our Blog</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Stories, science, and inspiration from the front lines of environmental action.
        </p>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.title} href={p.href}
              className="border border-gray-100 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 hover:shadow-md transition-all duration-200 block group">
              <div className="h-44 bg-gradient-to-br from-forest-mist to-forest-fog flex items-center justify-center text-5xl">
                {p.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-forest-mist text-forest-dark text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">{p.tag}</span>
                  <span className="text-[11px] text-gray-400">{p.date}</span>
                </div>
                <h3 className="text-lg font-bold text-forest-dark mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.excerpt}</p>
                <span className="text-forest-light text-sm group-hover:translate-x-1 transition-transform inline-block">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
