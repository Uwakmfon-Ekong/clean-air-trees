import Link from "next/link";

export default function VolunteerPage() {
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Get Involved
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">
          Become a Volunteer
        </h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Join thousands of people helping restore the earth one tree at a time.
          No experience needed — just a passion for the planet.
        </p>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "🌱",
                title: "Tree Planting Events",
                desc: "Join our community planting days in parks, schools, and open lands near you.",
                href: "/projects",
              },
              {
                icon: "📚",
                title: "Education Programs",
                desc: "Help us teach children and communities about the importance of trees and nature.",
                href: "/education",
              },
              {
                icon: "📣",
                title: "Spread the Word",
                desc: "Share our mission on social media and help us reach more people who care.",
                href: "/contact",
              },
            ].map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="border border-forest-mist rounded-2xl p-7 no-underline hover:border-forest-light hover:-translate-y-1 transition-all block"
              >
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="text-lg font-bold text-forest-dark mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="bg-forest-fog rounded-3xl p-10 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-dark mb-6 text-center">
              Sign Up to Volunteer
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
              />
              <input
                type="text"
                placeholder="Your city / location"
                className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
              />
              <select className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light">
                <option>How would you like to help?</option>
                <option>Tree Planting Events</option>
                <option>Education Programs</option>
                <option>Social Media & Awareness</option>
                <option>Corporate Partnership</option>
              </select>
              <button className="bg-forest-dark text-white py-3.5 rounded-full text-sm font-bold hover:bg-forest-mid transition-colors">
                Sign Me Up 🌳
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
