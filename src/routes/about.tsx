import { createFileRoute } from "@tanstack/react-router";
import camp from "@/assets/tour-camp.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emirates Expedition" },
      { name: "description", content: "A small collective of Emirati guides and expedition leads crafting cinematic, private journeys across the UAE." },
      { property: "og:title", content: "About — Emirates Expedition" },
      { property: "og:description", content: "Our story, our guides, our quiet obsession with the desert." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Born of the <span className="italic gradient-gold-text">desert</span>.
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                Emirates Expedition began in 2017 as three friends — a Bedouin
                guide, an off-road driver, and a photographer — sharing a single
                Land Cruiser and a quiet frustration with packaged tours.
              </p>
              <p>
                Today we're a collective of fifteen guides, drivers, and chefs
                operating across Dubai, Abu Dhabi, and the Empty Quarter. We've
                stayed deliberately small. Every booking is touched by a real
                human; every itinerary is built from scratch.
              </p>
              <p>
                We believe the Emirates deserves to be told slowly — through
                silence, light, and the kind of detail that only comes from
                people who grew up here.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="sticky top-32 overflow-hidden rounded-sm border border-border/60">
              <img src={camp} alt="Luxury desert camp" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">By the numbers</p>
          <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["7", "Years operating"],
              ["15", "Guides & crew"],
              ["8,400+", "Guests hosted"],
              ["4.9★", "Average rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl text-gold lg:text-6xl">{n}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-32 lg:px-10">
        <p className="eyebrow">Values</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Three things we won't <span className="italic gradient-gold-text">compromise</span>.
        </h2>
        <div className="mt-16 space-y-12">
          {[
            { n: "01", t: "Privacy", b: "Every expedition is private. No shared vehicles, no group dinners, no rushed timelines." },
            { n: "02", t: "Local craft", b: "Our guides are Emirati. Our chefs are Emirati. The story you hear is the real one." },
            { n: "03", t: "Quiet luxury", b: "We don't do logos on bathrobes. We do exactly the right cushion in exactly the right place at exactly sunset." },
          ].map((v) => (
            <div key={v.n} className="grid gap-6 border-t border-border/60 pt-10 lg:grid-cols-12">
              <div className="font-mono text-sm tracking-[0.25em] text-gold lg:col-span-2">{v.n}</div>
              <h3 className="font-display text-3xl lg:col-span-3">{v.t}</h3>
              <p className="text-lg text-foreground/80 lg:col-span-7">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
