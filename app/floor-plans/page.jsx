"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Maximize2, BedDouble } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LevelRail, { LEVELS } from "@/components/LevelRail";

const DETAILS = {
  ground: {
    area: "1,050 sq.ft",
    rooms: "Living · Dining · Kitchen · Powder Room",
    copy: "The ground floor opens straight onto a landscaped garden court. A double-height living room and an open kitchen give the floor its sense of scale, while a powder room and utility yard keep daily life organised.",
  },
  first: {
    area: "980 sq.ft",
    rooms: "3 Bedrooms · 3 Baths · Balcony",
    copy: "Three bedrooms, each with an attached bath, share a single quiet corridor lit by a stair-well skylight. The master suite steps onto a private balcony overlooking the street canopy.",
  },
  second: {
    area: "780 sq.ft",
    rooms: "Family Lounge · Study · Guest Bedroom",
    copy: "A flexible floor — a family lounge that doubles as a media room, a study for work-from-home days, and a guest bedroom with its own bath for visiting family.",
  },
  terrace: {
    area: "520 sq.ft",
    rooms: "Open Terrace · Planters · Seating Deck",
    copy: "An open-to-sky terrace finished with planters and a built-in seating deck — ready for a morning coffee, an evening gathering, or nothing at all.",
  },
};

export default function FloorPlansPage() {
  const [active, setActive] = useState("ground");
  const groundRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const terraceRef = useRef(null);
  const refs = { ground: groundRef, first: firstRef, second: secondRef, terrace: terraceRef };

  const scrollTo = (id) => {
    setActive(id);
    refs[id].current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <PageHero
        eyebrow="Floor Plans"
        title="One villa, planned level by level."
        description="Scroll through the sequence, or jump straight to the floor you're curious about."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container className="grid lg:grid-cols-[220px,1fr] gap-16">
          <LevelRail active={active} onSelect={scrollTo} />

          <div className="space-y-20">
            {LEVELS.map((level, i) => {
              const d = DETAILS[level.id];
              return (
                <div
                  key={level.id}
                  ref={refs[level.id]}
                  className="grid md:grid-cols-2 gap-10 items-center"
                >
                  <Reveal
                    className={i % 2 === 1 ? "md:order-2" : ""}
                    onViewportEnter={() => setActive(level.id)}
                  >
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-soft">
                      <Image
                        src="/images/villa-hero.png"
                        alt={`${level.label} render`}
                        width={650}
                        height={520}
                        className="w-full h-[380px] object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 rounded-full px-4 py-1.5 text-xs font-semibold text-navy">
                        {level.label}
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="eyebrow mb-3">{level.tag}</p>
                    <h2 className="font-display text-2xl md:text-3xl text-navy mb-4">
                      {level.label}
                    </h2>
                    <p className="text-navy/60 text-sm leading-relaxed mb-6">{d.copy}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-navy/70">
                      <span className="flex items-center gap-2">
                        <Maximize2 size={15} className="text-emerald" /> {d.area}
                      </span>
                      <span className="flex items-center gap-2">
                        <BedDouble size={15} className="text-emerald" /> {d.rooms}
                      </span>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-ivory">
        <Container>
          <Reveal className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 md:p-10 border border-navy-100">
            <div>
              <h3 className="font-display text-xl text-navy">
                Total built-up area: 3,330 sq.ft (approx.)
              </h3>
              <p className="text-navy/55 text-sm mt-1">
                Across ground, first, second floor and open terrace.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary shrink-0">
              Request Detailed Plan
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
