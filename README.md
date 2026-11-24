# Riz Lactoserum — landing page

React + Vite. No UI or animation library; the motion is CSS keyframes plus a
small rAF loop, so the JS bundle is essentially React itself.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

Vercel / Netlify: framework preset **Vite**, build `npm run build`, output `dist`.

## What's where

```
src/
  styles/tokens.css      every colour, size and spacing value
  styles/fonts.css       self-hosted Fraunces + DM Sans, latin only
  styles/global.css      reset, layout, buttons, reveal, paper grain
  hooks/
    useNavVisibility.js  pill nav: tuck on scroll, return on settle
    useSectionSpy.js     active nav link
    useReveal.js         IntersectionObserver fade-up
  components/
    Nav / Hero / Formula / Texture / Process / Ritual / Inside / Closing / Footer
    FloatingBottle.jsx   3D product float: tilt, parallax, sheen, contact shadow
    Icons.jsx            the icon set, 5 strokes or fewer per glyph
```

## Palette

Sampled from the logo:

| token | value | from |
|---|---|---|
| `--gold-600` | `#C4934E` | the wheat sprig and wordmark |
| `--olive-600` | `#8E9C36` | the green leaf |
| `--gold-800` | `#7F5A2E` | the husk shading |
| `--cream-100` | `#F9F4EA` | paper ground |
| `--bark` | `#52412C` | the single deep band |

## Notes on the product renders

The supplied PNGs already carry clean alpha, so they are only cropped to
content and converted to WebP. They are **very tall crops** (the front bottle
is 285 x 1250), so each `.fb` is sized by *width* with the height following
from the aspect ratio. If a render is ever re-exported at a different crop,
update the `aspect-ratio` and the `width` clamp together in that section's CSS.

`FloatingBottle` takes a `fb--tall` modifier, which widens the light pool and
the contact shadow beyond the narrow image box.

## House rules carried over

- No em dashes anywhere in the copy.
- Counts are plain digits, never `01`-style, so they don't read as indices.
- Icons are five strokes or fewer at 1.8 weight, so they hold at 18px.
- Everything respects `prefers-reduced-motion`.
- Partner logos sit on a cream plate and keep their own brand colours.

## The team section

`src/components/Team.jsx` sits just before the closing block and is set as
an editorial spread: the photograph left in the apothecary arch, the credit right. The photograph is `src/assets/team.webp`, 1700px wide, cropped with
`aspect-ratio` plus `object-position` so all three faces survive the crop at
every width. No names are printed yet; add them to the component when you
have them.
