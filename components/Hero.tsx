"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { images, site } from "@/data/site";
import PepperSprig from "./PepperSprig";
import Wordmark from "./Wordmark";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, delay, ease },
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={images.hero}
          alt="Mist drifting through coconut palms in a Kerala plantation at dawn"
          fill
          priority
          sizes="100vw"
          className="slow-zoom object-cover"
        />
      </motion.div>

      {/* Darken and tint the photograph into the forest palette */}
      <div className="absolute inset-0 bg-forest/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/25 to-bg" />
      <div className="mist-layer" aria-hidden="true" />
      <div className="mist-layer mist-layer--slow" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex flex-col items-center px-5 pt-16 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          {...rise(0.2)}
          className="mb-8 rounded-full border border-gold/45 px-5 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-gold"
        >
          {site.status} · {site.region}
        </motion.p>

        <motion.h1 {...rise(0.45)} className="leading-[0.9]">
          <Wordmark className="text-[clamp(4.5rem,17vw,12.5rem)]" />
        </motion.h1>

        <motion.p
          {...rise(0.8)}
          className="mt-4 font-display text-[clamp(1.6rem,4.2vw,3rem)] italic text-mist"
        >
          {site.tagline}
        </motion.p>

        <motion.div {...rise(1.05)} className="mt-7 flex items-center gap-4">
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
          <PepperSprig className="h-9 w-9" />
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
        </motion.div>

        <motion.p
          {...rise(1.25)}
          className="mt-7 max-w-md text-sm uppercase leading-relaxed tracking-[0.22em] text-mist/85"
        >
          {site.subline}
        </motion.p>
      </motion.div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.34em] text-mist/70 transition-colors hover:text-gold"
      >
        Our story
        <span className="scroll-cue block h-9 w-px bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
