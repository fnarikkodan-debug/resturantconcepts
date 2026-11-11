"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { images } from "@/data/site";
import Reveal from "./Reveal";
import RipeningSpike from "./RipeningSpike";

const beats = [
  {
    stage: "Green",
    colour: "text-leaf",
    title: "The vine",
    body: "Pepper is a climber. In the hills of Wayanad and Idukki it winds up shade trees through the monsoon, setting long spikes of tight green berries. Picked young and brined, they are bright, grassy and gentle.",
    image: images.vine,
    alt: "Pepper vine with heart-shaped leaves and a hanging green spike",
  },
  {
    stage: "Orange",
    colour: "text-ember",
    title: "The turn",
    body: "As the rains ease, the first berries blush. Growers walk the rows daily now, reading the colour. One orange berry on a spike means the whole spike is ready to come down.",
  },
  {
    stage: "Red",
    colour: "text-berry",
    title: "The harvest",
    body: "Fully ripe, the berry is red, sweet-skinned and fragrant. Spikes are cut by hand from bamboo ladders and threshed underfoot, the way it has been done on the Malabar Coast for centuries.",
    image: images.harvest,
    alt: "Freshly harvested pepper spikes, green and dark berries side by side",
  },
  {
    stage: "Black",
    colour: "text-mist",
    title: "The sun",
    body: "Then the sun does the rest. Spread on mats for days, the skins darken and wrinkle into black gold: warm, woody and bold. This is the pepper at the centre of every Peppera plate.",
  },
];

export default function Story() {
  const ripening = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ripening,
    offset: ["start 0.55", "end 0.75"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(beats.length - 1, Math.floor(value * beats.length)));
  });

  return (
    <section id="story" className="relative scroll-mt-20">
      {/* Origin */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-12 md:gap-10 md:pt-40">
        <Reveal className="md:col-span-6 md:pt-10">
          <p className="eyebrow">Story &amp; origin</p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] text-mist">
            Black gold, from the hills where it{" "}
            <em className="text-gold">began</em>.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[1.9] text-mist/75">
            Long before it sat on every table in the world, black pepper grew
            wild in the rainforests of Kerala. Ships crossed oceans for it.
            Ports rose on the Malabar Coast because of it. Peppera brings that
            story home: a kitchen built around one extraordinary spice, sourced
            from organic smallholders in the Western Ghats.
          </p>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-mist/15 pt-8">
            {[
              ["Origin", "Malabar Coast"],
              ["Grown in", "Wayanad · Idukki"],
              ["Farming", "Organic, by hand"],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-gold">
                  {term}
                </dt>
                <dd className="mt-2 font-display text-xl leading-tight text-mist sm:text-2xl">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-mist/10">
            <Image
              src={images.hills}
              alt="Mist over terraced green hills in the Western Ghats"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-forest/30" />
          </div>
        </Reveal>
      </div>

      {/* The berry's journey */}
      <div
        ref={ripening}
        className="mx-auto grid max-w-7xl grid-cols-[4.5rem_1fr] gap-x-5 px-5 sm:px-8 md:grid-cols-12 md:gap-x-10"
      >
        <div className="md:col-span-5">
          <div className="sticky top-24 flex h-[calc(100svh-8rem)] flex-col items-center justify-center">
            <RipeningSpike
              progress={scrollYProgress}
              className="h-[62svh] max-h-[34rem] w-auto"
            />
            <p
              className="mt-6 hidden text-center text-[0.68rem] uppercase tracking-[0.3em] text-mist/60 md:block"
              aria-hidden="true"
            >
              <span className="text-gold">0{active + 1}</span> / 04 ·{" "}
              <span className={beats[active].colour}>
                {beats[active].stage}
              </span>
            </p>
          </div>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {beats.map((beat, i) => (
            <li
              key={beat.stage}
              className="flex min-h-[78svh] flex-col justify-center py-12"
            >
              <Reveal>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-mist/55">
                  0{i + 1} ·{" "}
                  <span className={beat.colour}>{beat.stage}</span>
                </p>
                <h3
                  className={`mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] italic leading-none ${beat.colour}`}
                >
                  {beat.title}
                </h3>
                <p className="mt-6 max-w-lg text-base leading-[1.9] text-mist/75">
                  {beat.body}
                </p>
                {beat.image && (
                  <div className="relative mt-9 aspect-[3/2] max-w-lg overflow-hidden rounded-sm border border-mist/10">
                    <Image
                      src={beat.image}
                      alt={beat.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 36vw, 75vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
