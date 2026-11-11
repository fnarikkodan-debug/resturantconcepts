import { site } from "@/data/site";
import PepperSprig from "./PepperSprig";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-forest/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <Wordmark className="text-5xl" />
            <PepperSprig className="h-10 w-10" />
          </div>
          <p className="mt-4 font-display text-xl italic text-mist/75">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow">Find us</p>
          <address className="mt-4 text-sm not-italic leading-loose text-mist/75">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-[0.66rem] uppercase tracking-[0.28em] text-gold">
            {site.status} in {site.region}
          </p>
        </div>

        <div>
          <p className="eyebrow">Follow the vine</p>
          <ul className="mt-4 space-y-2 text-sm text-mist/75">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-mist/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-mist/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-mist/10 px-5 py-6 text-center text-[0.68rem] uppercase tracking-[0.24em] text-mist/50">
        © {site.year} Peppera · Born in Kerala
      </p>
    </footer>
  );
}
