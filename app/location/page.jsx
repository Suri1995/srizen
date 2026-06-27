"use client";

import { MapPin, School, Hospital, ShoppingBag, Plane, Train } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const CONNECTIVITY = [
  { icon: MapPin, label: "ORR Exit 4 (Ghatkesar)", time: "12 min" },
  { icon: School, label: "Leading Schools", time: "8 min" },
  { icon: Hospital, label: "Multi-speciality Hospitals", time: "10 min" },
  { icon: ShoppingBag, label: "Uppal IT Corridor", time: "15 min" },
  { icon: Train, label: "Secunderabad Railway Station", time: "20 min" },
  { icon: Plane, label: "Rajiv Gandhi International Airport", time: "45 min" },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Boduppal, Hyderabad."
        description="A residential pocket close to the city's eastern growth corridor — connected, but never crowded."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="rounded-[1.5rem] overflow-hidden border border-navy-100 shadow-soft h-[420px]">
              <iframe
                title="Srizen Infra location map - Boduppal, Hyderabad"
                src="https://www.google.com/maps?q=Boduppal,Hyderabad,Telangana&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Connectivity"
              title="Close to everything that matters, far from the noise."
              description="Boduppal sits on the eastern edge of Hyderabad's Outer Ring Road network — close enough for a daily commute, quiet enough to call home."
            />
            <RevealStagger className="grid sm:grid-cols-2 gap-4 mt-8">
              {CONNECTIVITY.map((c) => (
                <RevealItem key={c.label}>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-navy-100">
                    <c.icon size={18} className="text-emerald mt-0.5 shrink-0" />
                    <div>
                      <p className="text-navy text-sm font-medium leading-tight">{c.label}</p>
                      <p className="text-teal text-xs mt-1">{c.time}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>
    </>
  );
}
