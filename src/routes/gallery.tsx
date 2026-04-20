import { createFileRoute } from "@tanstack/react-router";
import { galleryPhotos } from "@/data/gallery";
import { Lightbox } from "@/components/Lightbox";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid3X3, Layers } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Emirates Expedition" },
      { name: "description", content: "Group photos, signature touring coaches, and moments from school trips and expeditions across South India." },
      { property: "og:title", content: "Gallery — Emirates Expedition" },
      { property: "og:description", content: "Real moments from real trips." },
      { property: "og:image", content: galleryPhotos[0]?.src || "" },
      { name: "twitter:image", content: galleryPhotos[0]?.src || "" },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Fleet", "Expeditions", "Moments"] as const;
type Category = (typeof CATEGORIES)[number];

const INITIAL_COUNT = 24;
const STEP_COUNT = 12;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const filteredPhotos = useMemo(() => {
    return activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + STEP_COUNT);
  };

  const handleFilterChange = (cat: Category) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
  };

  return (
    <div className="pt-32 min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="eyebrow">The Gallery</p>
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-wider sm:text-8xl">
            MOMENTS FROM <span className="gradient-gold-text">THE ROAD</span>.
            </h1>
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilterChange(cat)}
                        className={`px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest transition-all rounded-sm border ${
                            activeCategory === cat 
                            ? "bg-gold text-primary-foreground border-gold shadow-glow-sm" 
                            : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
        <p className="mt-8 max-w-xl text-lg text-foreground/60 font-light">
          A collection of {galleryPhotos.length} frames from our signature expeditions — the fleet, the crews, and the unforgettable journeys.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        {/* CSS Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {visiblePhotos.map((p, i) => (
              <motion.figure
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={p.src}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-border/40 mb-4 inline-block w-full"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-gold mb-1">{p.category}</p>
                    <figcaption className="text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                        {p.alt}
                    </figcaption>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
            <div className="mt-20 flex justify-center">
                <button
                    onClick={handleLoadMore}
                    className="group flex flex-col items-center gap-4 transition-all"
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold/60 group-hover:text-gold">
                        Discover More
                    </span>
                    <div className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent group-hover:h-20 transition-all duration-500" />
                </button>
            </div>
        )}

        {/* Lightbox Integration */}
        <Lightbox
          isOpen={lightbox.isOpen}
          onClose={() => setLightbox({ ...lightbox, isOpen: false })}
          images={filteredPhotos.map(p => p.src)}
          currentIndex={lightbox.index}
          onNavigate={(index) => setLightbox({ ...lightbox, index })}
        />

        {/* Brand Shoutout */}
        <div className="mt-32 rounded-sm border border-gold/40 bg-card/40 p-8 text-center backdrop-blur-md">
          <p className="eyebrow">Follow the journey</p>
          <p className="mt-3 font-display text-3xl tracking-wider">
            @EMIRATES_EXPEDITION_
          </p>
          <a
            href="https://www.instagram.com/emirates_expedition_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 shadow-glow-sm"
          >
            Connect on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
