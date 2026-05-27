import Link from "next/link";

export default function DonateSuccess() {
  return (
    <main className="pt-16 min-h-screen bg-forest-fog flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl p-12 text-center max-w-md shadow-sm border border-forest-mist">
        <div className="w-16 h-16 bg-forest-mist rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 bg-forest-light rounded-full" />
        </div>
        <h1 className="text-3xl font-bold text-forest-dark mb-3">Thank you!</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Your donation has been received. Together we are building a greener future, one tree at a time.
        </p>
        <Link href="/" className="bg-forest-dark text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-forest-mid transition-colors no-underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}