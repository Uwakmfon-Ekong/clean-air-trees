"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function VolunteerPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const getField = (name: string) =>
    (formRef.current?.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement)?.value ?? "";

  const handleSubmit = async () => {
    const name = getField("volunteer_name");
    const email = getField("volunteer_email");

    if (!name.trim() || name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          firstName: name,
          lastName: "",
          from_email: email,
          subject: "New Volunteer Sign Up",
          message: `Location: ${getField("volunteer_location")}\nHow they want to help: ${getField("volunteer_role")}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Get Involved
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">Become a Volunteer</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Join thousands of people helping restore the earth one tree at a time.
          No experience needed — just a passion for the planet.
        </p>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Tree Planting Events", desc: "Join our community planting days in parks, schools, and open lands near you.", href: "/projects" },
              { title: "Education Programs", desc: "Help us teach children and communities about the importance of trees and nature.", href: "/education" },
              { title: "Spread the Word", desc: "Share our mission on social media and help us reach more people who care.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href}
                className="border border-forest-mist rounded-2xl p-7 no-underline hover:border-forest-light hover:-translate-y-1 transition-all block">
                <div className="w-10 h-2 rounded-full bg-forest-light mb-5" />
                <h3 className="text-lg font-bold text-forest-dark mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-forest-fog rounded-3xl p-10 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-dark mb-6 text-center">
              Sign Up to Volunteer
            </h2>

            {sent ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 bg-forest-mist rounded-full flex items-center justify-center mx-auto mb-5">
                  <div className="w-8 h-8 bg-forest-light rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-forest-dark mb-2">Thank you for signing up!</h3>
                <p className="text-gray-500 text-sm">We'll be in touch soon with details on how to get involved.</p>
              </div>
            ) : (
              <form ref={formRef} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="volunteer_name"
                    type="text"
                    placeholder="Your full name"
                    className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="volunteer_email"
                    type="email"
                    placeholder="Your email address"
                    className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">City / Location</label>
                  <input
                    name="volunteer_location"
                    type="text"
                    placeholder="Your city / location"
                    className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">How Would You Like to Help?</label>
                  <select
                    name="volunteer_role"
                    className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                  >
                    <option>How would you like to help?</option>
                    <option>Tree Planting Events</option>
                    <option>Education Programs</option>
                    <option>Social Media & Awareness</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <p className="text-red-500 text-xs">{error}</p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-forest-dark text-white py-3.5 rounded-full text-sm font-bold hover:bg-forest-mid transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing up..." : "Sign Me Up"}
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Fields marked <span className="text-red-400">*</span> are required
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}