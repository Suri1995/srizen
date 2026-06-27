import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import Container from "./Container";

const SITEMAP = [
  { href: "/about", label: "About" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-petal-glow pointer-events-none" />
      <Container className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="Srizen Infra" fill className="object-contain" />
            </div>
            <p className="font-display text-lg">
              SRIZEN <span className="text-emerald font-semibold">INFRA</span>
            </p>
          </div>
          <p className="text-white/65 text-sm max-w-sm leading-relaxed">
            A boutique collection of triplex villas in Boduppal, Hyderabad —
            crafted for families who measure home not in square feet, but in
            light, levels and quiet luxury.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-emerald transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {SITEMAP.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-emerald transition-colors duration-200">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-emerald mt-0.5 shrink-0" />
              Boduppal, Hyderabad, Telangana
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-emerald shrink-0" />
              +91 99999 99999
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-emerald shrink-0" />
              hello@srizeninfra.com
            </li>
          </ul>
        </div>
      </Container>

      <Container className="relative mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/45">
        <p>© {new Date().getFullYear()} Srizen Infra. All rights reserved.</p>
        <p>RERA No. — to be updated · Designed for discerning living.</p>
      </Container>
    </footer>
  );
}
