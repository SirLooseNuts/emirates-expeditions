import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname in ES Modules context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { 
  initialBookings, 
  initialPackages, 
  initialLeads, 
  initialPartners, 
  initialSchedules 
} from './src/initialData.ts';

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Default Website Data Seed values
const defaultSettings = {
  name: "Emirates Expedition",
  tagline: "A journey of thousand miles",
  phone1: "+91 70127 75400",
  phone2: "+91 79945 49785",
  email: "emiratesexpedition25@gmail.com",
  instagram: "https://www.instagram.com/emirates_expedition_/",
  whatsapp: "917012775400",
  address: "Thattathumala, Trivandrum, Kerala, India",
};

const defaultReviews = [
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

const defaultPhotos = [
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

// Read database
function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initialDb = {
        bookings: initialBookings,
        packages: initialPackages,
        leads: initialLeads,
        partners: initialPartners,
        schedules: initialSchedules,
        settings: defaultSettings,
        reviews: defaultReviews,
        photos: defaultPhotos
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2), 'utf-8');
      return initialDb;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading DB:', err);
    return {};
  }
}

// Write database
function writeDb(data: any) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing DB:', err);
  }
}

// ════════ API ROUTES ════════

// Reset Data Route
app.post('/api/reset', (req, res) => {
  const initialDb = {
    bookings: initialBookings,
    packages: initialPackages,
    leads: initialLeads,
    partners: initialPartners,
    schedules: initialSchedules,
    settings: defaultSettings,
    reviews: defaultReviews,
    photos: defaultPhotos
  };
  writeDb(initialDb);
  res.json({ message: 'Database reset successfully', db: initialDb });
});

// Bookings
app.get('/api/bookings', (req, res) => {
  const db = readDb();
  res.json(db.bookings || []);
});

app.post('/api/bookings', (req, res) => {
  const db = readDb();
  const newBooking = req.body;
  
  if (!newBooking.id) {
    newBooking.id = 'B' + Math.floor(100 + Math.random() * 900);
  }
  if (!newBooking.createdDate) {
    newBooking.createdDate = new Date().toISOString().split('T')[0];
  }
  
  db.bookings = [newBooking, ...(db.bookings || [])];
  writeDb(db);
  res.status(201).json(newBooking);
});

app.put('/api/bookings/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedBooking = req.body;
  
  let found = false;
  db.bookings = (db.bookings || []).map((b: any) => {
    if (b.id === id) {
      found = true;
      return { ...b, ...updatedBooking };
    }
    return b;
  });
  
  if (!found) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  
  writeDb(db);
  res.json(db.bookings.find((b: any) => b.id === id));
});

app.delete('/api/bookings/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  
  db.bookings = (db.bookings || []).filter((b: any) => b.id !== id);
  db.schedules = (db.schedules || []).filter((s: any) => s.bookingId !== id);
  
  writeDb(db);
  res.json({ message: 'Booking deleted successfully' });
});

// Packages
app.get('/api/packages', (req, res) => {
  const db = readDb();
  res.json(db.packages || []);
});

app.post('/api/packages', (req, res) => {
  const db = readDb();
  const newPackage = req.body;
  
  if (!newPackage.id) {
    newPackage.id = 'P' + Math.floor(100 + Math.random() * 900);
  }
  
  db.packages = [...(db.packages || []), newPackage];
  writeDb(db);
  res.status(201).json(newPackage);
});

app.put('/api/packages/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedPackage = req.body;
  
  let found = false;
  db.packages = (db.packages || []).map((p: any) => {
    if (p.id === id) {
      found = true;
      return { ...p, ...updatedPackage };
    }
    return p;
  });
  
  if (!found) {
    return res.status(404).json({ error: 'Package not found' });
  }
  
  writeDb(db);
  res.json(db.packages.find((p: any) => p.id === id));
});

// Leads
app.get('/api/leads', (req, res) => {
  const db = readDb();
  res.json(db.leads || []);
});

app.post('/api/leads', (req, res) => {
  const db = readDb();
  let rawLead = req.body;
  
  // Translation logic: Map Website Lead to Admin Panel Lead if needed
  const mappedLead: any = {
    id: rawLead.id || 'lead-' + Date.now(),
    name: rawLead.name || 'Anonymous',
    organization: rawLead.organization || rawLead.location || 'N/A',
    destination: rawLead.destination || 'N/A',
    paxCount: Number(rawLead.paxCount || rawLead.pax || 2),
    estimatedValue: Number(rawLead.estimatedValue || 0),
    source: (rawLead.source || 'website').toLowerCase(),
    createdAt: rawLead.createdAt || new Date().toISOString(),
    status: (rawLead.status || 'new').toLowerCase(),
    notes: rawLead.notes || rawLead.message || '',
    category: (rawLead.category || 'general').toLowerCase(),
    timeline: (rawLead.timeline || []).map((t: any) => ({
      title: t.title || t.label || 'Timeline Event',
      time: t.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      completed: t.completed !== undefined ? t.completed : (t.done || false)
    }))
  };

  db.leads = [mappedLead, ...(db.leads || [])];
  writeDb(db);
  res.status(201).json(mappedLead);
});

app.put('/api/leads/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedLead = req.body;
  
  let found = false;
  db.leads = (db.leads || []).map((l: any) => {
    if (l.id === id) {
      found = true;
      return { ...l, ...updatedLead };
    }
    return l;
  });
  
  if (!found) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  
  writeDb(db);
  res.json(db.leads.find((l: any) => l.id === id));
});

// Partners
app.get('/api/partners', (req, res) => {
  const db = readDb();
  res.json(db.partners || []);
});

app.post('/api/partners', (req, res) => {
  const db = readDb();
  const newPartner = req.body;
  
  if (!newPartner.id) {
    newPartner.id = 'PART' + Math.floor(100 + Math.random() * 900);
  }
  
  db.partners = [...(db.partners || []), newPartner];
  writeDb(db);
  res.status(201).json(newPartner);
});

app.put('/api/partners/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedPartner = req.body;
  
  let found = false;
  db.partners = (db.partners || []).map((p: any) => {
    if (p.id === id) {
      found = true;
      return { ...p, ...updatedPartner };
    }
    return p;
  });
  
  if (!found) {
    return res.status(404).json({ error: 'Partner not found' });
  }
  
  writeDb(db);
  res.json(db.partners.find((p: any) => p.id === id));
});

// Schedules
app.get('/api/schedules', (req, res) => {
  const db = readDb();
  res.json(db.schedules || []);
});

app.post('/api/schedules', (req, res) => {
  const db = readDb();
  const newSchedule = req.body;
  
  if (!newSchedule.id) {
    newSchedule.id = 'SCH' + Math.floor(100 + Math.random() * 900);
  }
  
  db.schedules = [newSchedule, ...(db.schedules || [])];
  writeDb(db);
  res.status(201).json(newSchedule);
});

app.put('/api/schedules/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedSchedule = req.body;
  
  let found = false;
  db.schedules = (db.schedules || []).map((s: any) => {
    if (s.id === id) {
      found = true;
      return { ...s, ...updatedSchedule };
    }
    return s;
  });
  
  if (!found) {
    return res.status(404).json({ error: 'Schedule not found' });
  }
  
  writeDb(db);
  res.json(db.schedules.find((s: any) => s.id === id));
});

// Settings
app.get('/api/settings', (req, res) => {
  const db = readDb();
  res.json(db.settings || defaultSettings);
});

app.post('/api/settings', (req, res) => {
  const db = readDb();
  db.settings = { ...db.settings, ...req.body };
  writeDb(db);
  res.json(db.settings);
});

// Reviews
app.get('/api/reviews', (req, res) => {
  const db = readDb();
  res.json(db.reviews || defaultReviews);
});

app.post('/api/reviews', (req, res) => {
  const db = readDb();
  const newReview = req.body;
  if (!newReview.id) {
    newReview.id = 'rev-' + Date.now();
  }
  db.reviews = [...(db.reviews || []), newReview];
  writeDb(db);
  res.status(201).json(newReview);
});

app.put('/api/reviews/:id', (req, res) => {
  const db = readDb();
  const { id } = req.params;
  const updatedReview = req.body;
  db.reviews = (db.reviews || []).map((r: any) => r.id === id ? { ...r, ...updatedReview } : r);
  writeDb(db);
  res.json(db.reviews.find((r: any) => r.id === id));
});

// Photos (Gallery)
app.get('/api/photos', (req, res) => {
  const db = readDb();
  res.json(db.photos || defaultPhotos);
});

// Serve frontend in production (compiled dist files)
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  if (fs.existsSync(path.join(__dirname, 'dist', 'index.html'))) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    res.send('API server is running. Frontend build (dist/) not found. Run "npm run build" to compile frontend.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
