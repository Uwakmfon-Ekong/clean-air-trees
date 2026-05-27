import Image from "next/image";
import Link from "next/link";

export default function SeedlingsPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Environmental Initiative
        </span>

        <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
          Seedling Distribution <br /> Initiative
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">
          Building greener communities through tree planting, restoration, and climate action.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/seedlingdistribution.png"
              alt="Seedling Distribution"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-forest-dark mb-5">
              Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The Seedling Distribution Initiative is a community-driven environmental program focused on restoring ecosystems
              and promoting climate action through large-scale tree planting.
            </p>

            <p className="text-gray-600 leading-relaxed">
              It provides free or affordable seedlings to schools, households, farmers, and organizations to encourage
              reforestation, improve air quality, and build a sustainable future.
            </p>
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-forest-dark text-center mb-12">
            Why It Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Climate Action",
                text: "Trees absorb carbon dioxide, reduce heat, and help fight climate change.",
              },
              {
                title: "Healthy Ecosystems",
                text: "They improve biodiversity, soil quality, and restore degraded land.",
              },
              {
                title: "Community Growth",
                text: "Encourages participation, awareness, and environmental responsibility.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-forest-mist rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-forest-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-forest-dark mb-8 text-center">
            Program Details
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Trees play a vital role in sustaining life on Earth. They absorb carbon dioxide, release oxygen,
              prevent soil erosion, provide shade, and support biodiversity.
            </p>

            <p>
              The initiative distributes fruit trees like mango, orange, avocado, and guava, along with hardwood,
              shade, medicinal, and fast-growing species suitable for different environments.
            </p>

            <p>
              Communities are trained on proper planting techniques, watering schedules, and long-term tree care
              to ensure survival and growth of seedlings.
            </p>

            <p>
              Schools, NGOs, volunteers, and local organizations collaborate to identify areas that need trees
              such as roadsides, farms, parks, and public spaces.
            </p>

            <p>
              Beyond environmental benefits, the initiative supports economic growth through agroforestry,
              improved soil fertility, and sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-light py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Movement
        </h2>

        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Every seedling planted is a step toward a greener planet and a better future.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/volunteer"
            className="bg-white text-forest-dark px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Volunteer
          </Link>

          <Link
            href="/donate"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Support Us
          </Link>
        </div>
      </section>

    </main>
  );
}