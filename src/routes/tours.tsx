import { createFileRoute } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import hero from "@/assets/group-pathoos-munnar.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Emirates Expedition" },
      { name: "description", content: "Browse school trips (KTM 3.0, KTM 2.0), group expeditions, college tours and custom packages across Munnar, Wayanad, Coorg, Goa, Hampi & more." },
      { property: "og:title", content: "Tour Packages — Emirates Expedition" },
      { property: "og:description", content: "School trips, group expeditions, college tours and custom packages across South India." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: ToursPage,
});

const categories = [
  { title: "School Trips", body: "KTM 3.0, KTM 2.0 & custom academic expeditions with chaperoned coaches and licensed trip leads." },
  { title: "Group Expeditions", body: "College fests, friend groups, and corporate retreats — 25 to 250 travelers, fully managed." },
  { title: "Custom Packages", body: "Devotional tours, family vacations, industrial visits — built around your dates and budget." },
];

function ToursPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="eyebrow">All Packages</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-wider sm:text-8xl">
          A CATALOGUE OF <span className="gradient-gold-text">JOURNEYS</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">
          From single-day Wayanad breaks to five-day Goa-Dandeli-Hampi loops —
          every package is operated by Emirates Expedition end-to-end.
        </p>
      </section>

      {/* Category strip */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-sm border border-border/60 bg-card/40 p-8">
              <h3 className="font-display text-2xl tracking-wider text-gold">{c.title.toUpperCase()}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => <TourCard key={t.slug} tour={t} />)}
        </div>
      </section>

      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Bespoke</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-wider sm:text-6xl">
                DON'T SEE YOUR <span className="gradient-gold-text">ROUTE</span>?
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg text-foreground/80">
                We design fully custom itineraries — multi-state student tours,
                pilgrimage circuits, photographer-led trips, and fest charters.
                Tell us what you're imagining and we'll build it.
              </p>
              <a
                href="/booking"
                className="mt-8 inline-block rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90"
              >
                Request a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
