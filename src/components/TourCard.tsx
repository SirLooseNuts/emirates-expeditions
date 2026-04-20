import { Link } from "@tanstack/react-router";
import type { Tour } from "@/data/tours";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function TourCard({ tour }: { tour: Tour }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/tours/$slug"
      params={{ slug: tour.slug }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block overflow-hidden rounded-sm border border-border/60 bg-card transition-all hover:border-gold/60 hover:shadow-glow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={tour.image}
          alt={tour.title}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        
        {/* Dynamic Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
        
        <div className="absolute left-4 top-4">
          <span className="inline-block rounded-sm bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground">
            {tour.category}
          </span>
        </div>

        {/* Reveal Highlights on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 p-6 z-20"
            >
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2 flex items-center gap-2">
                  <MapPin size={10} /> Key Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-sm uppercase tracking-widest text-white/80">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 p-6 z-30">
          <div className="flex items-end justify-between gap-4">
            <motion.div
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-w-0"
            >
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70">
                {tour.duration}
              </p>
              {/* Always-visible location name */}
              <h3 className="font-display text-2xl leading-tight tracking-wider text-foreground uppercase truncate">
                {tour.title.split(' — ')[1] || tour.title.split(' — ')[0]}
              </h3>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 flex items-center gap-1">
                <MapPin size={8} className="shrink-0" />
                {tour.category}
              </p>
            </motion.div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground transition-all group-hover:rotate-45 shadow-glow-sm">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
