import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowLeft, Check, X, Palmtree, Utensils, Landmark } from "lucide-react";

// Curated high-quality, non-watermarked Unsplash images and dynamic content for locations
const REGION_DATA: Record<string, {
  attractions: { name: string; image: string }[];
  culture: { description: string; image: string };
  food: { description: string; image: string };
}> = {
  "munnar": {
    attractions: [
      { name: "Eravikulam National Park", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80" },
      { name: "Tea Estates", image: "https://images.unsplash.com/photo-1622308644420-b0bcbc813083?auto=format&fit=crop&w=800&q=80" },
      { name: "Mattupetty Dam", image: "https://images.unsplash.com/photo-1605555438848-3608149d5b03?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "A blend of colonial heritage and indigenous tribal culture, Munnar's history is deeply intertwined with the tea plantation industry established by the British.",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Authentic Kerala cuisine featuring Puttu and Kadala curry, Appam with stew, and fresh farm-to-table tea blends.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    }
  },
  "wayanad": {
    attractions: [
      { name: "Edakkal Caves", image: "https://images.unsplash.com/photo-1616055745778-5e580e031eb0?auto=format&fit=crop&w=800&q=80" },
      { name: "Banasura Sagar Dam", image: "https://images.unsplash.com/photo-1582285186095-2cc08f2e23a3?auto=format&fit=crop&w=800&q=80" },
      { name: "Chembra Peak", image: "https://images.unsplash.com/photo-1598424268673-89bdce8d28ed?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "Rich in indigenous tribal history and lush folklore. Wayanad is known for its agrarian culture and ancient cave carvings dating back to the Neolithic age.",
      image: "https://images.unsplash.com/photo-1586940864239-0d29759d57a9?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Famous for bamboo rice, authentic Malabar Biriyani, and traditional tribal cuisine utilizing wild honey and forest spices.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=800&q=80"
    }
  },
  "ooty": {
    attractions: [
      { name: "Botanical Gardens", image: "https://images.unsplash.com/photo-1636224376402-990471b0db43?auto=format&fit=crop&w=800&q=80" },
      { name: "Nilgiri Mountain Railway", image: "https://images.unsplash.com/photo-1549487295-8a8b1daae01b?auto=format&fit=crop&w=800&q=80" },
      { name: "Ooty Lake", image: "https://images.unsplash.com/photo-1627882200251-5ee42813df12?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "The Queen of Hill Stations boasts colonial architecture and the indigenous Toda culture known for their distinct barrel-shaped huts and embroidered shawls.",
      image: "https://images.unsplash.com/photo-1628131343719-7d04bc5570fa?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Renowned for home-made chocolates, freshly baked Varkey, hot nilgiri tea, and hearty colonial-era bakes.",
      image: "https://images.unsplash.com/photo-1511082725450-4cc83da59f77?auto=format&fit=crop&w=800&q=80"
    }
  },
  "kodaikanal": {
    attractions: [
      { name: "Kodai Lake", image: "https://images.unsplash.com/photo-1616055745778-5e580e031eb0?auto=format&fit=crop&w=800&q=80" },
      { name: "Coaker's Walk", image: "https://images.unsplash.com/photo-1582285186095-2cc08f2e23a3?auto=format&fit=crop&w=800&q=80" },
      { name: "Pillar Rocks", image: "https://images.unsplash.com/photo-1612030225134-927c3fdf109b?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "Known as the Princess of Hill Stations, Kodaikanal has a tranquil, misty vibe with a mix of American colonial history and Tamil heritage.",
      image: "https://images.unsplash.com/photo-1586940864239-0d29759d57a9?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Sample locally made artisanal cheeses, mountain honey, homemade chocolates, and traditional Tamil delicacies.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=800&q=80"
    }
  },
  "coorg": {
    attractions: [
      { name: "Abbey Falls", image: "https://images.unsplash.com/photo-1614088924225-b467f5df56f3?auto=format&fit=crop&w=800&q=80" },
      { name: "Raja's Seat", image: "https://images.unsplash.com/photo-1581452486716-43c391295fc7?auto=format&fit=crop&w=800&q=80" },
      { name: "Coffee Plantations", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "The Scotland of India is home to the Kodava people, known for their martial traditions, distinct ethnic dress, and legendary hospitality.",
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Indulge in authentic Kodava cuisine, particularly Pandi Curry (pork curry), Akki Roti, and freshly brewed local Arabica coffee.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
    }
  },
  "mysore": {
    attractions: [
      { name: "Mysore Palace", image: "https://images.unsplash.com/photo-1600100397608-2c2ecf57f4fc?auto=format&fit=crop&w=800&q=80" },
      { name: "Chamundi Hill", image: "https://images.unsplash.com/photo-1610014605177-3e6f9f3ef4d1?auto=format&fit=crop&w=800&q=80" },
      { name: "Brindavan Gardens", image: "https://images.unsplash.com/photo-1582555562768-45cf56ab6120?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "The cultural capital of Karnataka, Mysore is famous for the Dasara festival, intricate silk weaving, and deep-rooted royal Wodeyar heritage.",
      image: "https://images.unsplash.com/photo-1581452486716-43c391295fc7?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Mysore Pak (a ghee-rich sweet), traditional Mysore Masala Dosa, and the famous filter coffee.",
      image: "https://images.unsplash.com/photo-1610192131665-276ceeaec39c?auto=format&fit=crop&w=800&q=80"
    }
  },
  "goa": {
    attractions: [
      { name: "Baga Beach", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" },
      { name: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1531086054817-495c34e06bc8?auto=format&fit=crop&w=800&q=80" },
      { name: "Basilica of Bom Jesus", image: "https://images.unsplash.com/photo-1605333555234-fc565e317c2a?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "A unique blend of Indian and Portuguese cultures, characterized by its laid-back susegad lifestyle, historic churches, and vibrant festivals.",
      image: "https://images.unsplash.com/photo-1611086111306-03fefd7d91e8?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Goan fish curry, Vindaloo, Bebinca, and fresh seafood delicacies heavily influenced by Portuguese flavors.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    }
  },
  "alleppey": {
    attractions: [
      { name: "Backwaters", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80" },
      { name: "Marari Beach", image: "https://images.unsplash.com/photo-1594998797451-b87c71baeb33?auto=format&fit=crop&w=800&q=80" },
      { name: "Kumarakom Bird Sanctuary", image: "https://images.unsplash.com/photo-1587600747447-0e698886d5e1?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "The Venice of the East, known for its tranquil backwaters, snake boat races, and traditional coir-making industry.",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Karimeen Pollichathu (pearl spot fish baked in plantain leaves), Kerala Sadhya, and fresh toddy from local palms.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    }
  },
  "default": {
    attractions: [
      { name: "Scenic Landmarks", image: "https://images.unsplash.com/photo-1506461883276-594c39bb2400?auto=format&fit=crop&w=800&q=80" },
      { name: "Nature Trails", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
      { name: "Historic Monuments", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80" }
    ],
    culture: {
      description: "Experience the vibrant local heritage, ancient traditions, and warm hospitality that makes this region unique.",
      image: "https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      description: "Savor the rich and diverse culinary landscape, featuring local spices and traditional recipes passed down through generations.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=800&q=80"
    }
  }
};

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = tours.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  component: TourDetailsPage,
});

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

function TourDetailsPage() {
  const tour = Route.useLoaderData();
  const regions = getRegionsFromTitle(tour.title);
  const primaryRegionData = REGION_DATA[regions[0]] || REGION_DATA["default"];

  // Generate dynamic itinerary if placeholder is found
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10">
          <Link
            to="/tours"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Packages
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="inline-block rounded-sm bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground">
              {tour.category}
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
              <Clock size={12} /> {tour.duration}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl leading-[1.1] tracking-wider text-white sm:text-5xl md:text-7xl uppercase"
          >
            {tour.title.split(' — ')[1] || tour.title}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-light text-white/80 leading-relaxed">
            {tour.blurb}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/booking"
              search={{ tour: tour.slug }}
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] hover:bg-white hover:text-black"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Column: Itinerary */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl uppercase tracking-wider text-gold mb-10 border-b border-white/10 pb-4">
              Itinerary Overview
            </h2>
            
            <div className="space-y-12">
              {itinerary.map((day, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  <div className="hidden md:flex absolute left-0 top-1 h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold font-mono text-[10px]">
                    {day.day}
                  </div>
                  <div className="md:pl-16">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2 block md:hidden">
                      Day {day.day}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
                      {day.title}
                    </h3>
                    <ul className="space-y-3">
                      {day.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex gap-3 text-foreground/80 font-light text-sm sm:text-base">
                          <Check size={16} className="text-gold mt-1 shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="rounded-sm border border-white/10 bg-card p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6 border-b border-white/10 pb-4">
                Inclusions & Exclusions
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Included</h4>
                <ul className="space-y-2">
                  {tour.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-foreground/80 font-light">
                      <Check size={14} className="text-green-500 mt-0.5 shrink-0" /> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Excluded</h4>
                <ul className="space-y-2">
                  {tour.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-foreground/80 font-light">
                      <X size={14} className="text-red-500 mt-0.5 shrink-0" /> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Content Sections: Attractions, Culture, Food */}
      <section className="border-t border-white/5 py-20 bg-card/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Palmtree className="text-gold" />
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
                Top Attractions
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {primaryRegionData.attractions.map((attr, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-card">
                  <img 
                    src={attr.image} 
                    alt={attr.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1 block">Highlight</span>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">{attr.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            
            <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-card">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={primaryRegionData.culture.image} 
                  alt="Culture" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="text-gold" size={20} />
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white">Local Culture</h3>
                </div>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {primaryRegionData.culture.description}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-card">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={primaryRegionData.food.image} 
                  alt="Food" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="text-gold" size={20} />
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white">Culinary Experience</h3>
                </div>
                <p className="text-foreground/80 font-light leading-relaxed">
                  {primaryRegionData.food.description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center">
        <h2 className="font-display text-3xl leading-none tracking-tight sm:text-5xl uppercase mb-8">
          Ready to experience <br /> <span className="gradient-gold-text">this journey?</span>
        </h2>
        <Link
          to="/booking"
          search={{ tour: tour.slug }}
          className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-gold px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all hover:scale-[1.02] hover:bg-white hover:text-black shadow-glow-sm"
        >
          Book Now
        </Link>
      </section>

    </div>
  );
}
