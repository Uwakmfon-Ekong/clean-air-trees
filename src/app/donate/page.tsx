"use client";
import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const amount = custom ? Number(custom) : selected;

      if (!amount || amount <= 0) return;

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          frequency,
        }),
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="pt-16">
      <section className="bg-forest-dark py-24 px-6 text-center">
        <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
          Support the Mission
        </span>
        <h1 className="text-5xl font-bold text-white mb-5">
          Support a Greener Tomorrow
        </h1>
        <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
          Your donation helps us buy seedlings, tools, water supplies,
          transportation, and educational materials for communities. Every
          contribution plants hope.
        </p>
      </section>

      <section className="bg-forest-fog py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-forest-mist rounded-3xl p-10 shadow-sm">
            <div className="flex gap-2 mb-8 bg-forest-mist rounded-full p-1">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${frequency === f ? "bg-forest-dark text-white" : "text-forest-dark"}`}
                >
                  {f === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-forest uppercase tracking-widest mb-4">
              Choose an amount
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[20, 50, 100, 200, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelected(amt);
                    setCustom("");
                  }}
                  className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${selected === amt && !custom ? "bg-forest-dark text-white border-forest-dark" : "border-forest-mist text-forest-dark hover:border-forest-light"}`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Custom amount ($)"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setSelected(0);
              }}
              className="w-full border-2 border-forest-mist rounded-xl px-4 py-3 text-sm mb-6 focus:border-forest-light outline-none"
            />

            <div id="monthly" className="bg-forest-fog rounded-2xl p-5 mb-6">
              {custom || selected ? (
                <>
                  <p className="text-sm font-semibold text-forest-dark mb-1">
                    Your impact:{" "}
                    <span className="text-forest-light">
                      ${custom || selected}{" "}
                      {frequency === "monthly" ? "/month" : "one-time"}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {(custom ? parseInt(custom) : selected) >= 500
                      ? "Plants a full tree in a community!!! thank you!"
                      : "Helps provide seedlings and tools for our volunteers"}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-400 text-center">
                  Select an amount above to see your impact
                </p>
              )}
            </div>

            {/* <button className="w-full bg-forest-light text-white py-4 rounded-full text-base font-bold hover:bg-forest-bright transition-colors">
              {custom || selected
                ? `Donate $${custom || selected} ${frequency === "monthly" ? "/month" : ""}`
                : "Select an amount"}
            </button> */}
            <button
              onClick={handleDonate}
              disabled={loading || (!custom && !selected)}
              className="w-full bg-forest-light text-white py-4 rounded-full text-base font-bold hover:bg-forest-bright transition-colors disabled:opacity-50"
            >
              {loading
                ? "Processing..."
                : custom || selected
                  ? `Donate $${custom || selected} ${
                      frequency === "monthly" ? "/month" : ""
                    }`
                  : "Select an amount"}
            </button>

            <div
              id="stock"
              className="mt-6 pt-6 border-t border-forest-mist text-center"
            >
              <p className="text-xs text-gray-400 mb-3">Other ways to give</p>
              <div className="flex gap-3 justify-center">
                <button className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors">
                  Stock Donation
                </button>
                <Link
                  href="/contact"
                  className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors no-underline"
                >
                  Corporate Partnership
                </Link>
                <Link
                  href="/contact"
                  className="border border-forest-mist text-forest-dark text-xs px-4 py-2 rounded-full hover:border-forest-light transition-colors no-underline"
                >
                  Individual Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
