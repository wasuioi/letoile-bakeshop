"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success";

export default function SubscriptionCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Front-end-only demo. Nothing is persisted and no email is ever sent or
  // stored — the delay below stands in for a network request so the loading
  // and success states are visible. A real build would call a server action
  // with validation, rate limiting, and an email provider.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  return (
    <section
      id="subscribe"
      className="relative scroll-mt-24 overflow-hidden py-28 sm:py-40"
    >
      {/* Radial gold glow */}
      <div
        aria-hidden
        className="animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.22),rgba(217,119,6,0.06)_45%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-gold-bright">
          La Liste Quotidienne
        </p>
        <h2 className="mt-5 font-display text-4xl leading-tight font-medium text-cream sm:text-6xl">
          The morning bake,
          <br />
          <em className="font-normal text-gold-bright">reserved in your name</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-dim">
          Join the daily bake subscription and your loaf is pulled from the
          oven, wrapped, and set aside before the doors open. Pause or change
          your standing order any morning.
        </p>

        <div aria-live="polite">
          {status === "success" ? (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-gold/40 bg-obsidian-soft/80 px-8 py-7 backdrop-blur-md">
              <p className="font-display text-2xl italic text-gold-bright">
                Your bake is reserved.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
                Check your inbox for confirmation — we&apos;ll see you at seven.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/15 bg-obsidian-soft/80 px-6 py-3.5 text-sm text-ivory placeholder:text-ivory-dim/60 backdrop-blur-md transition-colors duration-300 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_28px_rgba(217,119,6,0.4)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_44px_rgba(245,158,11,0.55)] focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Reserving…" : "Reserve My Bake"}
              </button>
            </form>
          )}
        </div>

        <p className="mt-5 text-xs tracking-wide text-ivory-dim/70">
          120 places per bakery, per day. No commitment — cancel any morning
          before 5 a.m.
        </p>
      </div>
    </section>
  );
}
