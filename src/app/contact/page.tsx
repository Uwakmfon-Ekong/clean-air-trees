"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">Reach Out</span>
        <h1 className="text-5xl font-bold text-white mb-5">Contact Us</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Have a question, want to partner with us, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-forest-dark mb-6">Get in Touch</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're interested in volunteering, donating, partnering with us, or just learning more about what we do — reach out and someone from our team will get back to you within 48 hours.
            </p>
            {[
              { icon: "✉️", label: "Email", value: "cleanairtreesproject@gmail.com" },
            ].map((d) => (
              <div key={d.label} className="flex gap-3 items-start mb-5">
                <div className="w-10 h-10 bg-forest-mist rounded-xl flex items-center justify-center text-lg min-w-[40px]">{d.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{d.label}</p>
                  <p className="text-sm text-forest-dark font-medium">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {sent ? (
            <div className="bg-white border border-forest-mist rounded-3xl p-10 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold text-forest-dark mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm">We'll get back to you within 48 hours. Thank you for reaching out!</p>
            </div>
          ) : (
            <div className="bg-white border border-forest-mist rounded-3xl p-8">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="David" className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Inyangedo" className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">Email</label>
                  <input type="email" placeholder="david@example.com" className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">Subject</label>
                  <select className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light">
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Donation</option>
                    <option>Volunteering</option>
                    {/* <option>Media & Press</option> */}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light resize-none" />
                </div>
                <button onClick={() => setSent(true)}
                  className="bg-forest-dark text-white py-3.5 rounded-full text-sm font-bold hover:bg-forest-mid transition-colors">
                  Send Message →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
