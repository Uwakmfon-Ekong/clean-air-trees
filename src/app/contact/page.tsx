"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function validate(fields: {
  firstName: string;
  email: string;
  message: string;
}) {
  if (!fields.firstName.trim() || fields.firstName.trim().length < 2)
    return "Please enter your first name (at least 2 characters).";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    return "Please enter a valid email address.";
  if (!fields.message.trim() || fields.message.trim().length < 10)
    return "Please enter a message (at least 10 characters).";
  return null;
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const getField = (name: string) =>
    (formRef.current?.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value ?? "";

  const handleBlur = (name: string) =>
    setTouched((prev) => ({ ...prev, [name]: true }));

  const fieldError = (name: string, value: string) => {
    if (!touched[name]) return "";
    if (name === "firstName" && (!value.trim() || value.trim().length < 2))
      return "Enter at least 2 characters";
    if (name === "from_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email address";
    if (name === "message" && (!value.trim() || value.trim().length < 10))
      return "Message must be at least 10 characters";
    return "";
  };

  const handleSubmit = async () => {
    if (!formRef.current) return;

    const firstName = getField("firstName");
    const email = getField("from_email");
    const message = getField("message");

    // mark all as touched so errors show
    setTouched({ firstName: true, from_email: true, message: true });

    const validationError = validate({ firstName, email, message });
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Reach Out
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">Contact Us</h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Have a question, want to partner with us, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-forest-dark mb-6">Get in Touch</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're interested in volunteering, donating, partnering with us, or just learning more — reach out and someone from our team will get back to you within 48 hours.
            </p>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-forest-mist rounded-xl flex items-center justify-center min-w-[40px] text-base">
                ✉️
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-sm text-forest-dark font-medium">cleanairtreesproject@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-white border border-forest-mist rounded-3xl p-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-forest-mist rounded-full flex items-center justify-center mx-auto mb-5">
                <div className="w-8 h-8 bg-forest-light rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-forest-dark mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm">
                We'll get back to you within 48 hours. Thank you for reaching out!
              </p>
            </div>
          ) : (
            <div className="bg-white border border-forest-mist rounded-3xl p-8">
              <form ref={formRef} className="flex flex-col gap-4">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="David"
                      onBlur={() => handleBlur("firstName")}
                      className={`border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                        fieldError("firstName", getField("firstName"))
                          ? "border-red-300 focus:border-red-400"
                          : "border-forest-mist focus:border-forest-light"
                      }`}
                    />
                    {fieldError("firstName", getField("firstName")) && (
                      <p className="text-red-400 text-[11px]">{fieldError("firstName", getField("firstName"))}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Inyangedo"
                      className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    placeholder="david@example.com"
                    onBlur={() => handleBlur("from_email")}
                    className={`border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                      fieldError("from_email", getField("from_email"))
                        ? "border-red-300 focus:border-red-400"
                        : "border-forest-mist focus:border-forest-light"
                    }`}
                  />
                  {fieldError("from_email", getField("from_email")) && (
                    <p className="text-red-400 text-[11px]">{fieldError("from_email", getField("from_email"))}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">Subject</label>
                  <select
                    name="subject"
                    className="border border-forest-mist rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-light"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Donation</option>
                    <option>Volunteering</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    onBlur={() => handleBlur("message")}
                    className={`border rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none ${
                      fieldError("message", getField("message"))
                        ? "border-red-300 focus:border-red-400"
                        : "border-forest-mist focus:border-forest-light"
                    }`}
                  />
                  {fieldError("message", getField("message")) && (
                    <p className="text-red-400 text-[11px]">{fieldError("message", getField("message"))}</p>
                  )}
                </div>

                {/* Global error */}
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
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Fields marked <span className="text-red-400">*</span> are required
                </p>

              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}