import { createFileRoute } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Map as MapIcon,
  Rocket,
  Globe,
  MapPin,
  Timer,
  Compass,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tours/")({
  component: ToursPage,
});

const durations = [
  { id: "1", label: "1 DAY", icon: <Clock size={16} /> },
  { id: "2", label: "2 DAYS", icon: <MapIcon size={16} /> },
  { id: "3", label: "3 DAYS", icon: <Rocket size={16} /> },
  { id: "4", label: "4 DAYS", icon: <CalendarIcon size={16} /> },
  { id: "5", label: "5 DAYS", icon: <Globe size={16} /> },
];

const locations = [
  { id: "wayanad", label: "WAYANAD", icon: <MapPin size={16} /> },
  { id: "munnar", label: "MUNNAR", icon: <MapPin size={16} /> },
  { id: "coorg", label: "COORG", icon: <MapPin size={16} /> },
  { id: "vagamon", label: "VAGAMON", icon: <MapPin size={16} /> },
  { id: "mysore", label: "MYSORE", icon: <MapPin size={16} /> },
  { id: "ooty", label: "OOTY", icon: <MapPin size={16} /> },
  { id: "goa", label: "GOA & HAMPI", icon: <MapPin size={16} /> },
  { id: "alleppey", label: "ALLEPPEY", icon: <MapPin size={16} /> },
  { id: "chikmagalur", label: "CHIKMAGALUR", icon: <MapPin size={16} /> },
  { id: "kodai", label: "KODAIKANAL", icon: <MapPin size={16} /> },
];

function ToursPage() {
  const [filterMode, setFilterMode] = useState<"duration" | "location">("duration");

  const filteredTours = (filterId: string) => {
    if (filterMode === "duration") {
      return tours.filter((t) => t.durationInDays === parseInt(filterId));
    } else {
      // Location filtering logic
      return tours.filter((t) => {
        const title = t.title.toLowerCase();
        const category = t.category.toLowerCase();
        const highlightsString = t.highlights.join(" ").toLowerCase();

        // Special mapping for Alleppey/Alappuzha
        if (filterId === "alleppey") {
          return (
            title.includes("alleppey") ||
            title.includes("alappuzha") ||
            category.includes("waterways")
          );
        }

        // General contain check
        return (
          title.includes(filterId) ||
          category.includes(filterId) ||
          highlightsString.includes(filterId)
        );
      });
    }
  };

  const activeTabs = filterMode === "duration" ? durations : locations;
  const defaultTab = activeTabs[0].id;

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Expedition Catalogue</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
            A UNIVERSE OF <br /> <span className="gradient-gold-text">JOURNEYS</span>.
          </h1>
          <p className="mt-8 max-w-xl text-xl text-foreground/70 font-light leading-relaxed">
            From single-day alpine breaks to five-day cross-state loops. Select your span and
            explore our curated expeditions.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="flex flex-col gap-12">
          {/* Filter Mode Switcher */}
          <div className="flex flex-wrap items-center gap-6 border-b border-white/5 pb-8">
            <button
              onClick={() => setFilterMode("duration")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${filterMode === "duration" ? "text-gold" : "text-muted-foreground hover:text-white"}`}
            >
              <Timer size={14} /> Explorer By Span
            </button>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <button
              onClick={() => setFilterMode("location")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${filterMode === "location" ? "text-gold" : "text-muted-foreground hover:text-white"}`}
            >
              <Compass size={14} /> Explore By Destination
            </button>
          </div>

          <Tabs.Root
            key={filterMode}
            defaultValue={defaultTab}
            className="flex flex-col gap-12 overflow-x-hidden"
          >
            <Tabs.List className="flex flex-wrap gap-2 pb-4">
              {activeTabs.map((d) => (
                <Tabs.Trigger
                  key={d.id}
                  value={d.id}
                  className="group relative flex items-center gap-3 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all data-[state=active]:text-gold text-muted-foreground hover:text-white"
                >
                  <span className="opacity-50 group-data-[state=active]:opacity-100">{d.icon}</span>
                  {d.label}
                  <div className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 bg-gold transition-transform duration-300 group-data-[state=active]:scale-x-100" />
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <AnimatePresence>
              {activeTabs.map((d) => (
                <Tabs.Content key={d.id} value={d.id} asChild>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredTours(d.id).map((t) => (
                        <TourCard key={t.slug} tour={t} />
                      ))}
                    </div>
                    {filteredTours(d.id).length === 0 && (
                      <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 text-muted-foreground">
                        <p className="font-mono text-xs uppercase tracking-widest">
                          No expeditions found for this criteria
                        </p>
                      </div>
                    )}
                  </motion.div>
                </Tabs.Content>
              ))}
            </AnimatePresence>
          </Tabs.Root>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-32 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow block mb-4">Bespoke Engineering</span>
              <h2 className="font-display text-4xl leading-none tracking-tight sm:text-6xl md:text-7xl uppercase">
                CRAFT YOUR <br /> <span className="gradient-gold-text">OWN ROUTE</span>.
              </h2>
            </div>
            <div>
              <p className="text-xl text-foreground/70 font-light leading-relaxed">
                Looking for a specific university loop, devotion circuit, or corporate retreat? We
                design fully custom long-haul itineraries tailored to your group's energy.
              </p>
              <a
                href="/booking"
                className="mt-10 inline-flex items-center gap-6 rounded-xl bg-gold px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground hover:scale-[1.02] shadow-glow-sm transition-all"
              >
                Request Custom Build
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
