import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CrossSection } from "@/components/figures/CrossSection";
import { GlassTint, EtchDiagram, TemperDiagram, EdgeBaseDiagram } from "@/components/figures/Diagrams";
import { ArtworkCrop } from "@/components/figures/ArtworkCrop";

export const metadata: Metadata = { title: "The Object" };

const passages = [
  {
    heading: "Low-iron glass",
    body: "Ordinary glass is not clear. It carries iron oxide, which gives it a green cast you notice the moment you put white next to it. On a picture that is mostly green already, that cast would sit on top of the artist's colour and shift it. Low-iron glass is made without it. What you see is the ink.",
  },
  {
    heading: "Printed underneath",
    body: "The artwork is UV-printed on the underside of the glass, then backed with white ink where it needs opacity. The picture is sealed under 5 mm of glass. Nothing touches it — not your hand, not the mouse, not a cleaning cloth — so there is nothing to wear off.",
  },
  {
    heading: "White ink, selectively",
    body: "The white backing goes behind the fire and the frost, and nowhere else. The face, the armour and the dark ground stay translucent. Backed areas sit forward; translucent areas fall away. The picture gains a few millimetres of physical depth that no printed cloth can imitate.",
  },
  {
    heading: "Micro-etching",
    body: "Bare glass gives an optical sensor almost nothing to read, and it throws light straight back at you. The top surface is etched to a fine tooth: enough texture for a sensor to track, enough to kill the glare, still smooth under the hand.",
  },
  {
    heading: "Tempering",
    body: "The glass is heat-tempered after it is cut and polished. It is several times stronger than annealed glass of the same thickness, and if it ever does fail it breaks into blunt granules rather than shards.",
  },
  {
    heading: "The edges and the base",
    body: "Edges are chamfered and polished, because your wrist rests on one of them for hours. Underneath is a full sheet of silicone, not four corner feet — it does not move, and it does not drum.",
  },
];

const FIGURES = [
  <GlassTint ratio="16 / 9" key="tint" caption="The same colours, through each kind of glass." />,
  <CrossSection key="under" ratio="4 / 3" caption="The picture goes on the underside." />,
  <ArtworkCrop key="white" ratio="3 / 2" zoom={3.4} focus={{ x: 0.15, y: 0.3 }} caption="White ink goes behind the fire and the frost. Nowhere else." />,
  <EtchDiagram ratio="16 / 9" key="etch" caption="Why the etched surface kills glare and still tracks." />,
  <TemperDiagram ratio="16 / 9" key="temper" caption="How each kind of glass fails." />,
  <EdgeBaseDiagram ratio="16 / 9" key="edge" caption="The edge you rest on, and what is underneath." />,
];

export default function ObjectPage() {
  return (
    <Container className="py-24">
      <h1 className="text-title font-normal tracking-tight">The Object</h1>
      <p className="measure mt-6 text-lede leading-relaxed">
        Six decisions, each made for a reason. None of them are new. They are simply
        the expensive version of each choice.
      </p>

      <div className="mt-20 space-y-20">
        {passages.map((p, i) => (
          <section key={p.heading} className="grid gap-10 border-t border-rule pt-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl">{p.heading}</h2>
              <p className="measure mt-4 leading-relaxed text-muted">{p.body}</p>
            </div>
            {FIGURES[i]}
          </section>
        ))}
      </div>
    </Container>
  );
}
