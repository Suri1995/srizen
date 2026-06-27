"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Container from "./Container";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md shadow-[0_10px_30px_rgba(16,23,74,0.25)] py-3"
          : "bg-transparent py-5"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(16,23,74,0.95)" : "transparent" }}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 md:h-11 md:w-11">
            <Image
              src="/images/logo.png"
              alt="Srizen Infra"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-white text-base md:text-lg tracking-wide">
              SRIZEN <span className="text-emerald font-semibold">INFRA</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest2 text-white/50 -mt-0.5">
              Triplex Villas
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919999999999" className="flex items-center gap-2 text-white/85 text-sm">
            <Phone size={15} className="text-emerald" />
            +91 99999 99999
          </a>
          <Link href="/contact" className="btn btn-primary">
            Book a Visit
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#10174A" }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-base border-b border-white/10 ${
                      isActive ? "text-emerald font-semibold" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact" className="btn btn-primary mt-4 justify-center">
                Book a Visit
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
