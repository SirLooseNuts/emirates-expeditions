import { tours as defaultTours, Tour } from "@/data/tours";
import { galleryPhotos as defaultPhotos, Photo } from "@/data/gallery";

export interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  tripType: string;
  approved: boolean;
  date: string;
}

export interface BusinessSettings {
  name: string;
  tagline: string;
  phone1: string;
  phone2: string;
  email: string;
  instagram: string;
  whatsapp: string;
  address: string;
}

const STORAGE_KEYS = {
  TOURS: "emirates_exp_tours",
  GALLERY: "emirates_exp_gallery",
  REVIEWS: "emirates_exp_reviews",
  SETTINGS: "emirates_exp_settings",
};

const defaultReviews: Review[] = [
  {
    id: "rev-1",
    quote:
      "WE'VE TAKEN THREE BATCHES OF STUDENTS WITH EMIRATES EXPEDITION. THE BUSES, THE GUIDES, THE FOOD — EVERYTHING WAS SPOT ON. THE KIDS STILL TALK ABOUT MUNNAR.",
    author: "Faculty Coordinator",
    location: "GHSS Thonnakkal",
    rating: 5,
    tripType: "Munnar Expedition (KTM 3.0)",
    approved: true,
    date: "2026-04-15",
  },
  {
    id: "rev-2",
    quote:
      "THE 3-DAY WAYANAD TRIP WAS EXCEPTIONAL. THE SIGNATURE COACH HAD AN AMAZING SOUND SYSTEM AND DANCE LIGHTING. HIGHLY RECOMMEND FOR COLLEGE TOURS!",
    author: "Nikhil S.",
    location: "St. Thomas College, Kozhencherry",
    rating: 5,
    tripType: "Wayanad Adventure",
    approved: true,
    date: "2026-05-10",
  },
  {
    id: "rev-3",
    quote:
      "SUPERB EXPERIENCE ON OUR MUNNAR-WONDERLA TOUR. THE TRIP CAPTAIN WAS EXTREMELY HELPFUL AND MANAGED ALL PERMITS AND SIGHTSEEING SMOOTHLY.",
    author: "Anjali Krishna",
    location: "LBS Institute of Technology for Women",
    rating: 5,
    tripType: "Munnar & Wonderla",
    approved: true,
    date: "2026-05-18",
  },
  {
    id: "rev-4",
    quote:
      "A WELL-PLANNED 4-DAY EXPEDITION TO OOTY, MYSORE & COORG. COMFORTABLE HOTELS, TIMELY TRADITIONAL KERALA FOOD, AND THE TOURIST BUS WAS ABSOLUTE VIBES.",
    author: "Prof. Ramachandran",
    location: "Mar Ivanios College, Trivandrum",
    rating: 5,
    tripType: "Ooty & Mysore & Coorg",
    approved: true,
    date: "2026-05-24",
  },
];

const defaultSettings: BusinessSettings = {
  name: "Emirates Expedition",
  tagline: "A journey of thousand miles",
  phone1: "+91 70127 75400",
  phone2: "+91 79945 49785",
  email: "emiratesexpedition25@gmail.com",
  instagram: "https://www.instagram.com/emirates_expedition_/",
  whatsapp: "917012775400",
  address: "Thattathumala, Trivandrum, Kerala, India",
};

// Utility to safely interact with localStorage
const isBrowser = typeof window !== "undefined";

function safeGetItem(key: string): string | null {
  if (!isBrowser) return null;
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error("Error reading localStorage", e);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error("Error writing to localStorage", e);
  }
}

// 1. TOURS API
export function getStoredTours(): Tour[] {
  const stored = safeGetItem(STORAGE_KEYS.TOURS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultTours;
    }
  }
  // If first time, let's fix spelling errors in default tours and write them
  const correctedTours = correctSpellingAndPricesInTours(defaultTours);
  saveStoredTours(correctedTours);
  return correctedTours;
}

export function saveStoredTours(tours: Tour[]): void {
  safeSetItem(STORAGE_KEYS.TOURS, JSON.stringify(tours));
}

// Helper to correct typos and inject prices on default data
function correctSpellingAndPricesInTours(toursList: Tour[]): Tour[] {
  return toursList.map((t) => {
    const title = t.title
      .replace(/\bWayand\b/g, "Wayanad")
      .replace(/\bWayandu\b/g, "Wayanad")
      .replace(/\bMyosre\b/g, "Mysore")
      .replace(/\bBanglore\b/g, "Bangalore")
      .replace(/\bChikmanglore\b/g, "Chikmagalur")
      .replace(/\bUduppi\b/g, "Udupi")
      .replace(/\bSravanabelgola\b/g, "Shravanabelagola")
      .replace(/\bCroög\b/g, "Coorg")
      .replace(/\bDendeli\b/g, "Dandeli")
      .replace(/\bGoa & Goa\b/g, "Goa")
      .replace(/\bGoa,Goa\b/g, "Goa");

    const slug = t.slug
      .replace(/\bwayand\b/g, "wayanad")
      .replace(/\bwayandu\b/g, "wayanad")
      .replace(/\bmyosre\b/g, "mysore")
      .replace(/\bbanglore\b/g, "bangalore")
      .replace(/\bchikmanglore\b/g, "chikmagalur")
      .replace(/\buduppi\b/g, "udupi")
      .replace(/\bsravanabelgola\b/g, "shravanabelagola")
      .replace(/\bcroög\b/g, "coorg")
      .replace(/\bdendeli\b/g, "dandeli")
      .replace(/\bgoagoa\b/g, "goa");

    const blurb = t.blurb
      .replace(/\bWayand\b/g, "Wayanad")
      .replace(/\bWayandu\b/g, "Wayanad")
      .replace(/\bMyosre\b/g, "Mysore")
      .replace(/\bBanglore\b/g, "Bangalore")
      .replace(/\bChikmanglore\b/g, "Chikmagalur")
      .replace(/\bUduppi\b/g, "Udupi")
      .replace(/\bGoa,Goa\b/g, "Goa");

    const fullDescription = t.fullDescription
      .replace(/\bWayand\b/g, "Wayanad")
      .replace(/\bWayandu\b/g, "Wayanad")
      .replace(/\bMyosre\b/g, "Mysore")
      .replace(/\bBanglore\b/g, "Bangalore")
      .replace(/\bChikmanglore\b/g, "Chikmagalur")
      .replace(/\bUduppi\b/g, "Udupi")
      .replace(/\bGoa,Goa\b/g, "Goa");

    const highlights = t.highlights
      .map((h) =>
        h
          .replace(/\bWayand\b/g, "Wayanad")
          .replace(/\bWayandu\b/g, "Wayanad")
          .replace(/\bMyosre\b/g, "Mysore")
          .replace(/\bBanglore\b/g, "Bangalore")
          .replace(/\bChikmanglore\b/g, "Chikmagalur")
          .replace(/\bUduppi\b/g, "Udupi")
          .replace(/\bGoa\b/g, "Goa"),
      )
      .filter((item, index, self) => self.indexOf(item) === index); // Remove duplicate Goa highlights

    // Assign starting prices depending on duration
    let price = t.price;
    if (price === "Consult for Pricing" || !price) {
      if (t.durationInDays === 1) price = "₹750 / head";
      else if (t.durationInDays === 2) price = "₹1,800 / head";
      else if (t.durationInDays === 3) price = "₹3,200 / head";
      else if (t.durationInDays === 4) price = "₹4,500 / head";
      else if (t.durationInDays === 5) price = "₹5,800 / head";
      else price = "₹7,200 / head";
    }

    return {
      ...t,
      slug,
      title,
      blurb,
      fullDescription,
      highlights,
      price,
    };
  });
}

// 2. GALLERY API
export function getStoredPhotos(): Photo[] {
  const stored = safeGetItem(STORAGE_KEYS.GALLERY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultPhotos;
    }
  }
  saveStoredPhotos(defaultPhotos);
  return defaultPhotos;
}

export function saveStoredPhotos(photos: Photo[]): void {
  safeSetItem(STORAGE_KEYS.GALLERY, JSON.stringify(photos));
}

// 3. REVIEWS API
export function getStoredReviews(): Review[] {
  const stored = safeGetItem(STORAGE_KEYS.REVIEWS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultReviews;
    }
  }
  saveStoredReviews(defaultReviews);
  return defaultReviews;
}

export function saveStoredReviews(reviews: Review[]): void {
  safeSetItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
}

// 4. SETTINGS API
export function getStoredSettings(): BusinessSettings {
  const stored = safeGetItem(STORAGE_KEYS.SETTINGS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultSettings;
    }
  }
  saveStoredSettings(defaultSettings);
  return defaultSettings;
}

export function saveStoredSettings(settings: BusinessSettings): void {
  safeSetItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}
