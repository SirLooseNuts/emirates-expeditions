import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import hero from "@/assets/hero-world-landmarks.png";
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
  { name: "Komban", url: "https://www.instagram.com/komban_holidays_official/" },
  { name: "Oneness", url: "https://www.instagram.com/onenesstravels/" },
  { name: "Shylock", url: "https://www.instagram.com/shylock_holidays_official/" },
  { name: "Daivik", url: "https://www.instagram.com/daivik_holidays_official/" },
  { name: "Madrak", url: "https://www.instagram.com/madrak_travel._experts_/" },
  { name: "NORWAY", url: "https://www.instagram.com/norway_travel_premium/" },
  { name: "Bigbro", url: "https://www.instagram.com/bigbro_travelhub_official/" },
  { name: "Platinum", url: "https://www.instagram.com/platinum_holidays_official/" },
  { name: "Squadron", url: "https://www.instagram.com/squadron_travel_hub/" },
  { name: "Godfather", url: "https://www.instagram.com/godfather_holidays_official/" },
  { name: "Zero", url: "https://www.instagram.com/zero_expeditions/" },
  { name: "Squirrel", url: "https://www.instagram.com/squirrel_trails/" },
  { name: "dozando", url: "https://www.instagram.com/dozando_tourcompany/" },
  { name: "Karthikeyan", url: "https://www.instagram.com/karthikeyan_travel_hub/" },
  { name: "Samurai", url: "https://www.instagram.com/samurai_transits/" },
  { name: "Herox", url: "https://www.instagram.com/herox_travelmates/" },
  { name: "Udayon", url: "https://www.instagram.com/udayon_holidays_official/" },
  { name: "Travizio", url: "https://www.instagram.com/travizo_holidays_official/" },
  { name: "Simba", url: "https://www.instagram.com/simba_travel_king/" },
  { name: "Siyon", url: "https://www.instagram.com/siyon_travel_hub_official/" },
  { name: "Pathoos", url: "https://www.instagram.com/pathoos_holidays_official_/" },
  { name: "Tibetan", url: "https://www.instagram.com/tibetan_travel_expedition/" },
  { name: "Oreon", url: "https://www.instagram.com/oreon_travel_experts_official/" },
  { name: "Optimus", url: "https://www.instagram.com/optimus_travelvibes.official/" },
  { name: "Memoir", url: "https://www.instagram.com/memoir_holidays_/" },
  { name: "D Company", url: "https://www.instagram.com/dcompany_travelnexus/" },
  { name: "Kabuka", url: "https://www.instagram.com/kabuka.official/" },
  { name: "Dorado", url: "https://www.instagram.com/dorado_travel_hub_official_/" },
  { name: "Foreign", url: "https://www.instagram.com/foreign_travel_expedition/" },
  { name: "RedBull", url: "https://www.instagram.com/redbull_holidays_official/" },
  { name: "Toxic", url: "https://www.instagram.com/toxic.travel_hub/" },
  { name: "Maddox", url: "https://www.instagram.com/_maddox_travel_hub_official_/" },
  { name: "Guardian", url: "https://www.instagram.com/guardian_travelmates_official/" },
  { name: "Salamz", url: "https://www.instagram.com/salamztravelleisure/" },
  { name: "Captain", url: "https://www.instagram.com/_captain_holidays/" },
  { name: "Turbo", url: "https://www.instagram.com/turbo_travel_hub_/" },
];

function Home() {
  const partnersRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ 
    coreX: 0, coreY: 0, 
    midX: 0, midY: 0, 
    tailX: 0, tailY: 0,
    targetX: 0, targetY: 0, 
    hasMoved: false 
  });
  const hue = useRef(51);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const renderLoop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      if (mousePos.current.hasMoved) {
        // Lerp for slime effect (3 chained tracking points)
        mousePos.current.coreX += (mousePos.current.targetX - mousePos.current.coreX) * 0.2;
        mousePos.current.coreY += (mousePos.current.targetY - mousePos.current.coreY) * 0.2;

        mousePos.current.midX += (mousePos.current.coreX - mousePos.current.midX) * 0.12;
        mousePos.current.midY += (mousePos.current.coreY - mousePos.current.midY) * 0.12;

        mousePos.current.tailX += (mousePos.current.midX - mousePos.current.tailX) * 0.06;
        mousePos.current.tailY += (mousePos.current.midY - mousePos.current.tailY) * 0.06;
        
        // Cycle hue randomly through 12 million colors
        hue.current = (hue.current + dt * 0.05) % 360;

        if (partnersRef.current) {
          const cards = partnersRef.current.querySelectorAll('.partner-card');
          for (const card of cards) {
            if (card instanceof HTMLElement) {
              const rect = card.getBoundingClientRect();
              
              card.style.setProperty("--core-x", `${mousePos.current.coreX - rect.left}px`);
              card.style.setProperty("--core-y", `${mousePos.current.coreY - rect.top}px`);
              card.style.setProperty("--mid-x", `${mousePos.current.midX - rect.left}px`);
              card.style.setProperty("--mid-y", `${mousePos.current.midY - rect.top}px`);
              card.style.setProperty("--tail-x", `${mousePos.current.tailX - rect.left}px`);
              card.style.setProperty("--tail-y", `${mousePos.current.tailY - rect.top}px`);
              card.style.setProperty("--glow-hue", `${hue.current}`);
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mousePos.current.targetX = e.clientX;
    mousePos.current.targetY = e.clientY;
    if (!mousePos.current.hasMoved) {
      mousePos.current.coreX = e.clientX;
      mousePos.current.coreY = e.clientY;
      mousePos.current.midX = e.clientX;
      mousePos.current.midY = e.clientY;
      mousePos.current.tailX = e.clientX;
      mousePos.current.tailY = e.clientY;
      mousePos.current.hasMoved = true;
    }
  };
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="World landmarks collage featuring Taj Mahal, Eiffel Tower, and Big Ben"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:px-10">
          <p className="eyebrow">Est. Kerala · India</p>
          <h1 className="mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-wider text-foreground sm:text-8xl lg:text-[10rem]">
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
              className="group inline-flex min-h-[48px] items-center gap-3 rounded-sm bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90 sm:px-8"
            >
              Explore Packages
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex min-h-[48px] items-center gap-3 rounded-sm border border-foreground/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-gold hover:text-gold sm:px-8"
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
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:px-10">
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
      <section className="relative overflow-hidden bg-card/30 py-16 sm:py-32">
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
            <div className="flex animate-marquee-left gap-6 group-hover:[animation-play-state:paused]">
              {[1, 2, 3, 4, 5].flatMap((days) => 
                tours.filter((t) => t.durationInDays === days).slice(0, 2)
              ).map((t, i) => (
                <div key={`${t.slug}-${i}`} className="w-[300px] sm:w-[400px]">
                  <TourCard tour={t} />
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex animate-marquee-left gap-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
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
      <section className="relative border-y border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mt-3 text-center font-display text-2xl tracking-wider sm:text-4xl uppercase">
            OUR TRUSTED <span className="gradient-gold-text">TRAVEL PARTNERS</span>
          </h2>
        </div>
        <div 
          ref={partnersRef} 
          onMouseMove={handleMouseMove} 
          className="group/bento mt-12 flex flex-col gap-6 overflow-hidden"
        >
          {Array.from({ length: 4 }).map((_, rowIndex) => {
            const rowPartners = partners.slice(rowIndex * 9, (rowIndex + 1) * 9);
            const isLeftToRight = rowIndex % 2 === 0;

            return (
              <div key={rowIndex} className="relative flex w-full overflow-hidden">
                <div className="group flex w-max gap-6">
                  {/* Track */}
                  <div className={`flex gap-6 ${isLeftToRight ? 'animate-marquee-right' : 'animate-marquee-left'} group-hover:[animation-play-state:paused]`}>
                      {rowPartners.map((p) => (
                        <a 
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={p.name} 
                          className="partner-card relative flex h-32 w-64 shrink-0 items-center justify-center rounded-sm bg-border/40 px-4 text-center font-display text-xl tracking-widest text-foreground/70 transition-colors hover:text-gold"
                        >
                          {/* Border Glow */}
                          <div 
                            className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
                            style={{
                              background: `
                                radial-gradient(120px circle at var(--core-x) var(--core-y), hsla(var(--glow-hue, 51), 100%, 65%, 0.9), transparent 100%),
                                radial-gradient(60px circle at var(--tail-x) var(--tail-y), hsla(calc(var(--glow-hue, 51) + 60), 100%, 55%, 0.7), transparent 100%)
                              `,
                            }}
                          />
                          {/* Inner background */}
                          <div className="absolute inset-[1px] z-0 rounded-sm bg-[#09090b]" />
                          
                          {/* Inner Glow */}
                          <div 
                            className="pointer-events-none absolute inset-[1px] z-10 rounded-sm opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
                            style={{
                              background: `
                                radial-gradient(120px circle at var(--core-x) var(--core-y), hsla(var(--glow-hue, 51), 100%, 65%, 0.3), transparent 100%),
                                radial-gradient(60px circle at var(--tail-x) var(--tail-y), hsla(calc(var(--glow-hue, 51) + 60), 100%, 55%, 0.2), transparent 100%)
                              `,
                            }}
                          />
                          
                          <span className="relative z-20">{p.name}</span>
                        </a>
                      ))}
                    </div>
                    {/* Duplicate for infinite effect */}
                    <div className={`flex gap-6 ${isLeftToRight ? 'animate-marquee-right' : 'animate-marquee-left'} group-hover:[animation-play-state:paused]`} aria-hidden="true">
                      {rowPartners.map((p) => (
                        <a 
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={`${p.name}-dup`} 
                          className="partner-card relative flex h-32 w-64 shrink-0 items-center justify-center rounded-sm bg-border/40 px-4 text-center font-display text-xl tracking-widest text-foreground/70 transition-colors hover:text-gold"
                        >
                          {/* Border Glow */}
                          <div 
                            className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
                            style={{
                              background: `
                                radial-gradient(120px circle at var(--core-x) var(--core-y), hsla(var(--glow-hue, 51), 100%, 65%, 0.9), transparent 100%),
                                radial-gradient(60px circle at var(--tail-x) var(--tail-y), hsla(calc(var(--glow-hue, 51) + 60), 100%, 55%, 0.7), transparent 100%)
                              `,
                            }}
                          />
                          {/* Inner background */}
                          <div className="absolute inset-[1px] z-0 rounded-sm bg-[#09090b]" />
                          
                          {/* Inner Glow */}
                          <div 
                            className="pointer-events-none absolute inset-[1px] z-10 rounded-sm opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
                            style={{
                              background: `
                                radial-gradient(120px circle at var(--core-x) var(--core-y), hsla(var(--glow-hue, 51), 100%, 65%, 0.3), transparent 100%),
                                radial-gradient(60px circle at var(--tail-x) var(--tail-y), hsla(calc(var(--glow-hue, 51) + 60), 100%, 55%, 0.2), transparent 100%)
                              `,
                            }}
                          />
                          
                          <span className="relative z-20">{p.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:px-10">
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
      <section className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-32 lg:px-10">
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
      <section className="relative mx-auto max-w-7xl px-6 pb-16 sm:pb-32 lg:px-10">
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
              <Link to="/booking" className="inline-flex min-h-[48px] items-center rounded-sm bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 sm:px-8">
                Get a Quote
              </Link>
              <a href="tel:+917012775400" className="inline-flex min-h-[48px] items-center rounded-sm border border-foreground/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:border-gold hover:text-gold sm:px-8">
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
