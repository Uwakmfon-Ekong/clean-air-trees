"use client";
import { useState } from "react";

// add as many images as you want here — the grid scales automatically
const galleryImages = [
  "/media1.jpeg",
  "/media2.jpeg",
  "/media3.jpeg",
  "/media4.jpeg",
  "/davidsolo.jpg",
  "/media5.jpeg",
  "/media6.jpeg",
  "/media7.jpeg",
  "/media8.jpeg",
  "/media9.jpeg",
  "/media10.jpeg",
  "/media11.jpeg",
  "/media12.png",
  "/davidpersonal.jpg",
];

const PAGE_SIZE = 12;

export default function GalleryGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="bg-forest-fog py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-forest uppercase tracking-widest block mb-2">
            Featured Gallery
          </span>
          <h2 className="text-4xl font-bold text-forest-dark mb-4">
            Community Tree Planting Events
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our community tree-planting events bring together people from diverse backgrounds to work toward a common goal: restoring ecosystems and improving air quality.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, visible).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className="relative rounded-2xl overflow-hidden border border-forest-mist h-44 sm:h-52 group cursor-pointer"
            >
              <img
                src={img}
                alt={`Clean Air Trees gallery photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>

        {visible < galleryImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="bg-forest-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-forest-mid transition-colors"
            >
              Load More Photos
            </button>
          </div>
        )}

       
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <img
            src={activeImage}
            alt="Expanded gallery photo"
            className="max-w-full max-h-full rounded-2xl object-contain"
          />
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}