"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { menu } from "@/data/menu";
import { images } from "@/data/site";
import HeatMeter from "./HeatMeter";
import Reveal from "./Reveal";

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const section = menu.find((s) => s.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative scroll-mt-20 pt-24 md:pt-36">
      {/* Banner */}
      <div className="relative h-[46svh] min-h-72 overflow-hidden">
        <Image
          src={images.peppercorns}
          alt="A dense pile of mixed green, red, black and white peppercorns"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        <Reveal className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="eyebrow">The menu</p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-none text-mist">
            Every plate, <em className="text-gold">led by pepper</em>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu sections"
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:justify-center sm:px-0"
        >
          {menu.map((s) => {
            const selected = s.id === activeId;
            return (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                onClick={() => setActiveId(s.id)}
                className={`shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.24em] transition-colors duration-500 ${
                  selected
                    ? "border-gold bg-gold text-bg"
                    : "border-mist/20 text-mist/75 hover:border-gold/60 hover:text-gold"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${section.id}`}
          className="mt-12 min-h-[30rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-center font-display text-2xl italic text-mist/70">
                {section.note}
              </p>
              <ul className="mt-10 grid gap-x-14 gap-y-9 md:grid-cols-2">
                {section.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-2xl leading-tight text-mist sm:text-[1.7rem]">
                        {dish.name}
                      </h3>
                      <span
                        className="mb-1 min-w-6 flex-1 border-b border-dotted border-mist/25"
                        aria-hidden="true"
                      />
                      <span className="font-display text-xl text-gold">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/65">
                      {dish.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <HeatMeter heat={dish.heat} />
                      {dish.veg && (
                        <span className="text-[0.6rem] uppercase tracking-[0.24em] text-leaf">
                          Vegetarian
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-14 border-t border-mist/15 pt-8 text-center text-xs leading-relaxed tracking-wide text-mist/55">
          A preview of our opening menu. Dishes and prices will be confirmed
          when we open. Heat runs from green (gentle) to black (fierce).
        </p>
      </div>
    </section>
  );
}
