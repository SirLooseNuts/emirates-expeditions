
// Core Assets - Using requested names from gallery
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
  // 🗓️ ONE DAY PACKAGES
  {
    slug: "wayanad-1day",
    title: "1-Day — Wayanad Wildlife",
    category: "Jungle & Nature",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: wayanad1,
    blurb: "A focused jungle expedition through the heart of Wayanad's sanctuaries.",
    highlights: ["Muthanga Safari", "Banasura Sagar Dam", "Lakkidi Viewpoint"],
    fullDescription: "Maximize your day in the green heart of Kerala. This itinerary is built for nature lovers who want to experience the raw wilderness of Wayanad in a single daylight loop.",
    itinerary: [{ day: 1, title: "Wild Wayanad", activities: ["Sunrise safari at Muthanga", "Traditional Wayanad lunch", "Banasura Sagar Dam exploration", "Lakkidi viewpoint at sunset"] }],
    inclusions: ["AC Coach", "Safari Logistics", "Lunch", "Trip Captain"],
    exclusions: ["Camera Fees", "Personal Snacks"],
    gallery: [wayanad1, marayoor1, munnar1]
  },
  {
    slug: "marayoor-1day",
    title: "1-Day — Marayoor Sandalwood",
    category: "Heritage & Forest",
    duration: "1 Day",
    durationInDays: 1,
    price: consultPrice,
    image: marayoor1,
    blurb: "Explore the ancient sandalwood forests and prehistoric stone dolmens.",
    highlights: ["Sandalwood Forest Walk", "Stone Dolmens", "Lakkam Falls"],
    fullDescription: "A journey back in time. Marayoor offers a unique blend of natural scents and prehistoric history that you can't find anywhere else in the world.",
    itinerary: [{ day: 1, title: "Prehistoric Loop", activities: ["Morning walk through sandalwood forests", "Exploring Muniyaras (Dolmens)", "Afternoon dip at Lakkam Falls", "Traditional village tea break"] }],
    inclusions: ["AC Coach", "Heritage Guide", "Lunch"],
    exclusions: ["Personal Gear"],
    gallery: [marayoor1, munnar1, vagamon1]
  },
  {
      slug: "munnar-1day",
      title: "1-Day — Munnar Tea Mist",
      category: "Mountain Trails",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: munnar1,
      blurb: "The classic Munnar experience distilled into a perfect high-altitude day trip.",
      highlights: ["Tea Museum", "Mathikettan Shola", "Echo Point"],
      fullDescription: "Winding roads, emerald slopes, and the perfect cup of tea. Our 1-day Munnar loop covers the must-see highlights without the rush.",
      itinerary: [{ day: 1, title: "The Emerald Day", activities: ["Tea museum tour", "Gap Road scenic drive", "Echo Point shouting session", "Shopping at Munnar town"] }],
      inclusions: ["AC Coach", "Sightseeing", "Lunch", "Tea Tasting"],
      exclusions: ["Boating tickets"],
      gallery: [munnar1, vagamon1, alappuzha1]
  },
  {
      slug: "vagamon-1day",
      title: "1-Day — Vagamon Pines",
      category: "Meadows & Highlands",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: vagamon1,
      blurb: "Walk through mist-shrouded pine forests and rolling high-altitude meadows.",
      highlights: ["Pine Forest", "Suicide Point", "Vagamon Meadows"],
      fullDescription: "Perfect for a quick escape. Vagamon offers a serene landscape of meadows and pine forests that feel a world away from the city.",
      itinerary: [{ day: 1, title: "Mist & Meadows", activities: ["Pine forest trek", "Meadow walk", "Thangal Para viewpoint", "Kurisu Mala sunset"] }],
      inclusions: ["AC Coach", "Guided Treks", "Lunch"],
      exclusions: ["Paragliding costs"],
      gallery: [vagamon1, munnar1, alappuzha1]
  },
  {
      slug: "alappuzha-1day",
      title: "1-Day — Alleppey Backwaters",
      category: "Waterways",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: alappuzha1,
      blurb: "Cruise the intricate network of Kerala's famous backwaters on a private motorboat.",
      highlights: ["Houseboat Cruise", "Village Life", "Shikkara Ride"],
      fullDescription: "Experience the soul of Kerala. Navigate through the narrow canals, witness the local village life, and enjoy a traditional meal on the water.",
      itinerary: [{ day: 1, title: "The Liquid Road", activities: ["Motorboat boarding", "Canal cruising", "Traditional Sadhya lunch", "Sunset at Alleppey beach"] }],
      inclusions: ["Boat Charter", "Traditional Lunch", "Trip Captain"],
      exclusions: ["Water sports at beach"],
      gallery: [alappuzha1, athirappilly1, ramakkalmedu1]
  },
  {
      slug: "athirappilly-1day",
      title: "1-Day — Athirappilly Roar",
      category: "Waterfalls",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: athirappilly1,
      blurb: "Witness the sheer power of the 'Niagara of India' in a thunderous day trip.",
      highlights: ["Athirappilly Falls", "Vazhachal Rapids", "Silver Storm (Optional)"],
      fullDescription: "Stand at the base of the mighty Athirappilly falls and feel the mist. A high-energy trip for groups and families.",
      itinerary: [{ day: 1, title: "The Mighty Drop", activities: ["Athirappilly fall base trek", "Vazhachal rapids visit", "Riverside lunch", "Forest drive"] }],
      inclusions: ["AC Coach", "Entry Permits", "Lunch"],
      exclusions: ["Amusement park tickets"],
      gallery: [athirappilly1, ramakkalmedu1, wonderla1]
  },
  {
      slug: "ramakkalmedu-1day",
      title: "1-Day — Ramakkalmedu Winds",
      category: "Viewpoints",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: ramakkalmedu1,
      blurb: "Stand at the edge of Kerala where the wind never stops blowing.",
      highlights: ["King & Queen Statue", "Wind Farm", "Viewpoint"],
      fullDescription: "One of the windiest places in Asia. Ramakkalmedu provides a breathtaking 360-degree view of the plains of Tamil Nadu and the hills of Kerala.",
      itinerary: [{ day: 1, title: "On Top of the World", activities: ["Wind farm exploration", "Statue visit", "Off-road jeep trek", "Sunset at the peak"] }],
      inclusions: ["AC Coach", "Jeep Trek", "Lunch"],
      exclusions: ["Personal photography"],
      gallery: [ramakkalmedu1, munnar1, vagamon1]
  },
  {
      slug: "wonderla-1day",
      title: "1-Day — Wonderla Kochi",
      category: "Amusement",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: wonderla1,
      blurb: "A high-octane takeover of India's favorite theme park. Pure adrenaline and joy.",
      highlights: ["Land Rides", "Water Rides", "XD Theater"],
      fullDescription: "Skip the lines and maximize the fun. Perfect for school trips and energetic groups looking for a day of pure excitement.",
      itinerary: [{ day: 1, title: "The Ultimate Rush", activities: ["Full day theme park access", "Water park session", "Group lunch", "Evening wave pool party"] }],
      inclusions: ["AC Coach", "Entry Tickets", "Locker access"],
      exclusions: ["FastTrack vouchers", "Food/Beverages"],
      gallery: [wonderla1, silverstorm1, bangalore1]
  },
  {
      slug: "kodaikanal-1day",
      title: "1-Day — Kodai Mist",
      category: "Princess of Hills",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: kodaikanal1,
      blurb: "Escape to the mists of the Palani hills for a day of lakes and pine forests.",
      highlights: ["Kodai Lake", "Bryant Park", "Coaker's Walk"],
      fullDescription: "A quick hop to the high altitudes. Experience the cool breeze of Kodaikanal, its iconic lake, and the serene walks through the park.",
      itinerary: [{ day: 1, title: "High Altitude Hop", activities: ["Kodai lake boating", "Bryant park stroll", "Coaker's walk panorama", "Local chocolate shopping"] }],
      inclusions: ["AC Coach", "Sightseeing", "Lunch"],
      exclusions: ["Boating fees"],
      gallery: [kodaikanal1, ooty1, vagamon1]
  },
  {
      slug: "ooty-1day",
      title: "1-Day — Ooty Heritage",
      category: "Queen of Hills",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: ooty1,
      blurb: "Ride the toy train and experience the timeless colonial charm of Ooty.",
      highlights: ["Toy Train Ride", "Botanical Garden", "Ooty Lake"],
      fullDescription: "The classic hill station experience. From heritage roses to the UNESCO-listed toy train, Ooty remains the quintessential mountain getaway.",
      itinerary: [{ day: 1, title: "Nilgiri Legacy", activities: ["Botanical garden visit", "Dodabetta peak view", "Ooty lake boating", "Toy train experience (short duration)"] }],
      inclusions: ["AC Coach", "Entry Fees", "Lunch"],
      exclusions: ["Train tickets", "Boating fees"],
      gallery: [ooty1, kodaikanal1, mysore1]
  },
  {
      slug: "kanyakumari-1day",
      title: "1-Day — Kanyakumari Tip",
      category: "Land's End",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: kanyakumari1,
      blurb: "Stand at the southernmost tip of India where three oceans meet.",
      highlights: ["Vivekananda Rock", "Sunrise View", "Triveni Sangam"],
      fullDescription: "Experience the edge of the subcontinent. Visit the rock memorial and witness the unique confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean.",
      itinerary: [{ day: 1, title: "Meeting of Oceans", activities: ["Sunrise viewing", "Ferry to Vivekananda Rock", "Kanyakumari temple visit", "Beach exploration"] }],
      inclusions: ["AC Coach", "Ferry Tickets", "Lunch"],
      exclusions: ["Museum fees"],
      gallery: [kanyakumari1, mysore1, bangalore1]
  },
  {
      slug: "silver-storm-1day",
      title: "1-Day — Silver Storm & Dream World",
      category: "Water Parks",
      duration: "1 Day",
      durationInDays: 1,
      price: consultPrice,
      image: silverstorm1,
      blurb: "Splash into fun at Kerala's premier family water theme parks.",
      highlights: ["Water Slides", "Snow Park", "Wave Pool"],
      fullDescription: "Cool off from the heat. Silver Storm and Dream World offer a variety of water and dry rides perfect for family outings and student groups.",
      itinerary: [{ day: 1, title: "The Big Splash", activities: ["Full day park access", "Snow park session", "Group activities & lunch", "Evening wave pool session"] }],
      inclusions: ["AC Coach", "Entry Tickets", "Locker access"],
      exclusions: ["Food/Beverages", "Costume rental"],
      gallery: [silverstorm1, wonderla1, athirappilly1]
  },

  // 🗓️ TWO DAY PACKAGES
  {
      slug: "vagamon-munnar-2day",
      title: "2-Day — Vagamon & Munnar Peaks",
      category: "High Altitudes",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: munnar1,
      blurb: "Compare the rolling meadows of Vagamon with the emerald tea estates of Munnar.",
      highlights: ["Vagamon Meadows", "Pine Forest", "Munnar Tea Gardens"],
      fullDescription: "The best of both worlds. Start with the serene meadows of Vagamon and overnight transition into the mist-heavy tea valleys of Munnar.",
      itinerary: [
          { day: 1, title: "Meadows & Pines", activities: ["Vagamon pine forest walk", "Meadow exploration", "Suicide point tour", "Drive to Munnar"] },
          { day: 2, title: "Tea & Mist", activities: ["Munnar tea museum", "Gap road drive", "Echo point visit", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Hills Stay", "Breakfast & Dinner", "Guide"],
      exclusions: ["Lunch", "Entry fees"],
      gallery: [munnar1, vagamon1, marayoor1]
  },
  {
      slug: "munnar-marayoor-2day",
      title: "2-Day — Munnar & Marayoor Heritage",
      category: "Tea & History",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: munnar1,
      blurb: "Deep dive into Munnar's plantations and Marayoor's sandalwood secrets.",
      highlights: ["Tea Museum", "Sandalwood Forest", "Prehistoric Dolmens"],
      fullDescription: "A journey through nature and time. Start in the emerald hills of Munnar and descend into the heritage forests of Marayoor.",
      itinerary: [
          { day: 1, title: "The Tea Trail", activities: ["Tea museum tour", "Eravikulam park", "Mattupetty dam", "Resort stay"] },
          { day: 2, title: "Ancient Secrets", activities: ["Sandalwood forest trek", "Stone dolmens visit", "Lakkam falls", "Return"] }
      ],
      inclusions: ["AC Coach", "Premium Stay", "Breakfast & Dinner", "Naturalist"],
      exclusions: ["Lunch", "Photography fees"],
      gallery: [munnar1, marayoor1, athirappilly1]
  },
  {
      slug: "munnar-wonderla-2day",
      title: "2-Day — Munnar & Wonderla",
      category: "Peaks & Parks",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: munnar1,
      blurb: "The ultimate energy loop: High-altitude serenity meets theme-park adrenaline.",
      highlights: ["Tea Gardens", "Wonderla Rides", "Wave Pool"],
      fullDescription: "Kick off with the cool breeze of Munnar and end with the high-octane thrill of Wonderla Kochi. Perfect for batch trips.",
      itinerary: [
          { day: 1, title: "Mountain High", activities: ["Munnar sightseeing", "Tea garden walk", "Town shopping", "Transfer to Kochi"] },
          { day: 2, title: "Adrenaline Rush", activities: ["Full day at Wonderla Kochi", "Water park session", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Kochi Stay", "Wonderla Tickets", "Breakfast"],
      exclusions: ["Lunch/Dinner", "Personal expenses"],
      gallery: [munnar1, wonderla1, alappuzha1]
  },
  {
      slug: "vagamon-kodaikanal-2day",
      title: "2-Day — Vagamon & Kodai Mist",
      category: "Mist & Meadows",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: kodaikanal1,
      blurb: "Escape to the mists of Kodaikanal and the green meadows of Vagamon.",
      highlights: ["Kodai Lake", "Pine Forests", "Vagamon Meadows"],
      fullDescription: "A high-altitude weekend special. Experience the unique pine forests of both locations and the serenity of Kodai Lake.",
      itinerary: [
          { day: 1, title: "The Pine Loop", activities: ["Vagamon pine forest", "Meadow walk", "Drive to Kodaikanal", "Cottage stay"] },
          { day: 2, title: "Princess of Hills", activities: ["Kodai lake boating", "Bryant park", "Coaker's walk", "Return"] }
      ],
      inclusions: ["AC Coach", "Cottage Stay", "Breakfast & Dinner", "Campfire"],
      exclusions: ["Boating fees", "Lunch"],
      gallery: [kodaikanal1, vagamon1, munnar1]
  },
  {
      slug: "wayanad-ooty-2day",
      title: "2-Day — Wayanad & Ooty Circuit",
      category: "Wild & Heritage",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: ooty1,
      blurb: "Wildlife safaris in Wayanad followed by the heritage charm of the Nilgiris.",
      highlights: ["Sanctuary Safari", "Toy Train", "Botanical Garden"],
      fullDescription: "The best of the Western Ghats. Start with a jungle safari in the morning and end with heritage views in Ooty.",
      itinerary: [
          { day: 1, title: "Jungle Fever", activities: ["Muthanga wildlife safari", "Edakkal caves exploration", "Drive to Ooty", "Hotel check-in"] },
          { day: 2, title: "Heritage Hills", activities: ["Botanical garden", "Ooty lake boating", "Toy train experience", "Return"] }
      ],
      inclusions: ["AC Coach", "Ooty Hotel", "Breakfast & Dinner", "Safari Lead"],
      exclusions: ["Safari/Train fees", "Lunch"],
      gallery: [ooty1, wayanad1, mysore1]
  },
  {
      slug: "mysore-ooty-2day",
      title: "2-Day — Mysore & Ooty Legacy",
      category: "Palaces & Peaks",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: ooty1,
      blurb: "Witness the illumination of Mysore Palace and the flowers of the Nilgiris.",
      highlights: ["Mysore Palace", "Toy Train", "Rose Garden"],
      fullDescription: "A royal road trip. Witness the grandeur of the Wodeyars before ascending the spectacular mountain roads to Ooty.",
      itinerary: [
          { day: 1, title: "The Royal Start", activities: ["Mysore palace tour", "Chamundi hill visit", "Palace illumination at night", "Drive to Ooty"] },
          { day: 2, title: "The Flower Queen", activities: ["Rose garden visit", "Botanical gardens", "Ooty lake", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Hotel Stay", "Breakfast & Dinner", "Heritage Guide"],
      exclusions: ["Entry tickets", "Lunch"],
      gallery: [ooty1, mysore1, bangalore1]
  },
  {
      slug: "mysore-coorg-2day",
      title: "2-Day — Mysore & Coorg Loop",
      category: "Heritage & Coffee",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: coorg1,
      blurb: "Heritage palaces of Mysore meets the tranquil coffee plantations of Coorg.",
      highlights: ["Palace Tour", "Golden Temple", "Abbey Falls"],
      fullDescription: "The quintessental Karnataka loop. Experience the princely heritage and the spiritual calm of the Tibetan monastery.",
      itinerary: [
          { day: 1, title: "Princely Mysore", activities: ["Mysore palace", "St. Philomena's", "Chamundi hill", "Resort stay in Coorg"] },
          { day: 2, title: "Scotland of India", activities: ["Abbey falls", "Golden temple (Bylakuppe)", "Raja's seat sunrise", "Return"] }
      ],
      inclusions: ["AC Coach", "Plantation Resort", "Breakfast & Dinner", "Kodava Guide"],
      exclusions: ["Lunch", "Entry Permits"],
      gallery: [coorg1, mysore1, chikmagalur1]
  },
  {
      slug: "coorg-belur-2day",
      title: "2-Day — Coorg & Belur Trail",
      category: "Spices & Stone",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: coorg1,
      blurb: "Ancient Hoysala architecture meets the aromatic spice gardens of the highlands.",
      highlights: ["Abbey Falls", "Belur Temple", "Coffee Plantation"],
      fullDescription: "For lovers of architecture and nature. Witness the stone mastery of the medieval eras before retreating to the green heart of Coorg.",
      itinerary: [
          { day: 1, title: "Coffee Highlands", activities: ["Coorg plantation walk", "Abbey falls", "Golden temple", "Plantation stay"] },
          { day: 2, title: "Stone Masterclass", activities: ["Belur temple complex", "Halebidu ruins (optional)", "Coffee shopping", "Return"] }
      ],
      inclusions: ["AC Coach", "Resort Stay", "Breakfast & Dinner", "Art Expert"],
      exclusions: ["Lunch", "Donation fees"],
      gallery: [coorg1, belur1, chikmagalur1]
  },
  {
      slug: "coorg-chikmagalur-2day",
      title: "2-Day — Coffee Peaks Circuit",
      category: "Plantation Trails",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: coorg1,
      blurb: "The ultimate coffee loop connecting Coorg's plantations with Chikmagalur's peaks.",
      highlights: ["Mullayanagiri Peak", "Abbey Falls", "Golden Temple"],
      fullDescription: "Two iconic coffee destinations in one go. From the highest peaks of Karnataka to the serene Tibetan settlements.",
      itinerary: [
          { day: 1, title: "Into the Mist", activities: ["Coorg sightseeing", "Golden temple", "Resort check-in", "Sunset bonfire"] },
          { day: 2, title: "Conquering Peaks", activities: ["Drive to Chikmagalur", "Mullayanagiri peak climb", "Coffee museum", "Return"] }
      ],
      inclusions: ["AC Coach", "Premium Stay", "Breakfast & Dinner", "Guide"],
      exclusions: ["Lunch", "Jeep hire charges"],
      gallery: [coorg1, chikmagalur1, mysore1]
  },
  {
      slug: "bangalore-wonderla-2day",
      title: "2-Day — Bangalore & Wonderla Adventure",
      category: "City & thrills",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: wonderla1,
      blurb: "Experience the pulse of Bangalore and the thrills of its top theme park.",
      highlights: ["Bangalore Palace", "Wonderla Rides", "Cubbon Park"],
      fullDescription: "A perfect blend of city culture and high-octane fun. Visit the garden city's landmarks before heading to the biggest playground in the state.",
      itinerary: [
          { day: 1, title: "Garden City Vibe", activities: ["Bangalore palace visit", "Lalbagh botanical garden", "Commercial street shopping", "Hotel check-in"] },
          { day: 2, title: "Adrenaline Day", activities: ["Full day at Wonderla Bangalore", "Water park session", "Evening return"] }
      ],
      inclusions: ["AC Coach", "Quality Hotel", "Wonderla Tickets", "Breakfast"],
      exclusions: ["Lunch/Dinner", "Personal expenses"],
      gallery: [wonderla1, bangalore1, mysore1]
  },
  {
      slug: "bangalore-mysore-2day",
      title: "2-Day — Bangalore & Mysore Heritage",
      category: "Urban Legacy",
      duration: "2 Days",
      durationInDays: 2,
      price: consultPrice,
      image: mysore1,
      blurb: "Connect the garden city of Bangalore with the royal history of Mysore.",
      highlights: ["Mysore Palace", "Bangalore Palace", "Brindavan Gardens"],
      fullDescription: "The iconic heritage loop. From modern tech hubs and Tudor palaces to the illuminated grandeur of the Wodeyars.",
      itinerary: [
          { day: 1, title: "Modern Mysore", activities: ["Mysore palace visit", "St. Philomena's", "Brindavan gardens illumination", "Mysore hotel stay"] },
          { day: 2, title: "The Garden City", activities: ["Bangalore palace", "Lalbagh flowers", "Cubbon park", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Heritage Hotel", "Breakfast & Dinner", "Professional Guide"],
      exclusions: ["Lunch", "Entry tickets"],
      gallery: [mysore1, bangalore1, coorg1]
  },

  // 🗓️ THREE DAY PACKAGES
  {
      slug: "marayoor-munnar-wonderla-3day",
      title: "3-Day — Heritage, Tea & Thrills",
      category: "Epic Loop",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: munnar1,
      blurb: "Archaeology, emerald hills, and theme-park adrenaline in one grand expedition.",
      highlights: ["Prehistoric Dolmens", "Tea Gardens", "Wonderla Kochi"],
      fullDescription: "Emirates' signature adventure. Start with ancient history, breathe in the mountain air, and end with the city's biggest thrills.",
      itinerary: [
          { day: 1, title: "Ancient Secrets", activities: ["Marayoor sandalwood forest", "Muniyaras", "Lakkam falls", "Resort stay"] },
          { day: 2, title: "Mountain High", activities: ["Full day Munnar sightseeing", "Tea garden walk", "Town shopping", "Transfer to Kochi"] },
          { day: 3, title: "The Rush", activities: ["Full day Wonderla Kochi", "Water park", "Return joinery"] }
      ],
      inclusions: ["Flagship Coach", "Mix of Stays", "Breakfasts & Dinners", "All Permits"],
      exclusions: ["Lunch", "Personal snacks"],
      gallery: [munnar1, marayoor1, wonderla1]
  },
  {
      slug: "vagamon-munnar-marayoor-3day",
      title: "3-Day — The Highland Trilogy",
      category: "Mountain Odyssey",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: munnar1,
      blurb: "Connect the three most iconic highland destinations of Kerala.",
      highlights: ["Vagamon Meadows", "Pine Forest", "Munnar tea mists"],
      fullDescription: "A pure altitude adventure. Experience the rolling hills of Vagamon, the tea valleys of Munnar, and the sandalwood mists of Marayoor.",
      itinerary: [
          { day: 1, title: "Meadows & Pines", activities: ["Vagamon sightseeing", "Meadow walk", "Bonfire night", "Stay"] },
          { day: 2, title: "Tea Peaks", activities: ["Drive to Munnar", "Tea museum tour", "Gap road scenic drive", "Stay"] },
          { day: 3, title: "Heritage Loop", activities: ["Marayoor dolmens", "Sandalwood forest", "Lakkam falls", "Return"] }
      ],
      inclusions: ["Premium Coach", "Hills Stays", "Breakfast & Dinner", "Naturalist Expert"],
      exclusions: ["Lunch", "Photography fees"],
      gallery: [munnar1, vagamon1, marayoor1]
  },
  {
      slug: "vagamon-kodaikanal-marayoor-3day",
      title: "3-Day — Mists & Stone Heritage",
      category: "Atmospheric Trails",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: kodaikanal1,
      blurb: "From the pine-scented hills of Kodai to the ancient dolmens of Marayoor.",
      highlights: ["Kodai Lake", "Marayoor Sandalwood", "Vagamon Meadows"],
      fullDescription: "Experience the unique climates of the Palani hills and the Western Ghats. A journey for mists, meadows, and stone history.",
      itinerary: [
          { day: 1, title: "High Meadows", activities: ["Vagamon meadows", "Pine forest", "Transfer to Kodai", "Cottage stay"] },
          { day: 2, title: "Princess of Hills", activities: ["Kodai lake boating", "Cokers walk", "Bryant park", "Stay"] },
          { day: 3, title: "Ancient Descent", activities: ["Drive to Marayoor", "Dolmens visit", "Sandalwood walk", "Return"] }
      ],
      inclusions: ["AC Coach", "Cottage Stays", "All Breakfasts", "Licensed Crew"],
      exclusions: ["Lunch", "Entry permits"],
      gallery: [kodaikanal1, vagamon1, marayoor1]
  },
  {
      slug: "wayanad-coorg-mysore-3day",
      title: "3-Day — Jungle, Spices & Royalty",
      category: "Western Ghats Soul",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "Wildlife in Wayanad, spiritual calm in Coorg, and royal heritage in Mysore.",
      highlights: ["Wildlife Safari", "Golden Temple", "Mysore Palace"],
      fullDescription: "Connecting the three gems of the border. Explore the deep woods, the aromatic plantations, and the princely palaces.",
      itinerary: [
          { day: 1, title: "The Wild Start", activities: ["Wayanad Muthanga safari", "Edakkal caves", "Drive to Coorg", "Resort stay"] },
          { day: 2, title: "Tibetan Calm", activities: ["Golden temple visit", "Abbey falls", "Raja's seat sunset", "Stay"] },
          { day: 3, title: "Imperial Finish", activities: ["Mysore palace visit", "St. Philomena's", "Town shopping", "Return"] }
      ],
      inclusions: ["AC Coach", "Premium Stays", "Breakfasts & Dinners", "Safari Logistics"],
      exclusions: ["Lunch", "Entry fees"],
      gallery: [coorg1, wayanad1, mysore1]
  },
  {
      slug: "mysore-chikmagalur-coorg-3day",
      title: "3-Day — Palaces & Peaks Circuit",
      category: "Coffee & Crown",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "Royal heritage followed by the highest coffee peaks of Karnataka.",
      highlights: ["Mysore Palace", "Mullayanagiri Peak", "Abbey Falls"],
      fullDescription: "A grand Karnataka odyssey. Experience the royal legacy of Mysore before conquering the mist-heavy peaks of Chikmagalur and Coorg.",
      itinerary: [
          { day: 1, title: "Royal Mysore", activities: ["Mysore palace tour", "St. Philomena's", "Transfer to Chikmagalur", "Hill stay"] },
          { day: 2, title: "Peak Altitude", activities: ["Mullayanagiri peak trek", "Baba Budan hills", "Resort check-in in Coorg", "Bonfire"] },
          { day: 3, title: "Coffee & Culture", activities: ["Coorg plantation walk", "Abbey falls", "Golden temple", "Return"] }
      ],
      inclusions: ["AC Coach", "Hills Resorts", "All Breakfasts", "Trip Manager"],
      exclusions: ["Lunch", "Jeep trekking fees"],
      gallery: [coorg1, chikmagalur1, mysore1]
  },
  {
      slug: "coorg-chikmagalur-belur-3day",
      title: "3-Day — Coffee & Architecture Odyssey",
      category: "Spices & Stone",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "Ancient stone temple mastery and the finest coffee plantations of South India.",
      highlights: ["Belur Temple", "Coorg Spice Walk", "Shravanabelagola"],
      fullDescription: "For the refined traveler. Experience the incredible stone craftsmanship of the medieval eras and the aromatic soul of the coffee hills.",
      itinerary: [
          { day: 1, title: "Stone Masterclass", activities: ["Belur & Halebidu temple complex visit", "Architecture briefing", "Transfer to Coorg", "Stay"] },
          { day: 2, title: "Highlands of Coffee", activities: ["Abbey falls", "Golden temple", "Plantation walk session", "Campfire stay"] },
          { day: 3, title: "Ancient Ascent", activities: ["Shravanabelagola visit", "Coffee shopping spree", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Plantation resorts", "Breakfast each day", "Architecture guide"],
      exclusions: ["Lunch", "Entry Permits"],
      gallery: [coorg1, chikmagalur1, belur1]
  },
  {
      slug: "coorg-chikmagalur-udupi-3day",
      title: "3-Day — Peaks & Pristine Coast",
      category: "Mountain to Beach",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "Connect the highest peaks of Chikmagalur with the spiritual beaches of Udupi.",
      highlights: ["Mullayanagiri Peak", "Malpe Beach", "St Mary's Island"],
      fullDescription: "The ultimate altitude-to-ocean loop. Conquer the peaks before relaxing on the white sands of the coastal islands.",
      itinerary: [
          { day: 1, title: "Peak High", activities: ["Chikmagalur peaks expedition", "Mullayanagiri trek", "Jungle stay"] },
          { day: 2, title: "Coffee hills", activities: ["Coorg coffee walk", "Transfer to Udupi coast", "Beach resort check-in"] },
          { day: 3, title: "Sacred Shores", activities: ["Malpe beach & island visit", "Udupi temple visit", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Mix of Stays", "Breakfast each day", "Island Ferry"],
      exclusions: ["Lunch", "Activity fees"],
      gallery: [coorg1, malpe1, chikmagalur1]
  },
  {
      slug: "bangalore-chikmagalur-coorg-3day",
      title: "3-Day — Garden, Peaks & Coffee",
      category: "The Grand Loop",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "The urban gardens of Bangalore followed by the highest coffee summits.",
      highlights: ["Bangalore Palace", "Mullayanagiri", "Abbey Falls"],
      fullDescription: "A comprehensive Karnataka expedition. Start with the metropolitan gardens and Tudor palaces before heading deep into the coffee hills.",
      itinerary: [
          { day: 1, title: "City of Gardens", activities: ["Bangalore palace", "Lalbagh garden stroll", "Transfer to hills", "Hill stay"] },
          { day: 2, title: "Summit Challenge", activities: ["Chikmagalur peaks full day", "Coffee museum visit", "Transfer to Coorg", "Resort stay"] },
          { day: 3, title: "Plantation Soul", activities: ["Coorg plantation walk", "Abbey falls visit", "Golden temple", "Return"] }
      ],
      inclusions: ["AC Coach", "Hill Stays", "All Breakfasts", "Licensed Crew"],
      exclusions: ["Lunch", "Entry permits"],
      gallery: [coorg1, chikmagalur1, bangalore1]
  },
  {
      slug: "bangalore-mysore-coorg-3day",
      title: "3-Day — The Classic Karnataka Loop",
      category: "Urban to Highland",
      duration: "3 Days",
      durationInDays: 3,
      price: consultPrice,
      image: coorg1,
      blurb: "Metropolitan gardens, royal palaces, and aromatic coffee heartlands.",
      highlights: ["Bangalore Palace", "Mysore Palace", "Abbey Falls"],
      fullDescription: "Our most requested group loop. Connecting the modern city, the royal legacy, and the natural heights of the state.",
      itinerary: [
          { day: 1, title: "Garden City Vibe", activities: ["Bangalore sightseeing", "Drive to Mysore", "Palace illumination witness", "Stay"] },
          { day: 2, title: "Royal Legacy", activities: ["Mysore palace full tour", "Transfer to Coorg", "Golden temple", "Resort check-in"] },
          { day: 3, title: "Coffee Heights", activities: ["Coorg morning hills walk", "Abbey falls", "Shopping", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Premium Stays", "Breakfast each day", "Trip Lead"],
      exclusions: ["Lunch", "Photography fees"],
      gallery: [coorg1, mysore1, bangalore1]
  },

  // 🗓️ FOUR DAY PACKAGES
  {
      slug: "ooty-kodai-wayanad-wonderla-4day",
      title: "4-Day — The Mega South Circuit",
      category: "Grand Odyssey",
      duration: "4 Days",
      durationInDays: 4,
      price: consultPrice,
      image: ooty1,
      blurb: "The ultimate student expedition: Hill heritage, forest wilds, and theme park thrills.",
      highlights: ["Ooty Heritage", "Kodai Lake", "Wildlife Safari", "Wonderla"],
      fullDescription: "Designed for the young and the energetic. This mega-loop connects the two most iconic hill stations with the wild heart of Wayanad and the state's biggest theme park.",
      itinerary: [
          { day: 1, title: "Alpine Heritage", activities: ["Ooty botanical garden", "Toy train experience", "Dodabetta peak", "Stay"] },
          { day: 2, title: "Mist Princess", activities: ["Transfer to Kodaikanal", "Lakside walk", "Bryant park", "Campfire night"] },
          { day: 3, title: "Jungle Fever", activities: ["Drive to Wayanad", "Wildlife safari Muthanga", "Forest stay"] },
          { day: 4, title: "Theme Park Takeover", activities: ["Wonderla Kochi full day", "Water park session", "Group celebration return"] }
      ],
      inclusions: ["Flagship Coach", "Quality Stays", "Breakfast each day", "Wonderla Tickets", "Licensed Crew"],
      exclusions: ["Lunch/Dinner", "Individual safari permits"],
      gallery: [ooty1, kodaikanal1, wayanad1, wonderla1]
  },
  {
      slug: "wayanad-coorg-belur-chikmagalur-4day",
      title: "4-Day — Ghats & Granite Trail",
      category: "Heritage & Wild",
      duration: "4 Days",
      durationInDays: 4,
      price: consultPrice,
      image: coorg1,
      blurb: "Wildlife, coffee heartlands, and ancient stone architecture mastery.",
      highlights: ["Wayanad Safari", "Abbey Falls", "Belur Stone Mastery", "Chikmagalur Peaks"],
      fullDescription: "A sophisticated exploration of the Western Ghats. From deep jungle safaris to the intricate stone carvings of the Hoysala dynasty.",
      itinerary: [
          { day: 1, title: "Jungle Vibe", activities: ["Wayanad wildlife safari", "Edakkal caves", "Drive to Coorg", "Resort stay"] },
          { day: 2, title: "Coffee Culture", activities: ["Full day Coorg sightseeing", "Abbey falls", "Golden temple", "Stay"] },
          { day: 3, title: "Stone Legacy", activities: ["Transfer to Belur/Halebidu", "Stone architecture tour", "Stay at Chikmagalur"] },
          { day: 4, title: "Summit View", activities: ["Mullayanagiri peak trek", "Coffee museum", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Premium Resorts", "All Breakfasts", "Architecture Guide"],
      exclusions: ["Lunch/Dinner", "Safari fees"],
      gallery: [coorg1, wayanad1, belur1, chikmagalur1]
  },
  {
      slug: "wayanad-coorg-mysore-malpe-4day",
      title: "4-Day — Jungle, Palace & Pristine Shores",
      category: "Wild to Waves",
      duration: "4 Days",
      durationInDays: 4,
      price: consultPrice,
      image: malpe1,
      blurb: "The complete journey: Wayanad woods, Mysore royalty, and Udupi's white beaches.",
      highlights: ["Wildlife Safari", "Mysore Palace", "Malpe Island Reach", "Spiritual Udupi"],
      fullDescription: "The ultimate diverse loop. Experience the three distinct terrains of the state: the wild jungles, the royal plains, and the pristine coast.",
      itinerary: [
          { day: 1, title: "Forest Aura", activities: ["Wayanad muthanga safari", "Lakkidi view", "Transfer to Mysore", "Stay"] },
          { day: 2, title: "Princely Plain", activities: ["Mysore palace tour", "Chamundi hill", "Transfer to Coorg", "Stay"] },
          { day: 3, title: "Spices & Spirit", activities: ["Abbey falls", "Golden temple", "Transfer to coast", "Island boat trip"] },
          { day: 4, title: "Sacred Coast", activities: ["Udupi temple visit", "Malpe beach sport", "Final group lunch", "Return"] }
      ],
      inclusions: ["Premium Coach", "Mix of Classic Stays", "Breakfast daily", "Island Ferry", "Licensed Crew"],
      exclusions: ["Lunch", "Entry Permits"],
      gallery: [malpe1, coorg1, mysore1, wayanad1]
  },
  {
      slug: "mysore-coorg-wonderla-bangalore-4day",
      title: "4-Day — Heritage, Highland & Adrenaline",
      category: "Royalty & Rush",
      duration: "4 Days",
      durationInDays: 4,
      price: consultPrice,
      image: coorg1,
      blurb: "Combine royal legacy, coffee highlands, and Bangalore's top excitement.",
      highlights: ["Mysore Palace", "Golden Temple", "Wonderla Bangalore"],
      fullDescription: "A high-fidelity Karnataka loop for families and corporations. Witness the stone granduer of the royals before relaxing in the hills and ending with a bang.",
      itinerary: [
          { day: 1, title: "Imperial Start", activities: ["Mysore palace full day", "Brindavan flowers", "Heritage stay"] },
          { day: 2, title: "Mountain High", activities: ["Transfer to Coorg", "Abbey falls", "Plantation walk", "Stay"] },
          { day: 3, title: "Spiritual Path", activities: ["Bylakuppe golden temple", "Shopping in Madikeri", "Transfer to Bangalore", "Stay"] },
          { day: 4, title: "Thrills Peak", activities: ["Full day at Wonderla Bangalore", "Water park session", "Group return"] }
      ],
      inclusions: ["AC Coach", "Quality Stays", "Breakfast daily", "Wonderla entry", "Guide"],
      exclusions: ["Lunch", "Entry permits"],
      gallery: [coorg1, mysore1, wonderla1, bangalore1]
  },
  {
      slug: "mysore-coorg-belur-malpe-4day",
      title: "4-Day — Heritage to Horizon Trail",
      category: "Stone & Sand",
      duration: "4 Days",
      durationInDays: 4,
      price: consultPrice,
      image: malpe1,
      blurb: "Connect the royal palaces and stone temples with the white sand islands of the coast.",
      highlights: ["Mysore Palace", "Belur Temple", "St Mary's Island", "Malpe Beach"],
      fullDescription: "A journey across time and terrain. From the medieval masterpieces of the Hoysalas to the pristine coastal charm of the Arabian Sea islands.",
      itinerary: [
          { day: 1, title: "Royal Pride", activities: ["Mysore palace tour", "St. Philomena's", "Town shopping", "Heritage stay"] },
          { day: 2, title: "Coffee Hills", activities: ["Drive through Coorg", "Golden temple visit", "Abbey falls", "Resort stay"] },
          { day: 3, title: "Stone Mastery", activities: ["Belur temple complex", "Halebidu ruins", "Transfer to coast", "Stay"] },
          { day: 4, title: "Island Soul", activities: ["Malpe island visit", "Boat ferry", "Beach sports", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Premium Stays", "Breakfast each day", "Architecture Guide", "Ferry Tickets"],
      exclusions: ["Lunch", "Entry permits"],
      gallery: [malpe1, coorg1, belur1, mysore1]
  },

  // 🗓️ FIVE DAY PACKAGES
  {
      slug: "malpe-goa-dandeli-coorg-5day",
      title: "5-Day — The Coastal Frontier Odyssey",
      category: "Beach, River & Wild",
      duration: "5 Days",
      durationInDays: 5,
      price: consultPrice,
      image: goa1,
      blurb: "Connect the pristine islands of Malpe with the beach soul of Goa and the river rapids of Dandeli.",
      highlights: ["Goa Beach Night", "Dandeli Rafting", "Malpe Island", "Abbey Falls"],
      fullDescription: "Emirates' most diverse long-haul loop. Experience the white sands, the dense jungles, the river adventures, and the aromatic hills of Coorg in one epic odyssey.",
      itinerary: [
          { day: 1, title: "Island Reach", activities: ["Arrival in Malpe", "St Mary's island boat trip", "Beach resort check-in", "Sunset session"] },
          { day: 2, title: "Beach Soul", activities: ["Drive to Goa", "South Goa beach relaxation", "Evening party/dinner at shack", "Goa stay"] },
          { day: 3, title: "Heritage & Sun", activities: ["Old Goa churches", "Panjim city tour", "Anjuna beach sunset", "Stay"] },
          { day: 4, title: "River Pulse", activities: ["Drive to Dandeli", "River rafting (white water)", "Jungle camp check-in", "Bonfire night"] },
          { day: 5, title: "Mountain High", activities: ["Quick Coorg plantation walk", "Abbey falls", "Group farewell lunch", "Return journey"] }
      ],
      inclusions: ["Luxury Coach", "Diverse Stays", "Breakfasts daily", "Rafting Logistics", "Ferry fees"],
      exclusions: ["Lunch/Dinner", "Rafting activity fee"],
      gallery: [goa1, dandeli1, malpe1, coorg1]
  },
  {
      slug: "goa-dandeli-hampi-5day",
      title: "5-Day — The Imperial & Adventure Loop",
      category: "History & High Energy",
      duration: "5 Days",
      durationInDays: 5,
      price: consultPrice,
      image: goa1,
      blurb: "Connect the ruins of the Vijayanagara Empire with the rapids of Dandeli and the sands of Goa.",
      highlights: ["Hampi Stone Chariot", "Dandeli Rafting", "Goa Beach Party"],
      fullDescription: "A grand expedition across history and nature. Witness the boulder landscapes of Hampi, the dense woods of Dandeli, and the coastal vibrancy of Goa.",
      itinerary: [
          { day: 1, title: "Stone Empire", activities: ["Arrival in Hampi", "Virupaksha temple", "Hemakuta hill sunset", "Heritage stay"] },
          { day: 2, title: "Golden Ruins", activities: ["Vittala temple stone chariot", "Riverside ruins walk", "Transfer to Dandeli", "Stay"] },
          { day: 3, title: "River Thrills", activities: ["Full day Dandeli river rafting", "Ziplining", "Nature Jacuzzi", "Stay"] },
          { day: 4, title: "Goan Spirit", activities: ["Transfer to Goa", "Sunset at beach", "Beach party", "Stay"] },
          { day: 5, title: "Coastal Heritage", activities: ["Old Goa tour", "Shopping", "Departure return"] }
      ],
      inclusions: ["Flagship Coach", "Premium Stays", "All Breakfasts", "Rafting Lead", "Heritage Guide"],
      exclusions: ["Lunch/Dinner", "Monument Entry"],
      gallery: [goa1, hampi1, dandeli1]
  },
  {
      slug: "bangalore-dandeli-hampi-5day",
      title: "5-Day — The Deccan Heritage Grand",
      category: "Heritage & Jungle",
      duration: "5 Days",
      durationInDays: 5,
      price: consultPrice,
      image: hampi1,
      blurb: "Explore the metropolitan energy of Bangalore, the river wild of Dandeli, and the stone wonders of Hampi.",
      highlights: ["Bangalore Palace", "Dandeli Rafting", "Hampi Ruins"],
      fullDescription: "A comprehensive journey through Karnataka's heart. From the modern state capital to the ancient UNESCO world heritage landscapes and the adventure rapids of Kali river.",
      itinerary: [
          { day: 1, title: "Garden City", activities: ["Bangalore palace", "Lalbagh garden", "Commercial street shopping", "Stay"] },
          { day: 2, title: "Jungle Drive", activities: ["Transfer to Dandeli", "Jungle trekking", "Camp check-in", "Bonfire"] },
          { day: 3, title: "Water Pulse", activities: ["Dandeli river rafting", "River crossing", "Natural Jacuzzi", "Transfer to Hampi", "Stay"] },
          { day: 4, title: "Stone Masterclass", activities: ["Hampi full day tour", "Vittala temple", "Sunset at Matanga hill", "Stay"] },
          { day: 5, title: "Final Legacy", activities: ["Anegundi visit", "Final group lunch", "Return journey"] }
      ],
      inclusions: ["AC Coach", "Quality Stays", "Breakfasts daily", "Ferry & Guide", "Licensed Crew"],
      exclusions: ["Lunch/Dinner", "Rafting activity fee"],
      gallery: [hampi1, dandeli1, bangalore1]
  },
  {
      slug: "hampi-goa-5day",
      title: "5-Day — Stone Ruins & Sandy Shores",
      category: "Archaeology & Paradise",
      duration: "5 Days",
      durationInDays: 5,
      price: consultPrice,
      image: goa1,
      blurb: "Experience the ultimate contrast: The cinematic ruins of Hampi and the world-famous beaches of Goa.",
      highlights: ["Hampi Archaeolgoy", "Old Goa Heritage", "Sunset Beach Dinners"],
      fullDescription: "A sophisticated expedition for those who seek both culture and relaxation. Spend two days lost in the stone wonders of Vijayanagara before immersing yourself in the Goan lifestyle.",
      itinerary: [
          { day: 1, title: "Ruins at Dawn", activities: ["Arrival in Hampi", "Virupaksha temple session", "Riverside ruins", "Stay"] },
          { day: 2, title: "Boulder Landscape", activities: ["Matanga hill sunrise", "Stone chariot visit", "Anegundi loop", "Stay"] },
          { day: 3, title: "Path to Paradise", activities: ["Transfer to Goa", "Sunset beach walk", "Seafood dinner session", "Stay"] },
          { day: 4, title: "Portuguese Soul", activities: ["Old Goa churches", "Panjim Latin quarter walk", "Casino/Night market", "Stay"] },
          { day: 5, title: "Island Vibe", activities: ["Divar island (optional)", "Final shopping", "Departure return"] }
      ],
      inclusions: ["Premium Coach", "Heritage & Beach Stays", "Breakfasts daily", "Archaeologist Guide"],
      exclusions: ["Lunch", "Entry permits"],
      gallery: [goa1, hampi1, mysore1]
  },
  {
      slug: "dandeli-goa-5day",
      title: "5-Day — Wild River & Coastal Rhythms",
      category: "Adventure & Vibe",
      duration: "5 Days",
      durationInDays: 5,
      price: consultPrice,
      image: goa1,
      blurb: "Pure adrenaline in the rapids of Dandeli followed by relaxation on the Goan coast.",
      highlights: ["Dandeli Rafting", "Ziplining", "South Goa Beaches", "Tiracol Fort"],
      fullDescription: "The high-energy vacation. Start with the wild rapids and jungle camps of Dandeli and wind down with the iconic beach energy of Goa.",
      itinerary: [
          { day: 1, title: "Into the Rapid", activities: ["Arrival in Dandeli", "River rafting intro", "Jungle camp stay", "Bonfire"] },
          { day: 2, title: "Adventure Peak", activities: ["Full day river activities", "Ziplining", "Zack boat ride", "Stay"] },
          { day: 3, title: "Coastal Cruise", activities: ["Transfer to Goa", "North Goa beach check-in", "Sunset market session", "Stay"] },
          { day: 4, title: "Beach Hopping", activities: ["Vagator/Anjuna beaches", "Chapora fort visit", "Beach party night", "Stay"] },
          { day: 5, title: "Final Tide", activities: ["South Goa drive", "Departure return session"] }
      ],
      inclusions: ["Luxury Coach", "Stay & Rafting Mix", "Breakfasts daily", "Guide Expert"],
      exclusions: ["Rafting activity fee", "Other Meals"],
      gallery: [goa1, dandeli1, bangalore1]
  }
];
