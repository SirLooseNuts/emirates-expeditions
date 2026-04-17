import { createFileRoute } from "@tanstack/react-router";
import dune from "@/assets/tour-dune.jpg";
import camp from "@/assets/tour-camp.jpg";
import camel from "@/assets/tour-camel.jpg";
import city from "@/assets/tour-city.jpg";
import sandboard from "@/assets/tour-sandboard.jpg";
import sea from "@/assets/tour-sea.jpg";
import quad from "@/assets/gallery-quad.jpg";
import falcon from "@/assets/gallery-falcon.jpg";
import feast from "@/assets/gallery-feast.jpg";
import hero from "@/assets/hero-dunes.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Emirates Expedition" },
      { name: "description", content: "A cinematic look at our desert safaris, luxury camps, and adventure tours across the UAE." },
      { property: "og:title", content: "Gallery — Emirates Expedition" },
      { property: "og:description", content: "Moments captured across the dunes, the city, and the sea." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, alt: "Land Cruiser at sunset", span: "lg:row-span-2" },
  { src: camp, alt: "Luxury desert camp" },
  { src: camel, alt: "Camel caravan" },
  { src: dune, alt: "Dune bashing" },
  { src: falcon, alt: "Falcon at sunset", span: "lg:row-span-2" },
  { src: sandboard, alt: "Sandboarding" },
  { src: feast, alt: "Desert feast" },
  { src: city, alt: "Dubai skyline" },
  { src: quad, alt: "Quad biking" },
  { src: sea, alt: "Yacht at Burj Al Arab" },
];

function GalleryPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="eyebrow">Field Notes</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          Moments, <span className="italic gradient-gold-text">unstaged</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">
          Frames from real expeditions — captured by our guides between the
          quiet moments and the fast ones.
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
      </section>
    </div>
  );
}
