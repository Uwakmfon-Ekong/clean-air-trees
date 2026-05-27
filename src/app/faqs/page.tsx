"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    q: "What is the Clean Air Trees Project?",
    a: "The Clean Air Trees Project is an initiative focused on planting trees to improve air quality and create a healthier environment.",
  },
  {
    q: "Why are trees important?",
    a: "Trees produce oxygen, absorb carbon dioxide, and help keep the environment healthy.",
  },
  {
    q: "What is the main goal of the project?",
    a: "The goal is to reduce pollution and promote cleaner air through tree planting.",
  },
  {
    q: "How do trees help reduce pollution?",
    a: "Trees trap dust, smoke, and harmful gases from the air.",
  },
  {
    q: "Why is clean air important?",
    a: "Clean air helps people stay healthy and reduces breathing problems.",
  },
  {
    q: "Who can join the project?",
    a: "Anyone can participate, including students, families, businesses, and volunteers.",
  },
  {
    q: "Where can trees be planted?",
    a: "Trees can be planted in parks, schools, streets, farms, and neighborhoods.",
  },
  {
    q: "What is a seedling?",
    a: "A seedling is a young tree that has just started growing.",
  },
  {
    q: "Why are seedlings important?",
    a: "Seedlings grow into mature trees that provide environmental benefits.",
  },
  {
    q: "What tools are needed for tree planting?",
    a: "Shovels, gloves, watering cans, mulch, and wheelbarrows are commonly used.",
  },
  {
    q: "How often should young trees be watered?",
    a: "Young trees should be watered regularly, especially during dry weather.",
  },
  {
    q: "What happens if trees are not watered?",
    a: "They may dry out and die before becoming strong.",
  },
  {
    q: "How do trees fight climate change?",
    a: "Trees absorb carbon dioxide, which helps reduce global warming.",
  },
  {
    q: "What is deforestation?",
    a: "Deforestation is the large-scale removal of trees without replacing them.",
  },
  {
    q: "How does the project help stop deforestation?",
    a: "The project replaces lost trees by planting new ones.",
  },
  {
    q: "Can children participate in tree planting?",
    a: "Yes, children can safely participate with supervision.",
  },
  {
    q: "How do trees help wildlife?",
    a: "Trees provide shelter and food for birds and animals.",
  },
  {
    q: "Why are urban trees important?",
    a: "Urban trees provide shade and improve city air quality.",
  },
  {
    q: "How do trees cool the environment?",
    a: "Trees provide shade and release moisture into the air.",
  },
  {
    q: "What is air pollution?",
    a: "Air pollution is harmful substances in the air that can affect health.",
  },
  {
    q: "How do trees improve health?",
    a: "Trees improve air quality and reduce stress levels.",
  },
  {
    q: "What are the benefits of planting trees near schools?",
    a: "Trees create shade and provide a healthier learning environment.",
  },
  {
    q: "Why should communities support tree planting?",
    a: "Tree planting improves neighborhoods and benefits future generations.",
  },
  {
    q: "How can businesses help the project?",
    a: "Businesses can donate money, supplies, or volunteer support.",
  },
  {
    q: "What role do volunteers play?",
    a: "Volunteers help plant, water, and protect trees.",
  },
  {
    q: "How long does it take a tree to mature?",
    a: "Some trees take several years or decades to fully mature.",
  },
  {
    q: "What type of trees are best for planting?",
    a: "Native trees are usually best because they adapt well to local climates.",
  },
  {
    q: "What is soil erosion?",
    a: "Soil erosion is the loss of topsoil caused by wind or water.",
  },
  {
    q: "How do trees prevent soil erosion?",
    a: "Tree roots hold the soil together and reduce runoff.",
  },
  {
    q: "Why is watering important after planting?",
    a: "Water helps young trees develop strong roots.",
  },
  {
    q: "How can schools participate in the project?",
    a: "Schools can organize tree planting events and environmental clubs.",
  },
  {
    q: "What is recycling?",
    a: "Recycling is turning waste materials into reusable products.",
  },
  {
    q: "How does recycling help the environment?",
    a: "Recycling reduces waste and pollution.",
  },
  {
    q: "How do trees improve mental health?",
    a: "Green environments help people feel calm and relaxed.",
  },
  {
    q: "What are greenhouse gases?",
    a: "Greenhouse gases trap heat in the atmosphere and contribute to global warming.",
  },
  {
    q: "How do trees absorb carbon dioxide?",
    a: "Trees take in carbon dioxide during photosynthesis.",
  },
  {
    q: "What is photosynthesis?",
    a: "Photosynthesis is the process plants use to make food using sunlight.",
  },
  {
    q: "Why are forests important?",
    a: "Forests protect biodiversity and support clean air and water.",
  },
  {
    q: "How do trees help during hot weather?",
    a: "Trees provide shade and reduce surrounding temperatures.",
  },
  {
    q: "What are community tree planting events?",
    a: "They are organized activities where groups gather to plant trees together.",
  },
  {
    q: "Why should trees be protected after planting?",
    a: "Young trees need care to survive and grow properly.",
  },
  {
    q: "How can individuals help protect trees?",
    a: "People can water trees, avoid damaging them, and report illegal cutting.",
  },
  {
    q: "What is sustainability?",
    a: "Sustainability means protecting resources for future generations.",
  },
  {
    q: "How do trees support sustainability?",
    a: "Trees provide long-term environmental and economic benefits.",
  },
  {
    q: "Can tree planting reduce flooding?",
    a: "Yes, trees absorb rainwater and reduce runoff.",
  },
  {
    q: "Why is teamwork important in environmental projects?",
    a: "Teamwork helps projects succeed faster and reach more communities.",
  },
  {
    q: "How can social media help the project?",
    a: "Social media spreads awareness and encourages more participation.",
  },
  {
    q: "What message does the project promote?",
    a: "The project promotes cleaner air, healthy living, and environmental responsibility.",
  },
  {
    q: "What can people learn from the Clean Air Trees Project?",
    a: "People learn the importance of protecting nature and working together.",
  },
  {
    q: "What is the future vision of the project?",
    a: "The vision is a greener world where everyone enjoys fresh air and a healthy environment.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-forest-fog min-h-screen pt-16">
      <Navbar />

      {/* HERO */}
      <section className="bg-forest-dark py-24 px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">FAQ</h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg">
          Clean Air Trees Project – Questions and Answers
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={item.q}
                className="bg-white border border-forest-mist rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-forest-mist/30 transition"
                >
                  <span className="font-semibold text-forest-dark">
                    {item.q}
                  </span>
                  <span className="text-forest-dark text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-dark text-center px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Still have questions?
        </h2>
        <p className="text-white/60 mb-8">
          Reach out and be part of the Clean Air Trees movement.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="bg-forest-light text-white px-8 py-3.5 rounded-full font-semibold hover:bg-forest-bright transition"
          >
            Contact Us
          </a>

          <a
            href="/volunteer"
            className="border border-white/40 text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition"
          >
            Volunteer
          </a>
        </div>
      </section>
    </main>
  );
}