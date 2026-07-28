export const siteUrl = "https://letoile-bakeshop.vercel.app";

export const siteName = "L'Étoile Bakeshop";

export const siteDescription =
  "Slow-fermented sourdough, hand-laminated croissants, and stone-oven pastries. Baked with devotion, crafted for connoisseurs since 1987.";

export const address = {
  streetAddress: "18 Rue Cler",
  postalCode: "75007",
  addressLocality: "Paris",
  addressCountry: "FR",
} as const;

export const email = "bonjour@letoile.example";

/**
 * Single source of truth for opening hours. The footer and the Bakery
 * JSON-LD both derive from this, so the hours a visitor reads and the hours
 * a search engine indexes cannot drift apart.
 */
export const openingHours = [
  {
    label: "Tue–Fri",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "14:00",
  },
  {
    label: "Sat–Sun",
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "07:00",
    closes: "13:00",
  },
] as const;

export const closedDaysLabel = "Closed Mondays";

/** "07:00" -> "7:00", matching how the hours read in the footer. */
const trimHour = (time: string) => time.replace(/^0/, "");

/** e.g. "Tue–Fri · 7:00–14:00" */
export const formatHours = (hours: (typeof openingHours)[number]) =>
  `${hours.label} · ${trimHour(hours.opens)}–${trimHour(hours.closes)}`;
