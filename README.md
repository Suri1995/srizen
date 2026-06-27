# Srizen Infra — Triplex Villas, Boduppal, Hyderabad

A premium, multi-page marketing website for Srizen Infra's triplex villa
project in Boduppal, Hyderabad. Built with **Next.js (App Router)**,
**Tailwind CSS**, and **Framer Motion**.

## Pages

| Route          | Description                                   |
|----------------|------------------------------------------------|
| `/`            | Home — hero, trust stats, level preview, amenities, location, CTA |
| `/about`       | Brand story, values, key numbers              |
| `/floor-plans` | Level-by-level breakdown with a scroll-spy "level rail" |
| `/amenities`   | Full amenities grid                           |
| `/gallery`     | Filterable gallery with lightbox               |
| `/location`    | Connectivity list + embedded map               |
| `/contact`     | Enquiry form + map + contact details           |

## Design system

- **Palette** — Navy `#1E2B7A`, Teal `#00B8CC`, Emerald-Teal `#00C896`,
  Mid-Blue `#1A6FA8`, White `#FFFFFF`, Light `#F0F9FB` (all wired into
  `tailwind.config.js` and `app/globals.css`).
- **Type** — Fraunces (display/serif) + Manrope (body/sans), loaded via
  `next/font/google` in `app/layout.jsx`.
- **Layout** — every section is capped at `max-w-7xl` via the shared
  `.wrap` utility / `<Container />` component.
- **Signature element** — the `LevelRail` component on `/floor-plans`, a
  vertical indicator that highlights Ground → First → Second → Terrace as
  you scroll, mirroring the triplex's actual vertical sequence.
- **Motion** — `components/Reveal.jsx` provides scroll-triggered reveals
  and staggered grids; buttons, nav links, and cards all carry deliberate
  hover/active micro-interactions defined in `globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Replacing content

- **Images** — swap files in `public/images/` (currently `villa-hero.png`
  and `logo.png`). Update the matching `<Image src="..." />` paths if you
  rename them, and add more renders for true gallery variety.
- **Copy & numbers** — all project specifics (areas, possession date,
  connectivity times, RERA number) are placeholder and should be
  confirmed before going live — search each page for the relevant text.
- **Contact form** — `app/contact/page.jsx` currently simulates a submit.
  Wire the `handleSubmit` function to your email/CRM API (e.g. an API
  route under `app/api/enquiry/route.js`) before launch.
- **Phone/email** — update in `components/Navbar.jsx`,
  `components/Footer.jsx`, and `app/contact/page.jsx`.

## Notes

- Active nav-link highlighting uses `usePathname()` in `Navbar.jsx`.
- Reduced-motion and visible keyboard focus are respected globally in
  `app/globals.css`.
