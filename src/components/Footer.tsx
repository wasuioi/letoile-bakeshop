import CurrentYear from "./CurrentYear";

const columns = [
  {
    heading: "Visit",
    links: ["Menu", "Our Craft", "Gift Cards", "Journal"],
  },
  {
    heading: "Bakeries",
    links: ["Rue Cler, Paris", "Le Marais, Paris", "Lyon Presqu'île"],
  },
  {
    heading: "Hours",
    links: ["Tue–Fri · 7:00–14:00", "Sat–Sun · 7:00–13:00", "Closed Mondays"],
  },
];

export default function Footer() {
  return (
    <footer id="locations" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.22em] text-cream">
              L&apos;ÉTOILE
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-dim">
              An artisan boulangerie baking on wild levain and stone-milled
              flour since 1987. Nothing rushed, nothing wasted.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-bright">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-ivory-dim transition-colors duration-300 hover:text-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-ivory-dim/70">
            © <CurrentYear /> L&apos;Étoile Bakeshop. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-ivory-dim/70">
            18 Rue Cler, 75007 Paris — bonjour@letoile.example
          </p>
        </div>
      </div>
    </footer>
  );
}
