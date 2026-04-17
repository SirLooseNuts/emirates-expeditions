import { Link } from "@tanstack/react-router";
import type { Tour } from "@/data/tours";
import { ArrowUpRight } from "lucide-react";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to="/booking"
      search={{ tour: tour.slug }}
      className="group relative block overflow-hidden rounded-sm border border-border/60 bg-card transition-all hover:border-gold/60 hover:shadow-glow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="inline-block rounded-sm bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground">
            {tour.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl leading-tight tracking-wider text-foreground">
                {tour.title}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                {tour.duration} · {tour.price}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground transition-all group-hover:scale-110">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
