# Daniel Bail – Persönliche Portfolio-Seite

[➡️ Live ansehen](https://dan1elba1l.github.io/personalpage/)

## Über das Projekt

Dies ist das persönliche Portfolio von Daniel Bail, entwickelt mit **Next.js 14**, **Tailwind CSS** und modernen UI-Komponenten. Die Seite ist als statische Website gebaut und wird automatisch mit **GitHub Actions** auf **GitHub Pages** veröffentlicht.

## Features

- **Modernes, responsives Design**
- **Dark/Light Mode**
- **Animierte Komponenten** (MagicUI, Framer Motion)
- **Berufserfahrung, Ausbildung, Projekte** übersichtlich dargestellt
- **Dock-Navigation** am unteren Bildschirmrand
- **Automatisches Deployment** via GitHub Actions
- **Optimiertes Bildhandling** für GitHub Pages

## Technologie-Stack

- [Next.js](https://nextjs.org/) (App Router, statischer Export)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) Komponenten
- [MagicUI](https://magicui.design/) für Animationen
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub Actions](https://github.com/features/actions) für CI/CD

## Live-Demo

👉 **[Portfolio live ansehen](https://dan1elba1l.github.io/personalpage/)**

## Deployment auf GitHub Pages

- Die Seite wird automatisch bei jedem Push auf den `main`-Branch gebaut und veröffentlicht.
- Die Veröffentlichungsquelle ist **GitHub Actions** (nicht gh-pages-Branch!).
- Die Seite läuft unter dem Unterverzeichnis `/personalpage/`.

### Wichtige Hinweise für GitHub Pages

- In der `next.config.mjs` sind `basePath` und `assetPrefix` auf `/personalpage` gesetzt:
  ```js
  basePath: '/personalpage',
  assetPrefix: '/personalpage',
  ```
- Bildpfade werden dynamisch mit der Umgebungsvariable `NEXT_PUBLIC_BASE_PATH` gesetzt (siehe `.env.production`).
- Nach dem Build werden alle Bilder automatisch ins richtige Verzeichnis kopiert.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Statischer Export & Testen

```bash
npm run build
npx serve out
```

## Anpassung der Seitenbreite

Die maximale Breite der Seite ist in `src/app/layout.tsx` über die Tailwind-Klasse `max-w-4xl` gesetzt. Für eine breitere Seite kann dies auf `max-w-5xl`, `max-w-6xl` oder `max-w-7xl` angepasst werden.

## Lizenz

MIT
