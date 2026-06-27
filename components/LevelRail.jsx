"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LEVELS = [
  { id: "ground", label: "Ground Floor", tag: "Arrival & Living" },
  { id: "first", label: "First Floor", tag: "Private Bedrooms" },
  { id: "second", label: "Second Floor", tag: "Family & Study" },
  { id: "terrace", label: "Terrace", tag: "Sky Lounge" },
];

/**
 * LevelRail — a floating vertical rail that mirrors a triplex section.
 * Click a level to scroll to its detail; the active level is highlighted
 * with the emerald-teal accent, echoing the brand mark's lotus gradient.
 */
export default function LevelRail({ active, onSelect }) {
  return (
    <div className="hidden lg:flex flex-col items-start gap-0 sticky top-32 self-start">
      {LEVELS.map((level, i) => {
        const isActive = active === level.id;
        return (
          <button
            key={level.id}
            onClick={() => onSelect(level.id)}
            className="group flex items-center gap-4 py-4 text-left"
          >
            <span className="relative flex flex-col items-center">
              <motion.span
                animate={{
                  scale: isActive ? 1.3 : 1,
                  backgroundColor: isActive ? "#00C896" : "#D7DBF1",
                }}
                transition={{ duration: 0.35 }}
                className="h-3 w-3 rounded-full block"
              />
              {i < LEVELS.length - 1 && (
                <span className="w-px h-12 bg-navy-100/60" />
              )}
            </span>
            <span>
              <span
                className={`block text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-navy" : "text-navy/40 group-hover:text-navy/70"
                }`}
              >
                {level.label}
              </span>
              <span
                className={`block text-xs transition-colors duration-300 ${
                  isActive ? "text-teal" : "text-navy/30"
                }`}
              >
                {level.tag}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export { LEVELS };
