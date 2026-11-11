// The small trailing pepper sprig from the concept artwork: one leaf, a
// curling stem and a short spike of berries.
export default function PepperSprig({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M34 8c-9 3-17 1-24-3 1 9 7 15 16 15 4 0 7-2 8-12Z"
        fill="var(--color-ripe-green)"
        opacity="0.9"
      />
      <path
        d="M11 6c7 5 13 8 22 3"
        stroke="var(--color-bg)"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M34 8c6 6 4 14-1 21-4 6-7 12-6 20"
        stroke="var(--color-gold)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M36 14c5-3 10-2 13 2"
        stroke="var(--color-gold)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="31" cy="33" r="4" fill="var(--color-ripe-green)" />
      <circle cx="37" cy="39" r="4" fill="var(--color-ripe-orange)" />
      <circle cx="28" cy="43" r="4.2" fill="var(--color-ripe-red)" />
      <circle
        cx="33"
        cy="51"
        r="4.2"
        fill="#2a211d"
        stroke="var(--color-mist)"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
      <circle cx="25" cy="54" r="3.4" fill="var(--color-ripe-red)" />
    </svg>
  );
}
