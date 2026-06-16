/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TourBooking, TourPackage, Lead, Partner, TripSchedule } from './types';

export const initialBookings: TourBooking[] = [
  {
    id: 'B001',
    institution: 'St. Francis School',
    category: 'school',
    destination: 'Wonderla & Forum Mall',
    duration: '1-Day',
    paxCount: 70,
    amount: 52500,
    status: 'enquiry',
    date: '2026-06-15',
    createdDate: '2026-06-02',
    coordinatorName: 'Sreekanth Felix',
    coordinatorPhone: '+91 94460 12345',
    notes: 'Requires vegetarian food option. 70 students and 5 teacher chaperones.',
    feedbackRating: null
  },
  {
    id: 'B002',
    institution: 'Govt. Poly Palakkad',
    category: 'college',
    destination: 'Munnar & Marayoor & Wonderla',
    duration: '3-Day',
    paxCount: 95,
    amount: 304000,
    status: 'enquiry',
    date: '2026-06-25',
    createdDate: '2026-06-01',
    coordinatorName: 'Priya Pillai',
    coordinatorPhone: '+91 98450 67890',
    notes: 'Mechanical and Civil department student tour. 2 buses required.',
    feedbackRating: null
  },
  {
    id: 'B003',
    institution: 'Nair Family Group',
    category: 'family',
    destination: 'Ooty & Wayanad',
    duration: '2-Day',
    paxCount: 38,
    amount: 68400,
    status: 'enquiry',
    date: '2026-07-02',
    createdDate: '2026-05-31',
    coordinatorName: 'Rahul Nair',
    coordinatorPhone: '+91 94000 55566',
    notes: 'Senior citizens joined. Easy pace itinerary.',
    feedbackRating: null
  },
  {
    id: 'B004',
    institution: 'Masjid Committee TVM',
    category: 'devotional',
    destination: 'Athirapally & Vazhachal',
    duration: '1-Day',
    paxCount: 52,
    amount: 39000,
    status: 'enquiry',
    date: '2026-06-20',
    createdDate: '2026-05-30',
    coordinatorName: 'Mohammed Kabeer',
    coordinatorPhone: '+91 97470 11223',
    notes: 'Annual community devotional & pleasure tour.',
    feedbackRating: null
  },
  {
    id: 'B005',
    institution: 'Kinfra Park Staff',
    category: 'corporate',
    destination: 'Kodaikanal & Munnar',
    duration: '2-Day',
    paxCount: 60,
    amount: 108000,
    status: 'enquiry',
    date: '2026-07-10',
    createdDate: '2026-05-30',
    coordinatorName: 'Anil Kumar',
    coordinatorPhone: '+91 94477 99000',
    notes: 'Corporate weekend stress-buster tour. Requires team building activity space.',
    feedbackRating: null
  },
  {
    id: 'B006',
    institution: 'GHSS Kazhakuttom',
    category: 'school',
    destination: 'Wagamon & Munnar & Wonderla',
    duration: '3-Day',
    paxCount: 110,
    amount: 352000,
    status: 'quote',
    date: '2026-06-18',
    createdDate: '2026-06-01',
    coordinatorName: 'Anupama G.',
    coordinatorPhone: '+91 95620 44321',
    notes: 'Quoted at ₹3200 per head. Budget constraint mentioned by principal.',
    feedbackRating: null
  },
  {
    id: 'B007',
    institution: 'MG College Trivandrum',
    category: 'college',
    destination: 'Goa & Dandeli & Chikmagalur',
    duration: '5-Day',
    paxCount: 120,
    amount: 696000,
    status: 'quote',
    date: '2026-08-01',
    createdDate: '2026-05-29',
    coordinatorName: 'Arjun Krishnan',
    coordinatorPhone: '+91 98950 88221',
    notes: 'Goa itinerary draft sent. Highly interested in Dandeli water sports accessory pack.',
    feedbackRating: null
  },
  {
    id: 'B008',
    institution: 'College of Engineering',
    category: 'college',
    destination: 'Goa & Chikmagalur',
    duration: '5-Day',
    paxCount: 60,
    amount: 348000,
    status: 'advance',
    date: '2026-06-15',
    createdDate: '2026-05-20',
    coordinatorName: 'Dileep Mathew',
    coordinatorPhone: '+91 94451 11335',
    notes: 'Advance of ₹80,000 paid. Deluxe sleeper bus locked with Anora Travels.',
    feedbackRating: null,
    assignedBusId: 'BUS001',
    assignedDriver: 'Mani Swamy'
  },
  {
    id: 'B009',
    institution: 'Loyola School TVM',
    category: 'school',
    destination: 'Athirapally & Silverstrom',
    duration: '1-Day',
    paxCount: 85,
    amount: 63750,
    status: 'advance',
    date: '2026-06-08',
    createdDate: '2026-05-18',
    coordinatorName: 'Brother Thomas',
    coordinatorPhone: '+91 99610 88991',
    notes: 'Advance of ₹20,000 paid. Highly disciplined students.',
    feedbackRating: null,
    assignedBusId: 'BUS003',
    assignedDriver: 'Biju Varghese'
  },
  {
    id: 'B010',
    institution: 'GHSS Thonnakkal',
    category: 'school',
    destination: 'Munnar & Marayoor & Wonderla',
    duration: '3-Day',
    paxCount: 40,
    amount: 128000,
    status: 'confirmed',
    date: '2026-06-05',
    createdDate: '2026-05-15',
    coordinatorName: 'Suresh Kurup',
    coordinatorPhone: '+91 94474 54321',
    notes: 'Full confirmation received. Food, accommodation, entry passes fully sorted.',
    feedbackRating: null,
    assignedBusId: 'BUS002',
    assignedDriver: 'Sukumaran Nair'
  },
  {
    id: 'B011',
    institution: 'NSS College Ottappalam',
    category: 'college',
    destination: 'Wagamon & Munnar & Wonderla',
    duration: '3-Day',
    paxCount: 130,
    amount: 416000,
    status: 'confirmed',
    date: '2026-06-10',
    createdDate: '2026-05-14',
    coordinatorName: 'Hari Prasad',
    coordinatorPhone: '+91 98471 22334',
    notes: 'Three buses booked from Kochi luxury lines. Food stops pre-booked.',
    feedbackRating: null,
    assignedBusId: 'BUS004',
    assignedDriver: 'Rajesh G.'
  },
  {
    id: 'B012',
    institution: 'BVM School Kollam',
    category: 'school',
    destination: 'Munnar & Marayoor & Wonderla',
    duration: '3-Day',
    paxCount: 75,
    amount: 240000,
    status: 'completed',
    date: '2026-05-28',
    createdDate: '2026-04-10',
    coordinatorName: 'Sister Maria',
    coordinatorPhone: '+91 94462 88877',
    notes: 'Trip went extremely well. Feedback received.',
    feedbackRating: 5
  },
  {
    id: 'B013',
    institution: 'TKM College Kollam',
    category: 'college',
    destination: 'Bangalore & Mysore & Coorg',
    duration: '5-Day',
    paxCount: 90,
    amount: 522000,
    status: 'completed',
    date: '2026-05-24',
    createdDate: '2026-04-05',
    coordinatorName: 'Yaseen Shah',
    coordinatorPhone: '+91 95660 77112',
    notes: '5-Day adventure. Excellent driver cooperation.',
    feedbackRating: 5
  }
];

export const initialPackages: TourPackage[] = [
  {
    id: 'P001',
    name: 'Wonderla & Forum Mall / Lulumall',
    duration: '1-Day',
    stops: ['Wonderla Park', 'Forum Mall', 'Lulu Mall Kochi'],
    pricePerHead: 750,
    totalBookings: 110,
    isTopPackage: false,
    description: 'Perfect short trip for school children and families featuring premium sightseeing and full-day amusement park thrills.'
  },
  {
    id: 'P002',
    name: 'Athirapally & Vazhachal & Silverstrom / Dreamworld',
    duration: '1-Day',
    stops: ['Athirapally Waterfalls', 'Vazhachal Forest', 'Silverstorm Theme Park'],
    pricePerHead: 750,
    totalBookings: 88,
    isTopPackage: false,
    description: 'A beautiful journey through Kerala\'s largest waterfalls coupled with interactive and high-excitement water theme park tours.'
  },
  {
    id: 'P003',
    name: 'Ooty & Wayanad High Hills',
    duration: '2-Day',
    stops: ['Ooty Botanical Garden', 'Wayanad Kuruvadweep', 'Edakkal Caves'],
    pricePerHead: 1800,
    totalBookings: 72,
    isTopPackage: false,
    description: 'Explore the cooler heights of South India. Enjoy pristine tea plantations, mist-covered valleys, boat trips, and cave systems.'
  },
  {
    id: 'P004',
    name: 'Munnar & Marayoor & Wonderla Adventure',
    duration: '3-Day',
    stops: ['Munnar Tea Gardens', 'Marayoor Sandalwood Forests', 'Wonderla Kochi'],
    pricePerHead: 3200,
    totalBookings: 62,
    isTopPackage: true,
    description: 'Our crowned championship package. Combining the majestic cold peaks of Munnar, historic forest walks in Marayoor, and high speed games at Wonderla.'
  },
  {
    id: 'P005',
    name: 'Kodaikanal & Marayoor & Munnar Heights',
    duration: '4-Day',
    stops: ['Kodaikanal Lake', 'Pillar Rocks', 'Munnar Peak', 'Marayoor Dolmens'],
    pricePerHead: 4500,
    totalBookings: 41,
    isTopPackage: false,
    description: 'The double-hill grand retreat. A rich itinerary tailored beautifully for college groups and institutional celebrations.'
  },
  {
    id: 'P006',
    name: 'Udupi & Dandeli & Goa Sea Beach',
    duration: '5-Day',
    stops: ['Udupi Sri Krishna Temple', 'Dandeli River Rafting', 'Goa Calangute Beach', 'Chikmagalur Coffee Estate'],
    pricePerHead: 5800,
    totalBookings: 48,
    isTopPackage: false,
    description: 'The ultimate coastal and adventure expedition, moving smoothly from holy towns through intense river rafting to golden Goa shores.'
  },
  {
    id: 'P007',
    name: 'Bangalore & Mysore Palace & Coorg Mist',
    duration: '5-Day',
    stops: ['Bangalore Palace', 'Mysore Palace', 'Coorg Golden Temple', 'Abbey Falls'],
    pricePerHead: 5800,
    totalBookings: 35,
    isTopPackage: false,
    description: 'A timeless royal trail tracing grand heritage palaces, fragrant sandalwood markets, and Coorg\'s misty coffee peaks.'
  }
];

export const initialLeads: Lead[] = [
  {
    id: 'L001',
    name: 'Sreekanth Felix',
    organization: 'St. Francis School, Trivandrum',
    destination: '1-Day — Wonderla & Forum Mall',
    paxCount: 70,
    estimatedValue: 52500,
    source: 'whatsapp',
    createdAt: '2026-06-07T11:00:00Z',
    status: 'new',
    notes: 'Interested in mid-June date. Looking for a package discount on entry passes. Food preferences are Pure Veg for 12 students.',
    category: 'school',
    timeline: [
      { title: 'Enquiry received via WhatsApp', time: 'Today, 10:42 AM', completed: true },
      { title: 'Lead auto-created in system', time: 'Today, 10:42 AM', completed: true },
      { title: 'Awaiting Quote generation & callback', time: 'Pending action', completed: false },
      { title: 'Advance payment authorization', time: '—', completed: false }
    ]
  },
  {
    id: 'L002',
    name: 'Priya Pillai',
    organization: 'Govt. Polytechnic, Palakkad',
    destination: '3-Day — Munnar & Marayoor',
    paxCount: 95,
    estimatedValue: 304000,
    source: 'website',
    createdAt: '2026-06-07T08:00:00Z',
    status: 'new',
    notes: 'Enquired through the website. Students are looking for a luxury bus option (with premium DJs/Sound systems). Need dynamic quote.',
    category: 'college',
    timeline: [
      { title: 'Web Form submission captured', time: 'Today, 08:30 AM', completed: true },
      { title: 'Review booking dates for Munnar resorts', time: 'Today, 09:15 AM', completed: true },
      { title: 'Send quotation with sleeper vs semi-sleeper rates', time: 'Pending', completed: false }
    ]
  },
  {
    id: 'L003',
    name: 'Mohammed Kabeer',
    organization: 'Masjid Committee TVM',
    destination: '1-Day — Athirapally & Vazhachal',
    paxCount: 52,
    estimatedValue: 39000,
    source: 'whatsapp',
    createdAt: '2026-06-06T15:00:00Z',
    status: 'contacted',
    notes: 'Spoke over phone. They want to include breakfast, lunch, and high tea. Re-calculating with catering companion included.',
    category: 'devotional',
    timeline: [
      { title: 'Message received', time: 'Yesterday, 3:15 PM', completed: true },
      { title: 'Representative called back', time: 'Yesterday, 4:30 PM', completed: true },
      { title: 'Draft menu and price update', time: 'Today, 11:00 AM', completed: true },
      { title: 'Awaiting committee confirmation', time: 'Pending', completed: false }
    ]
  },
  {
    id: 'L004',
    name: 'Rahul Nair',
    organization: 'Nair Family Group, Kochi',
    destination: '2-Day — Ooty & Wayanad',
    paxCount: 38,
    estimatedValue: 68400,
    source: 'referral',
    createdAt: '2026-06-06T10:00:00Z',
    status: 'quoted',
    notes: 'Referred by BVM School principal. Special discount added. Quote sent for ₹1800 per head, total ₹68,400.',
    category: 'family',
    timeline: [
      { title: 'Referral noted in system', time: 'Jun 6, 10:00 AM', completed: true },
      { title: 'Special family-friendly quote generated', time: 'Jun 6, 11:30 AM', completed: true },
      { title: 'Sent PDF invoice to WhatsApp', time: 'Jun 6, 12:00 PM', completed: true },
      { title: 'Durable reservation hold set', time: 'Today, 09:00 AM', completed: true }
    ]
  },
  {
    id: 'L005',
    name: 'Jijo Thomas',
    organization: 'Technopark HR, Trivandrum',
    destination: '2-Day — Ooty & Wayanad',
    paxCount: 80,
    estimatedValue: 144000,
    source: 'website',
    createdAt: '2026-06-05T09:00:00Z',
    status: 'quoted',
    notes: 'Technopark corporate team pleasure trip. Require high class 3-star villa stay, team leader speech space and stage mic arrangements.',
    category: 'corporate',
    timeline: [
      { title: 'Website request logged', time: 'Jun 5, 09:12 AM', completed: true },
      { title: 'Initial sales call completed', time: 'Jun 5, 2:00 PM', completed: true },
      { title: 'Corporate premium proposal sent', time: 'Jun 6, 10:45 AM', completed: true }
    ]
  }
];

export const initialPartners: Partner[] = [
  {
    id: 'PART001',
    name: 'Anora Luxury Travels',
    type: 'bus',
    contact: 'Rajendra Prasad (+91 98461 44332)',
    rating: 4.8,
    status: 'active',
    capacity: '4 x 49-seater Multi-axle Scania Buses',
    rateInfo: '₹42/km or ₹24,000 flat per day index'
  },
  {
    id: 'PART002',
    name: 'Royal Crown Coaches Kochi',
    type: 'bus',
    contact: 'Sunil Das (+91 94471 23114)',
    rating: 4.6,
    status: 'active',
    capacity: '3 x 53-seater Benz Air-Suspension coaches',
    rateInfo: '₹38/km or ₹21,000 flat per day index'
  },
  {
    id: 'PART003',
    name: 'Silver Mist Resorts Munnar',
    type: 'hotel',
    contact: 'Jeon Verghese (+91 85472 67112)',
    rating: 4.9,
    status: 'active',
    capacity: '44 deluxe cottage units, 3 dormitories',
    rateInfo: '₹1,200 student pack (3-sharing, incl. food)'
  },
  {
    id: 'PART004',
    name: 'Broad Bean Residency Ooty',
    type: 'hotel',
    contact: 'Manager Selvan (+91 423 244 5566)',
    rating: 4.5,
    status: 'active',
    capacity: '30 rooms, camp fire setup space',
    rateInfo: '₹1,100 per head (incl. breakfast & dinner)'
  },
  {
    id: 'PART005',
    name: 'Al-Farooq Catering TVM',
    type: 'guide',
    contact: 'Shaji Farooq (+91 94458 66882)',
    rating: 4.7,
    status: 'active',
    capacity: 'Food catering up to 1000 packs on route',
    rateInfo: '₹220 per head (Full fold day meal package)'
  }
];

export const initialSchedules: TripSchedule[] = [
  {
    id: 'SCH001',
    bookingId: 'B010',
    institutionName: 'GHSS Thonnakkal',
    destination: 'Munnar & Marayoor & Wonderla',
    startDate: '2026-06-05',
    endDate: '2026-06-07',
    driverName: 'Sukumaran Nair (+91 94002 11223)',
    busNumber: 'KL-16-Y-7788 (Royal Crown Scania)',
    tripStatus: 'ongoing'
  },
  {
    id: 'SCH002',
    bookingId: 'B009',
    institutionName: 'Loyola School TVM',
    destination: 'Athirapally & Silverstrom',
    startDate: '2026-06-08',
    endDate: '2026-06-08',
    driverName: 'Biju Varghese (+91 98455 33441)',
    busNumber: 'KL-01-CA-9900 (Anora Sleeper)',
    tripStatus: 'upcoming'
  },
  {
    id: 'SCH003',
    bookingId: 'B011',
    institutionName: 'NSS College Ottappalam',
    destination: 'Wagamon & Munnar & Wonderla',
    startDate: '2026-06-10',
    endDate: '2026-06-12',
    driverName: 'Rajesh G. (+91 95441 55667)',
    busNumber: 'KL-08-BB-2211 (Kochi Lines)',
    tripStatus: 'upcoming'
  },
  {
    id: 'SCH004',
    bookingId: 'B008',
    institutionName: 'College of Engineering',
    destination: 'Goa & Chikmagalur',
    startDate: '2026-06-15',
    endDate: '2026-06-19',
    driverName: 'Mani Swamy (+91 94473 12121)',
    busNumber: 'KL-01-BD-1100 (Anora Multi-Axle)',
    tripStatus: 'upcoming'
  }
];
