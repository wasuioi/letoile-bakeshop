import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      {/* Ambient warmth behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.14),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up delay-1 text-[12px] font-medium uppercase tracking-[0.4em] text-gold-bright">
            Artisan Boulangerie — Est. 1987
          </p>

          <h1 className="animate-fade-up delay-2 mt-6 font-display text-5xl leading-[1.08] font-medium text-cream sm:text-6xl lg:text-7xl">
            Baked with Devotion.
            <br />
            Crafted for{" "}
            <em className="font-normal text-gold-bright">Connoisseurs.</em>
          </h1>

          <p className="animate-fade-up delay-3 mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Every loaf begins two days before you taste it — wild levain,
            organic stone-milled flour, and the patience of a boulangerie that
            has never once hurried.
          </p>

          <div className="animate-fade-up delay-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#menu"
              className="w-full rounded-full bg-gold px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_28px_rgba(217,119,6,0.35)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_44px_rgba(245,158,11,0.5)] sm:w-auto"
            >
              Explore Menu
            </a>
            <a
              href="#locations"
              className="w-full rounded-full border border-ivory/25 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:border-gold-bright hover:text-gold-bright sm:w-auto"
            >
              Find a Bakery
            </a>
          </div>
        </div>

        {/* Showcase frame */}
        <div className="animate-fade-up delay-5 mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_1fr] lg:items-end">
          <div className="group relative hidden aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 lg:block">
            <Image
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
              alt="Hand-laminated croissants cooling on a rack"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg italic text-cream">
              Viennoiserie, 6 a.m.
            </p>
          </div>

          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[16/11]">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80"
              alt="Slow-baked sourdough loaves fresh from the stone oven"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p className="font-display text-2xl italic text-cream">
                The morning bake — drawn from the stone oven at first light
              </p>
              <span className="hidden shrink-0 rounded-full border border-gold/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-bright sm:block">
                Daily at 7:00
              </span>
            </div>
          </div>

          <div className="group relative hidden aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 lg:block">
            <Image
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80"
              alt="Fresh pastries and bread arranged on the counter"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg italic text-cream">
              The counter, opening hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
