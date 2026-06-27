"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const DETAILS = [
  { icon: Phone, label: "Call Us", value: "+91 99999 99999" },
  { icon: Mail, label: "Email Us", value: "hello@srizeninfra.com" },
  { icon: MapPin, label: "Visit Us", value: "Boduppal, Hyderabad, Telangana" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a visit to the show villa."
        description="Tell us a little about what you're looking for, and our team will get back within a day."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container className="grid lg:grid-cols-[0.9fr,1.1fr] gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-navy mb-6">Get in touch</h2>
              <div className="space-y-5">
                {DETAILS.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <d.icon className="text-emerald" size={19} />
                    </div>
                    <div>
                      <p className="text-navy/45 text-xs uppercase tracking-widest2">{d.label}</p>
                      <p className="text-navy font-medium mt-0.5">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 rounded-2xl overflow-hidden border border-navy-100 h-64">
              <iframe
                title="Srizen Infra - Boduppal map"
                src="https://www.google.com/maps?q=Boduppal,Hyderabad,Telangana&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="bg-ivory rounded-[1.75rem] p-8 md:p-10 border border-navy-100">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full Name" type="text" placeholder="Your name" required />
                      <Field label="Phone Number" type="tel" placeholder="+91" required />
                    </div>
                    <Field label="Email Address" type="email" placeholder="you@example.com" required />
                    <div>
                      <label className="text-navy text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="I'm interested in a 3-bedroom triplex villa..."
                        className="w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-emerald transition-colors duration-300 resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.97 }}
                      disabled={loading}
                      className="btn btn-primary w-full"
                    >
                      {loading ? "Sending..." : "Send Enquiry"}
                      {!loading && <Send size={16} />}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 className="text-emerald mb-4" size={48} />
                    <h3 className="font-display text-xl text-navy">Enquiry sent</h3>
                    <p className="text-navy/55 text-sm mt-2 max-w-xs">
                      Thank you — our team will reach out within 24 hours to schedule your visit.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-navy text-sm font-medium mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-emerald transition-colors duration-300"
      />
    </div>
  );
}
