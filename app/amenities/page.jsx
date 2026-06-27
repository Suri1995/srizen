"use client";

import {
  Trees,
  ShieldCheck,
  Dumbbell,
  Car,
  Sun,
  Sparkles,
  Wifi,
  Droplets,
  Baby,
  Camera,
  Waves,
  Leaf,
} from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/Reveal";

const AMENITIES = [
  { icon: Trees, title: "Landscaped Gardens", copy: "Tree-lined avenues and shared green courts across the community." },
  { icon: ShieldCheck, title: "Gated & Secure", copy: "24x7 manned security with CCTV-covered entry and exit points." },
  { icon: Dumbbell, title: "Fitness Deck", copy: "An open-air fitness deck for morning routines, without the gym crowd." },
  { icon: Car, title: "Covered Parking", copy: "Dedicated covered parking for two vehicles per villa." },
  { icon: Sun, title: "Solar Ready", copy: "Rooftop wiring pre-fitted for solar panel installation." },
  { icon: Sparkles, title: "Clubhouse Lounge", copy: "A shared lounge for residents' gatherings and celebrations." },
  { icon: Wifi, title: "Fibre Ready", copy: "In-built ducting for high-speed fibre internet in every villa." },
  { icon: Droplets, title: "Rainwater Harvesting", copy: "Community-wide harvesting pits to recharge the local water table." },
  { icon: Baby, title: "Children's Play Court", copy: "A safe, shaded play court within the gated perimeter." },
  { icon: Camera, title: "CCTV Surveillance", copy: "Perimeter and common-area coverage monitored around the clock." },
  { icon: Waves, title: "Visitor Lounge", copy: "A welcoming seating area for guests near the main gate." },
  { icon: Leaf, title: "STP & Waste Management", copy: "On-site sewage treatment and segregated waste collection." },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="Comforts chosen for everyday life, not the brochure."
        description="No oversized clubhouse you'll visit twice. Just the amenities a villa community actually uses."
      />

      <section className="py-24 md:py-32 bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Community Features"
            title="Twelve amenities, zero filler."
          />
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {AMENITIES.map((a) => (
              <RevealItem key={a.title}>
                <div className="card-premium p-7 h-full flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                    <a.icon className="text-midblue" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-navy mb-1.5">{a.title}</h3>
                    <p className="text-navy/55 text-sm leading-relaxed">{a.copy}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>
    </>
  );
}
