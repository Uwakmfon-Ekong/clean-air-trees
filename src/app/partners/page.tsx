import Link from "next/link";
import Image from "next/image";
import { Trees, GraduationCap, PawPrint } from "lucide-react";

export default function PartnersPage() {
  return (
    <>
    
      <main className="pt-16">

        {/* HERO */}
        <section
          className="py-24 px-6 text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/trcc7.jpg')" }}
        >
          <div className="absolute inset-0 bg-forest-dark/95" />
          <div className="relative z-10">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
              Our Network
            </span>
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Our Partners
            </h1>
            <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
              The Clean Air Trees Project works alongside organizations committed to environmental conservation, sustainable development, and community empowerment.
            </p>
          </div>
        </section>

        {/* TRCC PARTNER FEATURE */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className=" ">
              <Image src="/trcc7.jpg" alt="TRCC" className="object-contain" width={600} height={800
              } />
            </div>
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                Featured Partner
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-5">
                Tropical Research and Conservation Centre (TRCC)
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded in 2001, TRCC is a non-governmental organization focused on environment, natural resources, indigenous resource preservation, sustainable agriculture, and community healthy living. TRCC is dedicated to restoring degraded ecosystems, conserving biodiversity, and improving livelihoods in Nigeria's Niger Delta through sustainable practices.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 20 years of experience leading community-driven conservation initiatives, TRCC has planted over 3 million mangrove trees and restored over 500 hectares of land to sequester carbon, enhance coastal protection, and mitigate flooding.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: "20+", label: "Years Active" },
                  { num: "3M+", label: "Trees Planted" },
                  { num: "500+", label: "Hectares" },
                ].map((s) => (
                  <div key={s.label} className="bg-forest-fog rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-forest-light mb-1">{s.num}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://tropicalcentre.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline inline-block"
              >
                Visit TRCC →
              </a>
            </div>
          </div>
        </section>

        {/* WHAT TRCC DOES */}
        <section className="bg-forest-fog py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Shared Mission
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-4">
                How TRCC Supports the Mission
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Mangrove Restoration",
                  desc: "Leading community-driven mangrove restoration and forest management initiatives across the Niger Delta region.",
                  icon: Trees,
                },
                {
                  title: "Education & Empowerment",
                  desc: "Training over 20,000 people on the value of forests and conservation, equipping communities with organic farming and agroforestry skills.",
                  icon: GraduationCap,
                },
                {
                  title: "Biodiversity Conservation",
                  desc: "Restoring and protecting critical habitats for endangered species including sea turtles, African manatees, and threatened bird species.",
                  icon: PawPrint,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white border border-forest-mist rounded-2xl p-7 hover:border-forest-light hover:-translate-y-1 transition-all duration-200">
                    <div className="w-11 h-11 bg-forest-fog rounded-xl flex items-center justify-center mb-5">
                      <Icon size={20} className="text-forest-light" />
                    </div>
                    <h3 className="text-base font-bold text-forest-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BECOME A PARTNER */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Work With Us
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Become a Partner
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We're always open to collaborating with organizations, businesses, schools, and individuals who share our commitment to environmental conservation and sustainable development.
            </p>
            <Link
              href="/corporate-partnerships"
              className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors no-underline inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
     
    </>
  );
}
