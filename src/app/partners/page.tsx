"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trees, GraduationCap, PawPrint } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { partnersQuery } from "@/sanity/lib/queries";

type Partner = {
  _id: string;
  name: string;
  description?: string;
  url?: string;
  logo?: string;
};

const featuredPartners = [
  {
    name: "Everi / First Climate",
    country: "Germany",
    trees: "1,500,000",
    desc: "A leading carbon management company supporting large-scale mangrove restoration projects across the Niger Delta.",
    url: "https://www.firstclimate.com",
  },
  {
    name: "Handprint Tech / Global Mangrove Trust",
    country: "Singapore",
    trees: "500,000",
    desc: "A nature-positive impact platform enabling organizations to restore mangrove ecosystems at scale.",
    url: "https://www.handprint.tech",
  },
  {
    name: "Plant for the Planet",
    country: "Germany",
    trees: "200,000",
    desc: "A global youth-led initiative dedicated to planting trees and fighting climate change worldwide.",
    url: "https://www.plant-for-the-planet.org",
  },
];

const additionalPartners = [
  { name: "We4All", country: "Denmark", url: "#" },
  { name: "Carbon Managers", country: "UK", url: "#" },
  { name: "New Community Project", country: "USA", url: "#" },
  { name: "Sequestr", country: "Canada", url: "#" },
  { name: "Myelen", country: "Czech Republic", url: "#" },
  { name: "Network for Social Change", country: "UK", url: "#" },
  { name: "Association for Coastal Conservation", country: "UK", url: "#" },
  { name: "Global Landcare", country: "Australia", url: "#" },
  { name: "Forstfreunde", country: "Germany", url: "#" },
];

export default function PartnersPage() {
  const [sanityPartners, setSanityPartners] = useState<Partner[]>([]);

  useEffect(() => {
    client.fetch(partnersQuery).then((data) => {
      setSanityPartners(data || []);
    });
  }, []);

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
              The Clean Air Trees Project works alongside organizations
              committed to environmental conservation, sustainable development,
              and community empowerment.
            </p>
          </div>
        </section>

        {/* TRCC PARTNER FEATURE */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/trcc7.jpg"
                alt="TRCC"
                className="object-contain rounded-2xl"
                width={600}
                height={800}
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
                Featured Partner
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-5">
                Tropical Research and Conservation Centre (TRCC)
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded in 2001, TRCC is a non-governmental organization focused
                on environment, natural resources, indigenous resource
                preservation, sustainable agriculture, and community healthy
                living.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 20 years of experience leading community-driven
                conservation initiatives, TRCC has planted over 3 million
                mangrove trees and restored over 500 hectares of land.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: "20+", label: "Years Active" },
                  { num: "3M+", label: "Trees Planted" },
                  { num: "500+", label: "Hectares" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-forest-fog rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-forest-light mb-1">
                      {s.num}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                      {s.label}
                    </div>
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
        {/* TRCC Gallery */}
        <section className="bg-white pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest">
                Field Work
              </span>
              <h3 className="text-3xl font-bold text-forest-dark mt-2">
                TRCC in Action
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
              <Image
                src="/partnertrcc4.jpeg"
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl md:col-span-2 md:row-span-2"
              />

              <Image
                src="/partnertrcc1.jpeg"
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />

              <Image
                src="/partnertrcc3.jpeg"
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />

              <Image
                src="/partnertrccc2.jpeg"
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />

              <Image
                src="/partnertrcc1.jpeg"
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
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

        {/* ALL PARTNERS */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Planting Partners
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-4">
                Partners in Reforestation
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Organizations that have contributed directly to planting
                mangrove trees across Nigeria's Niger Delta.
              </p>
            </div>

            {/* Featured 3 partners with tree counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {featuredPartners.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-fog border border-forest-mist rounded-2xl p-7 hover:border-forest-light hover:-translate-y-1 hover:shadow-md transition-all duration-200 no-underline block group"
                >
                  <div className="w-10 h-1.5 rounded-full bg-forest-light mb-5 group-hover:w-14 transition-all duration-300" />
                  <p className="text-[10px] text-forest uppercase tracking-widest mb-1">
                    {p.country}
                  </p>
                  <h3 className="text-base font-bold text-forest-dark mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="bg-white rounded-xl px-4 py-3 border border-forest-mist">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
                      Trees Planted
                    </p>
                    <p className="text-xl font-bold text-forest-light">
                      {p.trees}
                    </p>
                  </div>
                  <p className="text-forest-light text-xs mt-3 group-hover:translate-x-1 transition-transform">
                    Visit website →
                  </p>
                </a>
              ))}
            </div>

            {/* Additional partners grid — hardcoded + Sanity combined */}
            <div className="bg-forest-fog border border-forest-mist rounded-2xl p-8 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-forest-dark mb-1">
                    Additional Planting Partners
                  </h3>
                  <p className="text-sm text-gray-500">
                    800,000 mangrove trees planted in collaboration with:
                  </p>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 border border-forest-mist text-center shrink-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
                    Combined Trees
                  </p>
                  <p className="text-xl font-bold text-forest-light">800,000</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {/* hardcoded additional partners */}
                {additionalPartners.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-forest-mist rounded-xl px-4 py-3 hover:border-forest-light transition-colors no-underline"
                  >
                    <p className="text-xs font-semibold text-forest-dark leading-snug mb-1">
                      {p.name}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                      {p.country}
                    </p>
                  </a>
                ))}

                {/* Sanity partners appear here too */}
                {sanityPartners.map((p) => (
                  <a
                    key={p._id}
                    href={p.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-forest-mist rounded-xl px-4 py-3 hover:border-forest-light transition-colors no-underline group"
                  >
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-8 object-contain mb-2 group-hover:scale-105 transition-transform"
                      />
                    )}
                    <p className="text-xs font-semibold text-forest-dark leading-snug mb-1">
                      {p.name}
                    </p>
                    {p.description && (
                      <p className="text-[10px] text-gray-400 leading-snug">
                        {p.description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Total impact */}
            <div className="bg-forest-dark rounded-2xl p-8 text-center">
              <p className="text-xs font-semibold text-forest-pale uppercase tracking-widest mb-2">
                Total Impact
              </p>
              <p className="text-5xl font-bold text-white mb-2">3,000,000+</p>
              <p className="text-white/60 text-sm">
                Mangrove trees planted across the Niger Delta in partnership
                with organizations worldwide
              </p>
            </div>
          </div>
        </section>

        {/* BECOME A PARTNER */}
        <section className="bg-forest-fog py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-3">
              Work With Us
            </span>
            <h2 className="text-4xl font-bold text-forest-dark mb-5">
              Become a Partner
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We're always open to collaborating with organizations, businesses,
              schools, and individuals who share our commitment to environmental
              conservation and sustainable development.
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
