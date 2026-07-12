"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Craft", href: "#craft" },
  { label: "Locations", href: "#locations" },
  { label: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
        scrolled
          ? "border-white/10 bg-obsidian/70"
          : "border-transparent bg-obsidian/40"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[0.22em] text-cream transition-colors duration-300 hover:text-gold-bright"
        >
          L&apos;ÉTOILE
          <span className="ml-2 hidden text-[0.55em] font-normal uppercase tracking-[0.35em] text-ivory-dim sm:inline">
            Bakeshop
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.18em] text-ivory-dim transition-colors duration-300 hover:text-gold-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#subscribe"
          className="rounded-full bg-gold px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_24px_rgba(217,119,6,0.35)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_36px_rgba(245,158,11,0.55)]"
        >
          Order Pickup
        </a>
      </nav>
    </header>
  );
}
