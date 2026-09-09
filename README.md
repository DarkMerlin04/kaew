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

## Where the content lives

Everything a non-developer would want to change is in `apps/web/content/`:

- `edition.ts` — price, edition size, status, the artwork statement, specs, box contents
- `compatibility.ts` — the "Will my mouse work?" list
- `site.ts` — navigation, shipping estimates

The edition's launch state is a single field, `edition.status`, and every call to
action reads from it: `waitlist` → `early-access` → `live` → `sold-out`. The site
currently sits at `waitlist`, which is where the brief's launch sequence starts.

## What is deliberately not here

- **No photography.** Nothing has been shot. Remaining image slots are `<Plate />`
  components stating which shot belongs there, rather than stock images that would
  set the wrong direction. Replace with `next/image` as photography arrives.
- **The pad is a mock-up, not a photograph.** `apps/web/public/artwork/edition-one.jpg`
  is the AI direction art, extended with black to the 490 × 430 ratio.
  `<PadMock />` renders it as an object in CSS — the polished chamfer, the 5 mm
  edge and the contact shadow are all `box-shadow`, and the `angled` variant is a
  `rotateX` transform, not a real perspective. It exists so the layout can be judged
  before the shoot. Swap the component's internals for a real product photograph and
  no call site needs to change. The edition page carries a visible line saying the
  image is direction art.

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

Typography is currently a system font stack. Licence and self-host a real face
before launch — it is the one visible shortcut in the build.

## Before launch

- [ ] Resolve price vs. edition size vs. artist fee (decisions doc §1) — `edition.ts` is one line
- [ ] Legal copy reviewed by a lawyer (TH e-commerce, EU distance selling, UK/US)
- [ ] Real photography
- [ ] Compatibility testing, then flip `tested: true` and remove the notice
- [ ] Backend: waitlist capture, real remaining count, Stripe Checkout, webhook-driven inventory
