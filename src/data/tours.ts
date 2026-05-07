// Core Assets - Using requested names from gallery
import munnar_cinematic from "@/assets/munnar_cinematic.png";
import alleppey_cinematic from "@/assets/alleppey_cinematic.png";
import athirapally_cinematic from "@/assets/athirapally_cinematic.png";
import default_cinematic from "@/assets/default_cinematic.png";
import goa_cinematic from "@/assets/goa_cinematic.png";
import misty_mountains_cinematic from "@/assets/misty_mountains_cinematic.png";
import mysore_cinematic from "@/assets/mysore_cinematic.png";
import wonderla_cinematic from "@/assets/wonderla_cinematic.png";
import wayanad1 from "@/assets/tour-wayanad-wildlife.png";
import marayoor1 from "@/assets/tour-marayoor.png";
import munnar1 from "@/assets/tour-munnar-tea.png";
import vagamon1 from "@/assets/tour-vagamon-pines.png";
import alappuzha1 from "@/assets/tour-3day-alleppey.png";
import athirappilly1 from "@/assets/tour-athirappilly.png";
import ramakkalmedu1 from "@/assets/tour-2day-munnar.png";
import wonderla1 from "@/assets/tour-wonderla.png";
import kodaikanal1 from "@/assets/tour-5day-varkala.png";
import ooty1 from "@/assets/tour-ooty.png";
import kanyakumari1 from "@/assets/tour-mysore-palace.png";
import silverstorm1 from "@/assets/tour-wonderla.png";
import mysore1 from "@/assets/tour-mysore-palace.png";
import coorg1 from "@/assets/tour-coorg.png";
import bangalore1 from "@/assets/tour-bangalore.png";
import chikmagalur1 from "@/assets/tour-chikmagaluru.png";
import belur1 from "@/assets/tour-wayanad-edakkal.png";
import hampi1 from "@/assets/tour-marayoor.png";
import goa1 from "@/assets/tour-3day-alleppey.png";
import dandeli1 from "@/assets/tour-wayanad-wildlife.png";
import malpe1 from "@/assets/tour-5day-varkala.png";
import udupi1 from "@/assets/tour-coorg.png";
import mistsStone from "@/assets/tour-mists-stone.jpg";
import vagamonKodaiMist from "@/assets/tour-vagamon-kodai-mist-2.jpg";
import kodaiMist from "@/assets/tour-kodai-mist.jpg";

export type Tour = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  durationInDays: number;
  price: string;
  image: string;
  blurb: string;
  highlights: string[];
  fullDescription: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
};

const consultPrice = "Consult for Pricing";

export const tours: Tour[] = [
  {
    slug: "1day-wonderla-forum-mall-lulumall",
    title: "1-Day — Wonderla &  Forum Mall/Lulumall",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: wonderla_cinematic,
    blurb: "Explore Wonderla, Forum Mall/Lulumall on this carefully crafted 1-day itinerary.",
    highlights: ["Wonderla","Forum Mall/Lulumall"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Wonderla, Forum Mall/Lulumall. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [vagamon1, alappuzha1, athirappilly1]
  },
  {
    slug: "1day-athirapally-vazhachal-silverstrom-dreamworld",
    title: "1-Day — Athirapally &  Vazhachal &  Silverstrom/Dreamworld",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Athirapally, Vazhachal, Silverstrom/Dreamworld on this carefully crafted 1-day itinerary.",
    highlights: ["Athirapally","Vazhachal","Silverstrom/Dreamworld"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Athirapally, Vazhachal, Silverstrom/Dreamworld. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [alappuzha1, athirappilly1, ramakkalmedu1]
  },
  {
    slug: "1day-munnar",
    title: "1-Day — Munnar",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Munnar on this carefully crafted 1-day itinerary.",
    highlights: ["Munnar"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Munnar. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [athirappilly1, ramakkalmedu1, wonderla1]
  },
  {
    slug: "1day-kodaikanal",
    title: "1-Day — Kodaikanal",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal on this carefully crafted 1-day itinerary.",
    highlights: ["Kodaikanal"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Kodaikanal. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [ramakkalmedu1, wonderla1, kodaikanal1]
  },
  {
    slug: "1day-wagamon",
    title: "1-Day — Wagamon",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon on this carefully crafted 1-day itinerary.",
    highlights: ["Wagamon"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Wagamon. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [wonderla1, kodaikanal1, ooty1]
  },
  {
    slug: "1day-marayoor",
    title: "1-Day — Marayoor",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Marayoor on this carefully crafted 1-day itinerary.",
    highlights: ["Marayoor"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Marayoor. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kodaikanal1, ooty1, kanyakumari1]
  },
  {
    slug: "1day-idukki",
    title: "1-Day — Idukki",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Idukki on this carefully crafted 1-day itinerary.",
    highlights: ["Idukki"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Idukki. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [ooty1, kanyakumari1, silverstorm1]
  },
  {
    slug: "1day-ooty",
    title: "1-Day — Ooty",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ooty on this carefully crafted 1-day itinerary.",
    highlights: ["Ooty"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Ooty. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kanyakumari1, silverstorm1, mysore1]
  },
  {
    slug: "1day-alapuzha--kollam-houseboat",
    title: "1-Day — Alapuzha/ Kollam Houseboat",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Alapuzha/ Kollam Houseboat on this carefully crafted 1-day itinerary.",
    highlights: ["Alapuzha","Kollam Houseboat"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Alapuzha/ Kollam Houseboat. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [silverstorm1, mysore1, coorg1]
  },
  {
    slug: "1day-kanyakumari",
    title: "1-Day — Kanyakumari",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kanyakumari on this carefully crafted 1-day itinerary.",
    highlights: ["Kanyakumari"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Kanyakumari. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mysore1, coorg1, bangalore1]
  },
  {
    slug: "1day-thenmala-palaruvi-kutralam",
    title: "1-Day — Thenmala &  palaruvi &  Kutralam",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Thenmala, palaruvi, Kutralam on this carefully crafted 1-day itinerary.",
    highlights: ["Thenmala","palaruvi","Kutralam"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Thenmala, palaruvi, Kutralam. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [coorg1, bangalore1, chikmagalur1]
  },
  {
    slug: "1day-ponmudi-meenmutty-waterfall",
    title: "1-Day — Ponmudi &  Meenmutty waterfall",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ponmudi, Meenmutty waterfall on this carefully crafted 1-day itinerary.",
    highlights: ["Ponmudi","Meenmutty waterfall"],
    fullDescription: "Join us for an unforgettable 1-day journey covering Ponmudi, Meenmutty waterfall. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [bangalore1, chikmagalur1, belur1]
  },
  {
    slug: "2day-ooty-wayand",
    title: "2-Day — Ooty &  Wayand",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ooty, Wayand on this carefully crafted 2-day itinerary.",
    highlights: ["Ooty","Wayand"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Ooty, Wayand. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [ramakkalmedu1, wonderla1, kodaikanal1]
  },
  {
    slug: "2day-kodaikanal-munnar",
    title: "2-Day — Kodaikanal &  Munnar",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Munnar on this carefully crafted 2-day itinerary.",
    highlights: ["Kodaikanal","Munnar"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Kodaikanal, Munnar. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [wonderla1, kodaikanal1, ooty1]
  },
  {
    slug: "2day-marayoor-kodaikanal",
    title: "2-Day — Marayoor &  Kodaikanal",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Marayoor, Kodaikanal on this carefully crafted 2-day itinerary.",
    highlights: ["Marayoor","Kodaikanal"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Marayoor, Kodaikanal. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kodaikanal1, ooty1, kanyakumari1]
  },
  {
    slug: "2day-munnar-marayoor",
    title: "2-Day — Munnar &  Marayoor",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Munnar, Marayoor on this carefully crafted 2-day itinerary.",
    highlights: ["Munnar","Marayoor"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Munnar, Marayoor. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [ooty1, kanyakumari1, silverstorm1]
  },
  {
    slug: "2day-munnar-wonderla",
    title: "2-Day — Munnar &  Wonderla",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Munnar, Wonderla on this carefully crafted 2-day itinerary.",
    highlights: ["Munnar","Wonderla"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Munnar, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kanyakumari1, silverstorm1, mysore1]
  },
  {
    slug: "2day-coorg-mysore",
    title: "2-Day — Coorg &  Mysore",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Mysore on this carefully crafted 2-day itinerary.",
    highlights: ["Coorg","Mysore"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Coorg, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [silverstorm1, mysore1, coorg1]
  },
  {
    slug: "2day-mysore-ooty",
    title: "2-Day — Mysore &  Ooty",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Ooty on this carefully crafted 2-day itinerary.",
    highlights: ["Mysore","Ooty"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Mysore, Ooty. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mysore1, coorg1, bangalore1]
  },
  {
    slug: "2day-banglore-mysore",
    title: "2-Day — Banglore &  Mysore",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, Mysore on this carefully crafted 2-day itinerary.",
    highlights: ["Banglore","Mysore"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Banglore, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [coorg1, bangalore1, chikmagalur1]
  },
  {
    slug: "2day-mysore-banglore-wonderla",
    title: "2-Day — Mysore &  Banglore Wonderla",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Banglore Wonderla on this carefully crafted 2-day itinerary.",
    highlights: ["Mysore","Banglore Wonderla"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Mysore, Banglore Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [bangalore1, chikmagalur1, belur1]
  },
  {
    slug: "2day-wagamon-idukki",
    title: "2-Day — Wagamon &  Idukki",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon, Idukki on this carefully crafted 2-day itinerary.",
    highlights: ["Wagamon","Idukki"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Wagamon, Idukki. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [chikmagalur1, belur1, hampi1]
  },
  {
    slug: "2day-mysore-chikmanglore",
    title: "2-Day — Mysore &  Chikmanglore",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Chikmanglore on this carefully crafted 2-day itinerary.",
    highlights: ["Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Mysore, Chikmanglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [belur1, hampi1, goa1]
  },
  {
    slug: "2day-coorg-chikmanglore",
    title: "2-Day — Coorg &  Chikmanglore",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore on this carefully crafted 2-day itinerary.",
    highlights: ["Coorg","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Coorg, Chikmanglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [hampi1, goa1, dandeli1]
  },
  {
    slug: "2day-rameswaram-kodaikanal",
    title: "2-Day — Rameswaram &  Kodaikanal",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Rameswaram, Kodaikanal on this carefully crafted 2-day itinerary.",
    highlights: ["Rameswaram","Kodaikanal"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Rameswaram, Kodaikanal. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [goa1, dandeli1, malpe1]
  },
  {
    slug: "2day-kodaikanal-wagamon",
    title: "2-Day — kodaikanal &  Wagamon",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore kodaikanal, Wagamon on this carefully crafted 2-day itinerary.",
    highlights: ["kodaikanal","Wagamon"],
    fullDescription: "Join us for an unforgettable 2-day journey covering kodaikanal, Wagamon. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [dandeli1, malpe1, udupi1]
  },
  {
    slug: "2day-wagamon-wonderla",
    title: "2-Day — Wagamon &  Wonderla",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon, Wonderla on this carefully crafted 2-day itinerary.",
    highlights: ["Wagamon","Wonderla"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Wagamon, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [malpe1, udupi1, mistsStone]
  },
  {
    slug: "2day-ooty-black-thunder",
    title: "2-Day — Ooty &  Black Thunder",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ooty, Black Thunder on this carefully crafted 2-day itinerary.",
    highlights: ["Ooty","Black Thunder"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Ooty, Black Thunder. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [udupi1, mistsStone, vagamonKodaiMist]
  },
  {
    slug: "2day-malampuzha-ooty",
    title: "2-Day — Malampuzha &  Ooty",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Malampuzha, Ooty on this carefully crafted 2-day itinerary.",
    highlights: ["Malampuzha","Ooty"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Malampuzha, Ooty. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mistsStone, vagamonKodaiMist, kodaiMist]
  },
  {
    slug: "2day-athirapally-vazhachal-valpara",
    title: "2-Day — Athirapally &  Vazhachal &  Valpara",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Athirapally, Vazhachal, Valpara on this carefully crafted 2-day itinerary.",
    highlights: ["Athirapally","Vazhachal","Valpara"],
    fullDescription: "Join us for an unforgettable 2-day journey covering Athirapally, Vazhachal, Valpara. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [vagamonKodaiMist, kodaiMist, wayanad1]
  },
  {
    slug: "3day-wagamon-munnar-wonderla",
    title: "3-Day — Wagamon &  Munnar &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon, Munnar, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Wagamon","Munnar","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Wagamon, Munnar, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [ooty1, kanyakumari1, silverstorm1]
  },
  {
    slug: "3day-munnar-marayoor-wonderla",
    title: "3-Day — Munnar &  Marayoor &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Munnar, Marayoor, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Munnar","Marayoor","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Munnar, Marayoor, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kanyakumari1, silverstorm1, mysore1]
  },
  {
    slug: "3day-wagamon-munnar-idukki",
    title: "3-Day — Wagamon &  Munnar &  Idukki",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon, Munnar, Idukki on this carefully crafted 3-day itinerary.",
    highlights: ["Wagamon","Munnar","Idukki"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Wagamon, Munnar, Idukki. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [silverstorm1, mysore1, coorg1]
  },
  {
    slug: "3day-chikmanglore-belur-mysore",
    title: "3-Day — Chikmanglore &  Belur &  Mysore",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Chikmanglore, Belur, Mysore on this carefully crafted 3-day itinerary.",
    highlights: ["Chikmanglore","Belur","Mysore"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Chikmanglore, Belur, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mysore1, coorg1, bangalore1]
  },
  {
    slug: "3day-mysore-chikmanglore-wonderla",
    title: "3-Day — Mysore &  Chikmanglore &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Chikmanglore, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Mysore","Chikmanglore","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Mysore, Chikmanglore, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [coorg1, bangalore1, chikmagalur1]
  },
  {
    slug: "3day-coorg-mysore-banglore",
    title: "3-Day — Coorg &  Mysore &  Banglore",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Mysore, Banglore on this carefully crafted 3-day itinerary.",
    highlights: ["Coorg","Mysore","Banglore"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Coorg, Mysore, Banglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [bangalore1, chikmagalur1, belur1]
  },
  {
    slug: "3day-coorg-chikmanglore-mysore",
    title: "3-Day — Coorg &  Chikmanglore &  Mysore",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Mysore on this carefully crafted 3-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Mysore"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Coorg, Chikmanglore, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [chikmagalur1, belur1, hampi1]
  },
  {
    slug: "3day-mysore-coorg-wayanad",
    title: "3-Day — Mysore &  Coorg &  Wayanad",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Coorg, Wayanad on this carefully crafted 3-day itinerary.",
    highlights: ["Mysore","Coorg","Wayanad"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Mysore, Coorg, Wayanad. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [belur1, hampi1, goa1]
  },
  {
    slug: "3day-mysore-ooty-wonderla",
    title: "3-Day — Mysore &  Ooty &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, Ooty, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Mysore","Ooty","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Mysore, Ooty, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [hampi1, goa1, dandeli1]
  },
  {
    slug: "3day-kodaikanal-munnar-wonderla",
    title: "3-Day — Kodaikanal &  Munnar &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Munnar, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Kodaikanal","Munnar","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Kodaikanal, Munnar, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [goa1, dandeli1, malpe1]
  },
  {
    slug: "3day-kodaikanal-marayoor-munnar",
    title: "3-Day — Kodaikanal &  Marayoor &  Munnar",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Marayoor, Munnar on this carefully crafted 3-day itinerary.",
    highlights: ["Kodaikanal","Marayoor","Munnar"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Kodaikanal, Marayoor, Munnar. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [dandeli1, malpe1, udupi1]
  },
  {
    slug: "3day-kodaikanal-munnar-wagamon",
    title: "3-Day — Kodaikanal &  Munnar &  Wagamon",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Munnar, Wagamon on this carefully crafted 3-day itinerary.",
    highlights: ["Kodaikanal","Munnar","Wagamon"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Kodaikanal, Munnar, Wagamon. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [malpe1, udupi1, mistsStone]
  },
  {
    slug: "3day-kodaikanal-marayoor-wonderla",
    title: "3-Day — Kodaikanal &  Marayoor &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Marayoor, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Kodaikanal","Marayoor","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Kodaikanal, Marayoor, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [udupi1, mistsStone, vagamonKodaiMist]
  },
  {
    slug: "3day-wayand-ooty-wonderla",
    title: "3-Day — Wayand &  Ooty &  Wonderla",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wayand, Ooty, Wonderla on this carefully crafted 3-day itinerary.",
    highlights: ["Wayand","Ooty","Wonderla"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Wayand, Ooty, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mistsStone, vagamonKodaiMist, kodaiMist]
  },
  {
    slug: "3day-mookambika",
    title: "3-Day — Mookambika",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mookambika on this carefully crafted 3-day itinerary.",
    highlights: ["Mookambika"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Mookambika. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [vagamonKodaiMist, kodaiMist, wayanad1]
  },
  {
    slug: "3day-banglore-mysore-chikmanglore",
    title: "3-Day — Banglore &  Mysore &  Chikmanglore",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, Mysore, Chikmanglore on this carefully crafted 3-day itinerary.",
    highlights: ["Banglore","Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Banglore, Mysore, Chikmanglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kodaiMist, wayanad1, marayoor1]
  },
  {
    slug: "3day-rameswaram-kodaikanal-munnar",
    title: "3-Day — Rameswaram &  Kodaikanal &  Munnar",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Rameswaram, Kodaikanal, Munnar on this carefully crafted 3-day itinerary.",
    highlights: ["Rameswaram","Kodaikanal","Munnar"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Rameswaram, Kodaikanal, Munnar. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [wayanad1, marayoor1, munnar1]
  },
  {
    slug: "3day-uduppi-coorg-mysore",
    title: "3-Day — Uduppi &  Coorg &  Mysore",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Coorg, Mysore on this carefully crafted 3-day itinerary.",
    highlights: ["Uduppi","Coorg","Mysore"],
    fullDescription: "Join us for an unforgettable 3-day journey covering Uduppi, Coorg, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [marayoor1, munnar1, vagamon1]
  },
  {
    slug: "4day-ooty-wayand-wonderla",
    title: "4-Day — Ooty &  Wayand &  Wonderla",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ooty, Wayand, Wonderla on this carefully crafted 4-day itinerary.",
    highlights: ["Ooty","Wayand","Wonderla"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Ooty, Wayand, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mysore1, coorg1, bangalore1]
  },
  {
    slug: "4day-kodaikanal-marayoor-munnar-wonderla",
    title: "4-Day — Kodaikanal &  Marayoor &  Munnar &  Wonderla",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Marayoor, Munnar, Wonderla on this carefully crafted 4-day itinerary.",
    highlights: ["Kodaikanal","Marayoor","Munnar","Wonderla"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Kodaikanal, Marayoor, Munnar, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [coorg1, bangalore1, chikmagalur1]
  },
  {
    slug: "4day-kodaikanal-munnar-wagamon-wonderla",
    title: "4-Day — Kodaikanal &  Munnar &  Wagamon &  Wonderla",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Kodaikanal, Munnar, Wagamon, Wonderla on this carefully crafted 4-day itinerary.",
    highlights: ["Kodaikanal","Munnar","Wagamon","Wonderla"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Kodaikanal, Munnar, Wagamon, Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [bangalore1, chikmagalur1, belur1]
  },
  {
    slug: "4day-wagamon-ramakkalmedu-idukki-munnar-marayoor-w",
    title: "4-Day — Wagamon &  Ramakkalmedu &  Idukki &  Munnar &  Marayoor/Wonderla",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wagamon, Ramakkalmedu, Idukki, Munnar, Marayoor/Wonderla on this carefully crafted 4-day itinerary.",
    highlights: ["Wagamon","Ramakkalmedu","Idukki","Munnar"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Wagamon, Ramakkalmedu, Idukki, Munnar, Marayoor/Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [chikmagalur1, belur1, hampi1]
  },
  {
    slug: "4day-banglore-mysore-ooty-wayand-wonderla",
    title: "4-Day — Banglore &  Mysore &  ooty &  Wayand/Wonderla",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, Mysore, ooty, Wayand/Wonderla on this carefully crafted 4-day itinerary.",
    highlights: ["Banglore","Mysore","ooty","Wayand/Wonderla"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Banglore, Mysore, ooty, Wayand/Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [belur1, hampi1, goa1]
  },
  {
    slug: "4day-coorg-chikmanglore-belurmysore",
    title: "4-Day — Coorg &  Chikmanglore &  Belur & Mysore",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur,Mysore on this carefully crafted 4-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Mysore"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Coorg, Chikmanglore, Belur,Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [hampi1, goa1, dandeli1]
  },
  {
    slug: "4day-dendeli-uduppi-croog-chikmanglore",
    title: "4-Day — Dendeli &  Uduppi &  Croog &  Chikmanglore",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Dendeli, Uduppi, Croog, Chikmanglore on this carefully crafted 4-day itinerary.",
    highlights: ["Dendeli","Uduppi","Croog","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Dendeli, Uduppi, Croog, Chikmanglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [goa1, dandeli1, malpe1]
  },
  {
    slug: "4day-uduppi-coorg-sravanabelgola-chikmanglore-myso",
    title: "4-Day — Uduppi &  Coorg &  Sravanabelgola &  Chikmanglore &  Mysore",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Coorg, Sravanabelgola, Chikmanglore, Mysore on this carefully crafted 4-day itinerary.",
    highlights: ["Uduppi","Coorg","Sravanabelgola","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Uduppi, Coorg, Sravanabelgola, Chikmanglore, Mysore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [dandeli1, malpe1, udupi1]
  },
  {
    slug: "4day-myosore-chikmanglore-coorg-wayanad",
    title: "4-Day — Myosore &  chikmanglore &  Coorg &  Wayanad",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Myosore, chikmanglore, Coorg, Wayanad on this carefully crafted 4-day itinerary.",
    highlights: ["Myosore","chikmanglore","Coorg","Wayanad"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Myosore, chikmanglore, Coorg, Wayanad. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [malpe1, udupi1, mistsStone]
  },
  {
    slug: "4day-uduppi-dendeli-chikmanglore-coorg",
    title: "4-Day — Uduppi &  Dendeli &  Chikmanglore &  Coorg",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Dendeli, Chikmanglore, Coorg on this carefully crafted 4-day itinerary.",
    highlights: ["Uduppi","Dendeli","Chikmanglore","Coorg"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Uduppi, Dendeli, Chikmanglore, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [udupi1, mistsStone, vagamonKodaiMist]
  },
  {
    slug: "4day-coorg-mysore-mysore-wayand",
    title: "4-Day — Coorg &  Mysore  &  Mysore &  Wayand",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Mysore , Mysore, Wayand on this carefully crafted 4-day itinerary.",
    highlights: ["Coorg","Mysore","Mysore","Wayand"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Coorg, Mysore , Mysore, Wayand. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mistsStone, vagamonKodaiMist, kodaiMist]
  },
  {
    slug: "4day-banglore-mysore-chikmanglore-coorg",
    title: "4-Day — Banglore &  Mysore &  chikmanglore &  Coorg",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, Mysore, chikmanglore, Coorg on this carefully crafted 4-day itinerary.",
    highlights: ["Banglore","Mysore","chikmanglore","Coorg"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Banglore, Mysore, chikmanglore, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [vagamonKodaiMist, kodaiMist, wayanad1]
  },
  {
    slug: "4day-coorg-chikmanglore-belur-banglore",
    title: "4-Day — Coorg &  Chikmanglore &  Belur &  Banglore",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur, Banglore on this carefully crafted 4-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Banglore"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Coorg, Chikmanglore, Belur, Banglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [kodaiMist, wayanad1, marayoor1]
  },
  {
    slug: "4day-ooty-mysore-coorg-wayand",
    title: "4-Day — Ooty &  Mysore &  Coorg &  Wayand",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Ooty, Mysore, Coorg, Wayand on this carefully crafted 4-day itinerary.",
    highlights: ["Ooty","Mysore","Coorg","Wayand"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Ooty, Mysore, Coorg, Wayand. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [wayanad1, marayoor1, munnar1]
  },
  {
    slug: "4day-mysore-coorg-wayand-kozhikode",
    title: "4-Day — Mysore &  coorg &  Wayand &  Kozhikode",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Mysore, coorg, Wayand, Kozhikode on this carefully crafted 4-day itinerary.",
    highlights: ["Mysore","coorg","Wayand","Kozhikode"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Mysore, coorg, Wayand, Kozhikode. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [marayoor1, munnar1, vagamon1]
  },
  {
    slug: "4day-uduppi-goa-goa-chikmaglore",
    title: "4-Day — Uduppi &  Goa &  Goa &  Chikmaglore",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Goa, Goa, Chikmaglore on this carefully crafted 4-day itinerary.",
    highlights: ["Uduppi","Goa","Goa","Chikmaglore"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Uduppi, Goa, Goa, Chikmaglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [munnar1, vagamon1, alappuzha1]
  },
  {
    slug: "4day-rameswaram-kodaikanal-palani-kanyakumari",
    title: "4-Day — Rameswaram &  Kodaikanal &  Palani &  Kanyakumari",
    category: "4 Day Expedition",
    duration: "4 Days",
    durationInDays: 4,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Rameswaram, Kodaikanal, Palani, Kanyakumari on this carefully crafted 4-day itinerary.",
    highlights: ["Rameswaram","Kodaikanal","Palani","Kanyakumari"],
    fullDescription: "Join us for an unforgettable 4-day journey covering Rameswaram, Kodaikanal, Palani, Kanyakumari. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [vagamon1, alappuzha1, athirappilly1]
  },
  {
    slug: "5day-uduppi-dendeli-goagoa-chikmanglore",
    title: "5-Day — Uduppi &  Dendeli &  Goa & Goa &  Chikmanglore",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Dendeli, Goa,Goa, Chikmanglore on this carefully crafted 5-day itinerary.",
    highlights: ["Uduppi","Dendeli","Goa","Goa"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Uduppi, Dendeli, Goa,Goa, Chikmanglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [chikmagalur1, belur1, hampi1]
  },
  {
    slug: "5day-banglore-banglorewonderla-mysore-chikmanglore",
    title: "5-Day — Banglore &  BangloreWonderla &  Mysore &  Chikmanglore &  Coorg",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg on this carefully crafted 5-day itinerary.",
    highlights: ["Banglore","BangloreWonderla","Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [belur1, hampi1, goa1]
  },
  {
    slug: "5day-coorg-chikmanglore-belur-dendeli-uduppi",
    title: "5-Day — Coorg &  Chikmanglore &  Belur &  Dendeli &  Uduppi",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur, Dendeli, Uduppi on this carefully crafted 5-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Dendeli"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Coorg, Chikmanglore, Belur, Dendeli, Uduppi. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [hampi1, goa1, dandeli1]
  },
  {
    slug: "5day-wayandu-ooty-mysore-chikmanglore-coorg",
    title: "5-Day — Wayandu &  Ooty &  Mysore &  Chikmanglore &  Coorg",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wayandu, Ooty, Mysore, Chikmanglore, Coorg on this carefully crafted 5-day itinerary.",
    highlights: ["Wayandu","Ooty","Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Wayandu, Ooty, Mysore, Chikmanglore, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [goa1, dandeli1, malpe1]
  },
  {
    slug: "5day-coorg-chikmanglore-belur-mysore-banglore",
    title: "5-Day — Coorg &  Chikmanglore &  Belur &  Mysore &  Banglore",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur, Mysore, Banglore on this carefully crafted 5-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Mysore"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Coorg, Chikmanglore, Belur, Mysore, Banglore. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [dandeli1, malpe1, udupi1]
  },
  {
    slug: "5day-alapuzha-house-boat-wagamon-calveri-mount-idu",
    title: "5-Day — Alapuzha House boat &  Wagamon &  Calveri Mount &  Idukki dam &  Munnar &  Wonderla/Marayoor",
    category: "5 Day Expedition",
    duration: "5 Days",
    durationInDays: 5,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Alapuzha House boat, Wagamon, Calveri Mount, Idukki dam, Munnar, Wonderla/Marayoor on this carefully crafted 5-day itinerary.",
    highlights: ["Alapuzha House boat","Wagamon","Calveri Mount","Idukki dam"],
    fullDescription: "Join us for an unforgettable 5-day journey covering Alapuzha House boat, Wagamon, Calveri Mount, Idukki dam, Munnar, Wonderla/Marayoor. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [malpe1, udupi1, mistsStone]
  },
  {
    slug: "6day-uduppi-dendeli-goagoa-chikmanglore-coorg",
    title: "6-Day — Uduppi &  Dendeli &  Goa & Goa &  Chikmanglore &  Coorg",
    category: "6 Day Expedition",
    duration: "6 Days",
    durationInDays: 6,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Uduppi, Dendeli, Goa,Goa, Chikmanglore, Coorg on this carefully crafted 6-day itinerary.",
    highlights: ["Uduppi","Dendeli","Goa","Goa"],
    fullDescription: "Join us for an unforgettable 6-day journey covering Uduppi, Dendeli, Goa,Goa, Chikmanglore, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 6, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [goa1, dandeli1, malpe1]
  },
  {
    slug: "6day-banglore-banglorewonderla-mysore-chikmanglore",
    title: "6-Day — Banglore &  BangloreWonderla &  Mysore &  Chikmanglore &  Coorg &  Wayand",
    category: "6 Day Expedition",
    duration: "6 Days",
    durationInDays: 6,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg, Wayand on this carefully crafted 6-day itinerary.",
    highlights: ["Banglore","BangloreWonderla","Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 6-day journey covering Banglore, BangloreWonderla, Mysore, Chikmanglore, Coorg, Wayand. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 6, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [dandeli1, malpe1, udupi1]
  },
  {
    slug: "6day-coorg-chikmanglore-belur-dendeli-uduppi-kozhi",
    title: "6-Day — Coorg &  Chikmanglore &  Belur &  Dendeli &  Uduppi &  Kozhikode",
    category: "6 Day Expedition",
    duration: "6 Days",
    durationInDays: 6,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur, Dendeli, Uduppi, Kozhikode on this carefully crafted 6-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Dendeli"],
    fullDescription: "Join us for an unforgettable 6-day journey covering Coorg, Chikmanglore, Belur, Dendeli, Uduppi, Kozhikode. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 6, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [malpe1, udupi1, mistsStone]
  },
  {
    slug: "6day-wayandu-ooty-mysore-chikmanglorebelur-coorg",
    title: "6-Day — Wayandu &  Ooty &  Mysore &  Chikmanglore & Belur &  Coorg",
    category: "6 Day Expedition",
    duration: "6 Days",
    durationInDays: 6,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Wayandu, Ooty, Mysore, Chikmanglore,Belur, Coorg on this carefully crafted 6-day itinerary.",
    highlights: ["Wayandu","Ooty","Mysore","Chikmanglore"],
    fullDescription: "Join us for an unforgettable 6-day journey covering Wayandu, Ooty, Mysore, Chikmanglore,Belur, Coorg. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 6, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [udupi1, mistsStone, vagamonKodaiMist]
  },
  {
    slug: "6day-coorg-chikmanglore-belur-mysore-banglore-bang",
    title: "6-Day — Coorg &  Chikmanglore &  Belur &  Mysore &  Banglore &  Banglore Wonderla",
    category: "6 Day Expedition",
    duration: "6 Days",
    durationInDays: 6,
    price: consultPrice,
    image: default_cinematic,
    blurb: "Explore Coorg, Chikmanglore, Belur, Mysore, Banglore, Banglore Wonderla on this carefully crafted 6-day itinerary.",
    highlights: ["Coorg","Chikmanglore","Belur","Mysore"],
    fullDescription: "Join us for an unforgettable 6-day journey covering Coorg, Chikmanglore, Belur, Mysore, Banglore, Banglore Wonderla. This package is designed to offer the best experience, balancing travel, sightseeing, and relaxation.",
    itinerary: [
      { day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 2, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 3, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 4, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 5, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] },
      { day: 6, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Local cuisine", "Photography sessions", "Evening relaxation"] }
    ],
    inclusions: ["AC Coach", "Accommodations", "Breakfast & Dinner", "Sightseeing"],
    exclusions: ["Lunch", "Entry Permits", "Personal Expenses"],
    gallery: [mistsStone, vagamonKodaiMist, kodaiMist]
  }
];
