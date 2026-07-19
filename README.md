# L'Étoile Bakeshop

A concept brand website for a fictional artisan bakery, built as a self-initiated portfolio piece. It's a single-page, fully responsive marketing site designed to show what a fast, search-friendly web presence looks like for a small or local business — the kind of site where the whole page is prerendered, images and fonts are optimized by default, and there's no framework overhead to load before the content appears.

The brand, copy, and all content are invented. The engineering is real.

**Live demo:** https://letoile-bakeshop.vercel.app

## Tech stack

- **Next.js 16.2.10** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4** — configured CSS-first via `@theme` in `src/app/globals.css`, no `tailwind.config.js`
- **next/font** — self-hosted Google Fonts (Cormorant Garamond, Inter)
- **next/image** — remote images from Unsplash, allowlisted in `next.config.ts`
- **next/og** — build-time generated Open Graph / social card image
- **Metadata, sitemap & robots** via Next.js App Router file conventions; `Bakery` JSON-LD structured data
- Deployed on **Vercel**

No component library, no animation library, no state management. Everything on the page is hand-written.

## Key decisions

**Static by default; client JS only where it's actually needed.** The page is composed almost entirely of server components that render to static HTML at build time. Just two small pieces opt into the client: `Navbar.tsx`, which listens to scroll position to shift its background, and `CurrentYear.tsx`, a one-line component that renders the copyright year on the client so it never freezes at build time. Everything else — the hero, menu grid, process timeline, subscription section, and the rest of the footer — is inert markup. Everything that could be CSS is CSS: the hero's staggered entrance is a keyframe animation with delay classes, not a JS-driven sequence.

**Image and font optimization handled at the framework level.** All imagery goes through `next/image` with explicit `sizes` hints matching the actual layout breakpoints (e.g. `(min-width: 1024px) 50vw, 100vw`), so browsers don't over-fetch on mobile. The hero's center image carries `priority` to preload the LCP element while the two side images stay lazy. Fonts load via `next/font/google`, which self-hosts the files and inlines the CSS — no render-blocking request to Google's servers, and no layout shift from a late-swapping font.

**Semantic markup and honest accessibility affordances.** The page uses a real document outline — one `<h1>`, sectioned `<h2>`s, `<article>` per menu item, `<nav>` in a `<header>`, and a `<footer>` — rather than a stack of divs, which is what makes the content legible to both crawlers and screen readers without extra ARIA patching. Decorative gradient glows are marked `aria-hidden`, the newsletter input has an `sr-only` `<label>`, image `alt` text describes the subject rather than repeating the caption, and `globals.css` includes a `prefers-reduced-motion` block that neutralizes every animation and transition.

**A complete SEO layer, using the framework's own conventions.** `layout.tsx` exports a full `Metadata` object with a `metadataBase`, canonical URL, and Open Graph + Twitter card tags. The social image is generated at build time by `opengraph-image.tsx` via `next/og` — a branded 1200×630 card drawn from the site's own palette, so there's a real `og:image` and `twitter:image` without shipping a static asset (there was no suitable photo in `/public`; a real photograph can be dropped in to replace it). `sitemap.ts` and `robots.ts` use Next's file conventions to emit `/sitemap.xml` and `/robots.txt`, and the home page injects `Bakery` JSON-LD (schema.org `LocalBusiness`) built from the address, opening hours, and founding year already shown in the footer — so a search engine can surface hours and location directly. All of it prerenders to static output at build.

## What I'd improve with more time

- **Wire up the subscription form.** The form in `SubscriptionCTA.tsx` posts to `action="#"` — it's presentational. Making it real means a server action with server-side validation, rate limiting, an email provider, and proper success/error states.
- **Content out of the components, and tests around what's left.** The menu items and process steps are hardcoded arrays inside their components, which is fine for a static concept piece but wrong the moment a client wants to change a price. A CMS or MDX layer would move that content out. There's currently no test setup at all — I'd add Playwright for a smoke test of the page's rendered output and key links, plus an automated accessibility pass (axe) and Lighthouse budgets in CI to catch regressions.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```
