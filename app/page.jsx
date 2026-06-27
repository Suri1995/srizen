"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers3,
  Trees,
  ShieldCheck,
  Sun,
  Car,
  Dumbbell,
  Sparkles,
  MapPin,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const TRUST_STATS = [
  { label: "Triplex Villas", value: "G+2" },
  { label: "Plot Sizes From", value: "200 Sq.Yds" },
  { label: "Private Terraces", value: "100%" },
  { label: "Possession", value: "2027" },
];

const LEVELS = [
  {
    tag: "Ground Floor",
    title: "Arrival & Living",
    copy: "Double-height living, dining and an open kitchen that spill onto a private garden court.",
  },
  {
    tag: "First Floor",
    title: "Private Bedrooms",
    copy: "Three suites with attached baths and a sit-out balcony framing the street canopy.",
  },
  {
    tag: "Second Floor",
    title: "Family & Study",
    copy: "A flexible family lounge, home office and an additional bedroom for guests.",
  },
  {
    tag: "Terrace",
    title: "Sky Lounge",
    copy: "An open-to-sky terrace with planters and seating — your own rooftop retreat.",
  },
];

const AMENITIES = [
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: ShieldCheck, label: "Gated & Secure" },
  { icon: Dumbbell, label: "Fitness Deck" },
  { icon: Car, label: "Covered Parking" },
  { icon: Sun, label: "Solar Ready" },
  { icon: Sparkles, label: "Clubhouse Lounge" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 bg-petal-glow" />
        <div className="absolute inset-0">
          <Image
            src="/images/villa-hero.png"
            alt="Srizen Infra triplex villa elevation in Boduppal, Hyderabad"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10174A] via-[#10174A]/85 to-transparent" />
        </div>

        <Container className="relative pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow mb-5"
              >
                Boduppal · Hyderabad
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-white text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05]"
              >
                Triplex villas,
                <br />
                <span className="text-gradient-emerald italic">elevated</span>{" "}
                living.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="text-white/65 text-lg mt-7 max-w-md leading-relaxed"
              >
                A boutique collection of G+2 villas where every level is
                designed with a purpose — and every terrace looks out onto
                the sky.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link href="/contact" className="btn btn-primary">
                  Book a Visit <ArrowRight size={16} />
                </Link>
                <Link href="/floor-plans" className="btn btn-ghost">
                  Explore Floor Plans
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-premium border border-white/10">
                <Image
                  src="/images/villa-hero.png"
                  alt="Srizen Infra triplex villa facade render"
                  width={760}
                  height={760}
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10174A]/40 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -16, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-premium px-6 py-4 flex items-center gap-3"
              >
                <Layers3 className="text-emerald" size={22} />
                <div>
                  <p className="text-navy font-semibold text-sm leading-none">G+2 Levels</p>
                  <p className="text-navy/45 text-xs mt-1">Plus open terrace</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* trust strip */}
          <Reveal delay={0.2} className="mt-20 lg:mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
              {TRUST_STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-white text-2xl md:text-3xl">{s.value}</p>
                  <p className="text-white/45 text-xs uppercase tracking-widest2 mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- ABOUT TEASER ---------------- */}
      <section className="py-24 md:py-32 bg-white">
        <Container className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-soft">
              <Image
                src="/images/villa-hero.png"
                alt="Srizen Infra villa community street view"
                width={700}
                height={560}
                className="w-full h-[440px] object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About Srizen Infra"
              title="Built by a team that thinks in elevations, not just floor counts."
              description="Srizen Infra designs low-density villa communities for families who want a home that feels considered at every level — from the materials on the facade to the way light moves through a stairwell. In Boduppal, that philosophy takes the form of fourteen triplex villas set along a quiet, tree-lined street."
            />
            <Reveal delay={0.15} className="mt-8 flex gap-4">
              <Link href="/about" className="btn btn-outline-navy">
                Our Story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- TRIPLEX LEVELS ---------------- */}
      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="The Triplex Format"
            title="Four levels. One villa. Zero compromise."
            description="Every Srizen villa is planned as a deliberate sequence — ground for arrival, two upper floors for living, and a terrace that belongs only to you."
          />
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {LEVELS.map((level, i) => (
              <RevealItem key={level.tag}>
                <div className="card-premium p-7 h-full flex flex-col">
                  <span className="font-display text-3xl text-navy/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow mt-4">{level.tag}</p>
                  <h3 className="font-display text-xl text-navy mt-2">{level.title}</h3>
                  <p className="text-navy/55 text-sm leading-relaxed mt-3">{level.copy}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Link href="/floor-plans" className="btn btn-primary">
              View Detailed Floor Plans <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- AMENITIES ---------------- */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-start">
            <SectionHeading
              eyebrow="Community"
              title="Everyday comforts, considered."
              description="A short list of amenities, chosen because they get used every day — not because they look good in a brochure."
            />
            <RevealStagger className="grid sm:grid-cols-3 gap-5">
              {AMENITIES.map((a) => (
                <RevealItem key={a.label}>
                  <div className="border border-navy-100 rounded-2xl p-6 text-center hover:border-emerald hover:shadow-soft transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                    <a.icon className="text-midblue" size={26} />
                    <p className="text-navy text-sm font-medium">{a.label}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
          <Reveal delay={0.2} className="mt-10">
            <Link href="/amenities" className="btn btn-outline-navy">
              See All Amenities <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- LOCATION TEASER ---------------- */}
      <section className="py-24 md:py-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-petal-glow" />
        <Container className="relative grid lg:grid-cols-2 gap-14 items-center">
          <SectionHeading
            light
            eyebrow="Location"
            title="Boduppal — well connected, quietly removed."
            description="Minutes from ORR and the Uppal–Ghatkesar corridor, close to schools and hospitals, yet set on a low-traffic residential street."
          />
          <Reveal delay={0.15}>
            <div className="space-y-4">
              {[
                "12 min to ORR Exit 4",
                "8 min to leading schools",
                "15 min to Uppal IT corridor",
                "20 min to Secunderabad Railway Station",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75 text-sm">
                  <MapPin size={16} className="text-emerald shrink-0" />
                  {item}
                </div>
              ))}
              <Link href="/location" className="btn btn-ghost mt-6">
                View Connectivity Map <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="py-20 bg-white">
        <Container>
          <Reveal>
            <div className="bg-ivory rounded-[2rem] px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-navy-100">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-navy max-w-md">
                  Limited villas remaining in this release.
                </h3>
                <p className="text-navy/55 text-sm mt-3 max-w-md">
                  Schedule a private walkthrough of the show villa this weekend.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary shrink-0">
                Book a Visit <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
