# Image credits

All photography on this site is sourced from [Unsplash](https://unsplash.com)
under the [Unsplash License](https://unsplash.com/license), which permits free
commercial and non-commercial use without attribution. Attribution is recorded
here anyway, because knowing the provenance of every asset in a project is the
discipline a client should expect.

Each file was downloaded once, cropped and encoded to WebP at the largest size
the layout actually renders, and committed to `public/images/`. Nothing is
hotlinked at runtime — no third-party image host is allowlisted in
`next.config.ts`.

| File | Rendered in | Dimensions | Source |
| --- | --- | --- | --- |
| `sourdough-morning-bake.webp` | `Hero.tsx` — centre frame (LCP) | 1400×963 | https://images.unsplash.com/photo-1509440159596-0249088772ff |
| `croissants-cooling.webp` | `Hero.tsx` — left frame | 600×800 | https://images.unsplash.com/photo-1555507036-ab1f4038808a |
| `bakery-counter.webp` | `Hero.tsx` — right frame | 600×800 | https://images.unsplash.com/photo-1517433670267-08bbd4be890f |
| `sourdough-boule.webp` | `ShowcaseGrid.tsx` — Wild Sourdough | 900×675 | https://images.unsplash.com/photo-1589367920969-ab8e050bbb04 |
| `golden-croissants.webp` | `ShowcaseGrid.tsx` — Golden Croissant | 900×675 | https://images.unsplash.com/photo-1623334044303-241021148842 |
| `charcoal-pastry.webp` | `ShowcaseGrid.tsx` — Charcoal Pastry | 900×675 | https://images.unsplash.com/photo-1509365465985-25d11c17e812 |

## A note on photographer names

The table lists the exact CDN URL each asset came from. Individual photographer
names are deliberately **not** listed: these `images.unsplash.com/photo-…`
identifiers are CDN asset ids, not public photo-page slugs, and they cannot be
resolved back to a contributor profile without an authenticated call to the
Unsplash API. Rather than guess at a name and credit the wrong person, the
verifiable source URL is recorded instead. If this were a client project, the
images would be re-sourced through the Unsplash API so that each photographer's
name and profile link could be stored alongside the asset.

## Format

Only WebP is committed. `next/image` re-encodes and serves AVIF or WebP per the
browser's `Accept` header at request time, so shipping a second hand-made AVIF
copy of each file would add weight to the repo without changing what any
browser actually downloads.
