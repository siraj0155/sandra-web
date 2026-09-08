"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";

const desktopQuery = "(min-width: 1024px)";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(desktopQuery);

    function closeOnDesktop() {
      if (media.matches) {
        setOpen(false);
      }
    }

    closeOnDesktop();
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center border border-paper font-mono text-[11px] font-semibold tracking-wider text-paper transition group-hover:bg-paper group-hover:text-ink">
            {profile.name.slice(0, 1)}
          </span>
          <span className="font-mono text-[13px] tracking-wide text-mist">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link font-mono text-[12px] uppercase tracking-[0.18em] text-mist hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`hamburger${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="hamburger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          <div className="flex flex-col gap-1 border-t border-line px-5 py-4">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-link font-mono text-[13px] uppercase tracking-[0.18em] text-mist"
                style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
