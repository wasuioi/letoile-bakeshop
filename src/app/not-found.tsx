import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sold Out — L'Étoile Bakeshop",
  description: "The page you were looking for is not on today's board.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Ambient warmth, matching the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.14),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-gold-bright">
          Error 404 — Sold Out
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[1.08] font-medium text-cream sm:text-6xl">
          This one went
          <br />
          <em className="font-normal text-gold-bright">before dawn.</em>
        </h1>

        <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ivory-dim">
          The page you were looking for isn&apos;t on today&apos;s board. Like
          the morning bake, some things are gone by the time you reach the
          counter — but there is always tomorrow, and always the front window.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-full bg-gold px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_28px_rgba(217,119,6,0.35)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_44px_rgba(245,158,11,0.5)] sm:w-auto"
          >
            Back to the Bakery
          </Link>
          <Link
            href="/#menu"
            className="w-full rounded-full border border-ivory/25 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:border-gold-bright hover:text-gold-bright sm:w-auto"
          >
            See the Menu
          </Link>
        </div>
      </div>
    </main>
  );
}
