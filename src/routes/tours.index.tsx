import { createFileRoute } from "@tanstack/react-router";
import { getStoredTours } from "@/lib/storage";
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
  LayoutGrid,
  List,
} from "lucide-react";
import { useState, useEffect } from "react";

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

const RAW_PACKAGE_LIST = [
  {
    category: "ONE DAY TRIPS",
    items: [
      "Wonderla, Forum Mall/Lulumall",
      "Athirappilly, Vazhachal, Silver Storm/Dreamworld",
      "Munnar",
      "Kodaikanal",
      "Wagamon",
      "Marayoor",
      "Idukki",
      "Ooty",
      "Alappuzha / Kollam Houseboat",
      "Kanyakumari",
      "Thenmala, Palaruvi, Courtallam",
      "Ponmudi, Meenmutty waterfall",
    ],
    startIndex: 1,
  },
  {
    category: "TWO DAY TRIPS (2 day, 3 night)",
    items: [
      "Ooty, Wayanad",
      "Kodaikanal, Munnar",
      "Marayoor, Kodaikanal",
      "Munnar, Marayoor",
      "Munnar, Wonderla",
      "Coorg, Mysore",
      "Mysore, Ooty",
      "Bangalore, Mysore",
      "Mysore, Bangalore Wonderla",
      "Wagamon, Idukki",
      "Mysore, Chikmagalur",
      "Coorg, Chikmagalur",
      "Rameswaram, Kodaikanal",
      "Kodaikanal, Wagamon",
      "Wagamon, Wonderla",
      "Ooty, Black Thunder",
      "Malampuzha, Ooty",
      "Athirappilly, Vazhachal, Valparai",
    ],
    startIndex: 13,
  },
  {
    category: "THREE DAY TRIPS",
    items: [
      "Wagamon, Munnar, Wonderla",
      "Munnar, Marayoor, Wonderla",
      "Wagamon, Munnar, Idukki",
      "Chikmagalur, Belur, Mysore",
      "Mysore, Chikmagalur, Wonderla",
      "Coorg, Mysore, Bangalore",
      "Coorg, Chikmagalur, Mysore",
      "Mysore, Coorg, Wayanad",
      "Mysore, Ooty, Wonderla",
      "Kodaikanal, Munnar, Wonderla",
      "Kodaikanal, Marayoor, Munnar",
      "Kodaikanal, Munnar, Wagamon",
      "Kodaikanal, Marayoor, Wonderla",
      "Wayanad, Ooty, Wonderla",
      "Mookambika",
      "Bangalore, Mysore, Chikmagalur",
      "Rameswaram, Kodaikanal, Munnar",
      "Udupi, Coorg, Mysore",
    ],
    startIndex: 31,
  },
  {
    category: "FOUR DAY TRIPS",
    items: [
      "Ooty, Wayanad, Wonderla",
      "Kodaikanal, Marayoor, Munnar, Wonderla",
      "Kodaikanal, Munnar, Wagamon, Wonderla",
      "Wagamon, Ramakkalmedu, Idukki, Munnar, Marayoor/Wonderla",
      "Bangalore, Mysore, Ooty, Wayanad/Wonderla",
      "Coorg, Chikmagalur, Belur, Mysore",
      "Dandeli, Udupi, Coorg, Chikmagalur",
      "Udupi, Coorg, Shravanabelagola, Chikmagalur, Mysore",
      "Mysore, Chikmagalur, Coorg, Wayanad",
      "Udupi, Dandeli, Chikmagalur, Coorg",
      "Coorg, Mysore, Wayanad",
      "Bangalore, Mysore, Chikmagalur, Coorg",
      "Coorg, Chikmagalur, Belur, Bangalore",
      "Ooty, Mysore, Coorg, Wayanad",
      "Mysore, Coorg, Wayanad, Kozhikode",
      "Udupi, Goa, Chikmagalur",
      "Rameswaram, Kodaikanal, Palani, Kanyakumari",
    ],
    startIndex: 49,
  },
  {
    category: "FIVE DAY TRIPS",
    items: [
      "Udupi, Dandeli, Goa, Chikmagalur",
      "Bangalore, Bangalore Wonderla, Mysore, Chikmagalur, Coorg",
      "Coorg, Chikmagalur, Belur, Dandeli, Udupi",
      "Wayanad, Ooty, Mysore, Chikmagalur, Coorg",
      "Coorg, Chikmagalur, Belur, Mysore, Bangalore",
      "Alappuzha Houseboat, Wagamon, Calvary Mount, Idukki Dam, Munnar, Wonderla/Marayoor",
    ],
    startIndex: 66,
  },
  {
    category: "SIX DAY TRIPS",
    items: [
      "Udupi, Dandeli, Goa, Chikmagalur, Coorg",
      "Bangalore, Bangalore Wonderla, Mysore, Chikmagalur, Coorg, Wayanad",
      "Coorg, Chikmagalur, Belur, Dandeli, Udupi, Kozhikode",
      "Wayanad, Ooty, Mysore, Chikmagalur, Belur, Coorg",
      "Coorg, Chikmagalur, Belur, Mysore, Bangalore, Bangalore Wonderla",
    ],
    startIndex: 72,
  },
];

function ToursPage() {
  const [toursList, setToursList] = useState(() => getStoredTours());
  
  useEffect(() => {
    const handleUpdate = () => {
      setToursList(getStoredTours());
    };
    window.addEventListener("storage", handleUpdate);
    window.addEventListener("local-settings-updated", handleUpdate);
    return () => {
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("local-settings-updated", handleUpdate);
    };
  }, []);
  const [viewMode, setViewMode] = useState<"explore" | "list">("explore");
  const [filterMode, setFilterMode] = useState<"duration" | "location">("duration");

  const filteredTours = (filterId: string) => {
    if (filterMode === "duration") {
      return toursList.filter((t) => t.durationInDays === parseInt(filterId));
    } else {
      // Location filtering logic
      return toursList.filter((t) => {
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
          {viewMode === "explore" ? (
            <>
              <p className="eyebrow">The Expedition Catalogue</p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
                A UNIVERSE OF <br /> <span className="gradient-gold-text">JOURNEYS</span>.
              </h1>
              <p className="mt-8 max-w-xl text-xl text-foreground/70 font-light leading-relaxed">
                From single-day alpine breaks to five-day cross-state loops. Select your span and
                explore our curated expeditions.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow text-gold">Travel Trip Packages</p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.85] tracking-tight sm:text-6xl md:text-8xl uppercase">
                OUR <span className="gradient-gold-text">PACKAGES</span>.
              </h1>
            </>
          )}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="flex flex-col gap-12">
          {/* Main View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-6 border-b border-white/10 pb-8 mb-4">
            <button
              onClick={() => setViewMode("explore")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${viewMode === "explore" ? "text-gold" : "text-muted-foreground hover:text-white"}`}
            >
              <LayoutGrid size={16} /> Explore Detailed
            </button>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${viewMode === "list" ? "text-gold" : "text-muted-foreground hover:text-white"}`}
            >
              <List size={16} /> Packages List
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "explore" ? (
              <motion.div
                key="explore-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-12"
              >
                {/* Filter Mode Switcher */}
                <div className="flex flex-wrap items-center gap-6 border-b border-white/5 pb-8">
                  <button
                    onClick={() => setFilterMode("duration")}
                    className={`flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${filterMode === "duration" ? "text-gold" : "text-muted-foreground hover:text-white"}`}
                  >
                    <Timer size={14} /> Explore By Span
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
                        <span className="opacity-50 group-data-[state=active]:opacity-100">
                          {d.icon}
                        </span>
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
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-16 max-w-4xl"
              >
                {RAW_PACKAGE_LIST.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    <h2 className="font-display text-2xl tracking-widest text-gold uppercase border-b border-white/10 pb-4">
                      {group.category}
                    </h2>
                    <ul className="grid gap-4 pl-4 sm:grid-cols-1 md:grid-cols-2">
                      {group.items.map((item, iIdx) => {
                        const globalIndex = group.startIndex + iIdx;
                        return (
                          <li key={iIdx} className="flex gap-4 items-start group">
                            <span className="font-mono text-sm text-muted-foreground min-w-[28px] mt-0.5 group-hover:text-gold transition-colors">
                              {globalIndex}.
                            </span>
                            <span className="text-foreground/80 leading-relaxed font-light group-hover:text-white transition-colors">
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
