/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  TourBooking, 
  TourPackage, 
  Lead, 
  Partner, 
  TripSchedule,
  BookingStatus,
  LeadStatus,
  PartnerType,
  TripStatus
} from './types';
import { 
  initialBookings, 
  initialPackages, 
  initialLeads, 
  initialPartners, 
  initialSchedules 
} from './initialData';

// import modular pages
import DashboardScreen from './components/DashboardScreen';
import BookingsScreen from './components/BookingsScreen';
import PackagesScreen from './components/PackagesScreen';
import LeadsScreen from './components/LeadsScreen';
import PartnersScreen from './components/PartnersScreen';
import ScheduleScreen from './components/ScheduleScreen';
import SettingsScreen from './components/SettingsScreen';
import LoginScreen from './components/LoginScreen';

// import supabase client
import { supabase, isSupabaseConfigured } from './lib/supabase';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ═══ DATABASE MAPPING HELPERS (snake_case DB to camelCase App) ═══

const mapDbBooking = (b: any): TourBooking => ({
  id: b.id,
  institution: b.institution,
  category: b.category,
  destination: b.destination,
  duration: b.duration,
  paxCount: Number(b.pax_count),
  amount: Number(b.amount),
  status: b.status,
  date: b.date,
  createdDate: b.created_date,
  notes: b.notes,
  coordinatorName: b.coordinator_name,
  coordinatorPhone: b.coordinator_phone,
  assignedBusId: b.assigned_bus_id,
  assignedDriver: b.assigned_driver,
  feedbackRating: b.feedback_rating
});

const mapAppBooking = (b: TourBooking) => ({
  id: b.id,
  institution: b.institution,
  category: b.category,
  destination: b.destination,
  duration: b.duration,
  pax_count: b.paxCount,
  amount: b.amount,
  status: b.status,
  date: b.date,
  created_date: b.createdDate,
  notes: b.notes,
  coordinator_name: b.coordinatorName,
  coordinator_phone: b.coordinatorPhone,
  assigned_bus_id: b.assignedBusId,
  assigned_driver: b.assignedDriver,
  feedback_rating: b.feedbackRating
});

const mapDbPackage = (p: any): TourPackage => ({
  id: p.id,
  name: p.name,
  duration: p.duration,
  stops: p.stops,
  pricePerHead: Number(p.price_per_head),
  totalBookings: Number(p.total_bookings),
  isTopPackage: p.is_top_package,
  description: p.description,
  image: p.image
});

const mapAppPackage = (p: TourPackage) => ({
  id: p.id,
  name: p.name,
  duration: p.duration,
  stops: p.stops,
  price_per_head: p.pricePerHead,
  total_bookings: p.totalBookings,
  is_top_package: p.isTopPackage,
  description: p.description,
  image: p.image
});

const mapDbLead = (l: any): Lead => ({
  id: l.id,
  name: l.name,
  organization: l.organization,
  destination: l.destination,
  paxCount: Number(l.pax_count),
  estimatedValue: Number(l.estimated_value),
  source: l.source,
  createdAt: l.created_at,
  status: l.status,
  notes: l.notes,
  category: l.category,
  timeline: l.timeline
});

const mapAppLead = (l: Lead) => ({
  id: l.id,
  name: l.name,
  organization: l.organization,
  destination: l.destination,
  pax_count: l.paxCount,
  estimated_value: l.estimatedValue,
  source: l.source,
  created_at: l.createdAt,
  status: l.status,
  notes: l.notes,
  category: l.category,
  timeline: l.timeline
});

const mapDbPartner = (p: any): Partner => ({
  id: p.id,
  name: p.name,
  type: p.type,
  contact: p.contact,
  rating: Number(p.rating),
  status: p.status,
  capacity: p.capacity,
  rateInfo: p.rate_info
});

const mapAppPartner = (p: Partner) => ({
  id: p.id,
  name: p.name,
  type: p.type,
  contact: p.contact,
  rating: p.rating,
  status: p.status,
  capacity: p.capacity,
  rate_info: p.rateInfo
});

const mapDbSchedule = (s: any): TripSchedule => ({
  id: s.id,
  bookingId: s.booking_id,
  institutionName: s.institution_name,
  destination: s.destination,
  startDate: s.start_date,
  endDate: s.end_date,
  driverName: s.driver_name,
  busNumber: s.bus_number,
  tripStatus: s.trip_status
});

const mapAppSchedule = (s: TripSchedule) => ({
  id: s.id,
  booking_id: s.bookingId,
  institution_name: s.institutionName,
  destination: s.destination,
  start_date: s.startDate,
  end_date: s.endDate,
  driver_name: s.driverName,
  bus_number: s.busNumber,
  trip_status: s.tripStatus
});

export default function App() {
  // Navigation & UI state
  const [activeScreen, setActiveScreen] = useState<string>('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(11);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  // Authentication State
  const [user, setUser] = useState<any | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authBypass, setAuthBypass] = useState(false);

  const handleSignOut = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setAuthBypass(false);
    setActiveScreen('dashboard');
  };

  // Core Persistent State
  const [bookings, setBookings] = useState<TourBooking[]>(() => {
    const saved = localStorage.getItem('ee_bookings');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [packages, setPackages] = useState<TourPackage[]>(() => {
    const saved = localStorage.getItem('ee_packages');
    return saved ? JSON.parse(saved) : initialPackages;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('ee_leads');
    return saved ? JSON.parse(saved) : initialLeads;
  });

  const [partners, setPartners] = useState<Partner[]>(() => {
    const saved = localStorage.getItem('ee_partners');
    return saved ? JSON.parse(saved) : initialPartners;
  });

  const [schedules, setSchedules] = useState<TripSchedule[]>(() => {
    const saved = localStorage.getItem('ee_schedules');
    return saved ? JSON.parse(saved) : initialSchedules;
  });

  const [currency, setCurrency] = useState<'INR' | 'AED'>(() => {
    const saved = localStorage.getItem('ee_currency');
    return (saved === 'AED' ? 'AED' : 'INR') as 'INR' | 'AED';
  });

  // Save changes to localStorage on mutation state
  useEffect(() => {
    localStorage.setItem('ee_bookings', JSON.stringify(bookings));
    localStorage.setItem('ee_packages', JSON.stringify(packages));
    localStorage.setItem('ee_leads', JSON.stringify(leads));
    localStorage.setItem('ee_partners', JSON.stringify(partners));
    localStorage.setItem('ee_schedules', JSON.stringify(schedules));
    localStorage.setItem('ee_currency', currency);
  }, [bookings, packages, leads, partners, schedules, currency]);

  // Listen to Supabase Auth state changes
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setAuthLoading(false);
      return;
    }

    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load initial data from the REST API backend
  useEffect(() => {
    async function loadData() {
      try {
        const [resBookings, resPackages, resLeads, resPartners, resSchedules] = await Promise.all([
          fetch(`${API_URL}/bookings`).then(r => r.ok ? r.json() : null),
          fetch(`${API_URL}/packages`).then(r => r.ok ? r.json() : null),
          fetch(`${API_URL}/leads`).then(r => r.ok ? r.json() : null),
          fetch(`${API_URL}/partners`).then(r => r.ok ? r.json() : null),
          fetch(`${API_URL}/schedules`).then(r => r.ok ? r.json() : null)
        ]);

        if (resBookings) setBookings(resBookings);
        if (resPackages) setPackages(resPackages);
        if (resLeads) setLeads(resLeads);
        if (resPartners) setPartners(resPartners);
        if (resSchedules) setSchedules(resSchedules);
      } catch (err) {
        console.error("Failed to fetch from API, running offline fallback:", err);
      }
    }

    loadData();
  }, []);

  // Handler: Reseed Data
  const handleResetData = async () => {
    setBookings(initialBookings);
    setPackages(initialPackages);
    setLeads(initialLeads);
    setPartners(initialPartners);
    setSchedules(initialSchedules);
    setCurrency('INR');

    try {
      await fetch(`${API_URL}/reset`, { method: 'POST' });
    } catch (err) {
      console.error("API reset error:", err);
    }
  };

  // Handler: Update Booking pipeline columns
  const handleUpdateBookingStatus = async (bookingId: string, newStatus: BookingStatus) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
    try {
      await fetch(`${API_URL}/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: Edit specific booking details
  const handleUpdateBookingDetails = async (updated: TourBooking) => {
    setBookings(prev => prev.map(b => b.id === updated.id ? updated : b));
    try {
      await fetch(`${API_URL}/bookings/${updated.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: Create manual booking
  const handleAddBooking = async (newB: TourBooking) => {
    setBookings(prev => [newB, ...prev]);
    try {
      await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newB)
      });
    } catch (err) {
      console.error("API save error:", err);
    }
  };

  // Handler: Delete booking entry
  const handleDeleteBooking = async (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    setSchedules(prev => prev.filter(s => s.bookingId !== id));
    try {
      await fetch(`${API_URL}/bookings/${id}`, {
        method: 'DELETE'
      });
    } catch (err) {
      console.error("API delete error:", err);
    }
  };

  // Handler: Create new package catalogue
  const handleAddPackage = async (newPkg: TourPackage) => {
    setPackages(prev => [...prev, newPkg]);
    try {
      await fetch(`${API_URL}/packages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPkg)
      });
    } catch (err) {
      console.error("API save error:", err);
    }
  };

  // Handler: Edit existing package properties
  const handleEditPackage = async (updatedPkg: TourPackage) => {
    setPackages(prev => prev.map(p => p.id === updatedPkg.id ? updatedPkg : p));
    try {
      await fetch(`${API_URL}/packages/${updatedPkg.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPkg)
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: Create Lead manually
  const handleAddLead = async (newL: Lead) => {
    setLeads(prev => [newL, ...prev]);
    try {
      await fetch(`${API_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newL)
      });
    } catch (err) {
      console.error("API save error:", err);
    }
  };

  // Handler: Update Lead CRM status
  const handleUpdateLeadStatus = async (id: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    try {
      await fetch(`${API_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: Send mini WhatsApp notes & timeline additions
  const handleUpdateTimeline = async (leadId: string, chatMessage: string) => {
    let updatedTimeline: any[] = [];
    setLeads(prev => prev.map(l => {
      if (l.id === leadId) {
        updatedTimeline = [
          ...l.timeline,
          { title: chatMessage, time: 'Just now', completed: true }
        ];
        return {
          ...l,
          timeline: updatedTimeline
        };
      }
      return l;
    }));
    try {
      await fetch(`${API_URL}/leads/${leadId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeline: updatedTimeline })
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: single button Lead convertion to active pipeline
  const handleConvertLeadToBooking = async (lead: Lead) => {
    // 1. Mark lead as contacted / client hot
    setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: 'hot' } : l));
    
    // 2. Build official draft contract booking
    const activeBooking: TourBooking = {
      id: `B${Math.floor(100 + Math.random() * 900)}`,
      institution: lead.organization,
      category: lead.category,
      destination: lead.destination,
      duration: lead.destination.includes('3-Day') ? '3-Day' : lead.destination.includes('5-Day') ? '5-Day font' : '1-Day',
      paxCount: lead.paxCount,
      amount: lead.estimatedValue,
      status: 'enquiry', // starts at Enquiry Received stage
      date: '2026-06-15', // placeholder preferred
      createdDate: new Date().toISOString().split('T')[0],
      coordinatorName: lead.name,
      coordinatorPhone: '+91 94460 00000',
      notes: lead.notes,
      feedbackRating: null
    };

    setBookings(prev => [activeBooking, ...prev]);
    setActiveScreen('bookings');

    try {
      await Promise.all([
        fetch(`${API_URL}/leads/${lead.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'hot' })
        }),
        fetch(`${API_URL}/bookings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(activeBooking)
        })
      ]);
    } catch (err) {
      console.error("API convert error:", err);
    }
  };

  // Handler: Toggle Partner active availability status
  const handleTogglePartnerStatus = async (id: string) => {
    let nextStatus: 'active' | 'busy' | 'inactive' = 'active';
    setPartners(prev => prev.map(p => {
      if (p.id === id) {
        nextStatus = p.status === 'active' ? 'busy' : p.status === 'busy' ? 'inactive' : 'active';
        return { ...p, status: nextStatus };
      }
      return p;
    }));
    try {
      await fetch(`${API_URL}/partners/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
    } catch (err) {
      console.error("API update error:", err);
    }
  };

  // Handler: Create partner
  const handleAddPartner = async (newPt: Partner) => {
    setPartners(prev => [...prev, newPt]);
    try {
      await fetch(`${API_URL}/partners`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPt)
      });
    } catch (err) {
      console.error("API save error:", err);
    }
  };

  // Handler: Bind Scania coach fleet & driver to Confirmed bookings
  const handleAssignTransport = async (bookingId: string, busNumber: string, driverName: string) => {
    const targetB = bookings.find(b => b.id === bookingId);
    if (!targetB) return;

    const assignedBusId = busNumber.includes('Anora') ? 'BUS-ANORA' : 'BUS-ROYAL';
    const assignedDriverName = driverName.split('(')[0].trim();

    // 1. Link references inside Booking card
    setBookings(prev => prev.map(b => b.id === bookingId ? {
      ...b,
      assignedBusId,
      assignedDriver: assignedDriverName
    } : b));

    // 2. Create the dispatch schedule
    const newSchedule: TripSchedule = {
      id: `SCH${Math.floor(100 + Math.random() * 900)}`,
      bookingId,
      institutionName: targetB.institution,
      destination: targetB.destination,
      startDate: targetB.date,
      endDate: targetB.date, // assumed single period
      busNumber,
      driverName,
      tripStatus: 'upcoming'
    };

    setSchedules(prev => [newSchedule, ...prev]);

    try {
      await Promise.all([
        fetch(`${API_URL}/bookings/${bookingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            assignedBusId,
            assignedDriver: assignedDriverName
          })
        }),
        fetch(`${API_URL}/schedules`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSchedule)
        })
      ]);
    } catch (err) {
      console.error("API assign transport error:", err);
    }
  };

  const handleUpdateTripStatus = async (scheduleId: string, status: TripStatus) => {
    setSchedules(prev => prev.map(s => {
      if (s.id === scheduleId) {
        // Also update corresponding booking status to 'completed' if trip status sets to 'completed'
        if (status === 'completed') {
          setBookings(b => b.map(bk => bk.id === s.bookingId ? { ...bk, status: 'completed' } : bk));
          fetch(`${API_URL}/bookings/${s.bookingId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'completed' })
          }).catch(console.error);
        }
        return { ...s, tripStatus: status };
      }
      return s;
    }));
    try {
      await fetch(`${API_URL}/schedules/${scheduleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tripStatus: status })
      });
    } catch (err) {
      console.error("API update trip error:", err);
    }
  };

  // Screen routing index switcher
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return (
          <DashboardScreen 
            bookings={bookings} 
            packages={packages} 
            leads={leads} 
            onNavigate={(id) => setActiveScreen(id)} 
          />
        );
      case 'bookings':
        return (
          <BookingsScreen 
            bookings={bookings}
            onUpdateBookingStatus={handleUpdateBookingStatus}
            onUpdateBookingDetails={handleUpdateBookingDetails}
            onAddBooking={handleAddBooking}
            onDeleteBooking={handleDeleteBooking}
          />
        );
      case 'packages':
        return (
          <PackagesScreen 
            packages={packages}
            onAddPackage={handleAddPackage}
            onEditPackage={handleEditPackage}
          />
        );
      case 'leads':
        return (
          <LeadsScreen 
            leads={leads}
            onAddLead={handleAddLead}
            onUpdateLeadStatus={handleUpdateLeadStatus}
            onUpdateTimeline={handleUpdateTimeline}
            onConvertLeadToBooking={handleConvertLeadToBooking}
          />
        );
      case 'partners':
        return (
          <PartnersScreen 
            partners={partners}
            onToggleStatus={handleTogglePartnerStatus}
            onAddPartner={handleAddPartner}
          />
        );
      case 'schedule':
        return (
          <ScheduleScreen 
            schedules={schedules}
            bookings={bookings}
            partners={partners}
            onAssignTransport={handleAssignTransport}
            onUpdateTripStatus={handleUpdateTripStatus}
          />
        );
      case 'settings':
        return (
          <SettingsScreen 
            currency={currency}
            onSetCurrency={setCurrency}
            onResetData={handleResetData}
            onSignOut={handleSignOut}
          />
        );
      default:
        return <DashboardScreen bookings={bookings} packages={packages} leads={leads} onNavigate={setActiveScreen} />;
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'bookings', label: 'Booking Pipeline' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'leads', label: 'Leads Inbox' },
    { id: 'partners', label: 'Travel Partners' },
    { id: 'schedule', label: 'Coach Dispatch' },
    { id: 'settings', label: 'Control Center' }
  ];

  const getPageTitle = () => {
    const found = menuItems.find(item => item.id === activeScreen);
    return found ? found.label : 'Emirates Expedition';
  };

  const getTablerIcon = (id: string) => {
    switch (id) {
      case 'dashboard': return 'ti ti-layout-dashboard';
      case 'bookings': return 'ti ti-clipboard-list';
      case 'packages': return 'ti ti-map-pin';
      case 'leads': return 'ti ti-users';
      case 'partners': return 'ti ti-bus';
      case 'schedule': return 'ti ti-calendar';
      case 'settings': return 'ti ti-settings';
      default: return 'ti ti-help';
    }
  };

  const getScreenCta = () => {
    switch (activeScreen) {
      case 'bookings': return { label: 'New Booking', action: () => {
        const bookingsPanel = document.getElementById('bookings-pipeline-panel');
        if (bookingsPanel) {
          const cta = bookingsPanel.querySelector('.btn-p');
          if (cta) (cta as HTMLButtonElement).click();
        }
      }};
      case 'packages': return { label: 'Add Itinerary', action: () => {
        const pkgsPanel = document.getElementById('packages-inventory-panel');
        if (pkgsPanel) {
          const cta = pkgsPanel.querySelector('.btn-p');
          if (cta) (cta as HTMLButtonElement).click();
        }
      }};
      case 'leads': return { label: 'Create Lead', action: () => {
        const leadsPanel = document.getElementById('leads-inbound-panel');
        if (leadsPanel) {
          const cta = leadsPanel.querySelector('.btn-p');
          if (cta) (cta as HTMLButtonElement).click();
        }
      }};
      case 'partners': return { label: 'Add Partner', action: () => {
        const partnersPanel = document.getElementById('partners-screen-panel');
        if (partnersPanel) {
          const cta = partnersPanel.querySelector('.btn-p');
          if (cta) (cta as HTMLButtonElement).click();
        }
      }};
      case 'schedule': return { label: 'Dispatch Trip', action: () => {
        const schedulePanel = document.getElementById('schedule-screen-panel');
        if (schedulePanel) {
          const cta = schedulePanel.querySelector('.btn-p');
          if (cta) (cta as HTMLButtonElement).click();
        }
      }};
      default: return null;
    }
  };

  const cta = getScreenCta();

  return (
    <div className="shell">
      
      {/* ═══ SIDEBAR ═══ */}
      <div className={`sidebar ${mobileSidebarOpen ? 'flex' : 'hidden md:flex'}`} style={{ display: mobileSidebarOpen ? 'flex' : undefined }}>
        <div className="sb-logo">
          <div className="flex items-center justify-between">
            <div>
              <div className="brand">Emirates</div>
              <div className="sub">Expedition &middot; Admin</div>
            </div>
            {mobileSidebarOpen && (
              <button 
                onClick={() => setMobileSidebarOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
              >
                <i className="ti ti-x" style={{ fontSize: '18px' }}></i>
              </button>
            )}
          </div>
        </div>

        <div className="nav-sec">
          <div className="nav-lbl">Overview</div>
          <button
            onClick={() => {
              setActiveScreen('dashboard');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'dashboard' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('dashboard')}></i> Dashboard
          </button>
        </div>

        <div className="nav-sec">
          <div className="nav-lbl">Operations</div>
          <button
            onClick={() => {
              setActiveScreen('bookings');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'bookings' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('bookings')}></i> Bookings
          </button>
          <button
            onClick={() => {
              setActiveScreen('packages');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'packages' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('packages')}></i> Packages
          </button>
          <button
            onClick={() => {
              setActiveScreen('leads');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'leads' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('leads')}></i> Leads
          </button>
          <button
            onClick={() => {
              setActiveScreen('partners');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'partners' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('partners')}></i> Partners
          </button>
          <button
            onClick={() => {
              setActiveScreen('schedule');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'schedule' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('schedule')}></i> Schedule
          </button>
        </div>

        <div className="nav-sec">
          <div className="nav-lbl">System</div>
          <button
            onClick={() => {
              setActiveScreen('settings');
              setMobileSidebarOpen(false);
            }}
            className={`nav-item ${activeScreen === 'settings' ? 'active' : ''}`}
          >
            <i className={getTablerIcon('settings')}></i> Settings
          </button>
        </div>

        <div className="sb-foot">
          <div className="av" style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div className="av-c">EE</div>
              <div>
                <div className="av-n" style={{ textTransform: 'capitalize' }}>
                  {authBypass ? 'Dev Bypass' : (user?.email?.split('@')[0] || 'Admin')}
                </div>
                <div className="av-r">Emirates Expedition</div>
              </div>
            </div>
            <button 
              onClick={handleSignOut}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--red-tx)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8
              }}
              title="Sign Out"
            >
              <i className="ti ti-logout" style={{ fontSize: '16px' }}></i>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ MAIN APPLICATION WORKSPACE ═══ */}
      <div className="main">
        
        {/* ═══ TOPBAR ═══ */}
        <div className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden btn-s"
              style={{ padding: '6px', minWidth: 'auto' }}
            >
              <i className="ti ti-menu-2" style={{ fontSize: '16px' }}></i>
            </button>
            <div>
              <div className="tb-title">{getPageTitle()}</div>
              <div className="tb-sub">Jun 2026 &middot; Kerala, India</div>
            </div>
          </div>

          <div className="tb-acts">
            <div style={{ position: 'relative' }}>
              <button 
                className="btn-s"
                onClick={() => {
                  setShowNotificationsDropdown(!showNotificationsDropdown);
                  if (notificationsCount > 0) setNotificationsCount(0);
                }}
              >
                <i className="ti ti-bell"></i> {notificationsCount > 0 ? notificationsCount : '0'}
              </button>

              {showNotificationsDropdown && (
                <div 
                  className="absolute right-0 mt-2.5 border rounded-xl w-72 shadow-2xl p-3 z-50 text-left space-y-2.5 text-xs"
                  style={{ backgroundColor: 'var(--bg2)', borderColor: 'var(--border-md)', position: 'absolute', top: '100%', right: 0 }}
                >
                  <div className="flex items-center justify-between pb-1.5 border-b border-gold-300/10" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid var(--border)' }}>
                    <span className="font-bold text-white font-display">Unresolved Operations</span>
                    <button 
                      onClick={() => setShowNotificationsDropdown(false)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-3)' }}
                    >
                      <i className="ti ti-x"></i>
                    </button>
                  </div>
                  <div className="space-y-2 max-h-[220px] overflow-y-auto" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="p-2 rounded border-l-2 text-gray-300" style={{ background: 'var(--bg)', borderLeft: '3px solid var(--blue-tx)', padding: '8px' }}>
                      <div className="font-semibold text-white flex items-center gap-1" style={{ fontWeight: 'bold' }}>
                        <i className="ti ti-brand-whatsapp" style={{ color: 'var(--green-tx)' }}></i> WhatsApp Enquiry!
                      </div>
                      <p className="text-[10px] text-gray-405 mt-0.5" style={{ fontSize: '10px', marginTop: '2px', color: 'var(--text-2)' }}>Sreekanth Felix (St. Francis School, 70 pax) enquired about Lulumall outing prices.</p>
                    </div>
                    <div className="p-2 rounded border-l-2 text-gray-300" style={{ background: 'var(--bg)', borderLeft: '3px solid var(--gold)', padding: '8px' }}>
                      <div className="font-semibold text-white" style={{ fontWeight: 'bold' }}>Departure tomorrow!</div>
                      <p className="text-[10px] text-gray-405 mt-0.5" style={{ fontSize: '10px', marginTop: '2px', color: 'var(--text-2)' }}>GHSS Thonnakkal (40 pax Munnar adventure) departure locks. Driver Sukumaran assigned.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="btn-s"><i className="ti ti-brand-whatsapp"></i> Sync WA</button>
            
            {cta && (
              <button className="btn-p" onClick={cta.action}>
                <i className="ti ti-plus"></i> {cta.label}
              </button>
            )}
          </div>
        </div>

        {/* ═══ TAB BAR ═══ */}
        <div className="tab-bar">
          <button 
            className={`tab ${activeScreen === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveScreen('bookings')}
          >
            <i className="ti ti-clipboard-list"></i> Bookings
          </button>
          <button 
            className={`tab ${activeScreen === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveScreen('packages')}
          >
            <i className="ti ti-map-pin"></i> Packages
          </button>
          <button 
            className={`tab ${activeScreen === 'leads' ? 'active' : ''}`}
            onClick={() => setActiveScreen('leads')}
          >
            <i className="ti ti-users"></i> Leads &amp; Enquiries
          </button>
        </div>

        {/* ═══ CONTENT AREA ═══ */}
        <div className="content-area">
          <div className="screen active">
            {renderActiveScreen()}
          </div>
        </div>

      </div>

    </div>
  );
}
