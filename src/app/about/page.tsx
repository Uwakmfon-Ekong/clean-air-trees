import Link from "next/link";
import Image from "next/image";
import founder from "../../../public/founder.png";
import planting from "../../../public/planting.jpeg";

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          About Us
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">Who We Are</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          The Clean Air Trees Project was founded with one simple but powerful
          belief: every human being deserves clean, fresh, healthy air to
          breathe.
        </p>
      </section>

      {/* MISSION */}
      <section id="mission" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Our Mission
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Improve Healthy Living Through Healthy Air
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our mission is to improve healthy living through healthy air. We
              work to plant trees, educate communities, inspire environmental
              responsibility, and encourage people around the world to take
              action.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              We believe that by increasing green spaces and restoring nature,
              we can reduce pollution, fight climate change, and build healthier
              places for people to live.
            </p>
            <div className="bg-forest-fog border-l-4 border-forest-light p-5 rounded-r-xl">
              <p className="text-forest-dark font-semibold text-lg italic">
                "Plant Trees. Save Lives. Build the Future."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-forest-mid to-forest-dark rounded-3xl  w-full flex items-center justify-center text-6xl text-white/20">
            <Image src={planting} alt="planting" className="rounded-md w-full" />
          </div>
        </div>
      </section>

      {/* PASSION */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Our Passion
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Air Is Life
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Our passion comes from the understanding that air is life. Every
              child, every family, and every community deserves the opportunity
              to breathe fresh, clean air.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "🌬️", label: "Cleaner air", href: "/why-trees#air" },
              { icon: "🌿", label: "Better health", href: "/why-trees#health" },
              {
                icon: "🌎",
                label: "A stronger planet",
                href: "/why-trees#climate",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                label: "Hope for families",
                href: "/what-we-do#community",
              },
              {
                icon: "🌱",
                label: "A better future for children",
                href: "/projects",
              },
            ].map((i) => (
              <Link
                key={i.label}
                href={i.href}
                className="bg-white border border-forest-mist rounded-2xl p-6 text-center no-underline hover:border-forest-light hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{i.icon}</div>
                <p className="text-sm font-medium text-forest-dark">
                  {i.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="bg-forest-mid py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Our Global Vision
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            No Place Is Too Small to Make a Difference
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            The Clean Air Trees Project is not limited by borders. We believe
            trees can be planted anywhere in the world — cities, villages,
            schools, roadsides, parks, neighborhoods, and open land.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            Wherever there is land, there is opportunity. Wherever there are
            people, there is hope.
          </p>
          <Link
            href="/projects"
            className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline"
          >
            See Our Projects
          </Link>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-forest-fog to-forest-mist rounded-3xl h-[60vh] flex  items-center justify-center relative overflow-hidden">
            <div className="text-center text-forest-dark/30">
              <Image
                src={founder}
                alt="Founder"
                className="rounded-full mx-auto "
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Founder Commitment
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              David & Family
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              David and his family are fully committed to achieving this vision.
              With dedication, passion, and faith in a greener future, they
              continue to support the mission of creating cleaner air and
              healthier communities through tree planting.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Their goal is to inspire others to join the movement and leave
              behind a lasting legacy for future generations.
            </p>
            <Link
              href="/contact"
              className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* TOGETHER */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
            Together We Can
          </span>
          <h2 className="text-4xl font-bold text-forest-dark mb-5">
            This Mission Belongs to Everyone
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Governments, businesses, schools, families, volunteers, and
            individuals all have a role to play in protecting the future.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: "Plant millions of trees", href: "/projects" },
              { label: "Improve air quality", href: "/why-trees#air" },
              { label: "Reduce extreme heat", href: "/why-trees#heat" },
              { label: "Support wildlife", href: "/why-trees#wildlife" },
              { label: "Beautify communities", href: "/what-we-do#community" },
              { label: "Build healthier lives", href: "/why-trees#health" },
            ].map((i) => (
              <Link
                key={i.label}
                href={i.href}
                className="bg-white border border-forest-mist rounded-xl p-4 text-sm font-medium text-forest-dark no-underline hover:border-forest-light hover:bg-forest-mist transition-all text-center"
              >
                {i.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-forest-dark text-forest-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-dark hover:text-white transition-colors no-underline"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
