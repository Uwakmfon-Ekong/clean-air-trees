import Image from "next/image";
import Link from "next/link";

const objectives = [
  "Environmental Education — teaching students about climate change, air pollution, biodiversity, and sustainable resource management",
  "Tree Planting and Conservation — encouraging students to participate in activities that improve air quality and increase green spaces",
  "Waste Reduction — promoting recycling, composting, and proper waste disposal practices",
  "Energy Conservation — encouraging schools to reduce energy consumption through efficient use of electricity and water",
  "Community Engagement — involving parents, local organizations, and community members in environmental initiatives",
  "Behavioral Change — developing environmentally friendly habits that students can maintain throughout their lives",
];

const components = [
  {
    title: "Tree Planting Initiatives",
    desc: "Schools organize annual tree-planting events where students, teachers, and community members work together to plant and maintain native trees. Students monitor growth, water seedlings, and record observations.",
    image: "/kidsplanting.jpeg",
  },
  {
    title: "School Gardens",
    desc: "Gardens provide opportunities for students to learn about plant growth, food production, and ecosystem management — serving as outdoor classrooms for practical learning.",
    image: "/gardenkids.jpeg",
  },
  {
    title: "Environmental Clubs",
    desc: "Clubs give students a platform to organize awareness campaigns, coordinate recycling programs, and support tree-planting projects as environmental ambassadors.",
    image: "/clubkids.jpeg",
  },
  {
    title: "Recycling & Waste Management",
    desc: "Schools establish recycling stations for paper, plastic, glass, and metal, while composting organic waste reduces what goes to landfills.",
    image: "/recyclingkids.jpeg",
  },
  {
    title: "Environmental Education Curriculum",
    desc: "Environmental topics are integrated into science, geography, social studies, and civic education, reinforcing sustainability as a regular part of school life.",
    image: "/environmentalkids.jpeg",
  },
];

const benefits = [
  {
    title: "Improved Environmental Conditions",
    desc: "Trees and green spaces reduce air pollution, lower temperatures, and improve overall environmental quality.",
  },
  {
    title: "Educational Benefits",
    desc: "Students gain practical knowledge through hands-on environmental activities, improving understanding and retention.",
  },
  {
    title: "Health Benefits",
    desc: "Cleaner air and greener surroundings reduce stress, improve concentration, and enhance overall wellbeing.",
  },
  {
    title: "Social Benefits",
    desc: "Environmental projects encourage teamwork, cooperation, and community involvement among students.",
  },
  {
    title: "Long-Term Sustainability",
    desc: "Instilling environmental values in young people creates a generation more committed to environmental protection.",
  },
];

const challenges = [
  {
    challenge: "Limited Funding",
    solution:
      "Partnerships with local businesses, government agencies, and NGOs provide financial support and resources.",
  },
  {
    challenge: "Lack of Awareness",
    solution:
      "Regular awareness campaigns, workshops, and educational activities address knowledge gaps.",
  },
  {
    challenge: "Maintenance of Trees & Green Spaces",
    solution:
      "Student committees are established to monitor and care for trees, ensuring long-term survival.",
  },
  {
    challenge: "Insufficient Training",
    solution:
      "Professional development workshops give teachers the knowledge and skills to implement programs effectively.",
  },
];

export default function SchoolGreenProgramsPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center relative overflow-hidden">
       <div className="absolute inset-0 opacity-20">
          <img src="/childrenplanting.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Education
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            School Green Programs
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
            Teaching the next generation about environmental responsibility and
            tree care combining education with hands-on conservation.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-72 rounded-2xl overflow-hidden">
            <Image
              src="/childrenplanting.png"
              alt="Students Planting Trees"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Introduction
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Schools as Centers of Environmental Change
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              School Green Programs are an essential component of environmental
              sustainability initiatives. They educate students, teachers, and
              communities about conservation while actively involving them in
              activities that improve local ecosystems.
            </p>
            <p className="text-gray-500 leading-relaxed">
              When schools participate in tree-planting campaigns, recycling
              initiatives, and conservation education, they contribute directly
              to cleaner air and students become advocates who spread
              environmental awareness to their families and neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Goals
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Objectives
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Creating a culture where environmental responsibility becomes part
              of everyday school life.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {objectives.map((o, i) => (
              <div
                key={o}
                className="flex items-start gap-5 bg-white border border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light transition-all"
              >
                <div className="w-9 h-9 min-w-[36px] rounded-full bg-forest-light flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-forest-dark text-sm leading-relaxed pt-1">
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Program Components
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((c) => (
              <div
                key={c.title}
                className="border border-forest-mist rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-forest-light transition-all duration-200"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-forest-dark mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANCE / WHY IT MATTERS */}
      <section className="bg-forest-dark py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">
              Why It Matters
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Supporting the Clean Air Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Enhancing Air Quality",
                desc: "Trees absorb CO₂ and pollutants while releasing oxygen, creating cleaner air for students and communities.",
              },
              {
                title: "Environmental Awareness",
                desc: "Students learn the causes and effects of pollution and deforestation, empowering informed action.",
              },
              {
                title: "Future Leaders",
                desc: "Students develop leadership and responsibility, preparing them to become environmental advocates.",
              },
              {
                title: "Community Impact",
                desc: "As students share what they learn, the project's impact reaches families and the wider community.",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-white/8 border border-white/12 rounded-2xl p-6"
              >
                <div className="w-10 h-1.5 rounded-full bg-forest-bright mb-4" />
                <h3 className="text-base font-bold text-white mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Outcomes
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-forest-mist rounded-2xl p-6 hover:border-forest-light transition-all"
              >
                <h3 className="text-base font-bold text-forest-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Looking Ahead
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Challenges & Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {challenges.map((c) => (
              <div
                key={c.challenge}
                className="bg-forest-fog border border-forest-mist rounded-2xl p-6"
              >
                <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">
                  Challenge
                </p>
                <p className="text-sm text-gray-600 mb-4">{c.challenge}</p>
                <div className="pt-4 border-t border-forest-mist">
                  <p className="text-xs font-semibold text-forest uppercase tracking-widest mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-gray-600">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION CTA */}
      <section className="bg-forest-light py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Educate. Plant. Protect.
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            School Green Programs combine environmental education with practical
            conservation, cultivating environmentally responsible citizens for
            life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline"
            >
              Support This Program
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
