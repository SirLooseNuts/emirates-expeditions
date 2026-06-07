import type { Tour, Photo, Review, BusinessSettings, Lead, Booking, Partner, TripSchedule } from "./types";

const STORAGE_KEYS = {
  TOURS: "emirates_exp_tours",
  GALLERY: "emirates_exp_gallery",
  REVIEWS: "emirates_exp_reviews",
  SETTINGS: "emirates_exp_settings",
  LEADS: "emirates_exp_leads",
  BOOKINGS: "emirates_exp_bookings",
  PARTNERS: "emirates_exp_partners",
  SCHEDULES: "emirates_exp_schedules",
};

const defaultTours: Tour[] = [
  {
    slug: "1day-wonderla-kochi",
    title: "1-Day — Wonderla Amusement Park",
    category: "Day Trip",
    duration: "1 Day",
    durationInDays: 1,
    price: "₹750 / head",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop&q=80",
    blurb: "Experience thrill and fun at South India's largest amusement park in Kochi.",
    highlights: ["Wonderla Water Park", "Lulu Mall Kochi"],
    fullDescription:
      "Join us for an action-packed 1-day group trip to Wonderla Kochi. Perfect for school batches and college groups looking for high-energy dry rides and premium water attractions, followed by an evening shopping experience at Lulu Mall.",
    itinerary: [
      {
        day: 1,
        title: "Fun Rides & Shopping",
        activities: [
          "Early morning departure in luxury coach",
          "Full day entry to Wonderla",
          "Evening leisure time at Lulu Mall",
          "Return trip",
        ],
      },
    ],
    inclusions: ["AC Tourist Coach", "Park Entry Tickets", "Evening Snacks", "Trip Captain"],
    exclusions: ["Lunch", "Personal Purchases"],
    gallery: ["https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800"],
  },
  {
    slug: "2day-munnar-tea-gardens",
    title: "2-Day — Misty Munnar Escape",
    category: "2 Day Expedition",
    duration: "2 Days",
    durationInDays: 2,
    price: "₹1,800 / head",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
    blurb:
      "Explore deep tea estates, misty viewpoints, and the cool climates of Munnar hill station.",
    highlights: ["Matappetty Dam", "Eravikulam National Park", "Munnar Tea Museum"],
    fullDescription:
      "A curated 2-day group journey through the rolling green hills of Munnar. Perfect for students and families wanting to escape the heat, experience campfire nights, and see rare Nilgiri Tahr.",
    itinerary: [
      {
        day: 1,
        title: "Tea Estates & Campfire",
        activities: [
          "Sightseeing at Cheeyappara waterfalls",
          "Check-in at Munnar resort",
          "Tea garden photoshoot",
          "Evening buffet & campfire",
        ],
      },
      {
        day: 2,
        title: "National Park & Lakes",
        activities: [
          "Morning trek in Eravikulam National Park",
          "Boating at Mattupetty Dam",
          "Visit echo point",
          "Departure back to Trivandrum/Cochin",
        ],
      },
    ],
    inclusions: [
      "Premium Coach",
      "1-Night Resort Stay",
      "Buffet Breakfast & Dinner",
      "Campfire permissions",
    ],
    exclusions: ["Boating fees", "Lunch", "Park entry tickets"],
    gallery: ["https://images.unsplash.com/photo-1590050752117-238cb061295a?w=800"],
  },
  {
    slug: "3day-wayanad-adventure",
    title: "3-Day — Wild Wayanad Expedition",
    category: "3 Day Expedition",
    duration: "3 Days",
    durationInDays: 3,
    price: "₹3,200 / head",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    blurb: "Trek high peaks, visit prehistoric caves, and explore wildlife sanctuaries in Wayanad.",
    highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak Trek"],
    fullDescription:
      "Wayanad holds the best of Kerala's mountain highlands. Explore ancient petroglyphs at Edakkal Caves, hike to the heart-shaped lake on Chembra Peak, and boat at India's largest earth dam.",
    itinerary: [
      {
        day: 1,
        title: "Caves & Heritage",
        activities: [
          "Arrive in Wayanad",
          "Trek to Edakkal Caves",
          "View sunset at Lakkidi viewpoint",
          "Resort check-in & dinner",
        ],
      },
      {
        day: 2,
        title: "Peak Hike & Waterfalls",
        activities: [
          "Chembra Peak trek (heart lake)",
          "Soochipara Waterfalls bath",
          "DJ Night at resort",
        ],
      },
      {
        day: 3,
        title: "Dam & Bamboo Rafting",
        activities: [
          "Banasura Sagar Dam speedboating",
          "Kuruva Island bamboo rafting",
          "Return journey",
        ],
      },
    ],
    inclusions: [
      "AC Executive Bus",
      "2-Nights Premium Resort",
      "All Meals (Breakfast, Lunch, Dinner)",
      "DJ Sound System",
    ],
    exclusions: ["Camera charges", "Activity ticket fees"],
    gallery: [],
  },
];

const defaultPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    alt: "Luxury Tour Coach Fleet on Highway",
    category: "Fleet",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
    alt: "Happy Student Group Posing at Camp",
    category: "Moments",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    alt: "Sunset over Goa Beach",
    category: "Expeditions",
  },
  {
    src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
    alt: "Tea Gardens of Munnar Kerala",
    category: "Expeditions",
  },
];

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
  } catch (e) {
    console.error("Error setting item in localStorage", e);
  }
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

// Default Leads
const defaultLeads: Lead[] = [
  {
    id: "lead-1",
    name: "Sreekanth Felix",
    organization: "St. Francis School, Trivandrum",
    designation: "Faculty Coordinator",
    destination: "1-Day — Wonderla & Forum Mall / Lulumall",
    pax: 75,
    preferredDate: "2026-06-15",
    estimatedValue: 52500,
    phone: "+91 94460 12345",
    email: "sreekanth.f@stfrancis.edu.in",
    message: "We would like to book a 1-day trip to Wonderla Kochi for our high school batch.",
    source: "WhatsApp",
    status: "New",
    timeAgo: "2h ago",
    timeline: [
      { label: "Enquiry received via WhatsApp", time: "Today, 10:42 AM", done: true },
      { label: "Lead auto-created", time: "Today, 10:42 AM", done: true },
      { label: "Send quote / call back", time: "Pending", done: false, pending: true },
      { label: "Advance payment", time: "—", done: false },
      { label: "Trip confirmed & bus assigned", time: "—", done: false }
    ],
    converted: false
  },
  {
    id: "lead-2",
    name: "Priya Pillai",
    organization: "Govt. Polytechnic, Palakkad",
    designation: "Faculty Head",
    destination: "3-Day — Munnar & Marayoor & Wonderla",
    pax: 95,
    preferredDate: "2026-06-20",
    estimatedValue: 304000,
    phone: "+91 95620 98765",
    email: "priya.pillai@gptcplkd.ac.in",
    message: "Interested in a 3-day Munnar itinerary for college students. Campfire and resort stay preferred.",
    source: "Website",
    status: "New",
    timeAgo: "5h ago",
    timeline: [
      { label: "Enquiry received via Website", time: "Today, 07:15 AM", done: true },
      { label: "Lead auto-created", time: "Today, 07:15 AM", done: true },
      { label: "Send quote / call back", time: "Pending", done: false, pending: true }
    ],
    converted: false
  },
  {
    id: "lead-3",
    name: "Mohammed Kabeer",
    organization: "Masjid Committee TVM",
    designation: "Secretary",
    destination: "1-Day — Athirapally & Vazhachal",
    pax: 52,
    preferredDate: "2026-06-12",
    estimatedValue: 39000,
    phone: "+91 98450 55443",
    email: "kabeer.masjidtvm@gmail.com",
    message: "Needs single day trip for family and devotional members.",
    source: "WhatsApp",
    status: "Contacted",
    timeAgo: "1d ago",
    timeline: [
      { label: "Enquiry received via WhatsApp", time: "Yesterday, 04:30 PM", done: true },
      { label: "Lead auto-created", time: "Yesterday, 04:30 PM", done: true },
      { label: "Contacted customer", time: "Yesterday, 06:00 PM", done: true },
      { label: "Send quote", time: "Pending", done: false, pending: true }
    ],
    converted: false
  },
  {
    id: "lead-4",
    name: "Rahul Nair",
    organization: "Nair Family Group, Kochi",
    designation: "Group Leader",
    destination: "2-Day — Ooty & Wayanad",
    pax: 38,
    preferredDate: "2026-06-25",
    estimatedValue: 68400,
    phone: "+91 94950 11223",
    email: "rahul.nair.kochi@gmail.com",
    message: "Family leisure trip. Need good accommodation with child friendly spots.",
    source: "Referral",
    status: "Quote Sent",
    timeAgo: "1d ago",
    timeline: [
      { label: "Enquiry received via Referral", time: "Yesterday, 11:20 AM", done: true },
      { label: "Lead auto-created", time: "Yesterday, 11:20 AM", done: true },
      { label: "Call details gathered", time: "Yesterday, 11:45 AM", done: true },
      { label: "Quote sent", time: "Yesterday, 03:00 PM", done: true },
      { label: "Advance payment", time: "Pending", done: false, pending: true }
    ],
    converted: false
  },
  {
    id: "lead-5",
    name: "Jijo Thomas",
    organization: "Technopark HR, Trivandrum",
    designation: "HR Manager",
    destination: "2-Day — Ooty & Wayanad",
    pax: 80,
    preferredDate: "2026-06-18",
    estimatedValue: 144000,
    phone: "+91 97440 99887",
    email: "jijo.t@technopark.org",
    message: "Corporate weekend getaway. Team building activities needed.",
    source: "Website",
    status: "Hot",
    timeAgo: "2d ago",
    timeline: [
      { label: "Enquiry received via Website", time: "5 Jun, 09:30 AM", done: true },
      { label: "Lead auto-created", time: "5 Jun, 09:30 AM", done: true },
      { label: "Quote sent", time: "5 Jun, 11:00 AM", done: true },
      { label: "Customer follow up (Hot)", time: "Yesterday, 10:00 AM", done: true },
      { label: "Awaiting final confirmation", time: "Pending", done: false, pending: true }
    ],
    converted: false
  }
];

// Default Bookings
const defaultBookings: Booking[] = [
  {
    id: "bk-1",
    type: "School",
    title: "St. Francis School",
    description: "1-Day — Wonderla & Forum Mall",
    pax: 70,
    price: "₹52,500",
    amount: 52500,
    date: "Enquired 2 Jun",
    stage: "Enquiry"
  },
  {
    id: "bk-2",
    type: "College",
    title: "Govt. Poly Palakkad",
    description: "3-Day — Munnar & Marayoor & Wonderla",
    pax: 95,
    price: "₹3,04,000",
    amount: 304000,
    date: "Enquired 1 Jun",
    stage: "Enquiry"
  },
  {
    id: "bk-3",
    type: "Family",
    title: "Nair Family Group",
    description: "2-Day — Ooty & Wayanad",
    pax: 38,
    price: "₹68,400",
    amount: 68400,
    date: "Enquired 31 May",
    stage: "Enquiry"
  },
  {
    id: "bk-4",
    type: "Devotional",
    title: "Masjid Committee TVM",
    description: "1-Day — Athirapally & Vazhachal",
    pax: 52,
    price: "₹39,000",
    amount: 39000,
    date: "Enquired 30 May",
    stage: "Enquiry"
  },
  {
    id: "bk-5",
    type: "Corporate",
    title: "Kinfra Park Staff",
    description: "2-Day — Kodaikanal & Munnar",
    pax: 60,
    price: "₹1,08,000",
    amount: 108000,
    date: "Enquired 30 May",
    stage: "Enquiry"
  },
  {
    id: "bk-6",
    type: "School",
    title: "GHSS Kazhakuttom",
    description: "3-Day — Wagamon & Munnar & Wonderla",
    pax: 110,
    price: "₹3,52,000",
    amount: 352000,
    date: "Quoted 1 Jun",
    stage: "Quote Sent"
  },
  {
    id: "bk-7",
    type: "College",
    title: "MG College Trivandrum",
    description: "5-Day — Goa & Dandeli & Chikmagalur",
    pax: 120,
    price: "₹6,96,000",
    amount: 696000,
    date: "Quoted 29 May",
    stage: "Quote Sent"
  },
  {
    id: "bk-8",
    type: "Family",
    title: "Joseph Family Tours",
    description: "4-Day — Ooty & Wayanad & Wonderla",
    pax: 45,
    price: "₹2,02,500",
    amount: 202500,
    date: "Quoted 28 May",
    stage: "Quote Sent"
  },
  {
    id: "bk-9",
    type: "Corporate",
    title: "Technopark HR Team",
    description: "2-Day — Ooty & Wayanad",
    pax: 80,
    price: "₹1,44,000",
    amount: 144000,
    date: "Quoted 27 May",
    stage: "Quote Sent"
  },
  {
    id: "bk-10",
    type: "College",
    title: "College of Engineering",
    description: "5-Day — Goa & Chikmagalur",
    pax: 60,
    price: "₹3,48,000",
    amount: 348000,
    date: "Trip 15 Jun",
    stage: "Advance Paid"
  },
  {
    id: "bk-11",
    type: "School",
    title: "Loyola School TVM",
    description: "1-Day — Athirapally & Silverstrom",
    pax: 85,
    price: "₹63,750",
    amount: 63750,
    date: "Trip 8 Jun",
    stage: "Advance Paid"
  },
  {
    id: "bk-12",
    type: "Corporate",
    title: "Dhanvanthari Tours",
    description: "4-Day — Kodaikanal & Munnar",
    pax: 50,
    price: "₹2,25,000",
    amount: 225000,
    date: "Trip 12 Jun",
    stage: "Advance Paid"
  },
  {
    id: "bk-13",
    type: "School",
    title: "GHSS Thonnakkal",
    description: "3-Day — Munnar & Marayoor & Wonderla",
    pax: 40,
    price: "₹1,28,000",
    amount: 128000,
    date: "Trip 5 Jun ✓",
    stage: "Confirmed"
  },
  {
    id: "bk-14",
    type: "Corporate",
    title: "Kinfra Industrial Park",
    description: "2-Day — Ooty & Wayanad",
    pax: 100,
    price: "₹1,80,000",
    amount: 180000,
    date: "Trip 7 Jun ✓",
    stage: "Confirmed"
  },
  {
    id: "bk-15",
    type: "College",
    title: "NSS College Ottappalam",
    description: "3-Day — Wagamon & Munnar & Wonderla",
    pax: 130,
    price: "₹4,16,000",
    amount: 416000,
    date: "Trip 10 Jun ✓",
    stage: "Confirmed"
  },
  {
    id: "bk-16",
    type: "Family",
    title: "Nambiar Family",
    description: "2-Day — Kodaikanal & Munnar",
    pax: 30,
    price: "₹54,000",
    amount: 54000,
    date: "Trip 14 Jun ✓",
    stage: "Confirmed"
  },
  {
    id: "bk-17",
    type: "School",
    title: "BVM School Kollam",
    description: "3-Day — Munnar & Marayoor & Wonderla",
    pax: 75,
    price: "₹2,40,000",
    amount: 240000,
    date: "28 May · ★ 4.9",
    stage: "Completed"
  },
  {
    id: "bk-18",
    type: "College",
    title: "TKM College Kollam",
    description: "5-Day — Bangalore & Mysore & Coorg",
    pax: 90,
    price: "₹5,22,000",
    amount: 522000,
    date: "24 May · ★ 5.0",
    stage: "Completed"
  }
];

// Default Partners
const defaultPartners: Partner[] = [
  { id: "pt-1", name: "Kerala Tourist Coaches", type: "Transport", contact: "+91 94000 12345", status: "Available", rating: 4.8 },
  { id: "pt-2", name: "Misty Mountain Resort", type: "Accommodation", contact: "+91 4865 230222", status: "On Trip", rating: 4.7 },
  { id: "pt-3", name: "Safeer Captain", type: "Guide", contact: "+91 99460 54321", status: "Active", rating: 4.9 },
  { id: "pt-4", name: "Orange County Coorg", type: "Accommodation", contact: "+91 8274 258400", status: "Available", rating: 4.9 },
  { id: "pt-5", name: "Anil Bus Fleet", type: "Transport", contact: "+91 70120 70120", status: "Available", rating: 4.6 }
];

// Default TripSchedules
const defaultSchedules: TripSchedule[] = [
  { id: "sch-1", date: "2026-06-08", tourTitle: "Loyola School TVM — Athirapally & Silverstrom", pax: 85, assignedPartner: "Kerala Tourist Coaches", status: "Upcoming" },
  { id: "sch-2", date: "2026-06-12", tourTitle: "Dhanvanthari Tours — Kodaikanal & Munnar", pax: 50, assignedPartner: "Misty Mountain Resort", status: "Upcoming" },
  { id: "sch-3", date: "2026-06-15", tourTitle: "College of Engineering — Goa & Chikmagalur", pax: 60, assignedPartner: "Safeer Captain", status: "Upcoming" }
];

// Leads getters/setters
export function getStoredLeads(): Lead[] {
  const stored = safeGetItem(STORAGE_KEYS.LEADS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultLeads;
    }
  }
  saveStoredLeads(defaultLeads);
  return defaultLeads;
}

export function saveStoredLeads(leads: Lead[]): void {
  safeSetItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
}

// Bookings getters/setters
export function getStoredBookings(): Booking[] {
  const stored = safeGetItem(STORAGE_KEYS.BOOKINGS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultBookings;
    }
  }
  saveStoredBookings(defaultBookings);
  return defaultBookings;
}

export function saveStoredBookings(bookings: Booking[]): void {
  safeSetItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
}

// Partners getters/setters
export function getStoredPartners(): Partner[] {
  const stored = safeGetItem(STORAGE_KEYS.PARTNERS);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultPartners;
    }
  }
  saveStoredPartners(defaultPartners);
  return defaultPartners;
}

export function saveStoredPartners(partners: Partner[]): void {
  safeSetItem(STORAGE_KEYS.PARTNERS, JSON.stringify(partners));
}

// Schedules getters/setters
export function getStoredSchedules(): TripSchedule[] {
  const stored = safeGetItem(STORAGE_KEYS.SCHEDULES);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultSchedules;
    }
  }
  saveStoredSchedules(defaultSchedules);
  return defaultSchedules;
}

export function saveStoredSchedules(schedules: TripSchedule[]): void {
  safeSetItem(STORAGE_KEYS.SCHEDULES, JSON.stringify(schedules));
}
