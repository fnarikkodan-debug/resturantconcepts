// Heat shown as up to four peppercorns, coloured by ripeness:
// green (gentle), orange, red, black (fierce).
const fills = [
  "var(--color-ripe-green)",
  "var(--color-ripe-orange)",
  "var(--color-ripe-red)",
  "#2a211d",
];

const labels = ["No heat", "Gentle", "Warm", "Hot", "Fierce"];

export default function HeatMeter({ heat }: { heat: number }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      role="img"
      aria-label={`Heat: ${labels[heat]} (${heat} of 4)`}
      title={labels[heat]}
    >
      {fills.map((fill, i) => {
        const on = i < heat;
        return (
          <svg key={i} viewBox="0 0 12 12" className="h-2.5 w-2.5">
            <circle
              cx="6"
              cy="6"
              r="5"
              fill={on ? fill : "transparent"}
              stroke={
                on && i === 3
                  ? "rgb(233 228 216 / 0.7)"
                  : on
                    ? fill
                    : "rgb(233 228 216 / 0.25)"
              }
              strokeWidth="1"
            />
          </svg>
        );
      })}
    </span>
  );
}
