import { createFileRoute } from "@tanstack/react-router";
import wildlife from "@/assets/group-wildlife-sanctuary.webp";
import bamboo from "@/assets/group-bamboo-forest.jpg";
import pathoos from "@/assets/group-pathoos-munnar.jpg";
import busCandy from "@/assets/bus-candy-combo.webp";
import busShylock from "@/assets/bus-shylock-combo.webp";
import busOneness from "@/assets/bus-oneness-combo.webp";
import busAutobacz from "@/assets/bus-autobacz-combo.webp";
import brochure1 from "@/assets/brochure-packages.webp";
import brochure2 from "@/assets/brochure-journey.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Emirates Expedition" },
      { name: "description", content: "Group photos, signature touring coaches, and moments from school trips and expeditions across South India." },
      { property: "og:title", content: "Gallery — Emirates Expedition" },
      { property: "og:description", content: "Real moments from real trips." },
      { property: "og:image", content: pathoos },
      { name: "twitter:image", content: pathoos },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: pathoos, alt: "Group at Munnar tea estates", span: "lg:row-span-2" },
  { src: busCandy, alt: "Candy + Emirates combo coach" },
  { src: wildlife, alt: "Wildlife sanctuary group" },
  { src: busShylock, alt: "Shylock + Emirates combo coach" },
  { src: bamboo, alt: "Bamboo forest group", span: "lg:row-span-2" },
  { src: busOneness, alt: "Oneness + Emirates combo coach" },
  { src: brochure1, alt: "Package list brochure" },
  { src: busAutobacz, alt: "Autobacz + Emirates combo coach" },
  { src: brochure2, alt: "Journey beyond imagination brochure" },
];

function GalleryPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="eyebrow">The Gallery</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-wider sm:text-8xl">
          MOMENTS FROM <span className="gradient-gold-text">THE ROAD</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">
          Frames from real expeditions — the buses, the breaks, the brotherhood.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid auto-rows-[280px] grid-cols-2 gap-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-sm border border-border/40 ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {p.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-gold/40 bg-card/40 p-8 text-center">
          <p className="eyebrow">Follow the journey</p>
          <p className="mt-3 font-display text-3xl tracking-wider">
            @EMIRATES_EXPEDITION_
          </p>
          <a
            href="https://www.instagram.com/emirates_expedition_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90"
          >
            View on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
