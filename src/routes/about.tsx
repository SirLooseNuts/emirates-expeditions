import { createFileRoute } from "@tanstack/react-router";
import bus from "@/assets/tour-2day-munnar.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emirates Expedition" },
      {
        name: "description",
        content:
          "Kerala-based group expedition specialists running school trips, college tours and custom packages across South India.",
      },
      { property: "og:title", content: "About — Emirates Expedition" },
      { property: "og:description", content: "Our story, our coaches, our crew." },
      { property: "og:image", content: bus },
      { name: "twitter:image", content: bus },
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
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wider sm:text-8xl">
              BUILT FOR <span className="gradient-gold-text">THE GROUP</span>.
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                Emirates Expedition began as a small Thattathumala-based crew running weekend
                hill-station trips for friends. Word spread. Schools called. Then colleges. Then
                corporates.
              </p>
              <p>
                Today we operate a fleet of decorated touring coaches across Kerala, Karnataka,
                Tamil Nadu and Goa — handling everything from 25-seater school field trips to
                250-strong college fest charters.
              </p>
              <p>
                We're proud of two things: our coaches arrive on time, and our guides know the route
                by heart. Everything else is just travel.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="sticky top-32 overflow-hidden rounded-sm border border-border/60">
              <img
                src={bus}
                alt="Signature touring coach"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">By the numbers</p>
          <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["7+", "Years on the road"],
              ["25+", "Coach partners"],
              ["15,000+", "Travelers hosted"],
              ["4.9★", "Group rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl tracking-wider text-gold lg:text-7xl">
                  {n}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-32 lg:px-10">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-wider sm:text-6xl">
          SEVEN KINDS OF <span className="gradient-gold-text">JOURNEY</span>.
        </h2>
        <div className="mt-16 space-y-12">
          {[
            {
              n: "01",
              t: "School Trips",
              b: "Field expeditions for KG to +2 with chaperoned coaches, dietary planning, and full parental briefings.",
            },
            {
              n: "02",
              t: "College Tours",
              b: "Department trips, batch farewells and fest charters — designed for energy and built for safety.",
            },
            {
              n: "03",
              t: "Industrial Visits",
              b: "Curated company visits, factory tours and academic logistics across South India.",
            },
            {
              n: "04",
              t: "Devotional Trips",
              b: "Sabarimala, Tirupati, Velankanni and circuit pilgrimages with experienced devotional guides.",
            },
            {
              n: "05",
              t: "Family Tours",
              b: "Multi-generation family vacations — hill stations, beaches, and heritage at a comfortable pace.",
            },
            {
              n: "06",
              t: "Vacation Activities",
              b: "Adventure days, team-building outings and short-haul vacation breaks.",
            },
            {
              n: "07",
              t: "Custom Packages",
              b: "Anything outside this list — tell us what you're imagining and we'll build it.",
            },
          ].map((v) => (
            <div key={v.n} className="grid gap-6 border-t border-border/60 pt-10 lg:grid-cols-12">
              <div className="font-mono text-sm tracking-[0.25em] text-gold lg:col-span-2">
                {v.n}
              </div>
              <h3 className="font-display text-3xl tracking-wider lg:col-span-3">
                {v.t.toUpperCase()}
              </h3>
              <p className="text-lg text-foreground/80 lg:col-span-7">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
