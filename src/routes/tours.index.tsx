import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import * as Tabs from "@radix-ui/react-tabs";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Map as MapIcon, 
  Rocket, 
  Globe, 
  MapPin, 
  Timer,
  Compass,
  LayoutGrid,
  List
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

const packagesList = [
  {
    title: "ONE DAY TRIPS",
    items: [
      "Wonderla, Forum Mall/Lulumall",
      "Athirapally, Vazhachal, Silverstrom/Dreamworld",
      "Munnar",
      "Kodaikanal",
      "Wagamon",
      "Marayoor",
      "Idukki",
      "Ooty",
      "Alapuzha/ Kollam Houseboat",
      "Kanyakumari",
      "Thenmala, palaruvi, Kutralam",
      "Ponmudi, Meenmutty waterfall"
    ]
  },
  {
    title: "TWO DAY TRIPS (2 day, 3 night)",
    items: [
      "Ooty, Wayand",
      "Kodaikanal, Munnar",
      "Marayoor, Kodaikanal",
      "Munnar, Marayoor",
      "Munnar, Wonderla",
      "Coorg, Mysore",
      "Mysore, Ooty",
      "Banglore, Mysore",
      "Mysore, Banglore Wonderla",
      "Wagamon, Idukki",
      "Mysore, Chikmanglore",
      "Coorg, Chikmanglore",
      "Rameswaram, Kodaikanal",
      "kodaikanal, Wagamon",
      "Wagamon, Wonderla",
      "Ooty, Black Thunder",
      "Malampuzha, Ooty",
      "Athirapally, Vazhachal, Valpara"
    ]
  },
  {
    title: "THREE DAY TRIPS",
    items: [
      "Wagamon, Munnar, Wonderla",
      "Munnar, Marayoor, Wonderla",
      "Wagamon, Munnar, Idukki",
      "Chikmanglore, Belur, Mysore",
      "Mysore, Chikmanglore, Wonderla",
      "Coorg, Mysore, Banglore",
      "Coorg, Chikmanglore, Mysore",
      "Mysore, Coorg, Wayanad",
      "Mysore, Ooty, Wonderla",
      "Kodaikanal, Munnar, Wonderla",
      "Kodaikanal, Marayoor, Munnar",
      "Kodaikanal, Munnar, Wagamon",
      "Kodaikanal, Marayoor, Wonderla",
      "Wayand, Ooty, Wonderla",
      "Mookambika",
      "Banglore, Mysore, Chikmanglore",
      "Rameswaram, Kodaikanal, Munnar",
      "Uduppi, Coorg, Mysore"
    ]
  },
  {
    title: "FOUR DAY TRIPS",
    items: [
      "Ooty, Wayand, Wonderla",
      "Kodaikanal, Marayoor, Munnar, Wonderla",
      "Kodaikanal, Munnar, Wagamon, Wonderla",
      "Wagamon, Ramakkalmedu, Idukki, Munnar, Marayoor/Wonderla",
      "Banglore, Mysore, ooty, Wayand/Wonderla",
      "Coorg, Chikmanglore, Belur,Mysore",
      "Dendeli, Uduppi, Croög, Chikmanglore",
      "Uduppi, Coorg, Sravanabelgola, Chikmanglore, Mysore",
      "Myosre, chikmanglore, Coorg, Wayanad",
      "Uduppi, Dendeli, Chikmanglore, Coorg",
      "Coorg, Mysore , Mysore, Wayand",
      "Banglore, Mysore, chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Banglore",
      "Ooty, Mysore, Coorg, Wayand",
      "Mysore, coorg, Wayand, Kozhikode",
      "Uduppi, Goa, Goa, Chikmaglore",
      "Rameswaram, Kodaikanal, Palani, Kanyakumari"
    ]
  },
  {
    title: "FIVE DAY TRIPS",
    items: [
      "Uduppi, Dendeli, Goa,Goa, Chikmanglore",
      "Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Dendeli, Uduppi",
      "Wayandu, Ooty, Mysore, Chikmanglore, Coorg",
      "Coorg, Chikmanglore, Belur, Mysore, Banglore",
      "Alapuzha House boat, Wagamon, Calveri Mount, Idukki dam, Munnar, Wonderla/Marayoor"
    ]
  },
  {
    title: "SIX DAY TRIPS",
    items: [
      "Uduppi, Dendeli, Goa,Goa, Chikmanglore, Coorg",
      "Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg, Wayand",
      "Coorg, Chikmanglore, Belur, Dendeli, Uduppi, Kozhikode",
      "Wayandu, Ooty, Mysore, Chikmanglore,Belur, Coorg",
      "Coorg, Chikmanglore, Belur, Mysore, Banglore, Banglore Wonderla"
    ]
  }
];

function ToursPage() {
  const [viewMode, setViewMode] = useState<"explore" | "packages">("explore");
  const [filterMode, setFilterMode] = useState<"duration" | "location">("duration");
  let counter = 1;

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
          return title.includes("alleppey") || title.includes("alappuzha") || category.includes("waterways");
        }
        
        // General contain check
        return title.includes(filterId) || category.includes(filterId) || highlightsString.includes(filterId);
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
          <p className="eyebrow">Travel Trip Packages</p>
          <h1 className="mt-4 font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
            OUR <span className="gradient-gold-text">PACKAGES</span>.
          </h1>
          <p className="mt-8 max-w-xl text-xl text-foreground/70 font-light leading-relaxed">
            From single-day alpine breaks to cross-state loops. 
            Explore detailed expeditions or browse our complete package list.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:pb-32 lg:px-10">
        <div className="flex flex-col gap-10 sm:gap-16">
          {/* Main View Switcher */}
          <div className="flex flex-wrap items-center gap-6 border-b border-white/5 pb-8">
            <button
              onClick={() => setViewMode("explore")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${viewMode === "explore" ? 'text-gold' : 'text-muted-foreground hover:text-white'}`}
            >
              <LayoutGrid size={14} /> Explore Detailed
            </button>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <button
              onClick={() => setViewMode("packages")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${viewMode === "packages" ? 'text-gold' : 'text-muted-foreground hover:text-white'}`}
            >
              <List size={14} /> Packages List
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "explore" ? (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-12"
              >
                {/* Filter Mode Switcher for Explore */}
                <div className="flex flex-wrap items-center gap-6 border-b border-white/5 pb-8">
                  <button
                    onClick={() => setFilterMode("duration")}
                    className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${filterMode === "duration" ? 'text-gold' : 'text-muted-foreground hover:text-white'}`}
                  >
                    <Timer size={14} /> Explore By Span
                  </button>
                  <div className="hidden sm:block h-4 w-px bg-white/10" />
                  <button
                    onClick={() => setFilterMode("location")}
                    className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${filterMode === "location" ? 'text-gold' : 'text-muted-foreground hover:text-white'}`}
                  >
                    <Compass size={14} /> Explore By Destination
                  </button>
                </div>

                <Tabs.Root key={filterMode} defaultValue={defaultTab} className="flex flex-col gap-12 overflow-x-hidden">
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
                              <p className="font-mono text-xs uppercase tracking-widest">No expeditions found for this criteria</p>
                            </div>
                          )}
                        </motion.div>
                      </Tabs.Content>
                    ))}
                  </AnimatePresence>
                </Tabs.Root>
              </motion.div>
            ) : (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-10 sm:gap-16 lg:px-0"
              >
                {packagesList.map((pkg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-gold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                      {pkg.title}
                    </h2>
                    <ol className="list-decimal list-inside space-y-3 text-lg font-light text-foreground/80">
                      {pkg.items.map((item) => {
                        const currentCount = counter++;
                        return (
                          <li key={currentCount} className="pl-2" value={currentCount}>
                            {item}
                          </li>
                        );
                      })}
                    </ol>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-16 sm:py-32 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow block mb-4">Bespoke Engineering</span>
              <h2 className="font-display text-4xl leading-none tracking-tight sm:text-6xl uppercase">
                CRAFT YOUR <br /> <span className="gradient-gold-text">OWN ROUTE</span>.
              </h2>
            </div>
            <div>
              <p className="text-xl text-foreground/70 font-light leading-relaxed">
                Looking for a specific university loop, devotion circuit, or 
                corporate retreat? We design fully custom long-haul itineraries 
                tailored to your group's energy.
              </p>
              <a
                href="/booking"
                className="mt-10 inline-flex min-h-[48px] items-center gap-6 rounded-xl bg-gold px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground hover:scale-[1.02] shadow-glow-sm transition-all"
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
