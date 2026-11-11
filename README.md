# Peppera

Website for Peppera, a black-pepper-themed restaurant from Kerala (opening soon).
A single page: hero, story & origin, menu, footer.

Built with Next.js (App Router), Tailwind CSS and Motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

Everything on the site is placeholder content until you replace it.

| What | Where |
| --- | --- |
| Dishes, prices, heat levels | `data/menu.ts` |
| Tagline, address, Instagram/WhatsApp links, photos | `data/site.ts` |
| Story text and the four ripening stages | `components/Story.tsx` |
| Colours and fonts | `app/globals.css` (top of file), `app/layout.tsx` |

Heat levels run from 0 to 4 and show as peppercorns coloured by ripeness:
green, orange, red, black.

## Photos

The photos are licence-free placeholders from Unsplash, loaded by URL from
`data/site.ts`. Swap them for your own photography before launch.

| Used for | Unsplash photo |
| --- | --- |
| Hero | https://unsplash.com/photos/GfFsbhNOW5c |
| Hills (story) | https://unsplash.com/photos/hFLA-Lq0hSc |
| Pepper vine | https://unsplash.com/photos/norExfxpHL4 |
| Harvested spikes | https://unsplash.com/photos/07mSvSqbij4 |
| Mixed peppercorns (menu banner) | https://unsplash.com/photos/AzMmIgYkUWk |

To use your own files, put them in `public/` and set the path
(for example `/hero.jpg`) in `data/site.ts`.

The original concept image is not used on the site: it carries a
TopTropicals.com watermark and is not licensed for this use.

## Deploy to GitHub Pages

`npm run build` exports the site as plain static files in `out/`.
The workflow in `.github/workflows/deploy.yml` builds and publishes it
on every push to `main`.

One-time setup:

1. Create an empty repository on GitHub.
2. Push this folder to its `main` branch.
3. In the repository, open Settings > Pages and set Source to
   "GitHub Actions".

The site then appears at `https://<username>.github.io/<repo>/`. The
workflow works out the `/<repo>` base path by itself, and also handles
a custom domain if you add one under Settings > Pages.
