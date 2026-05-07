import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  MapPin, 
  Tag, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft,
  Calendar,
  Share2,
  Heart,
  ChevronDown,
  Info
} from "lucide-react";
import { useState, useEffect } from "react";

// Dynamic content utilities
function getRegionsFromTitle(title: string): string[] {
  const t = title.toLowerCase();
  const foundRegions: string[] = [];
  
  if (t.includes("munnar")) foundRegions.push("munnar");
  if (t.includes("wayanad") || t.includes("wayand")) foundRegions.push("wayanad");
  if (t.includes("ooty")) foundRegions.push("ooty");
  if (t.includes("kodaikanal") || t.includes("kodai")) foundRegions.push("kodaikanal");
  if (t.includes("coorg")) foundRegions.push("coorg");
  if (t.includes("mysore") || t.includes("myosre")) foundRegions.push("mysore");
  if (t.includes("goa")) foundRegions.push("goa");
  if (t.includes("alapuzha") || t.includes("alleppey") || t.includes("house boat")) foundRegions.push("alleppey");

  return foundRegions.length > 0 ? foundRegions : ["default"];
}

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = tours.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  component: TourDetail,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

function TourDetail() {
  const tour = Route.useLoaderData();
  const [activeDay, setActiveDay] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const regions = getRegionsFromTitle(tour.title);

  const generateDynamicItinerary = () => {
    return Array.from({ length: tour.durationInDays }).map((_, idx) => {
      const regionForDay = regions[idx % regions.length];
      const regionName = regionForDay === "default" ? "Local" : regionForDay.charAt(0).toUpperCase() + regionForDay.slice(1);
      return {
        day: idx + 1,
        title: `Explore ${regionName} Highlights`,
        activities: [
          `Morning arrival and check-in at ${regionName}`,
          `Visit local top attractions and scenic spots`,
          `Enjoy authentic regional cuisine for lunch`,
          `Evening leisure time and sunset viewpoints`,
          `Dinner and overnight stay in ${regionName}`
        ]
      };
    });
  };

  const itinerary = tour.itinerary[0]?.title.toLowerCase().includes("best spots") 
    ? generateDynamicItinerary() 
    : tour.itinerary;

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-gold selection:text-primary-foreground">
      {/* Stickly Mobile Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden p-4 bg-background/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between">
        <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-gold mb-1">Lead Expedition</p>
            <p className="text-sm font-bold tracking-widest text-white uppercase">{tour.duration}</p>
        </div>
        <Link
          to="/booking"
          search={{ tour: tour.slug }}
          className="bg-gold px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm active:scale-95 transition-all"
        >
          Book Now
        </Link>
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={tour.image} 
            alt={tour.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-6">
                <span className="rounded-full border border-gold/50 bg-gold/10 px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold backdrop-blur-md">
                  {tour.category}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-9xl tracking-tight leading-[0.85] text-white max-w-5xl mx-auto uppercase drop-shadow-2xl">
                {tour.title.split(' — ')[0]} <br />
                <span className="gradient-gold-text italic lowercase font-light drop-shadow-none">
                   {tour.title.split(' — ')[1] || ""}
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed tracking-wide"
              >
                {tour.blurb}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Glass Stats Bar */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Expedition Span</span>
                <span className="text-sm font-bold text-white tracking-widest uppercase">{tour.duration}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Tour Status</span>
                <span className="text-sm font-bold text-gold tracking-widest uppercase">Booking Open</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white/30" size={24} />
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-12 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-8"
          >
            <motion.div variants={itemVariants}>
                <span className="eyebrow block mb-4">The Narrative</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl tracking-tighter uppercase mb-10 leading-none">
                    Unfolding the <br /> <span className="gradient-gold-text">Emirates Difference</span>
                </h2>
                <div className="space-y-6">
                    {tour.fullDescription.split('. ').map((para, i) => (
                        <p key={i} className="text-xl leading-relaxed text-foreground/70 font-light">
                            {para.trim()}{para.endsWith('.') ? '' : '.'}
                        </p>
                    ))}
                </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-16 grid gap-8 sm:grid-cols-2">
                <div className="group rounded-2xl border border-border/40 bg-card/30 p-8 transition-all hover:bg-card/50 hover:border-gold/30">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                        <Info size={24} />
                    </div>
                    <h3 className="font-display text-xl tracking-tight mb-2 uppercase">Signature Transport</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Travel in our signature high-fidelity coaches featuring custom lighting, premium sound, and ergonomic reclining seats.
                    </p>
                </div>
                <div className="group rounded-2xl border border-border/40 bg-card/30 p-8 transition-all hover:bg-card/50 hover:border-gold/30">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                        <CheckCircle2 size={24} />
                    </div>
                    <h3 className="font-display text-xl tracking-tight mb-2 uppercase">Curated Stays</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Hand-picked resorts and villas that maintain our standards of safety, hygiene, and aesthetic appeal.
                    </p>
                </div>
            </motion.div>
          </motion.div>

          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 sticky top-24"
          >
            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 backdrop-blur-sm overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all duration-700" />
              <h3 className="font-display text-2xl tracking-wider text-gold mb-8 flex items-center justify-between">
                HIGHLIGHTS
                <Tag size={18} className="opacity-50" />
              </h3>
              <ul className="space-y-6">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold text-[10px] font-mono group-hover/item:bg-gold group-hover/item:text-primary-foreground transition-all">
                        0{i + 1}
                    </div>
                    <span className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/80 group-hover/item:text-gold transition-colors">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-10 border-t border-gold/10">

                <Link
                to="/booking"
                search={{ tour: tour.slug }}
                className="flex w-full items-center justify-center gap-4 rounded-xl bg-gold py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:scale-[1.02] transition-all shadow-glow-sm"
                >
                Start Booking <ArrowRight size={18} />
                </Link>
                <p className="mt-4 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Available for Calls & Meets
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Modern Itinerary Section */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-32 border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,155,90,0.03),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold/60">Chronicle</span>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-7xl uppercase leading-none">
                THE <span className="gradient-gold-text">EXPEDITION</span> <br /> TIMELINE
              </h2>
            </div>
            <div className="hidden md:block">
                <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
                    Expertly paced for <br /> discovery & comfort
                </p>
            </div>
          </div>

          <div className="relative space-y-12">
            {/* Main Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/10 to-transparent" />
            
            {itinerary.map((day, idx) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative grid md:grid-cols-2 gap-12 ${idx % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 z-20 h-3 w-3 -translate-x-1/2 rounded-full border border-gold/50 bg-background shadow-[0_0_15px_rgba(196,155,90,0.5)]" />
                
                <div className={`md:flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right text-left pl-14 md:pl-0' : 'md:col-start-2 text-left pl-14 md:pl-0'}`}>
                    <div className="flex items-center gap-4 mb-3 md:contents">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/60">Day 0{day.day}</span>
                        <div className="h-px bg-gold/20 flex-1 md:hidden" />
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl tracking-tighter text-white uppercase mb-6">{day.title}</h3>
                </div>

                <div className={`pl-14 md:pl-0 ${idx % 2 === 0 ? 'md:col-start-2' : 'md:text-right md:pr-10 md:flex md:flex-col md:items-end'}`}>
                    <ul className="space-y-4">
                        {day.activities.map((act, i) => (
                            <li key={i} className="group/act flex items-start gap-4 text-foreground/70 transition-colors hover:text-white">
                                <div className="mt-1 flex-shrink-0 opacity-20 transition-opacity group-hover/act:opacity-100">
                                    <ArrowRight size={14} className="text-gold" />
                                </div>
                                <span className="text-base font-light tracking-wide leading-snug">{act}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Provisions & Policy (Inclusions/Exclusions) */}
      <section className="bg-card/30 border-y border-white/5 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gold/20 bg-gold/5 p-12 backdrop-blur-xl"
            >
              <h3 className="font-display text-2xl md:text-3xl tracking-wider text-gold mb-10 flex items-center gap-4">
                <CheckCircle2 className="text-gold" size={32} />
                THE PROVISIONS
              </h3>
              <ul className="grid gap-6 sm:grid-cols-1">
                {tour.inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold tracking-[0.1em] uppercase text-white/90">
                    <div className="h-1 w-4 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
            >
              <h3 className="font-display text-2xl md:text-3xl tracking-wider text-white/50 mb-10 flex items-center gap-4 uppercase font-light">
                <XCircle className="text-white/20" size={32} />
                Outside Scope
              </h3>
              <ul className="grid gap-6 sm:grid-cols-1">
                {tour.exclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-light tracking-[0.1em] uppercase text-white/40 italic">
                    <div className="h-px w-4 bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bespoke Conclusion (CTA) */}
      <section className="relative overflow-hidden py-40 px-6 lg:px-10">
        <div className="absolute inset-0 opacity-20">
            <img src={tour.image} alt="Background bg" className="w-full h-full object-cover blur-3xl scale-110" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <span className="eyebrow block mb-8">Reservations</span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.8] text-white uppercase mb-12">
                    BEGIN YOUR <br />
                    <span className="gradient-gold-text italic font-light lowercase">Emirates odyssey</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        to="/booking"
                        search={{ tour: tour.slug }}
                        className="group flex items-center justify-center gap-6 bg-gold px-14 py-6 text-sm font-bold uppercase tracking-[0.4em] text-primary-foreground hover:bg-white transition-all shadow-[0_20px_50px_rgba(196,155,90,0.3)]"
                    >
                        Start Booking <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                    <a href="tel:+1234567890" className="text-white/60 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-[0.4em] border-b border-white/10 pb-1">
                        Consult with an expert
                    </a>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="bg-background py-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex justify-between items-center">
            <Link to="/tours" className="flex items-center gap-3 text-gold hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.3em] group">
                <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to Catalogue
            </Link>
            <div className="flex gap-6">
                <button className="text-white/30 hover:text-white transition-colors"><Share2 size={18} /></button>
                <button className="text-white/30 hover:text-gold transition-colors"><Heart size={18} /></button>
            </div>
        </div>
      </div>
    </div>
  );
}
