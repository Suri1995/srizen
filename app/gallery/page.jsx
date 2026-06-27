"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";

const CATEGORIES = ["All", "Exterior", "Interior Concept", "Community"];

const IMAGES = [
  { id: 1, cat: "Exterior", title: "Street Elevation", tall: true },
  { id: 2, cat: "Exterior", title: "Facade Detail", tall: false },
  { id: 3, cat: "Interior Concept", title: "Living Room Concept", tall: false },
  { id: 4, cat: "Community", title: "Street View", tall: true },
  { id: 5, cat: "Exterior", title: "Terrace Level", tall: false },
  { id: 6, cat: "Interior Concept", title: "Bedroom Concept", tall: false },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All" ? IMAGES : IMAGES.filter((img) => img.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the villa, level by level."
        description="Renders shown represent the design intent of the Boduppal villas and the surrounding street."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === c
                    ? "bg-navy text-white border-navy"
                    : "border-navy-100 text-navy/60 hover:border-emerald hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img) => (
              <RevealItem key={img.id}>
                <button
                  onClick={() => setSelected(img)}
                  className={`group relative w-full rounded-2xl overflow-hidden block ${
                    img.tall ? "h-[420px]" : "h-[280px]"
                  }`}
                >
                  <Image
                    src="/images/villa-hero.png"
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {img.title}
                  </p>
                </button>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(16,23,74,0.92)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/villa-hero.png"
                alt={selected.title}
                width={1000}
                height={700}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center"
              >
                <X size={18} className="text-navy" />
              </button>
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium bg-navy-deep/60 px-3 py-1.5 rounded-full">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
