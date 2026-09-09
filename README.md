# KAEW

Storefront for an editions label. One artwork, one artist, fifty numbered glass
pads, sold once. See the build brief and the Edition One decisions doc in the
Claude project for everything this site is built around.

## Layout

```
apps/web    Next.js 15 (App Router, TypeScript, Tailwind v4) — the site
apps/api    Express service — scaffolded only, see apps/api/README.md
```

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

`EXPORT=1 npm run build` emits a static snapshot into `apps/web/out/` for visual
review. (Metadata routes `robots.ts` / `sitemap.ts` are not compatible with static
export — move them aside temporarily if you use it.)

## Images

`next/image` does the work; no image library was added on top of it. Blur
placeholders come free from the static import, so `plaiceholder` and friends are
unnecessary. `sharp` is a dependency because Next.js strongly recommends it for
self-hosted `next start` and requires it in standalone mode.

**Never write a `quality` number in a component.** `apps/web/lib/image-policy.ts`
is the single source of truth, and `next.config.ts` builds its `images.qualities`
allowlist from the same object:

```ts
IMAGE_QUALITY.standard  // 75 — interface-scale renderings
IMAGE_QUALITY.artwork   // 90 — the artwork itself, at any size
```

Next.js validates the `quality` prop against that allowlist and throws at render
time on a value outside it, so writing the number in both places is how you get a
page that builds clean and then 500s. Adding a tier costs cache storage — Next
caches every (size, format, quality) combination separately — so add one only with
a reason.

Output is AVIF with a WebP fallback. The Next.js docs recommend WebP alone for most
sites, since AVIF costs about 50% more encode time and doubles the cache footprint.
This site is the exception: a handful of images, one of them a full-bleed artwork
that has to stay fast on mobile, so paying encode time once for roughly 20% smaller
files is worth it here.

## Where the content lives

Everything a non-developer would want to change is in `apps/web/content/`:

- `edition.ts` — price, edition size, status, the artwork statement, specs, box contents
- `compatibility.ts` — the "Will my mouse work?" list
- `site.ts` — navigation, shipping estimates

The edition's launch state is a single field, `edition.status`, and every call to
action reads from it: `waitlist` → `early-access` → `live` → `sold-out`. The site
currently sits at `waitlist`, which is where the brief's launch sequence starts.

## What is deliberately not here

- **No photography.** Nothing has been shot. Every image on the site is either a
  real region of the artwork file, a drawing, or a CSS rendering — see
  `apps/web/components/figures/`. Nothing is a photograph and nothing is stock.
  The only remaining `<Plate />` placeholder is the artist portrait, which cannot be
  invented and is unreachable until an artist is announced.
- **The pad is a mock-up, not a photograph.** `apps/web/public/artwork/edition-one.jpg`
  is the AI direction art, extended with black to the 490 × 430 ratio.
  `<PadMock />` renders it as an object in CSS — the polished chamfer, the 5 mm
  edge and the contact shadow are all `box-shadow`, and the `angled` variant is a
  `rotateX` transform, not a real perspective. It exists so the layout can be judged
  before the shoot. Swap the component's internals for a real product photograph and
  no call site needs to change. The edition page carries a visible line saying the
  image is direction art.

### The figures

`apps/web/components/figures/` holds everything that stands in for photography:

- `ArtworkCrop` — a real region of the artwork, enlarged. `zoom` is how many frame
  widths the whole artwork spans; `focus` is the point of the artwork, as a fraction
  of its own size, that lands in the middle of the frame.
- `DeskScene` — a flat lay, the desk seen from directly above, in CSS. The frame is
  1200 x 900 mm of desk and every object is placed and sized in real millimetres, so
  pad, keyboard, mouse and mug are to scale with each other. `time="night"` for the
  dark section. It is an illustration, not a photograph; delete it after the shoot.
- `CrossSection`, `GlassTint`, `EtchDiagram`, `TemperDiagram`, `EdgeBaseDiagram` —
  technical drawings. These earn their place permanently: they explain things a
  photograph explains badly.
- `EditionNumber`, `Certificate`, `SiliconeBase` — renderings of the object.
  `07` is a sample number, not a reservation.

`<ScaleDrawing />` is the exception to all of the above: it is a drawing, not a
stand-in for a photograph, and it stays after the shoot. The SVG user unit is one
millimetre, so every rectangle in it is the real dimension of the thing it
represents and the plan cannot drift out of scale — change a number and the drawing
follows. It answers a question photography answers badly: how much of the desk this
takes up.
- **No artist.** `edition.artist.announced` is `false`, so `/artist` says so plainly
  instead of inventing a name.
- **No backend.** Waitlist and checkout are not wired. The waitlist form validates
  and shows its states but does not claim to have stored anything.
- **Untested compatibility data.** Every mouse in `compatibility.ts` is
  `tested: false`, and the page says so on its face. Do not remove that notice until
  the units have actually been tested.

## Design rules this build follows

Gallery white. The artwork is the only colour on the page; the interface has one
desaturated jade accent used solely for interactive states. No gradients, no glow,
no neon. One dark section on the edition page for the RGB proof shots, and it stops
there.

### Typography

Three self-hosted faces, declared in `apps/web/app/fonts.ts`. No network request at
build or runtime, nothing fetched from Google.

| Face | Job | Size |
|---|---|---|
| Instrument Serif | Display — edition names, page titles, prices | 21 KB |
| Anuphan (Latin) | Everything else | 35 KB |
| Anuphan (Thai) | แก้ว, in the same voice as the English | 19 KB |
| Noto Serif TC | Subset to the eight CJK characters the site uses | 3 KB |

All four are SIL Open Font License, licences beside the files in `app/fonts/`.
Total 78 KB, all four preloaded by `next/font`.

The CJK file is the full 1.35 MB Noto Serif TC subset with `pyftsubset` down to
`冷豔鋸關羽偃月刀` — the only CJK characters that appear on the site. Add a character
to the content and it will fall back to a system serif until the subset is rebuilt:

```bash
pyftsubset NotoSerifTC.woff2 --text="冷豔鋸關羽偃月刀" --flavor=woff2 \
  --layout-features='' --no-hinting --output-file=kaew-cjk-serif.woff2
```

Anuphan ships as separate Latin and Thai cuts of one variable font. They cannot be
merged — fontTools cannot merge variable fonts — so they are declared separately and
stacked in `--font-body`. The browser picks per glyph.

If a commercial face is licensed later (Söhne, Suisse Int'l, GT America), it replaces
one entry in `fonts.ts` and nothing else changes.

The type scale lives in `globals.css` under `@theme`, with `.display`, `.title`,
`.heading`, `.lede` and `.eyebrow` as the only type classes. The size gap between
display and body is deliberate and is what makes the site read as a gallery rather
than a shop — do not close it.

## Before launch

- [ ] Resolve price vs. edition size vs. artist fee (decisions doc §1) — `edition.ts` is one line
- [ ] Legal copy reviewed by a lawyer (TH e-commerce, EU distance selling, UK/US)
- [ ] Real photography
- [ ] Compatibility testing, then flip `tested: true` and remove the notice
- [ ] Backend: waitlist capture, real remaining count, Stripe Checkout, webhook-driven inventory
