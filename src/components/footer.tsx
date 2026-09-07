import { Atmosphere } from "@/components/atmosphere";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Atmosphere />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 font-mono text-[11px] uppercase tracking-[0.16em] text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{profile.name}’s website</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
