const steps = [
  {
    number: "01",
    title: "Organic Flour",
    detail:
      "Stone-milled within 200 kilometres of the bakery, delivered weekly, and never bleached. The grain decides the flavour long before we do.",
  },
  {
    number: "02",
    title: "36-Hour Fermentation",
    detail:
      "Our levain works slowly in the cold, trading speed for depth. Time is the only ingredient we refuse to substitute.",
  },
  {
    number: "03",
    title: "Stone-Oven Baked",
    detail:
      "Loaded by hand into a granite hearth at 260°. Steam, fire, and stone finish what the fermentation began.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="craft" className="bg-cream py-24 text-obsidian sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-gold-deep">
            The Process
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
            Two days of patience,
            <br /> sold before noon
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-obsidian/10 border-t border-obsidian/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group py-10 md:px-10 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-display text-7xl font-medium text-obsidian/10 transition-colors duration-500 group-hover:text-gold/50">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-obsidian/60">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
