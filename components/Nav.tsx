import { site } from "@/data/site";
import Wordmark from "./Wordmark";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-bg via-bg/70 to-transparent">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#top" className="leading-none">
          <Wordmark className="text-3xl" />
        </a>
        <div className="flex items-center gap-6 text-[0.72rem] uppercase tracking-[0.28em] text-mist/80 sm:gap-10">
          <a href="#story" className="transition-colors hover:text-gold">
            Story
          </a>
          <a href="#menu" className="transition-colors hover:text-gold">
            Menu
          </a>
          <span className="hidden rounded-full border border-gold/40 px-4 py-1.5 text-gold sm:inline">
            {site.status}
          </span>
        </div>
      </nav>
    </header>
  );
}
