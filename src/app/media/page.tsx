"use client";
import { useState, useEffect } from "react";
import GalleryGrid from "@/components/imagegrid";
import { client } from "@/sanity/lib/client";
import { videoQuery } from "@/sanity/lib/queries";

type SanityVideo = {
  title: string;
  description?: string;
  videoUrl?: string;
  youtubeUrl?: string;
};

const testimonials = [
  {
    quote: "Participating in The Clean Air Trees Project gave me the opportunity to contribute to a healthier environment while connecting with people who share a passion for sustainability.",
    name: "Community Volunteer",
  },
  {
    quote: "The project has helped beautify our neighborhood and provided environmental education for our students.",
    name: "School Partner",
  },
];

export default function MediaPage() {
  const [sanityVideo, setSanityVideo] = useState<SanityVideo | null>(null);

  useEffect(() => {
    client.fetch(videoQuery).then((data) => {
      setSanityVideo(data || null);
    });
  }, []);

  return (
    <>
      <main className="pt-16">

        {/* HERO */}
        <section
          className="py-24 px-6 text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-forest-dark/85" />
          <div className="relative z-10">
            <span className="text-xs font-semibold text-forest-pale uppercase tracking-widest block mb-3">
              Media Center
            </span>
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Welcome to Our Gallery
            </h1>
            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-lg">
              Your gateway to our journey of environmental restoration,
              community engagement, and climate action — stories, milestones,
              event highlights, photo galleries, and more.
            </p>
          </div>
        </section>

        {/* EDUCATIONAL VIDEO */}
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold text-forest-dark uppercase tracking-widest block mb-3">
                Environmental Education
              </span>
              <h2 className="text-3xl font-bold text-forest-dark mb-3">
                {sanityVideo?.title || "Watch & Learn"}
              </h2>
              <p className="text-forest-dark/60 leading-relaxed max-w-xl mx-auto text-sm">
                {sanityVideo?.description || "Learn about our mission, tree planting programs, and the impact we are creating across communities."}
              </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* hardcoded video 1 — always shows */}
              <div className="rounded-3xl overflow-hidden border border-forest-mist shadow-lg">
                <video controls className="w-full" preload="metadata">
                  <source src="/cleanairvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* hardcoded video 2 — always shows */}
              <div className="rounded-3xl overflow-hidden border border-forest-mist shadow-lg">
                <video controls className="w-full" preload="metadata">
                  <source src="/cleanairvideo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Sanity video — shows when David uploads one */}
              {sanityVideo?.videoUrl && (
                <div className="rounded-3xl overflow-hidden border border-forest-mist shadow-lg sm:col-span-2">
                  <video controls className="w-full" preload="metadata">
                    <source src={sanityVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* YouTube embed — shows if David pastes a YouTube link */}
              {sanityVideo?.youtubeUrl && (
                <div className="rounded-3xl overflow-hidden border border-forest-mist shadow-lg sm:col-span-2 aspect-video">
                  <iframe
                    src={sanityVideo.youtubeUrl.replace("watch?v=", "embed/")}
                    className="w-full h-full"
                    allowFullScreen
                    title={sanityVideo.title}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FEATURED GALLERY */}
        <GalleryGrid />

        {/* SUCCESS STORIES */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
                Success Stories
              </span>
              <h2 className="text-4xl font-bold text-forest-dark mb-4">
                Transforming Communities Through Trees
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-forest-fog border border-forest-mist rounded-2xl p-8 hover:border-forest-light transition-all"
                >
                  <p className="text-forest-dark text-base leading-relaxed italic mb-5">
                    "{t.quote}"
                  </p>
                  <p className="text-sm font-semibold text-forest-light">
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}