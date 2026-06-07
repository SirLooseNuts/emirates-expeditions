export interface Tour {
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
}

export interface Photo {
  src: string;
  alt: string;
  category: "Fleet" | "Expeditions" | "Moments";
}

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

export interface Lead {
  id: string;
  name: string;
  organization: string;
  designation: string;
  destination: string;
  pax: number;
  preferredDate: string;
  estimatedValue: number;
  phone: string;
  email: string;
  message: string;
  source: "WhatsApp" | "Website" | "Referral";
  status: "New" | "Contacted" | "Quote Sent" | "Hot";
  timeAgo: string;
  timeline: { label: string; time: string; done: boolean; pending?: boolean }[];
  converted: boolean;
}

export interface Booking {
  id: string;
  type: "School" | "College" | "Family" | "Corporate" | "Devotional";
  title: string;
  description: string;
  pax: number;
  price: string;
  amount: number;
  date: string;
  stage: "Enquiry" | "Quote Sent" | "Advance Paid" | "Confirmed" | "Completed";
  notes?: string;
}

export interface Partner {
  id: string;
  name: string;
  type: "Transport" | "Accommodation" | "Guide";
  contact: string;
  status: "Active" | "On Trip" | "Available";
  rating: number;
}

export interface TripSchedule {
  id: string;
  date: string;
  tourTitle: string;
  status: "Upcoming" | "In Progress" | "Completed";
  pax: number;
  assignedPartner: string;
}
