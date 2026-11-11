// "Peppera", each letter tinted along the pepper berry's ripening sequence.
const letters: [string, string][] = [
  ["P", "text-leaf"],
  ["e", "text-mist"],
  ["p", "text-ember"],
  ["p", "text-berry"],
  ["e", "text-leaf"],
  ["r", "text-mist"],
  ["a", "text-ember"],
];

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-medium tracking-[0.02em] ${className}`}
      aria-label="Peppera"
    >
      {letters.map(([letter, colour], i) => (
        <span key={i} className={colour} aria-hidden="true">
          {letter}
        </span>
      ))}
    </span>
  );
}
