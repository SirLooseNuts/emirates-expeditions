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
