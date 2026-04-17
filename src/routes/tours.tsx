import { createFileRoute } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Expeditions — Emirates Expedition" },
      { name: "description", content: "Browse our signature desert safaris, luxury overnight camps, sandboarding, yacht charters and Dubai city expeditions." },
      { property: "og:title", content: "Tours & Expeditions — Emirates Expedition" },
      { property: "og:description", content: "Curated desert and city journeys across the UAE." },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="eyebrow">All Expeditions</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          A catalogue of <span className="italic gradient-gold-text">horizons</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">
          From four-hour dune chases to multi-day Empty Quarter expeditions —
          every itinerary is private, every guide hand-picked.
        </p>
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
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Don't see your <span className="italic gradient-gold-text">dream day</span>?
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg text-foreground/80">
                We design fully private itineraries — multi-day desert crossings,
                helicopter transfers, photographer-led safaris, and corporate
                retreats. Tell us what you're imagining and we'll build it.
              </p>
              <a
                href="/booking"
                className="mt-8 inline-block rounded-sm border border-gold/60 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-primary-foreground"
              >
                Request a custom quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
