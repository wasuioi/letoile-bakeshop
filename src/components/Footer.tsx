import CurrentYear from "./CurrentYear";
import {
  address,
  closedDaysLabel,
  email,
  formatHours,
  openingHours,
} from "@/lib/site";

// Columns declare whether their items are navigable or plain information.
// Opening hours and bakery addresses are not destinations on this single-page
// site, so they render as text — a link that goes nowhere is worse than no link.
type FooterColumn =
  | { heading: string; kind: "links"; items: { label: string; href: string }[] }
  | { heading: string; kind: "text"; items: string[] };

const columns: FooterColumn[] = [
  {
    heading: "Visit",
    kind: "links",
    items: [
      { label: "Menu", href: "#menu" },
      { label: "Our Craft", href: "#craft" },
      { label: "Locations", href: "#locations" },
    ],
  },
  {
    heading: "Bakeries",
    kind: "text",
    items: ["Rue Cler, Paris", "Le Marais, Paris", "Lyon Presqu'île"],
  },
  {
    heading: "Hours",
    kind: "text",
    // Derived from the same constant the Bakery JSON-LD uses, so the hours
    // shown here and the hours indexed by search engines cannot disagree.
    items: [...openingHours.map(formatHours), closedDaysLabel],
  },
];

export default function Footer() {
  return (
    <footer id="locations" className="scroll-mt-24 border-t border-white/10">
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
                {column.kind === "links"
                  ? column.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-sm text-ivory-dim transition-colors duration-300 hover:text-cream"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))
                  : column.items.map((item) => (
                      <li key={item} className="text-sm text-ivory-dim">
                        {item}
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-ivory-dim/80">
            © <CurrentYear />{" "}
            L&apos;Étoile Bakeshop. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-ivory-dim/80">
            {address.streetAddress}, {address.postalCode}{" "}
            {address.addressLocality} — {email}
          </p>
        </div>
      </div>
    </footer>
  );
}
