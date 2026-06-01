import { createFileRoute, Link } from "@tanstack/react-router";
import SplashCursor from "@/components/SplashCursor";
import { getStoredTours, getStoredPhotos, getStoredReviews } from "@/lib/storage";
import { TourCard } from "@/components/TourCard";
import { ArrowRight, Bus, Compass, Mountain, ShieldCheck, Star, Users, ChevronLeft, ChevronRight, Plus, Minus, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Brand aligned real photography assets
import pathoosGroup from "@/assets/group-pathoos-munnar.jpg";
import shylockBus1 from "@/assets/shylock-bus-1.jpg";
import onenessBus from "@/assets/bus-oneness-combo.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emirates Expedition — Group Tours, School Trips & Expeditions Across South India" },
      { name: "description", content: "A journey of thousand miles. Group expeditions, school trips, college tours and custom packages across Munnar, Wayanad, Coorg, Goa & beyond." },
      { property: "og:title", content: "Emirates Expedition — A Journey of Thousand Miles" },
      { property: "og:description", content: "Signature touring coaches, expert trip leaders, and unforgettable group adventures across South India." },
      { property: "og:image", content: shylockBus1 },
      { name: "twitter:image", content: shylockBus1 },
    ],
  }),
  component: Home,
});

const partners = [
  { name: "Komban", url: "https://www.instagram.com/komban_holidays_official/" },
  { name: "Oneness", url: "https://www.instagram.com/onenesstravels/" },
  { name: "Shylock", url: "https://www.instagram.com/shylock_holidays_official/" },
  { name: "Zero", url: "https://www.instagram.com/zero_expeditions/" },
  { name: "Daivik", url: "https://www.instagram.com/daivik_holidays_official/" },
  { name: "Madrak", url: "https://www.instagram.com/madrak_travel._experts_/" },
  { name: "NORWAY", url: "https://www.instagram.com/norway_travel_premium/" },
  { name: "Bigbro", url: "https://www.instagram.com/bigbro_travelhub_official/" },
  { name: "Platinum", url: "https://www.instagram.com/platinum_holidays_official/" },
  { name: "Squadron", url: "https://www.instagram.com/squadron_travel_hub/" },
  { name: "Godfather", url: "https://www.instagram.com/godfather_holidays_official/" },
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
  { name: "Singam", url: "https://www.instagram.com/singamholidays/" },
  { name: "Khaleefa", url: "https://www.instagram.com/_khaleefa_official___/" },
  { name: "Shaimas", url: "https://www.instagram.com/shaimas_travelhub_official/" },
];

function Home() {
  const toursList = getStoredTours();
  const galleryPhotos = getStoredPhotos().slice(0, 8);
  const approvedReviews = getStoredReviews().filter((r) => r.approved);

  const [activeReview, setActiveReview] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroImages = [
    { src: pathoosGroup, alt: "Student group posing in tea gardens of Munnar, Kerala" },
    { src: shylockBus1, alt: "Premium customized Shylock coach on South India roads" },
    { src: onenessBus, alt: "Oneness signature tourist coach for school and college expeditions" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    if (approvedReviews.length <= 1) return;
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % approvedReviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [approvedReviews.length]);

  const faqs = [
    {
      q: "What is the capacity of the buses available in your fleet?",
      a: "We offer a diverse fleet of premium tourist coaches ranging from 12-seater luxury vans to 17, 26, 40, and 53-seater air-conditioned executive buses, all customized with sound systems and signature aesthetic designs."
    },
    {
      q: "Do you provide food and accommodation arrangements for large school/college groups?",
      a: "Yes, we engineer complete itineraries including curated stays at trusted premium resorts/villas and hygiene-certified dining plans (breakfast, lunch, dinner) tailored to your group's food preferences."
    },
    {
      q: "Are the trips and transport fully insured and compliant?",
      a: "Absolutely. All our tourist coaches have active permits, valid national tourism licenses, comprehensive insurance coverage, and are driven by verified and experienced professional captains."
    },
    {
      q: "What is your payment structure for reservation and advance booking?",
      a: "To secure the coaches and bookings, we require a standard 30% advance payment upon contract signing. The remaining amount is structured into milestones before and during the trip operation."
    },
    {
      q: "What is the cancellation policy for student or group tours?",
      a: "Cancellations made 15 days or more prior to departure receive a full refund of the advance (minus booking charges). Partial refunds are applicable for shorter notices depending on hotel contract commitments."
    }
  ];

  return (
    <>
      <SplashCursor
        DENSITY_DISSIPATION={2}
        VELOCITY_DISSIPATION={9}
        PRESSURE={0.05}
        CURL={17}
        SPLAT_RADIUS={0.13}
        SPLAT_FORCE={2000}
        COLOR_UPDATE_SPEED={30}
        SHADING={false}
        RAINBOW_MODE
        targetSelector=".partner-card"
      />
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Animated Slide Background */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHeroIndex}
            src={heroImages[currentHeroIndex].src}
            alt={heroImages[currentHeroIndex].alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-background/50" />

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
                toursList.filter((t) => t.durationInDays === days).slice(0, 2)
              ).map((t, i) => (
                <div key={`${t.slug}-${i}`} className="w-[300px] sm:w-[400px]">
                  <TourCard tour={t} />
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex animate-marquee-left gap-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[1, 2, 3, 4, 5].flatMap((days) => 
                toursList.filter((t) => t.durationInDays === days).slice(0, 2)
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
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">Our Network</p>
              <h2 className="mt-3 font-display text-2xl tracking-wider sm:text-4xl uppercase">
                OUR TRUSTED <span className="gradient-gold-text">TRAVEL PARTNERS</span>
              </h2>
            </div>
            <Link to="/partners" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
              View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div
          className="group/bento flex flex-col gap-6 overflow-hidden"
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
        
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryPhotos.map((p, i) => (
            <Link to="/gallery" key={i} className="group relative aspect-square overflow-hidden rounded-sm border border-border/40 block">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 z-10" />
              <div className="absolute inset-x-0 bottom-0 p-3 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 z-20">
                <p className="font-mono text-[7px] uppercase tracking-widest text-gold mb-0.5">{p.category}</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-white truncate">{p.alt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-32 lg:px-10 border-y border-white/5 bg-card/10 my-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,155,90,0.02),transparent_70%)]" />
        
        {approvedReviews.length > 0 ? (
          <div className="relative min-h-[220px] flex flex-col justify-between">
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: approvedReviews[activeReview]?.rating || 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="my-6"
              >
                <blockquote className="font-display text-xl leading-tight tracking-wider text-foreground sm:text-3xl lg:text-4xl max-w-4xl mx-auto uppercase">
                  "{approvedReviews[activeReview].quote}"
                </blockquote>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  — {approvedReviews[activeReview].author} · <span className="text-gold">{approvedReviews[activeReview].location}</span> · {approvedReviews[activeReview].tripType}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Testimonials Navigation Dots */}
            {approvedReviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {approvedReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReview === idx ? "w-6 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center font-mono text-xs uppercase tracking-widest text-white/40 py-8">
            No testimonials loaded.
          </div>
        )}
      </section>

      {/* FAQS SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-28 lg:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow">Got Questions?</p>
          <h2 className="mt-4 font-display text-3xl tracking-wider sm:text-5xl uppercase">
            FREQUENTLY ASKED <span className="gradient-gold-text">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border border-border/60 bg-card/20 rounded-sm overflow-hidden transition-all duration-300 hover:border-gold/30"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-display text-lg tracking-wider text-white uppercase flex items-center gap-4">
                    <span className="font-mono text-xs text-gold">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <div className="text-gold border border-gold/20 rounded-sm p-1">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 font-mono text-xs text-muted-foreground leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
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
              <a 
                href={`tel:${getStoredSettings().phone1.replace(/\s+/g, "")}`} 
                className="inline-flex min-h-[48px] items-center rounded-sm border border-foreground/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:border-gold hover:text-gold sm:px-8"
              >
                Call {getStoredSettings().phone1}
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
