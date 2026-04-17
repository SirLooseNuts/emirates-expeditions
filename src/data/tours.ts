import dune from "@/assets/tour-dune.jpg";
import camp from "@/assets/tour-camp.jpg";
import camel from "@/assets/tour-camel.jpg";
import city from "@/assets/tour-city.jpg";
import sandboard from "@/assets/tour-sandboard.jpg";
import sea from "@/assets/tour-sea.jpg";

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
    slug: "dune-bashing",
    title: "Red Dune Bashing",
    category: "Desert Adventure",
    duration: "4 hours",
    price: "from AED 320",
    image: dune,
    blurb: "Pulse-racing 4x4 ride across the Lahbab red dunes with a private driver and panoramic photo stops.",
    highlights: ["Private Land Cruiser", "Sunset photo stop", "Sandboarding included"],
  },
  {
    slug: "luxury-overnight-camp",
    title: "Luxury Overnight Camp",
    category: "Signature Expedition",
    duration: "Overnight",
    price: "from AED 1,450",
    image: camp,
    blurb: "Sleep beneath a desert sky in a private Bedouin-inspired suite with chef-prepared dinner under the stars.",
    highlights: ["Private suite tent", "5-course dinner", "Falconry at dawn"],
  },
  {
    slug: "camel-trek-sunset",
    title: "Sunset Camel Caravan",
    category: "Heritage",
    duration: "2 hours",
    price: "from AED 240",
    image: camel,
    blurb: "Follow ancient trade routes on camelback as the desert turns gold and the call to prayer drifts across the sands.",
    highlights: ["Local Bedouin guide", "Arabic coffee & dates", "Sunset photography"],
  },
  {
    slug: "dubai-city-skyline",
    title: "Dubai Skyline Tour",
    category: "City Expedition",
    duration: "Full day",
    price: "from AED 480",
    image: city,
    blurb: "From the souks of Old Dubai to the observation deck of the Burj Khalifa — a curated city in a single day.",
    highlights: ["Burj Khalifa entry", "Marina cruise", "Old Dubai souks"],
  },
  {
    slug: "sandboarding-adventure",
    title: "Sandboarding Rush",
    category: "Adventure Sport",
    duration: "3 hours",
    price: "from AED 290",
    image: sandboard,
    blurb: "Carve the steepest dunes of the Arabian desert with professional boards and certified instructors.",
    highlights: ["Pro instructor", "All gear included", "GoPro footage"],
  },
  {
    slug: "private-yacht-charter",
    title: "Private Yacht Charter",
    category: "Luxury Sea",
    duration: "4 hours",
    price: "from AED 2,400",
    image: sea,
    blurb: "Cruise past the Burj Al Arab and Palm Jumeirah aboard a private yacht with chef and crew.",
    highlights: ["Private 48ft yacht", "Onboard chef", "Burj Al Arab views"],
  },
];
