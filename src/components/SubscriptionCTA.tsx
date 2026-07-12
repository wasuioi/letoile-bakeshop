export default function SubscriptionCTA() {
  return (
    <section id="subscribe" className="relative overflow-hidden py-28 sm:py-40">
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

        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          action="#"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-white/15 bg-obsidian-soft/80 px-6 py-3.5 text-sm text-ivory placeholder:text-ivory-dim/60 backdrop-blur-md transition-colors duration-300 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_28px_rgba(217,119,6,0.4)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_44px_rgba(245,158,11,0.55)]"
          >
            Reserve My Bake
          </button>
        </form>

        <p className="mt-5 text-xs tracking-wide text-ivory-dim/70">
          120 places per bakery, per day. No commitment — cancel any morning
          before 5 a.m.
        </p>
      </div>
    </section>
  );
}
