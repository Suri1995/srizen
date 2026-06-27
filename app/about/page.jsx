"use client";

import Image from "next/image";
import { Target, Layers3, HeartHandshake, Award } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const VALUES = [
  {
    icon: Layers3,
    title: "Design in section",
    copy: "We design villas the way architects think — in vertical section, not just floor plan — so every level has a distinct purpose.",
  },
  {
    icon: HeartHandshake,
    title: "Honest construction",
    copy: "Transparent specifications, scheduled site visits, and no shortcuts on structure or waterproofing.",
  },
  {
    icon: Target,
    title: "Low-density living",
    copy: "Fourteen villas on one street. No towers, no crowding — just neighbours you'll actually get to know.",
  },
  {
    icon: Award,
    title: "Built to last",
    copy: "RCC framed structure, branded fittings, and a 5-year structural assurance on every villa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Srizen Infra"
        title="A villa is a sequence of rooms you move through every day."
        description="We design that sequence deliberately — so a Srizen home feels considered from the gate to the terrace."
      />

      <section className="py-24 md:py-32 bg-white">
        <Container className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Founded on a simple idea: build fewer homes, better."
              description="Srizen Infra began with a question we kept asking on other projects — why does a villa, the most personal kind of home, so often get treated like a smaller version of an apartment? Boduppal is our answer: fourteen triplex villas, each planned in section before plan, with a private terrace that's never an afterthought."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-soft">
              <Image
                src="/images/villa-hero.png"
                alt="Srizen Infra villa elevation"
                width={700}
                height={620}
                className="w-full h-[480px] object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title="Four commitments behind every villa we hand over."
          />
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="card-premium p-7 h-full">
                  <div className="h-12 w-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-5">
                    <v.icon className="text-emerald" size={22} />
                  </div>
                  <h3 className="font-display text-lg text-navy mb-2">{v.title}</h3>
                  <p className="text-navy/55 text-sm leading-relaxed">{v.copy}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <Container className="grid md:grid-cols-3 gap-8">
          {[
            { value: "14", label: "Triplex Villas in Boduppal" },
            { value: "G+2", label: "Levels per Villa, plus Terrace" },
            { value: "2027", label: "Scheduled Possession" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-center border border-navy-100 rounded-2xl py-10 px-6">
                <p className="font-display text-4xl text-navy">{stat.value}</p>
                <p className="text-navy/55 text-sm mt-2">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
