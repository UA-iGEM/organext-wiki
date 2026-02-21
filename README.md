# iGEM Team Wiki

Next.js 14 (App Router) scaffold for an iGEM team wiki, with theme tokens and components derived from the project style guide.

## Style guide interpretation

The design system was extracted from the provided style guide as follows:

- **Colors**
  - **Base palette:** `#092230` (primary dark / dark sea green), `#097474` (primary / medium teal), `#DBEFE2` (primary light / mint). Used for backgrounds, accents, and text.
  - **Alternative palette:** `#061A57` (navy), `#004576` (blue), `#9EE1DF` (aqua). Used for secondary accents and the bacterial-style background gradients.
- **Typography**
  - **Headings:** Style guide specifies “Monument”. This scaffold uses **Oswald** from Google Fonts as a stand-in (bold, geometric). To use the real Monument font, add webfont files under `public/fonts/` and switch to `next/font/local` in `src/app/layout.tsx`, then set `--font-heading` accordingly.
  - **Body:** **Jura** (Google Fonts).
  - **Monospace/alternative:** **Anca Coder** (documented in tokens; use a local or CDN font if needed).
- **Layout**
  - Rounded corners: cards and buttons use `rounded-igem` / `rounded-igem-lg` (see Tailwind config).
  - Spacing: section padding and content width follow the tokens; sections use consistent vertical rhythm.
- **Background**
  - “Bacterial” feel: dark base (`#092230`) with layered radial gradients (teal/blue/aqua at low opacity) in `globals.css` (`.bacterial-bg`). No images required; adjust gradient positions and opacity in `globals.css` to tune the effect.

## Customizing theme variables

- **Tailwind:** Edit `tailwind.config.ts` — `theme.extend` for `colors`, `fontFamily`, `borderRadius`, `spacing`. These align with the style guide.
- **CSS variables:** Edit `:root` in `src/app/globals.css` for `--color-*`, `--font-*`, `--spacing-*`, `--radius-*`. Use these in custom CSS or ensure Tailwind theme matches.
- **Single source:** `src/theme/tokens.js` exports the same values for reference; you can import it in configs or use it to generate CSS variables in a build step if you want one source of truth.

## Adding pages

1. Create a route folder under `src/app/` and add `page.tsx` (e.g. `src/app/your-section/page.tsx`).
2. Export a default React component; use semantic HTML (`<main>`, `<article>`, `<section>`, `<h1>`, etc.) and shared components (`Section`, `SectionCard`, `Card`, `Gallery`, `VideoEmbed`) for consistency.
3. Add a link in `src/components/layout/Header.tsx` (and optionally `Footer.tsx` and `Sidebar.tsx`) so the new page is discoverable.

## Adding components

- **Layout:** Put global layout pieces (e.g. headers, footers, sidebars) in `src/components/layout/`. They are used in `src/app/layout.tsx` or individual pages.
- **UI:** Put reusable content blocks (cards, sections, galleries, video embeds) in `src/components/ui/`. Use Tailwind classes and theme colors (e.g. `text-primary-light`, `bg-primary-dark`, `border-primary/30`) so they stay on-brand.

## Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build with `npm run build` and run production with `npm start`.

**Note:** The first build fetches Jura and Oswald from Google Fonts via `next/font`. Ensure network access when running `npm run build` or `npm run dev` for the first time.

## Logo

Replace `public/logo.png` with your team logo. The Header links the logo to the homepage; use the same asset in the Footer if your style guide requires it.
# organext-wiki
