import type { Tour, Photo, Review, BusinessSettings } from "./types";

const STORAGE_KEYS = {
  TOURS: "emirates_exp_tours",
  GALLERY: "emirates_exp_gallery",
  REVIEWS: "emirates_exp_reviews",
  SETTINGS: "emirates_exp_settings",
};

const defaultTours: Tour[] = [
  {
    slug: "1day-wonderla-kochi",
    title: "1-Day — Wonderla Amusement Park",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: "₹750 / head",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop&q=80",
    blurb: "Experience thrill and fun at South India's largest amusement park in Kochi.",
    highlights: ["Wonderla Water Park", "Lulu Mall Kochi"],
    fullDescription: "Join us for an action-packed 1-day group trip to Wonderla Kochi. Perfect for school batches and college groups looking for high-energy dry rides and premium water attractions, followed by an evening shopping experience at Lulu Mall.",
    itinerary: [
      { day: 1, title: "Fun Rides & Shopping", activities: ["Early morning departure in luxury coach", "Full day entry to Wonderla", "Evening leisure time at Lulu Mall", "Return trip"] }
    ],
    inclusions: ["AC Tourist Coach", "Park Entry Tickets", "Evening Snacks", "Trip Captain"],
    exclusions: ["Lunch", "Personal Purchases"],
    gallery: ["https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800"]
  },
  {
    slug: "2day-munnar-tea-gardens",
    title: "2-Day — Misty Munnar Escape",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: "₹1,800 / head",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
    blurb: "Explore deep tea estates, misty viewpoints, and the cool climates of Munnar hill station.",
    highlights: ["Matappetty Dam", "Eravikulam National Park", "Munnar Tea Museum"],
    fullDescription: "A curated 2-day group journey through the rolling green hills of Munnar. Perfect for students and families wanting to escape the heat, experience campfire nights, and see rare Nilgiri Tahr.",
    itinerary: [
      { day: 1, title: "Tea Estates & Campfire", activities: ["Sightseeing at Cheeyappara waterfalls", "Check-in at Munnar resort", "Tea garden photoshoot", "Evening buffet & campfire"] },
      { day: 2, title: "National Park & Lakes", activities: ["Morning trek in Eravikulam National Park", "Boating at Mattupetty Dam", "Visit echo point", "Departure back to Trivandrum/Cochin"] }
    ],
    inclusions: ["Premium Coach", "1-Night Resort Stay", "Buffet Breakfast & Dinner", "Campfire permissions"],
    exclusions: ["Boating fees", "Lunch", "Park entry tickets"],
    gallery: ["https://images.unsplash.com/photo-1590050752117-238cb061295a?w=800"]
  },
  {
    slug: "3day-wayanad-adventure",
    title: "3-Day — Wild Wayanad Expedition",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: "₹3,200 / head",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    blurb: "Trek high peaks, visit prehistoric caves, and explore wildlife sanctuaries in Wayanad.",
    highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak Trek"],
    fullDescription: "Wayanad holds the best of Kerala's mountain highlands. Explore ancient petroglyphs at Edakkal Caves, hike to the heart-shaped lake on Chembra Peak, and boat at India's largest earth dam.",
    itinerary: [
      { day: 1, title: "Caves & Heritage", activities: ["Arrive in Wayanad", "Trek to Edakkal Caves", "View sunset at Lakkidi viewpoint", "Resort check-in & dinner"] },
      { day: 2, title: "Peak Hike & Waterfalls", activities: ["Chembra Peak trek (heart lake)", "Soochipara Waterfalls bath", "DJ Night at resort"] },
      { day: 3, title: "Dam & Bamboo Rafting", activities: ["Banasura Sagar Dam speedboating", "Kuruva Island bamboo rafting", "Return journey"] }
    ],
    inclusions: ["AC Executive Bus", "2-Nights Premium Resort", "All Meals (Breakfast, Lunch, Dinner)", "DJ Sound System"],
    exclusions: ["Camera charges", "Activity ticket fees"],
    gallery: []
  }
];

const defaultPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    alt: "Luxury Tour Coach Fleet on Highway",
    category: "Fleet"
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
    alt: "Happy Student Group Posing at Camp",
    category: "Moments"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    alt: "Sunset over Goa Beach",
    category: "Expeditions"
  },
  {
    src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
    alt: "Tea Gardens of Munnar Kerala",
    category: "Expeditions"
  }
];

const defaultReviews: Review[] = [
  {
    id: "rev-1",
    quote: "WE'VE TAKEN THREE BATCHES OF STUDENTS WITH EMIRATES EXPEDITION. THE BUSES, THE GUIDES, THE FOOD — EVERYTHING WAS SPOT ON. THE KIDS STILL TALK ABOUT MUNNAR.",
    author: "Faculty Coordinator",
    location: "GHSS Thonnakkal",
    rating: 5,
    tripType: "Munnar Expedition (KTM 3.0)",
    approved: true,
    date: "2026-04-15",
  },
  {
    id: "rev-2",
    quote: "THE 3-DAY WAYANAD TRIP WAS EXCEPTIONAL. THE SIGNATURE COACH HAD AN AMAZING SOUND SYSTEM AND DANCE LIGHTING. HIGHLY RECOMMEND FOR COLLEGE TOURS!",
    author: "Nikhil S.",
    location: "St. Thomas College, Kozhencherry",
    rating: 5,
    tripType: "Wayanad Adventure",
    approved: true,
    date: "2026-05-10",
  },
  {
    id: "rev-3",
    quote: "SUPERB EXPERIENCE ON OUR MUNNAR-WONDERLA TOUR. THE TRIP CAPTAIN WAS EXTREMELY HELPFUL AND MANAGED ALL PERMITS AND SIGHTSEEING SMOOTHLY.",
    author: "Anjali Krishna",
    location: "LBS Institute of Technology for Women",
    rating: 5,
    tripType: "Munnar & Wonderla",
    approved: true,
    date: "2026-05-18",
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

const isBrowser = typeof window !== "undefined";

function safeGetItem(key: string): string | null {
  if (!isBrowser) return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function getStoredTours(): Tour[] {
  const stored = safeGetItem(STORAGE_KEYS.TOURS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultTours;
    }
  }
  saveStoredTours(defaultTours);
  return defaultTours;
}

export function saveStoredTours(tours: Tour[]): void {
  safeSetItem(STORAGE_KEYS.TOURS, JSON.stringify(tours));
}

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
