import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/group-pathoos-munnar.jpg";
import bambooImg from "@/assets/group-bamboo-forest.jpg";
import wildlife from "@/assets/group-wildlife-sanctuary.webp";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { ArrowRight, Bus, Compass, Mountain, ShieldCheck, Star, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emirates Expedition — Group Tours, School Trips & Expeditions Across South India" },
      { name: "description", content: "A journey of thousand miles. Group expeditions, school trips, college tours and custom packages across Munnar, Wayanad, Coorg, Goa & beyond." },
      { property: "og:title", content: "Emirates Expedition — A Journey of Thousand Miles" },
      { property: "og:description", content: "Signature touring coaches, expert trip leaders, and unforgettable group adventures across South India." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const partners = [
  "SHIVAGIRI SCHOOL", "GHSS THONNAKKAL", "RIET", "ATTINGAL ITI",
  "PONGANAD CAMPUS", "SMS GROUP", "AUTOBACS", "KALKI SARANAM",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Emirates Expedition group at Munnar tea estates with signature touring coach"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10">
          <p className="eyebrow">Est. Kerala · India</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.95] tracking-wider text-foreground sm:text-8xl lg:text-[10rem]">
            A JOURNEY OF
            <br />
            <span className="gradient-gold-text">THOUSAND MILES</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Group expeditions, school trips, college tours and custom packages
            across South India — aboard our signature touring coaches, led by
            seasoned trip captains.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/tours"
              className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90"
            >
              Explore Packages
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 rounded-sm border border-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-gold hover:text-gold"
            >
              Plan a Group Trip
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-6 border-t border-foreground/15 pt-8 sm:grid-cols-3 sm:max-w-2xl">
            <Stat n="200+" label="Trips operated" />
            <Stat n="15K+" label="Happy travelers" />
            <Stat n="4.9★" label="Group rating" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-border/40 bg-gold py-5 text-primary-foreground">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl tracking-widest">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["SCHOOL TRIPS", "★", "GROUP EXPEDITIONS", "★", "COLLEGE TOURS", "★", "DEVOTIONAL", "★", "INDUSTRIAL VISITS", "★", "CUSTOM PACKAGES", "★", "FAMILY TOURS", "★"].map((t, i) => (
                <span key={`${k}-${i}`}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-wider sm:text-6xl">
              UNFORGETTABLE
              <br />
              <span className="gradient-gold-text">JOURNEYS</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg leading-relaxed text-foreground/85">
              Emirates Expedition is a Kerala-based travel collective specialising
              in large-group journeys — school field trips, college fests,
              corporate retreats, and devotional tours. We handle the bus, the
              route, the food, the photos, and the chaos. You bring the energy.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <Pillar icon={<Bus size={20} />} title="Signature coaches" body="Decorated tourist buses built for the long haul." />
              <Pillar icon={<ShieldCheck size={20} />} title="Safe & licensed" body="Trained drivers, trip captains, full insurance." />
              <Pillar icon={<Compass size={20} />} title="Crafted routes" body="Hill stations, beaches, and heritage in one loop." />
            </div>
          </div>
        </div>
      </section>

      {/* MOST DESIRED COLLECTIONS (Carousel) */}
      <section className="relative overflow-hidden bg-card/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow">Recommended</p>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-wider sm:text-6xl uppercase">
                MOST <span className="gradient-gold-text">DESIRED</span> COLLECTIONS.
              </h2>
            </div>
            <Link to="/tours" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
              View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Horizontal Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="group flex w-max gap-6 px-10">
            {/* The carousel track */}
            <div className="flex animate-marquee gap-6 group-hover:[animation-play-state:paused]">
              {[1, 2, 3, 4, 5].flatMap((days) => 
                tours.filter((t) => t.durationInDays === days).slice(0, 2)
              ).map((t, i) => (
                <div key={`${t.slug}-${i}`} className="w-[300px] sm:w-[400px]">
                  <TourCard tour={t} />
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex animate-marquee gap-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[1, 2, 3, 4, 5].flatMap((days) => 
                tours.filter((t) => t.durationInDays === days).slice(0, 2)
              ).map((t, i) => (
                <div key={`${t.slug}-${i}-dup`} className="w-[300px] sm:w-[400px]">
                  <TourCard tour={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative border-y border-border/60 bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-center">Our Partners</p>
          <h2 className="mt-3 text-center font-display text-2xl tracking-wider sm:text-4xl">
            TRUSTED BY <span className="gradient-gold-text">SCHOOLS & COLLEGES</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="flex h-20 items-center justify-center rounded-sm border border-border/60 bg-card/40 px-4 text-center font-display text-sm tracking-widest text-foreground/70 transition-colors hover:border-gold/60 hover:text-gold">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The Gallery</p>
            <h2 className="mt-4 font-display text-3xl tracking-wider sm:text-6xl">
              FROM THE <span className="gradient-gold-text">ROAD</span>.
            </h2>
          </div>
          <Link to="/gallery" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
            See more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[wildlife, bambooImg, hero, bambooImg].map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-sm border border-border/40">
              <img src={src} alt="Group expedition moment" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-10">
        <div className="flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <blockquote className="mt-8 font-display text-2xl leading-tight tracking-wider text-foreground sm:text-4xl lg:text-5xl">
          "WE'VE TAKEN THREE BATCHES OF STUDENTS WITH EMIRATES EXPEDITION. THE
          BUSES, THE GUIDES, THE FOOD — EVERYTHING WAS SPOT ON. THE KIDS STILL
          TALK ABOUT MUNNAR."
        </blockquote>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Faculty Coordinator · GHSS Thonnakkal · KTM 3.0
        </p>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-card via-card to-background p-12 lg:p-20">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Plan a Group Trip</p>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-wider sm:text-6xl">
                <span className="gradient-gold-text">25 OR 250</span>,
                <br />
                WE'VE GOT YOU.
              </h2>
              <p className="mt-4 max-w-md text-foreground/80">
                Tell us your group size, dates, and dream destination. We'll
                build the route, book the coach, and run the trip end-to-end.
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-sm text-foreground/70">
                <Users size={16} className="text-gold" />
                Specialists in groups of 25 – 250
              </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/booking" className="rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90">
                Get a Quote
              </Link>
              <a href="tel:+917012775400" className="rounded-sm border border-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:border-gold hover:text-gold">
                Call +91 70127 75400
              </a>
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
      <div className="font-display text-3xl tracking-wider text-gold sm:text-5xl">{n}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">{label}</div>
    </div>
  );
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-primary-foreground">{icon}</div>
      <h3 className="mt-4 font-display text-xl tracking-wider">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

// keep import used
void Mountain;
