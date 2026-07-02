import Link from "next/link";

import {
  Shield,
  Leaf,
  Globe,
  Droplets,
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  Award,
  Mail,
} from "lucide-react";

const tiers = [
  {
    name: "Global Legacy Partner",
    amount: "$10,000,000+",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    benefits: [
      "Permanent recognition as a Global Legacy Partner",
      "Featured on the homepage of The Clean Air Trees Project",
      "Executive spotlight and success story",
      "Global media announcements",
      "Opportunity to co-launch international initiatives",
      "Exclusive naming rights for flagship reforestation programs",
      "Annual executive sustainability impact briefing",
      "Premium logo placement across major campaigns",
    ],
  },
  {
    name: "Platinum Climate Champion",
    amount: "$5,000,000 – $9,999,999",
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-800",
    benefits: [
      "Premium logo placement",
      "Featured partner profile",
      "Dedicated impact report",
      "Joint press releases",
      "Executive networking opportunities",
      "Employee volunteer engagement",
      "Recognition at annual environmental events",
    ],
  },
  {
    name: "Gold Sustainability Partner",
    amount: "$1,000,000 – $4,999,999",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-800",
    benefits: [
      "Featured on Partner Wall",
      "Project naming opportunities",
      "Quarterly impact reports",
      "Sustainability campaign collaboration",
      "Recognition across digital platforms",
    ],
  },
  {
    name: "Silver Environmental Partner",
    amount: "$500,000 – $999,999",
    color: "bg-gray-50 border-gray-200",
    badge: "bg-gray-100 text-gray-700",
    benefits: [
      "Corporate logo displayed on our website",
      "Recognition in annual report",
      "Tree planting certificates",
      "Employee volunteer opportunities",
    ],
  },
  {
    name: "Green Innovation Partner",
    amount: "$100,000 – $499,999",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-800",
    benefits: [
      "Official partner certificate",
      "Website recognition",
      "Annual impact summary",
      "Social media acknowledgements",
    ],
  },
  {
    name: "Community Impact Partner",
    amount: "$25,000 – $99,999",
    color: "bg-forest-fog border-forest-mist",
    badge: "bg-forest-mist text-forest-dark",
    benefits: [
      "Recognition on the Community Partners page",
      "Digital appreciation badge",
      "Environmental impact updates",
    ],
  },
];

const whyPartner = [
  {
    title: "ESG Leadership",
    desc: "Demonstrate measurable ESG and sustainability leadership to stakeholders and investors.",
    icon: BarChart3,
  },
  {
    title: "Carbon Reduction",
    desc: "Support global carbon reduction initiatives through verified tree planting programs.",
    icon: Globe,
  },
  {
    title: "Biodiversity",
    desc: "Restore biodiversity through large-scale reforestation across critical ecosystems.",
    icon: Leaf,
  },
  {
    title: "CSR Impact",
    desc: "Strengthen Corporate Social Responsibility commitments with tangible outcomes.",
    icon: Shield,
  },
  {
    title: "Employee Engagement",
    desc: "Engage employees in meaningful volunteer experiences that build team culture.",
    icon: Users,
  },
  {
    title: "UN SDG Alignment",
    desc: "Contribute to achieving several United Nations Sustainable Development Goals.",
    icon: Award,
  },
];

const whatMakesPossible = [
  { title: "Large-scale tree planting", icon: Leaf },
  { title: "Forest restoration", icon: Globe },
  { title: "Watershed protection", icon: Droplets },
  { title: "Wildlife habitat restoration", icon: Shield },
  { title: "Environmental education", icon: BookOpen },
  { title: "Youth environmental leadership", icon: GraduationCap },
  { title: "Community livelihood programs", icon: Users },
  { title: "Climate resilience projects", icon: BarChart3 },
];

const employeeOpportunities = [
  "Global Tree Planting Days",
  "Volunteer Events",
  "Environmental Education",
  "Leadership Forums",
  "Conservation Workshops",
  "Community Restoration Projects",
];

const recognition = [
  "Corporate Partner Wall",
  "Annual Sustainability Report",
  "Environmental Campaigns",
  "Digital Media Features",
  "International Awareness Campaigns",
  "Global Newsletters",
  "Social Media Recognition",
];

export default function CorporatePartnershipsPage() {
  return (
    <>
      <main className="pt-16">
        {/* HERO */}
        <section
          className="py-32 px-4 sm:px-6 text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-forest-dark/90" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-4">
              Corporate Partnerships
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Building a Greener Future Together
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg mb-10">
              Partner With The Clean Air Trees Project and transform your
              environmental commitments into measurable global impact.
            </p>

            <a
              href="#partner-form"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline inline-block"
            >
              Become a Partner
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-6">
              More Than a Sponsorship
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-base sm:text-lg">
              The Clean Air Trees Project is a global environmental initiative
              dedicated to restoring forests, improving air quality, combating
              climate change, and empowering communities through strategic tree
              planting and conservation programs.
            </p>
            <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
              We believe the world's greatest environmental challenges require
              powerful partnerships. Your partnership is more than a sponsorship
              — it is an investment in healthier communities, stronger
              ecosystems, and a more sustainable future for generations to come.
            </p>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section className="bg-forest-fog py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                The Opportunity
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
                Why Partner With Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-forest-mist rounded-2xl p-7 hover:border-forest-light hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="w-11 h-11 bg-forest-fog rounded-xl flex items-center justify-center mb-5">
                      <Icon size={20} className="text-forest-light" />
                    </div>
                    <h3 className="text-base font-bold text-forest-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHAT YOUR PARTNERSHIP MAKES POSSIBLE */}
        <section className="bg-forest-dark py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-2">
                Direct Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Your Partnership Makes Possible
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {whatMakesPossible.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white/8 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/12 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-forest-pale" />
                    </div>
                    <p className="text-sm text-white/80 font-medium leading-snug">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP TIERS */}
        <section className="bg-white py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Recognition Levels
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
                Corporate Recognition Program
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                We proudly recognize organizations whose generosity creates
                lasting environmental impact.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`border-2 rounded-2xl p-7 sm:p-8 ${tier.color}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block ${tier.badge}`}
                      >
                        {tier.name}
                      </span>
                      <div className="text-2xl sm:text-3xl font-bold text-forest-dark">
                        {tier.amount}
                      </div>
                    </div>

                    <a
                      href="#partner-form"
                      className="bg-forest-dark text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-forest-mid transition-colors no-underline self-start shrink-0"
                    >
                      Apply for This Tier
                    </a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tier.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-forest-light mt-1.5 shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMPLOYEE ENGAGEMENT + RECOGNITION */}
        <section className="bg-forest-fog py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                Your Team
              </span>
              <h2 className="text-3xl font-bold text-forest-dark mb-5">
                Employee Engagement Opportunities
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We believe environmental stewardship begins with people.
                Corporate teams may participate in:
              </p>
              <div className="flex flex-col gap-3">
                {employeeOpportunities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white border border-forest-mist rounded-xl px-5 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-light shrink-0" />
                    <p className="text-sm text-forest-dark font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                Visibility
              </span>
              <h2 className="text-3xl font-bold text-forest-dark mb-5">
                Global Recognition
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our partners receive year-round visibility through:
              </p>
              <div className="flex flex-col gap-3">
                {recognition.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white border border-forest-mist rounded-xl px-5 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-light shrink-0" />
                    <p className="text-sm text-forest-dark font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="bg-white py-20 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-5">
              Our Commitment to Transparency
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Every contribution is managed with accountability and integrity.
              Corporate partners receive:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Detailed financial transparency",
                "Annual impact reports",
                "Project progress updates",
                "Tree planting metrics",
                "Geographic project locations",
                "Partnership performance reviews",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-forest-fog border border-forest-mist rounded-2xl p-5 text-sm text-forest-dark font-medium text-center leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDING PARTNER */}
        <section className="bg-forest-dark py-20 sm:py-24 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
              Limited Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Become a Founding Corporate Partner
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              We are currently inviting a select group of visionary
              organizations to become Founding Corporate Partners — securing
              lifetime recognition as early supporters of one of the world's
              growing climate restoration initiatives. Founding Partners receive
              exclusive branding opportunities, executive collaboration, and
              permanent recognition on our website.
            </p>

            <a
              href="#partner-form"
              className="bg-white text-forest-dark px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-fog transition-colors no-underline inline-block"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* PARTNER FORM */}
        <section
          id="partner-form"
          className="bg-forest-fog py-20 sm:py-24 px-4 sm:px-6"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
                Partner With Us
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Fill in the form below and our partnerships team will be in
                touch within 2 business days.
              </p>
            </div>

            <div className="bg-white border border-forest-mist rounded-3xl p-8 sm:p-10 shadow-sm">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Organization Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or organization"
                    className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Partnership Tier of Interest{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <select className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors bg-white">
                    <option value="">Select a tier</option>
                    <option>Global Legacy Partner — $10,000,000+</option>
                    <option>
                      Platinum Climate Champion — $5,000,000 – $9,999,999
                    </option>
                    <option>
                      Gold Sustainability Partner — $1,000,000 – $4,999,999
                    </option>
                    <option>
                      Silver Environmental Partner — $500,000 – $999,999
                    </option>
                    <option>
                      Green Innovation Partner — $100,000 – $499,999
                    </option>
                    <option>
                      Community Impact Partner — $25,000 – $99,999
                    </option>
                    <option>Founding Corporate Partner</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Country / Region <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your organization's sustainability goals and how you'd like to partner with us..."
                    className="border-2 border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-dark text-white py-4 rounded-full text-sm font-bold hover:bg-forest-mid transition-colors"
                >
                  Submit Partnership Inquiry
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Fields marked <span className="text-red-400">*</span> are
                  required. We'll respond within 2 business days.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        
      </main>
     
    </>
  );
}
