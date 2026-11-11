"use client";

import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";

// The four stages a pepper berry passes through on the vine.
const STAGES = ["#6e9f3a", "#d9822b", "#b5302a", "#2a211d"];

const COUNT = 30;
const round = (n: number) => Math.round(n * 100) / 100;

// Berries hang in loose rows of three down a gently curving stem,
// shrinking towards the tip, as on a real pepper spike.
const berries = Array.from({ length: COUNT }, (_, i) => {
  const t = i / (COUNT - 1);
  const stemX = 60 - Math.sin(t * 2.4) * 7;
  return {
    t,
    cx: round(stemX + ((i % 3) - 1) * (12.5 - t * 4) + (i % 2 ? 1.5 : -1.5)),
    cy: round(74 + t * 318),
    r: round(10 - t * 3.6),
  };
});

function Berry({
  progress,
  berry,
  index,
  reduced,
}: {
  progress: MotionValue<number>;
  berry: (typeof berries)[number];
  index: number;
  reduced: boolean;
}) {
  // Berries nearest the vine ripen first; the wave travels to the tip.
  const start = berry.t * 0.34;
  const fill = useTransform(
    progress,
    [start, start + 0.22, start + 0.44, start + 0.66],
    STAGES,
  );

  return (
    <g>
      <motion.circle
        cx={berry.cx}
        cy={berry.cy}
        r={berry.r}
        style={{ fill: reduced ? STAGES[index % 4] : fill }}
        stroke="rgb(233 228 216 / 0.22)"
        strokeWidth={0.7}
      />
      <circle
        cx={round(berry.cx - berry.r * 0.32)}
        cy={round(berry.cy - berry.r * 0.34)}
        r={round(berry.r * 0.24)}
        fill="rgb(255 255 255 / 0.3)"
      />
    </g>
  );
}

export default function RipeningSpike({
  progress,
  className = "",
}: {
  progress: MotionValue<number>;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <svg
      viewBox="0 0 120 410"
      className={className}
      role="img"
      aria-label="A spike of pepper berries ripening from green through orange and red to black"
    >
      {/* Leaf */}
      <path
        d="M62 34C40 40 18 34 6 14c20-10 44-8 56 20Z"
        fill="#1e3a28"
        stroke="#6e9f3a"
        strokeOpacity="0.55"
        strokeWidth="0.8"
      />
      <path
        d="M8 15c18 4 36 9 54 19"
        stroke="#6e9f3a"
        strokeOpacity="0.5"
        strokeWidth="0.7"
        fill="none"
      />
      {/* Vine and stem */}
      <path
        d="M96 0C92 18 80 30 62 34"
        stroke="#c2a15a"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 34C60 120 46 260 56 396"
        stroke="#3d5a34"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {berries.map((berry, i) => (
        <Berry
          key={i}
          progress={progress}
          berry={berry}
          index={i}
          reduced={reduced}
        />
      ))}
    </svg>
  );
}
