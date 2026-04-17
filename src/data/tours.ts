import candy from "@/assets/bus-candy-combo.webp";
import shylock from "@/assets/bus-shylock-combo.webp";
import oneness from "@/assets/bus-oneness-combo.webp";
import autobacz from "@/assets/bus-autobacz-combo.webp";
import wildlife from "@/assets/group-wildlife-sanctuary.webp";
import bamboo from "@/assets/group-bamboo-forest.jpg";

export type Tour = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  blurb: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    slug: "ktm-3",
    title: "KTM 3.0 — School Expedition",
    category: "School Trip",
    duration: "3 Days",
    price: "Custom Quote",
    image: candy,
    blurb: "Our flagship school expedition — Munnar tea hills, Kodaikanal, and Wayanad with chaperoned coaches and licensed guides.",
    highlights: ["AC tourist coach", "Senior trip leader", "All meals & stays"],
  },
  {
    slug: "munnar-kodai-wayanad",
    title: "Munnar · Kodaikanal · Wayanad",
    category: "Hill Stations",
    duration: "4 Days",
    price: "from ₹8,500",
    image: oneness,
    blurb: "Three legendary hill stations in one cinematic loop — tea estates, pine forests, and morning mist over the Western Ghats.",
    highlights: ["Group of 25–45", "Bonfire night", "Photo stops curated"],
  },
  {
    slug: "coorg-chikmagaluru-belur",
    title: "Coorg · Chikmagaluru · Belur",
    category: "Group Expedition",
    duration: "3 Days",
    price: "from ₹7,200",
    image: shylock,
    blurb: "Coffee country at its richest — waterfalls, plantation walks, and the temple craft of Belur with our signature touring coach.",
    highlights: ["Plantation stay option", "Local Kodava guide", "Sunrise viewpoint"],
  },
  {
    slug: "wayanad-wildlife",
    title: "Wayanad Wildlife Sanctuary",
    category: "Adventure",
    duration: "2 Days",
    price: "from ₹5,400",
    image: wildlife,
    blurb: "Edakkal caves, bamboo forests, and a guided sanctuary safari — built for college groups and adventure seekers.",
    highlights: ["Jeep safari", "Trek with naturalist", "Forest camp dinner"],
  },
  {
    slug: "goa-dandeli-hampi",
    title: "Goa · Dandeli · Hampi",
    category: "5-Day Package",
    duration: "5 Days",
    price: "from ₹12,800",
    image: autobacz,
    blurb: "Beach to white-water to ancient ruins — our most-requested long-haul expedition for college and friend groups.",
    highlights: ["River rafting Dandeli", "Hampi heritage walk", "Goa beach night"],
  },
  {
    slug: "custom-charter",
    title: "Custom Bus Charter",
    category: "Bespoke",
    duration: "Flexible",
    price: "On request",
    image: bamboo,
    blurb: "Industrial visits, devotional trips, family tours or college fests — we design and operate the entire journey end-to-end.",
    highlights: ["Any route in South India", "Decorated tourist bus", "Full ground crew"],
  },
];
