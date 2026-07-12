import Image from "next/image";

const items = [
  {
    name: "Wild Sourdough",
    price: "€9",
    note: "Levain raised on our own 38-year-old culture, fermented 36 hours for a deep, wine-like tang and a crust that shatters.",
    image:
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=900&q=80",
    alt: "Wild sourdough boule with a flour-dusted, deeply scored crust",
  },
  {
    name: "Golden Croissant",
    price: "€5",
    note: "Eighty-one layers of cultured Normandy butter, laminated by hand and baked to a honeyed amber. Audibly crisp.",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=80",
    alt: "Rows of golden croissants fresh from the oven",
  },
  {
    name: "Charcoal Pastry",
    price: "€7",
    note: "Dark cardamom dough swirled around black sesame praline and pearl sugar — our quiet rebellion, and the first to sell out.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
    alt: "Dark swirled pastries dusted with sugar on a black surface",
  },
];

export default function ShowcaseGrid() {
  return (
    <section id="menu" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-gold-bright">
              The Signatures
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-cream sm:text-5xl">
              Three reasons the line
              <br className="hidden sm:block" /> forms before dawn
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory-dim">
            Baked in small batches, sold until they&apos;re gone. We would
            rather run out than bake ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-obsidian-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_24px_60px_-20px_rgba(217,119,6,0.25)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-107"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-soft/80 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-obsidian/60 px-4 py-1.5 text-sm font-medium text-ivory backdrop-blur-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian group-hover:shadow-[0_0_24px_rgba(217,119,6,0.5)]">
                  {item.price}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-medium text-cream transition-colors duration-300 group-hover:text-gold-bright">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
