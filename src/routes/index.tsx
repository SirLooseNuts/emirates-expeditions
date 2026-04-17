import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-dunes.jpg";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { ArrowRight, Compass, Mountain, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emirates Expedition — Cinematic Desert & Adventure Tours in the UAE" },
      { name: "description", content: "Bespoke desert safaris, luxury overnight camps, sandboarding, yacht charters and Dubai city expeditions across the Emirates." },
      { property: "og:title", content: "Emirates Expedition — Cinematic UAE Adventures" },
      { property: "og:description", content: "Where the dunes meet the horizon. Curated journeys for the modern explorer." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Land Cruiser cresting a sand dune at sunset in the Arabian desert"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10">
          <p className="eyebrow animate-fade-in">United Arab Emirates · Est. 2017</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground sm:text-7xl lg:text-8xl">
            Where the dunes meet
            <br />
            the <span className="gradient-gold-text italic">horizon</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Cinematic desert expeditions, private yacht escapes, and bespoke
            adventures crafted for the curious traveler. The Emirates, told as
            it deserves to be.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/tours"
              className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90"
            >
              Explore Expeditions
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 rounded-sm border border-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-gold hover:text-gold"
            >
              Plan a Private Journey
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-8 sm:max-w-2xl">
            <Stat n="120+" label="Expeditions / month" />
            <Stat n="4.9★" label="Guest rating" />
            <Stat n="7yr" label="In the desert" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Slow travel,
              <br />
              <span className="italic gradient-gold-text">bold horizons</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg leading-relaxed text-foreground/85">
              Emirates Expedition is a small collective of guides, drivers, and
              storytellers obsessed with one thing — making sure your time in the
              UAE feels nothing like a tour. Every itinerary is private, every
              moment unhurried, every horizon earned.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <Pillar icon={<Compass size={20} />} title="Curated routes" body="Off the brochure, into the real desert." />
              <Pillar icon={<Mountain size={20} />} title="Private guides" body="Local Emiratis & seasoned expedition leads." />
              <Pillar icon={<Sparkles size={20} />} title="Cinematic detail" body="Every sunset, every silence — choreographed." />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE TOURS */}
      <section className="relative bg-card/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Signature Expeditions</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Six ways to <span className="italic gradient-gold-text">disappear</span>.
              </h2>
            </div>
            <Link to="/tours" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
              View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => <TourCard key={t.slug} tour={t} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-10">
        <div className="flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <blockquote className="mt-8 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          "We've travelled the world, but the night Emirates Expedition arranged
          in the Empty Quarter — silence, stars, a private chef under canvas —
          was the single most beautiful evening of our lives."
        </blockquote>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Sofia & James · London · Overnight Expedition
        </p>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-card via-card to-background p-12 lg:p-20">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Begin your journey</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Tell us your <span className="italic gradient-gold-text">dream day</span>.
              </h2>
              <p className="mt-4 max-w-md text-foreground/80">
                We'll design it, drive it, and make sure you're home with stories
                no algorithm can recommend.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/booking" className="rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90">
                Reserve
              </Link>
              <Link to="/contact" className="rounded-sm border border-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:border-gold hover:text-gold">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold sm:text-4xl">{n}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">{label}</div>
    </div>
  );
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">{icon}</div>
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
