import Image from "next/image";
import Link from "next/link";

const objectives = [
  "Support Tree Planting Activities — increase the number of trees planted and maintained through volunteer participation",
  "Promote Environmental Education — educate volunteers and community members about conservation and sustainability",
  "Enhance Community Participation — encourage local communities to take an active role in environmental improvement",
  "Strengthen Environmental Stewardship — foster a sense of responsibility for protecting natural resources",
  "Support Long-Term Tree Maintenance — ensure newly planted trees receive proper care and monitoring",
  "Develop Leadership Skills — provide opportunities for volunteers to organize and lead environmental activities",
  "Create Sustainable Partnerships — build collaboration between schools, businesses, government and community organizations",
];

const activityTypes = [
  {
    title: "Tree Planting Campaigns",
    desc: "Volunteers select planting sites, prepare soil, plant seedlings, and water young trees — transforming degraded land into green spaces while fostering teamwork.",
    image: "/treecampaign.jpeg",
  },
  {
    title: "Tree Care & Maintenance",
    desc: "Watering, mulching, weeding, monitoring health, and protecting young trees from pests — these activities significantly improve tree survival rates.",
    image: "/treemaintenance.jpeg",
  },
  {
    title: "Community Clean-Up Activities",
    desc: "Removing litter and waste from parks, streets, rivers, and public spaces — creating cleaner, healthier environments for newly planted trees.",
    image: "/clean-up.jpeg",
  },
  {
    title: "Environmental Awareness Campaigns",
    desc: "Distributing educational materials, hosting workshops, exhibitions, and social media campaigns to spread knowledge of clean air and conservation.",
    image: "/tree-awareness.jpeg",
  },
  {
    title: "School-Based Volunteer Programs",
    desc: "Tree-planting events, environmental clubs, green campus programs, and school gardens that build lifelong commitment to sustainability.",
    image: "/school-based.jpeg",
  },
];

const benefits = [
  {
    title: "Environmental Benefits",
    items: [
      "Increased tree cover",
      "Improved air quality",
      "Reduced carbon dioxide levels",
      "Enhanced biodiversity",
      "Reduced soil erosion",
    ],
  },
  {
    title: "Social Benefits",
    items: [
      "Teamwork skills",
      "Leadership abilities",
      "Stronger social connections",
      "Community pride",
    ],
  },
  {
    title: "Educational Benefits",
    items: [
      "Environmental science knowledge",
      "Conservation techniques",
      "Sustainable development understanding",
      "Climate change literacy",
    ],
  },
  {
    title: "Personal Development",
    items: [
      "Increased self-confidence",
      "Enhanced problem-solving",
      "Greater sense of purpose",
      "Improved mental wellbeing",
    ],
  },
];

const partners = [
  {
    title: "Educational Institutions",
    desc: "Schools, colleges and universities provide a large pool of enthusiastic volunteers through service-learning programs.",
  },
  {
    title: "NGOs",
    desc: "Environmental NGOs provide expertise, training, funding, and logistical support for volunteer initiatives.",
  },
  {
    title: "Corporate Organizations",
    desc: "Businesses support through CSR programs — tree planting events, funding, and specialized skills.",
  },
  {
    title: "Government Agencies",
    desc: "Local and national agencies provide permits, technical guidance, funding, and public awareness support.",
  },
];

const challenges = [
  {
    challenge: "Volunteer Retention",
    solution:
      "Recognizing contributions, offering leadership opportunities, and celebrating achievements keeps volunteers engaged.",
  },
  {
    challenge: "Resource Constraints",
    solution:
      "Partnerships, fundraising campaigns, and sponsorships help address limited funding.",
  },
  {
    challenge: "Environmental Conditions",
    solution:
      "Careful planning, species selection, and maintenance practices mitigate weather and pest-related risks.",
  },
  {
    challenge: "Safety Concerns",
    solution:
      "Safety training, proper equipment, and adequate supervision protect volunteers during outdoor activities.",
  },
];

export default function VolunteerInitiativesPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/volunteer-initiatives.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
            Community
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
            Volunteer Initiatives
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
            Mobilizing volunteers and youth groups to drive grassroots
            environmental action — the human energy behind the Clean Air Trees
            Project.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-72 rounded-2xl overflow-hidden">
            <Image
              src="/volunteer-initiatives.jpeg"
              alt="Students Planting Trees"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Introduction
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              The Bridge Between Goals and Community
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Volunteer initiatives are a critical component of the Clean Air
              Trees Project, serving as a bridge between environmental goals and
              community participation. Volunteers contribute their time, skills,
              and energy to support tree planting, monitoring, and maintenance.
            </p>
            <p className="text-gray-500 leading-relaxed">
              While financial resources and technical expertise matter, the
              active participation of volunteers greatly enhances the project's
              impact — making it more inclusive, sustainable, and
              community-driven.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Why It Matters
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Why Volunteers Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Community Engagement",
                desc: "Volunteers from diverse backgrounds create a sense of collective responsibility, strengthening social bonds and cooperation.",
              },
              {
                title: "Cost-Effective Implementation",
                desc: "Volunteer labor reduces costs, allowing project funds to go further toward seedlings, equipment, and maintenance.",
              },
              {
                title: "Awareness & Advocacy",
                desc: "Volunteers become ambassadors who spread environmental knowledge to friends, family, and their communities.",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-white border border-forest-mist rounded-2xl p-7"
              >
                <div className="w-10 h-1.5 rounded-full bg-forest-light mb-4" />
                <h3 className="text-base font-bold text-forest-dark mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Goals
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Objectives
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {objectives.map((o, i) => (
              <div
                key={o}
                className="flex items-start gap-5 bg-forest-fog border border-forest-mist rounded-2xl px-6 py-5 hover:border-forest-light transition-all"
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

      {/* TYPES OF ACTIVITIES */}
      <section className="bg-forest-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">
              Get Involved
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of Volunteer Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityTypes.map((a) => (
              <div
                key={a.title}
                className="bg-white/8 border border-white/12 rounded-2xl overflow-hidden hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Outcomes
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Benefits of Volunteering
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-forest-mist rounded-2xl p-6"
              >
                <h3 className="text-base font-bold text-forest-dark mb-4">
                  {b.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {b.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="text-forest-light font-bold mt-0.5">
                        →
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
              Working Together
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-4">
              Partnerships Supporting Volunteers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partners.map((p) => (
              <div
                key={p.title}
                className="bg-forest-fog border border-forest-mist rounded-2xl p-6"
              >
                <h3 className="text-base font-bold text-forest-dark mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="bg-forest-fog py-24 px-6">
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
                className="bg-white border border-forest-mist rounded-2xl p-6"
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

      {/* CTA */}
      <section className="bg-forest-light py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Become a Volunteer Today
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Through tree planting, maintenance, clean-ups, and education,
            volunteers are the cornerstone of our work — join the network of
            environmental stewards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline"
            >
              Sign Up to Volunteer
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Donate Instead
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
