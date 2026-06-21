import GalleryGrid from "@/components/imagegrid";

const testimonials = [
  {
    quote:
      "Participating in The Clean Air Trees Project gave me the opportunity to contribute to a healthier environment while connecting with people who share a passion for sustainability.",
    name: "Community Volunteer",
  },
  {
    quote:
      "The project has helped beautify our neighborhood and provided environmental education for our students.",
    name: "School Partner",
  },
];

export default function MediaPage() {
  return (
    <>
      <main className="pt-16">
        {/* HERO */}
        <section
          className="py-24 px-6 text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-forest-dark/85" />
          <div className="relative z-10">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
              Media Center
            </span>
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Welcome to Our Gallery
            </h1>
            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
              Your gateway to our journey of environmental restoration,
              community engagement, and climate action — stories, milestones,
              event highlights, photo galleries, and more.
            </p>
          </div>
        </section>

        {/* FEATURED GALLERY */}
        <GalleryGrid />

        {/* SUCCESS STORIES */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Success Stories
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-4">
                Transforming Communities Through Trees
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-forest-fog border border-forest-mist rounded-2xl p-8 hover:border-forest-light transition-all"
                >
                  <p className="text-forest-dark text-base leading-relaxed italic mb-5">
                    "{t.quote}"
                  </p>
                  <p className="text-sm font-semibold text-forest-light">
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
