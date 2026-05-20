# Pham Hoang An - Global AI/ML Portfolio

Premium Astro + React portfolio for AI/ML internship recruiting. The site builds to static files, so it can deploy cleanly on Cloudflare Pages.

## Stack

- Astro
- React islands
- GSAP
- Three.js
- TypeScript

## Content

- English-first portfolio with Vietnamese toggle.
- AI/ML + Computer Vision positioning for Pham Hoang An.
- Contact email: `hoanganpham01739@gmail.com`.
- GitHub: <https://github.com/AnHgPham>
- LinkedIn: <https://www.linkedin.com/in/anpham2005/>
- CV: `public/assets/PhamHoangAn_CV_Intern.pdf`
- Optimized portrait and Open Graph assets in `public/assets/`.

## Local Development

Install dependencies once:

```bash
npm install
```

Run the local site:

```bash
npm run dev
```

Build and preview the deploy output:

```bash
npm run build
npm run preview
```

## Edit Points

- Portfolio data: `src/data/portfolio.ts`
- Main page sections: `src/pages/index.astro`
- Layout, SEO, JSON-LD: `src/layouts/BaseLayout.astro`
- Three.js hero island: `src/components/HeroScene.tsx`
- GSAP/language/menu interactions: `src/components/GlobalInteractions.tsx`
- Visual system: `src/styles/global.css`
- Deploy headers: `public/_headers`

## Cloudflare Pages

Use these build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current LTS or newer

No canonical URL or domain-specific sitemap is included until the final domain is confirmed.
