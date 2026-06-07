import { useState, useEffect } from "react";
import {
  getStoredTours,
  saveStoredTours,
  getStoredPhotos,
  saveStoredPhotos,
  getStoredReviews,
  saveStoredReviews,
  getStoredSettings,
  saveStoredSettings,
  getStoredLeads,
  saveStoredLeads,
  getStoredBookings,
  saveStoredBookings,
  getStoredPartners,
  saveStoredPartners,
  getStoredSchedules,
  saveStoredSchedules,
} from "./storage";
import type { Tour, Photo, Review, BusinessSettings, Lead, Booking, Partner, TripSchedule } from "./types";

type TabType = "dashboard" | "bookings" | "packages" | "leads" | "partners" | "schedule" | "gallery" | "reviews" | "settings";

interface ToastMessage {
  id: string;
  type: "success" | "error";
  text: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("bookings");
  const [tours, setTours] = useState<Tour[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [settings, setSettings] = useState<BusinessSettings>({
    name: "",
    tagline: "",
    phone1: "",
    phone2: "",
    email: "",
    instagram: "",
    whatsapp: "",
    address: "",
  });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [schedules, setSchedules] = useState<TripSchedule[]>([]);

  // Selected state for Lead Details panel
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  // Search and Filter states
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingFilterCategory, setBookingFilterCategory] = useState("All");
  const [bookingFilterDuration, setBookingFilterDuration] = useState("Any");

  const [packageSearch, setPackageSearch] = useState("");
  const [packageFilterDuration, setPackageFilterDuration] = useState("All");
  const [packageSort, setPackageSort] = useState("Popular");

  const [leadSearch, setLeadSearch] = useState("");
  const [leadFilterStatus, setLeadFilterStatus] = useState("All");
  const [leadFilterSource, setLeadFilterSource] = useState("All");

  // Custom Toast System
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Modals & Sub-forms
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Partial<Booking> | null>(null);

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Partial<Lead> | null>(null);

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Partial<Tour> | null>(null);

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partial<Partner> | null>(null);

  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<Partial<TripSchedule> | null>(null);

  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [convertingLead, setConvertingLead] = useState<Lead | null>(null);

  const [dialingLead, setDialingLead] = useState<Lead | null>(null);
  const [dialingProgress, setDialingProgress] = useState("Ringing...");

  // Dashboard admin checklist items
  const [checklist, setChecklist] = useState<{ id: string; text: string; done: boolean }[]>([
    { id: "1", text: "Reply to St. Francis School WhatsApp query", done: false },
    { id: "2", text: "Assign Kerala Tourist Coaches to Loyola Trip", done: true },
    { id: "3", text: "Verify Misty Mountain Munnar room availability", done: false },
    { id: "4", text: "Sync WhatsApp pipeline", done: false },
    { id: "5", text: "Upload group photo from Ooty to gallery", done: true },
  ]);

  // Gallery URL form
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newPhotoAlt, setNewPhotoAlt] = useState("");
  const [newPhotoCategory, setNewPhotoCategory] = useState<Photo["category"]>("Moments");

  // Review form
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState<Partial<Review>>({
    quote: "",
    author: "",
    location: "",
    rating: 5,
    tripType: "",
    approved: true,
  });

  // Load datasets on mount
  useEffect(() => {
    setTours(getStoredTours());
    setPhotos(getStoredPhotos());
    setReviews(getStoredReviews());
    setSettings(getStoredSettings());
    setLeads(getStoredLeads());
    setBookings(getStoredBookings());
    setPartners(getStoredPartners());
    setSchedules(getStoredSchedules());
  }, []);

  // Update lists and persist
  const updateTours = (newTours: Tour[]) => {
    setTours(newTours);
    saveStoredTours(newTours);
    window.dispatchEvent(new Event("local-settings-updated"));
  };

  const updatePhotos = (newPhotos: Photo[]) => {
    setPhotos(newPhotos);
    saveStoredPhotos(newPhotos);
    window.dispatchEvent(new Event("local-settings-updated"));
  };

  const updateReviews = (newReviews: Review[]) => {
    setReviews(newReviews);
    saveStoredReviews(newReviews);
    window.dispatchEvent(new Event("local-settings-updated"));
  };

  const updateLeads = (newLeads: Lead[]) => {
    setLeads(newLeads);
    saveStoredLeads(newLeads);
    window.dispatchEvent(new Event("local-settings-updated"));
    window.dispatchEvent(new Event("storage"));
  };

  const updateBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    saveStoredBookings(newBookings);
    window.dispatchEvent(new Event("local-settings-updated"));
    window.dispatchEvent(new Event("storage"));
  };

  const updatePartners = (newPartners: Partner[]) => {
    setPartners(newPartners);
    saveStoredPartners(newPartners);
  };

  const updateSchedules = (newSchedules: TripSchedule[]) => {
    setSchedules(newSchedules);
    saveStoredSchedules(newSchedules);
  };

  // Toggle checklist status
  const handleToggleChecklist = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  // Active Lead Details Panel getter
  const activeLead = leads.find((l) => l.id === selectedLeadId) || leads[0];

  // --- ACTIONS: BOOKING PIPELINE ---
  const handleOpenAddBooking = () => {
    setEditingBooking({
      type: "School",
      title: "",
      description: "",
      pax: 50,
      price: "₹37,500",
      amount: 37500,
      date: "Trip June 2026",
      stage: "Enquiry",
    });
    setIsBookingModalOpen(true);
  };

  const handleOpenEditBooking = (bk: Booking, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingBooking({ ...bk });
    setIsBookingModalOpen(true);
  };

  const handleSaveBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBooking || !editingBooking.title || !editingBooking.description) {
      showToast("Please fill in organization and trip description.", "error");
      return;
    }

    const finalAmount = editingBooking.amount || 10000;
    const finalBooking = {
      ...editingBooking,
      amount: finalAmount,
      price: editingBooking.price || `₹${finalAmount.toLocaleString("en-IN")}`,
    } as Booking;

    if (editingBooking.id) {
      // Editing
      updateBookings(bookings.map((b) => (b.id === editingBooking.id ? finalBooking : b)));
      showToast("Booking updated successfully!");
    } else {
      // Adding new
      finalBooking.id = `bk-${Date.now()}`;
      updateBookings([...bookings, finalBooking]);
      showToast("Booking created successfully!");
    }
    setIsBookingModalOpen(false);
    setEditingBooking(null);
  };

  const handleDeleteBooking = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (confirm("Are you sure you want to delete this booking pipeline card?")) {
      updateBookings(bookings.filter((b) => b.id !== id));
      showToast("Booking deleted.");
    }
  };

  const handleMoveBookingStage = (id: string, stage: Booking["stage"], e: React.MouseEvent) => {
    e.stopPropagation();
    updateBookings(bookings.map((b) => (b.id === id ? { ...b, stage } : b)));
    showToast(`Booking moved to ${stage}`);
  };

  // --- ACTIONS: LEADS MANAGER ---
  const handleOpenAddLead = () => {
    setEditingLead({
      name: "",
      organization: "",
      designation: "Faculty Coordinator",
      destination: "",
      pax: 40,
      estimatedValue: 30000,
      phone: "",
      email: "",
      message: "",
      source: "WhatsApp",
      status: "New",
      converted: false,
    });
    setIsLeadModalOpen(true);
  };

  const handleOpenEditLead = (ld: Lead, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingLead({ ...ld });
    setIsLeadModalOpen(true);
  };

  const handleSaveLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLead || !editingLead.name || !editingLead.destination) {
      showToast("Please fill in contact name and destination.", "error");
      return;
    }

    const value = editingLead.estimatedValue || 10000;
    const finalLead = {
      ...editingLead,
      estimatedValue: value,
      timeAgo: editingLead.timeAgo || "Just now",
      timeline: editingLead.timeline || [
        { label: "Enquiry received", time: "Today", done: true },
        { label: "Lead created", time: "Today", done: true },
        { label: "Reply pending", time: "Pending", done: false, pending: true },
      ],
    } as Lead;

    if (editingLead.id) {
      updateLeads(leads.map((l) => (l.id === editingLead.id ? finalLead : l)));
      showToast("Lead updated.");
    } else {
      finalLead.id = `lead-${Date.now()}`;
      updateLeads([finalLead, ...leads]);
      setSelectedLeadId(finalLead.id);
      showToast("New Lead added!");
    }
    setIsLeadModalOpen(false);
    setEditingLead(null);
  };

  const handleDeleteLead = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (confirm("Permanently delete this lead?")) {
      updateLeads(leads.filter((l) => l.id !== id));
      if (selectedLeadId === id) setSelectedLeadId(null);
      showToast("Lead deleted.");
    }
  };

  // WhatsApp chat simulation
  const handleWhatsAppChat = (ld: Lead) => {
    const text = `Hi ${ld.name}, this is Emirates Expeditions. Regarding your enquiry for ${ld.destination} for ${ld.pax} pax, we would love to share a custom itinerary and quotes.`;
    const cleanedPhone = ld.phone.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanedPhone || "917012775400"}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    showToast("WhatsApp redirect opened!");

    // Update timeline
    const updatedTimeline = [...ld.timeline];
    const firstPendingIdx = updatedTimeline.findIndex(t => t.pending);
    if (firstPendingIdx !== -1) {
      updatedTimeline[firstPendingIdx].done = true;
      updatedTimeline[firstPendingIdx].pending = false;
      updatedTimeline[firstPendingIdx].time = "Sent WhatsApp";
    }
    updateLeads(leads.map(l => l.id === ld.id ? { ...l, timeline: updatedTimeline, status: "Contacted" } : l));
  };

  // Simulated Dialer Phone Call
  const startSimulatedCall = (ld: Lead) => {
    setDialingLead(ld);
    setDialingProgress("Connecting...");
    setTimeout(() => setDialingProgress("Ringing..."), 1000);
    setTimeout(() => setDialingProgress("Connected (0:01)"), 2500);
  };

  const closeSimulatedCall = () => {
    if (dialingLead) {
      // Update timeline
      const updatedTimeline = [...dialingLead.timeline];
      const firstPendingIdx = updatedTimeline.findIndex(t => t.pending);
      if (firstPendingIdx !== -1) {
        updatedTimeline[firstPendingIdx].done = true;
        updatedTimeline[firstPendingIdx].pending = false;
        updatedTimeline[firstPendingIdx].time = "Call completed";
      }
      updateLeads(leads.map(l => l.id === dialingLead.id ? { ...l, timeline: updatedTimeline, status: "Contacted" } : l));
      showToast(`Logged phone call with ${dialingLead.name}`);
    }
    setDialingLead(null);
  };

  // Convert Lead to Booking
  const handleOpenConvertLead = (ld: Lead) => {
    setConvertingLead(ld);
    setIsConvertModalOpen(true);
  };

  const handleConfirmConvert = (stage: Booking["stage"]) => {
    if (!convertingLead) return;

    // 1. Create a new booking
    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      type: convertingLead.organization.toLowerCase().includes("college") ? "College" : 
            convertingLead.organization.toLowerCase().includes("school") ? "School" : 
            convertingLead.organization.toLowerCase().includes("corp") || convertingLead.organization.toLowerCase().includes("hr") ? "Corporate" : "Family",
      title: convertingLead.organization || convertingLead.name,
      description: convertingLead.destination,
      pax: convertingLead.pax,
      price: `₹${convertingLead.estimatedValue.toLocaleString("en-IN")}`,
      amount: convertingLead.estimatedValue,
      date: `Trip ${convertingLead.preferredDate}`,
      stage: stage,
    };

    updateBookings([...bookings, newBooking]);

    // 2. Mark Lead as Converted
    const updatedTimeline = [
      ...convertingLead.timeline.map(t => ({ ...t, done: true, pending: false })),
      { label: `Converted to ${stage} Booking`, time: new Date().toLocaleDateString(), done: true }
    ];

    updateLeads(leads.map(l => l.id === convertingLead.id ? { 
      ...l, 
      converted: true, 
      status: "Hot", 
      timeline: updatedTimeline 
    } : l));

    setIsConvertModalOpen(false);
    setConvertingLead(null);
    setActiveTab("bookings");
    showToast("Successfully converted Lead to Booking Pipeline!");
  };

  // --- ACTIONS: TOUR PACKAGES ---
  const handleOpenAddTour = () => {
    setEditingTour({
      slug: "",
      title: "",
      category: "Day Trip",
      duration: "1 Day",
      durationInDays: 1,
      price: "₹750 / head",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      blurb: "",
      highlights: [],
      fullDescription: "",
      itinerary: [
        { day: 1, title: "Exploring major spots", activities: ["Scenic sightseeing", "Photoshoot"] }
      ],
      inclusions: ["AC Coach transport", "Tour guide support"],
      exclusions: ["Meals", "Entry tickets"],
      gallery: [],
    });
    setIsTourModalOpen(true);
  };

  const handleOpenEditTour = (tour: Tour) => {
    setEditingTour({ ...tour });
    setIsTourModalOpen(true);
  };

  const handleSaveTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTour || !editingTour.title || !editingTour.duration) {
      showToast("Please fill in required fields.", "error");
      return;
    }

    const finalTour = { ...editingTour } as Tour;
    if (!finalTour.slug) {
      finalTour.slug = finalTour.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const exists = tours.some((t) => t.slug === finalTour.slug);
    let updated: Tour[];

    if (editingTour.slug) {
      updated = tours.map((t) => (t.slug === editingTour.slug ? finalTour : t));
      showToast("Package updated!");
    } else {
      if (exists) {
        finalTour.slug = `${finalTour.slug}-${Date.now().toString().slice(-4)}`;
      }
      updated = [finalTour, ...tours];
      showToast("New package catalogued!");
    }

    updateTours(updated);
    setIsTourModalOpen(false);
    setEditingTour(null);
  };

  const handleDeleteTour = (slug: string) => {
    if (confirm("Are you sure you want to delete this package catalog?")) {
      updateTours(tours.filter((t) => t.slug !== slug));
      showToast("Package removed.");
    }
  };

  // --- ACTIONS: PARTNERS CONTROL ---
  const handleOpenAddPartner = () => {
    setEditingPartner({
      name: "",
      type: "Transport",
      contact: "",
      status: "Available",
      rating: 5,
    });
    setIsPartnerModalOpen(true);
  };

  const handleSavePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner || !editingPartner.name || !editingPartner.contact) {
      showToast("Please input partner name and phone.", "error");
      return;
    }

    const finalPartner = { ...editingPartner } as Partner;
    if (editingPartner.id) {
      updatePartners(partners.map(p => p.id === editingPartner.id ? finalPartner : p));
      showToast("Partner updated.");
    } else {
      finalPartner.id = `pt-${Date.now()}`;
      updatePartners([...partners, finalPartner]);
      showToast("Partner listed.");
    }
    setIsPartnerModalOpen(false);
    setEditingPartner(null);
  };

  const handleDeletePartner = (id: string) => {
    if (confirm("Remove this partner?")) {
      updatePartners(partners.filter(p => p.id !== id));
      showToast("Partner removed.");
    }
  };

  // --- ACTIONS: SCHEDULE CALENDAR ---
  const handleOpenAddSchedule = () => {
    setEditingSchedule({
      date: new Date().toISOString().split("T")[0],
      tourTitle: "",
      pax: 50,
      assignedPartner: partners[0]?.name || "Kerala Tourist Coaches",
      status: "Upcoming",
    });
    setIsScheduleModalOpen(true);
  };

  const handleSaveSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSchedule || !editingSchedule.tourTitle || !editingSchedule.date) {
      showToast("Please input tour details and date.", "error");
      return;
    }

    const finalSchedule = { ...editingSchedule } as TripSchedule;
    if (editingSchedule.id) {
      updateSchedules(schedules.map(s => s.id === editingSchedule.id ? finalSchedule : s));
      showToast("Schedule updated.");
    } else {
      finalSchedule.id = `sch-${Date.now()}`;
      updateSchedules([...schedules, finalSchedule]);
      showToast("Trip scheduled!");
    }
    setIsScheduleModalOpen(false);
    setEditingSchedule(null);
  };

  const handleDeleteSchedule = (id: string) => {
    if (confirm("Cancel and delete this scheduled trip?")) {
      updateSchedules(schedules.filter(s => s.id !== id));
      showToast("Scheduled trip deleted.");
    }
  };

  // --- ACTIONS: GALLERY CONTROL ---
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl) {
      showToast("Please input an image URL.", "error");
      return;
    }
    const newPhoto: Photo = {
      src: newPhotoUrl,
      alt: newPhotoAlt || "Emirates Expedition Moment",
      category: newPhotoCategory,
    };
    updatePhotos([newPhoto, ...photos]);
    showToast("Photo uploaded to gallery!");
    setNewPhotoUrl("");
    setNewPhotoAlt("");
  };

  const handleDeletePhoto = (src: string) => {
    if (confirm("Remove image from visual feed?")) {
      updatePhotos(photos.filter(p => p.src !== src));
      showToast("Image removed.");
    }
  };

  // --- ACTIONS: REVIEWS MODERATION ---
  const handleToggleReviewApprove = (id: string) => {
    updateReviews(reviews.map((r) => (r.id === id ? { ...r, approved: !r.approved } : r)));
    showToast("Review status modified.");
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.quote || !newReview.author || !newReview.location) {
      showToast("Please input quotation and author credentials.", "error");
      return;
    }
    const reviewToAdd: Review = {
      id: `rev-${Date.now()}`,
      quote: newReview.quote.toUpperCase(),
      author: newReview.author,
      location: newReview.location,
      rating: newReview.rating || 5,
      tripType: newReview.tripType || "General Expedition",
      approved: newReview.approved ?? true,
      date: new Date().toISOString().split("T")[0],
    };
    updateReviews([reviewToAdd, ...reviews]);
    setIsReviewModalOpen(false);
    setNewReview({ quote: "", author: "", location: "", rating: 5, tripType: "", approved: true });
    showToast("Testimonial added!");
  };

  const handleDeleteReview = (id: string) => {
    if (confirm("Delete client testimonial?")) {
      updateReviews(reviews.filter(r => r.id !== id));
      showToast("Review deleted.");
    }
  };

  // --- ACTIONS: SETTINGS SAVING ---
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSettings(settings);
    showToast("Configurations saved successfully!");
    window.dispatchEvent(new Event("local-settings-updated"));
  };

  // --- STATS COMPILATION FOR DASHBOARD ---
  const pipelineVolume = bookings.reduce((sum, b) => b.stage !== "Completed" ? sum + b.amount : sum, 0);
  const securedRevenue = bookings.reduce((sum, b) => b.stage === "Advance Paid" || b.stage === "Confirmed" || b.stage === "Completed" ? sum + b.amount : sum, 0);

  // --- FILTERED DATA SETS ---
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(bookingSearch.toLowerCase()) || 
                          b.description.toLowerCase().includes(bookingSearch.toLowerCase());
    const matchesCategory = bookingFilterCategory === "All" || b.type.toLowerCase() === bookingFilterCategory.toLowerCase();
    
    let matchesDuration = true;
    if (bookingFilterDuration !== "Any") {
      if (bookingFilterDuration === "1-Day") matchesDuration = b.description.includes("1-Day");
      else if (bookingFilterDuration === "2-Day") matchesDuration = b.description.includes("2-Day");
      else if (bookingFilterDuration === "3-5 Day") matchesDuration = b.description.includes("3-Day") || b.description.includes("4-Day") || b.description.includes("5-Day");
    }
    return matchesSearch && matchesCategory && matchesDuration;
  });

  const filteredTours = tours.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(packageSearch.toLowerCase()) || 
                          t.blurb.toLowerCase().includes(packageSearch.toLowerCase());
    
    let matchesDuration = true;
    if (packageFilterDuration !== "All") {
      matchesDuration = t.duration.toLowerCase().includes(packageFilterDuration.toLowerCase());
    }
    return matchesSearch && matchesDuration;
  }).sort((a, b) => {
    if (packageSort === "Price ↑") return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
    if (packageSort === "Price ↓") return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
    return 0; // Popular (as stored)
  });

  const filteredLeads = leads.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(leadSearch.toLowerCase()) || 
                          l.organization.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          l.destination.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadFilterStatus === "All" || l.status.toLowerCase() === leadFilterStatus.toLowerCase();
    const matchesSource = leadFilterSource === "All" || l.source.toLowerCase() === leadFilterSource.toLowerCase();
    return matchesSearch && matchesStatus && matchesSource && !l.converted;
  });

  return (
    <div className="shell">
      {/* ═══ SIDEBAR ═══ */}
      <div className="sidebar">
        <div className="sb-logo">
          <div className="brand">Emirates</div>
          <div className="sub">Expedition · Control Panel</div>
        </div>
        <div className="nav-sec">
          <div className="nav-lbl">Overview</div>
          <div
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <i className="ti ti-layout-dashboard"></i> Dashboard
          </div>
        </div>
        <div className="nav-sec">
          <div className="nav-lbl">Operations</div>
          <div
            className={`nav-item ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => setActiveTab("bookings")}
          >
            <i className="ti ti-clipboard-list"></i> Bookings
          </div>
          <div
            className={`nav-item ${activeTab === "packages" ? "active" : ""}`}
            onClick={() => setActiveTab("packages")}
          >
            <i className="ti ti-map-pin"></i> Packages
          </div>
          <div
            className={`nav-item ${activeTab === "leads" ? "active" : ""}`}
            onClick={() => setActiveTab("leads")}
          >
            <i className="ti ti-users"></i> Leads
          </div>
          <div
            className={`nav-item ${activeTab === "partners" ? "active" : ""}`}
            onClick={() => setActiveTab("partners")}
          >
            <i className="ti ti-bus"></i> Partners
          </div>
          <div
            className={`nav-item ${activeTab === "schedule" ? "active" : ""}`}
            onClick={() => setActiveTab("schedule")}
          >
            <i className="ti ti-calendar"></i> Schedule
          </div>
        </div>
        <div className="nav-sec">
          <div className="nav-lbl">Content</div>
          <div
            className={`nav-item ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            <i className="ti ti-photo"></i> Gallery
          </div>
          <div
            className={`nav-item ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            <i className="ti ti-message-2"></i> Reviews
          </div>
        </div>
        <div className="nav-sec">
          <div className="nav-lbl">System</div>
          <div
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <i className="ti ti-settings"></i> Settings
          </div>
        </div>
        <div className="sb-foot">
          <div className="av">
            <div className="av-c">EE</div>
            <div>
              <div className="av-n">Admin Desk</div>
              <div className="av-r">{settings.name || "Emirates Expedition"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MAIN ═══ */}
      <div className="main">
        {/* TOPBAR */}
        <div className="topbar">
          <div>
            <div className="tb-title">
              {activeTab === "dashboard" && "Dashboard Overview"}
              {activeTab === "bookings" && "Booking Pipeline"}
              {activeTab === "packages" && "Tour Packages"}
              {activeTab === "leads" && "Leads & Enquiries"}
              {activeTab === "partners" && "Operations Partners"}
              {activeTab === "schedule" && "Trips Schedule"}
              {activeTab === "gallery" && "Gallery catalogue"}
              {activeTab === "reviews" && "Client Reviews Moderator"}
              {activeTab === "settings" && "General Settings"}
            </div>
            <div className="tb-sub">
              {activeTab === "dashboard" && "Realtime performance parameters"}
              {activeTab === "bookings" && `Managing bookings: ${bookings.length} total entries`}
              {activeTab === "packages" && `${tours.length} active packages catalogues`}
              {activeTab === "leads" && `${leads.filter(l => !l.converted).length} open customer enquiries`}
              {activeTab === "partners" && `${partners.length} listed logistics partners`}
              {activeTab === "schedule" && `${schedules.length} active group itineraries`}
              {activeTab === "gallery" && `${photos.length} visual asset items`}
              {activeTab === "reviews" && `${reviews.length} client reviews`}
              {activeTab === "settings" && "System configurations and phone parameters"}
            </div>
          </div>
          <div className="tb-acts">
            <button className="btn-s" onClick={() => showToast("Database synchronization active")}>
              <i className="ti ti-bell"></i> {leads.filter(l => l.status === "New").length}
            </button>
            <button className="btn-s" onClick={() => showToast("WhatsApp database synchronized successfully")}>
              <i className="ti ti-brand-whatsapp"></i> Sync WA
            </button>
            {activeTab === "bookings" && (
              <button className="btn-p" onClick={handleOpenAddBooking}>
                <i className="ti ti-plus"></i> New Booking
              </button>
            )}
            {activeTab === "leads" && (
              <button className="btn-p" onClick={handleOpenAddLead}>
                <i className="ti ti-plus"></i> Add Lead
              </button>
            )}
            {activeTab === "packages" && (
              <button className="btn-p" onClick={handleOpenAddTour}>
                <i className="ti ti-plus"></i> Add Package
              </button>
            )}
            {activeTab === "partners" && (
              <button className="btn-p" onClick={handleOpenAddPartner}>
                <i className="ti ti-plus"></i> Add Partner
              </button>
            )}
            {activeTab === "schedule" && (
              <button className="btn-p" onClick={handleOpenAddSchedule}>
                <i className="ti ti-plus"></i> Schedule Trip
              </button>
            )}
            {activeTab === "reviews" && (
              <button className="btn-p" onClick={() => setIsReviewModalOpen(true)}>
                <i className="ti ti-plus"></i> Add Testimonial
              </button>
            )}
          </div>
        </div>

        {/* TAB NAVIGATION HEADER (Synced to SideBar) */}
        {["bookings", "packages", "leads"].includes(activeTab) && (
          <div className="tab-bar">
            <button
              className={`tab ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              <i className="ti ti-clipboard-list"></i> Bookings
            </button>
            <button
              className={`tab ${activeTab === "packages" ? "active" : ""}`}
              onClick={() => setActiveTab("packages")}
            >
              <i className="ti ti-map-pin"></i> Packages
            </button>
            <button
              className={`tab ${activeTab === "leads" ? "active" : ""}`}
              onClick={() => setActiveTab("leads")}
            >
              <i className="ti ti-users"></i> Leads &amp; Enquiries
            </button>
          </div>
        )}

        {/* CONTENT */}
        <div className="content-area">
          {/* ═══════════ DASHBOARD OVERVIEW ═══════════ */}
          {activeTab === "dashboard" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Operational Overview</div>
                  <div className="ps">Business health metrics for this quarter</div>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-box">
                  <div className="sl">Pipeline Volume</div>
                  <div className="sv" style={{ color: "var(--gold-lt)" }}>
                    ₹{(pipelineVolume / 100000).toFixed(1)}L
                  </div>
                  <div className="ss">Awaiting execution</div>
                </div>
                <div className="stat-box">
                  <div className="sl">Secured Revenue</div>
                  <div className="sv" style={{ color: "var(--green-tx)" }}>
                    ₹{(securedRevenue / 100000).toFixed(1)}L
                  </div>
                  <div className="ss">Deposited/Collected</div>
                </div>
                <div className="stat-box">
                  <div className="sl">Conversion Rate</div>
                  <div className="sv">38%</div>
                  <div className="ss">Enquiry → Confirmed</div>
                </div>
                <div className="stat-box">
                  <div className="sl">Active Catalogues</div>
                  <div className="sv">{tours.length}</div>
                  <div className="ss">Listed expeditions</div>
                </div>
              </div>

              <div className="dash-grid">
                {/* Left Card: Checklist & Recent Leads */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="dash-card">
                    <div className="dash-card-title">
                      <span>Recent Leads</span>
                      <button className="btn-s" style={{ padding: "4px 8px", fontSize: "10px" }} onClick={() => setActiveTab("leads")}>
                        View All
                      </button>
                    </div>
                    <div className="dash-list">
                      {leads.filter(l => !l.converted).slice(0, 4).map(l => (
                        <div key={l.id} className="dash-li">
                          <div>
                            <div className="dash-li-text">{l.name}</div>
                            <div className="dash-li-sub">{l.organization || "Direct Client"} · {l.destination}</div>
                          </div>
                          <div className="dash-li-val">
                            <span className={`badge ${l.status === "New" ? "b-blue" : "b-gold"}`}>{l.status}</span>
                            <div className="dash-li-sub" style={{ marginTop: "4px" }}>₹{l.estimatedValue.toLocaleString("en-IN")}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dash-card">
                    <div className="dash-card-title">Upcoming Scheduled Departures</div>
                    <div className="dash-list">
                      {schedules.slice(0, 3).map(s => (
                        <div key={s.id} className="dash-li">
                          <div>
                            <div className="dash-li-text">{s.tourTitle}</div>
                            <div className="dash-li-sub">Departure Date: {s.date}</div>
                          </div>
                          <div className="dash-li-val">
                            <span className="badge b-green">{s.status}</span>
                            <div className="dash-li-sub" style={{ marginTop: "4px" }}>{s.pax} Pax</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Card: Admin checklist */}
                <div className="dash-card">
                  <div className="dash-card-title">Task Checklist</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {checklist.map(item => (
                      <label key={item.id} className="checklist-item">
                        <input
                          type="checkbox"
                          checked={item.done}
                          onChange={() => handleToggleChecklist(item.id)}
                        />
                        <span className={`checklist-text ${item.done ? "done" : ""}`}>
                          {item.text}
                        </span>
                      </label>
                    ))}
                    <button
                      className="btn-s"
                      style={{ marginTop: "12px", width: "100%", justifyContent: "center" }}
                      onClick={() => {
                        const txt = prompt("Enter a new task:");
                        if (txt) setChecklist([...checklist, { id: Date.now().toString(), text: txt, done: false }]);
                      }}
                    >
                      <i className="ti ti-plus"></i> Add task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════ BOOKINGS KANBAN PIPELINE ═══════════ */}
          {activeTab === "bookings" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Booking Pipeline</div>
                  <div className="ps">All group departures &middot; {bookings.length} total this month</div>
                </div>
                <div className="acts">
                  <button className="btn-s" onClick={() => showToast("Pipeline filters applied")}><i className="ti ti-filter"></i> Filter</button>
                  <button className="btn-s" onClick={() => showToast("Exported pipeline data successfully")}><i className="ti ti-download"></i> Export</button>
                  <button className="btn-p" onClick={handleOpenAddBooking}><i className="ti ti-plus"></i> New Booking</button>
                </div>
              </div>

              {/* Filters */}
              <div className="filter-bar">
                <div className="srch">
                  <i className="ti ti-search"></i>
                  <input
                    type="text"
                    placeholder="Search organization, destination..."
                    value={bookingSearch}
                    onChange={(e) => setBookingSearch(e.target.value)}
                  />
                </div>
                {["All", "School", "College", "Family", "Corporate", "Devotional"].map((cat) => (
                  <div
                    key={cat}
                    className={`chip ${bookingFilterCategory === cat ? "on" : ""}`}
                    onClick={() => setBookingFilterCategory(cat)}
                  >
                    {cat}
                  </div>
                ))}
                <select
                  className="mini"
                  value={bookingFilterDuration}
                  onChange={(e) => setBookingFilterDuration(e.target.value)}
                >
                  <option value="Any">Any duration</option>
                  <option value="1-Day">1-Day</option>
                  <option value="2-Day">2-Day</option>
                  <option value="3-5 Day">3–5 Day</option>
                </select>
              </div>

              {/* Kanban */}
              <div className="kanban-wrap">
                <div className="kanban">
                  {/* Stages */}
                  {(["Enquiry", "Quote Sent", "Advance Paid", "Confirmed", "Completed"] as Booking["stage"][]).map((stage) => {
                    const stageBookings = filteredBookings.filter((b) => b.stage === stage);
                    return (
                      <div key={stage} className="k-col">
                        <div className="k-head">
                          <span className="k-lbl">{stage}</span>
                          <span className="k-cnt">{stageBookings.length}</span>
                        </div>
                        <div className="k-list-container">
                          {stageBookings.map((b) => (
                            <div key={b.id} className="kc" onClick={() => handleOpenEditBooking(b)}>
                              <div className="flex justify-between items-start">
                                <span className={`ktag ${
                                  b.type === "School" ? "t-sc" :
                                  b.type === "College" ? "t-co" :
                                  b.type === "Family" ? "t-fa" :
                                  b.type === "Corporate" ? "t-cr" : "t-dv"
                                }`}>{b.type}</span>
                                
                                <div style={{ display: "flex", gap: "4px" }}>
                                  <button
                                    onClick={(e) => handleOpenEditBooking(b, e)}
                                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)" }}
                                  >
                                    <i className="ti ti-edit" style={{ fontSize: "10px" }} />
                                  </button>
                                  <button
                                    onClick={(e) => handleDeleteBooking(b.id, e)}
                                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--red-tx)" }}
                                  >
                                    <i className="ti ti-trash" style={{ fontSize: "10px" }} />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="ko">{b.title}</div>
                              <div className="kd">{b.description}</div>
                              <div className="km">
                                <span className="kpax">
                                  <i className="ti ti-users" style={{ fontSize: "10px" }}></i> {b.pax} pax
                                </span>
                                <span className="kamt">{b.price}</span>
                              </div>
                              <div className="kdate">
                                <span>{b.date}</span>
                                <select
                                  value={b.stage}
                                  onChange={(e) => handleMoveBookingStage(b.id, e.target.value as Booking["stage"], e as any)}
                                  className="mini"
                                  style={{ height: "18px", padding: "0 2px", fontSize: "8px", background: "var(--bg2)" }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <option value="Enquiry">Enquiry</option>
                                  <option value="Quote Sent">Quote Sent</option>
                                  <option value="Advance Paid">Advance Paid</option>
                                  <option value="Confirmed">Confirmed</option>
                                  <option value="Completed">Completed</option>
                                </select>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════ TOUR PACKAGES ═══════════ */}
          {activeTab === "packages" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Tour Packages</div>
                  <div className="ps">{tours.length} active packages catalogues &middot; Kerala to South India</div>
                </div>
                <div className="acts">
                  <button className="btn-s" onClick={() => showToast("Revenue view coming soon")}><i className="ti ti-chart-bar"></i> Revenue View</button>
                  <button className="btn-p" onClick={handleOpenAddTour}><i className="ti ti-plus"></i> Add Package</button>
                </div>
              </div>

              {/* Filters */}
              <div className="filter-bar">
                <div className="srch">
                  <i className="ti ti-search"></i>
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={packageSearch}
                    onChange={(e) => setPackageSearch(e.target.value)}
                  />
                </div>
                {["All", "1 Day", "2 Days", "3 Days", "4 Days", "5 Days"].map((dur) => (
                  <div
                    key={dur}
                    className={`chip ${packageFilterDuration === dur ? "on" : ""}`}
                    onClick={() => setPackageFilterDuration(dur)}
                  >
                    {dur}
                  </div>
                ))}
                <select
                  className="mini"
                  value={packageSort}
                  onChange={(e) => setPackageSort(e.target.value)}
                >
                  <option value="Popular">Sort: Popular</option>
                  <option value="Price ↑">Price ↑</option>
                  <option value="Price ↓">Price ↓</option>
                </select>
              </div>

              {/* Grid */}
              <div className="pkg-grid">
                {filteredTours.map((t) => (
                  <div key={t.slug} className="pc">
                    <div className="pc-hd">
                      <div className="dur-b">{t.duration}</div>
                      <div className="pc-name">{t.title}</div>
                      <div className="stops">
                        {t.highlights.map((h, i) => (
                          <span key={i} className="sp">{h}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pc-bd">
                      <div className="pc-r2">
                        <div>
                          <div className="pprice">{t.price}</div>
                          <div className="pps">estimated per head</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div className="pbkd">{t.durationInDays * 20 + 12}</div>
                          <div className="pbss">bookings completed</div>
                        </div>
                      </div>
                      <div className="pc-acts">
                        <button className="pa" onClick={() => handleOpenEditTour(t)}>
                          <i className="ti ti-edit" style={{ fontSize: "10px" }}></i> Edit
                        </button>
                        <button className="pa pr" onClick={() => handleDeleteTour(t.slug)}>
                          <i className="ti ti-trash" style={{ fontSize: "10px" }}></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="add-c" onClick={handleOpenAddTour}>
                  <i className="ti ti-plus"></i>
                  <span>Add new package</span>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════ LEADS & ENQUIRIES ═══════════ */}
          {activeTab === "leads" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Leads &amp; Enquiries</div>
                  <div className="ps">{filteredLeads.length} open enquiries &middot; WhatsApp + Web</div>
                </div>
                <div className="acts">
                  <button className="btn-s" onClick={() => showToast("Syncing WhatsApp notifications")}><i className="ti ti-brand-whatsapp"></i> Sync WhatsApp</button>
                  <button className="btn-p" onClick={handleOpenAddLead}><i className="ti ti-plus"></i> Add Lead</button>
                </div>
              </div>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-box"><div className="sl">New Enquiries</div><div className="sv">{leads.filter(l => l.status === "New" && !l.converted).length}</div><div className="ss">Received today</div></div>
                <div className="stat-box"><div className="sl">Needs Reply</div><div className="sv" style={{ color: "var(--red-tx)" }}>{leads.filter(l => l.status === "New" && !l.converted).length}</div><div className="ss">Enquiries &gt; 12h</div></div>
                <div className="stat-box"><div className="sl">WhatsApp Origin</div><div className="sv">{leads.filter(l => l.source === "WhatsApp").length}</div><div className="ss">Inbound leads</div></div>
                <div className="stat-box"><div className="sl">Avg Group Size</div><div className="sv">72</div><div className="ss">Pax per expedition</div></div>
              </div>

              {/* Filters */}
              <div className="filter-bar">
                <div className="srch">
                  <i className="ti ti-search"></i>
                  <input
                    type="text"
                    placeholder="Search name, organization..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                  />
                </div>
                {["All", "New", "Contacted", "Quote Sent", "Hot"].map((st) => (
                  <div
                    key={st}
                    className={`chip ${leadFilterStatus === st ? "on" : ""}`}
                    onClick={() => setLeadFilterStatus(st)}
                  >
                    {st}
                  </div>
                ))}
                <select
                  className="mini"
                  value={leadFilterSource}
                  onChange={(e) => setLeadFilterSource(e.target.value)}
                >
                  <option value="All">All sources</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Website">Website</option>
                  <option value="Referral">Referral</option>
                </select>
              </div>

              {/* Grid / Details Panel split screen */}
              {filteredLeads.length === 0 ? (
                <div className="tbl-wrap" style={{ padding: "40px", textAlign: "center", color: "var(--text-3)" }}>
                  No open enquiries found matching filters.
                </div>
              ) : (
                <div className="leads-layout">
                  {/* Left Column: Leads list */}
                  <div className="leads-list">
                    {filteredLeads.map((l) => (
                      <div
                        key={l.id}
                        className={`lr ${activeLead?.id === l.id ? "sel" : ""}`}
                        onClick={() => setSelectedLeadId(l.id)}
                      >
                        <div className="lav" style={{
                          background: l.source === "WhatsApp" ? "var(--green-bg)" : "var(--blue-bg)",
                          color: l.source === "WhatsApp" ? "var(--green-tx)" : "var(--blue-tx)"
                        }}>
                          {l.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="lm">
                          <div className="ln">{l.name}</div>
                          <div className="lo">{l.organization || "Direct Customer Enquiry"}</div>
                          <div className="ldest">{l.destination} &middot; {l.pax} pax</div>
                        </div>
                        <div className="lr-r">
                          <div className="lval">₹{l.estimatedValue.toLocaleString("en-IN")}</div>
                          <div className="ltime">{l.timeAgo}</div>
                          <span className={`lsrc ${
                            l.source === "WhatsApp" ? "s-wa" :
                            l.source === "Website" ? "s-web" : "s-ref"
                          }`}>
                            <i className={`ti ${
                              l.source === "WhatsApp" ? "ti-brand-whatsapp" :
                              l.source === "Website" ? "ti-world" : "ti-user-plus"
                            }`} style={{ marginRight: "3px" }}></i>
                            {l.source}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Lead details side-panel */}
                  {activeLead && (
                    <div className="dp">
                      <div className="dp-hd">
                        <div className="dp-top">
                          <div className="dp-av">{activeLead.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</div>
                          <div>
                            <div className="dp-nm">{activeLead.name}</div>
                            <div className="dp-og">{activeLead.designation} &middot; {activeLead.organization || "Private Client"}</div>
                          </div>
                        </div>
                        <div className="dp-sr">
                          <span className={`badge ${
                            activeLead.status === "New" ? "b-blue" :
                            activeLead.status === "Contacted" ? "b-gold" : "b-green"
                          }`}>{activeLead.status}</span>
                          <span className="badge b-gray">{activeLead.source}</span>
                          <button
                            onClick={() => handleOpenEditLead(activeLead)}
                            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--text-2)", fontSize: "11px" }}
                          >
                            <i className="ti ti-edit" style={{ marginRight: "2px" }} /> Edit
                          </button>
                          <button
                            onClick={(e) => handleDeleteLead(activeLead.id, e)}
                            style={{ marginLeft: "10px", background: "none", border: "none", cursor: "pointer", color: "var(--red-tx)", fontSize: "11px" }}
                          >
                            <i className="ti ti-trash" style={{ marginRight: "2px" }} /> Delete
                          </button>
                        </div>
                      </div>
                      <div className="dp-bd">
                        <div className="dp-f"><div className="dp-lb">Destination</div><div className="dp-vl">{activeLead.destination}</div></div>
                        <div className="dp-f"><div className="dp-lb">Preferred Date</div><div className="dp-vl">{activeLead.preferredDate}</div></div>
                        <div className="dp-f"><div className="dp-lb">Group size / Occupancy</div><div className="dp-vl">{activeLead.pax} Passengers</div></div>
                        <div className="dp-f"><div className="dp-lb">Estimated Value</div><div className="dp-vl" style={{ color: "var(--gold-lt)", fontWeight: "750" }}>₹{activeLead.estimatedValue.toLocaleString("en-IN")}</div></div>
                        <div className="dp-f"><div className="dp-lb">Contact Info</div><div className="dp-vl">{activeLead.phone} · {activeLead.email}</div></div>
                        {activeLead.message && (
                          <div className="dp-f"><div className="dp-lb">Enquiry Message</div><div className="dp-vl" style={{ fontStyle: "italic", color: "var(--text-2)" }}>"{activeLead.message}"</div></div>
                        )}
                        <div className="dp-dv"></div>
                        <div className="dp-lb">Activity Timeline</div>
                        <div className="tl">
                          {activeLead.timeline.map((t, idx) => (
                            <div key={idx} className="tli">
                              <div className={`tld ${t.done ? "done" : ""} ${t.pending ? "pending" : ""}`}></div>
                              <div>
                                <div className="tlt" style={{ color: t.done ? "var(--text-2)" : "var(--text-3)" }}>{t.label}</div>
                                <div className="tltime" style={{ color: t.pending ? "var(--red-tx)" : "var(--text-3)" }}>{t.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="dp-ft">
                        <button className="d-wa" onClick={() => handleWhatsAppChat(activeLead)}>
                          <i className="ti ti-brand-whatsapp"></i> Chat
                        </button>
                        <button className="d-cl" onClick={() => startSimulatedCall(activeLead)}>
                          <i className="ti ti-phone"></i> Call
                        </button>
                        <button className="d-cv" onClick={() => handleOpenConvertLead(activeLead)}>
                          <i className="ti ti-arrow-right"></i> Convert
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ═══════════ PARTNERS SCREEN ═══════════ */}
          {activeTab === "partners" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Logistics &amp; Transport Partners</div>
                  <div className="ps">Manage bus fleet operators, hotel chains, and tour guides</div>
                </div>
                <button className="btn-p" onClick={handleOpenAddPartner}><i className="ti ti-plus"></i> Add Partner</button>
              </div>

              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Partner Name</th>
                      <th>Type</th>
                      <th>Contact Number</th>
                      <th>Logistics Status</th>
                      <th>Client Rating</th>
                      <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partners.map(p => (
                      <tr key={p.id}>
                        <td style={{ fontWeight: "700", color: "var(--text)" }}>{p.name}</td>
                        <td>
                          <span className={`badge ${
                            p.type === "Transport" ? "b-blue" :
                            p.type === "Accommodation" ? "b-green" : "b-gold"
                          }`}>{p.type}</span>
                        </td>
                        <td>{p.contact}</td>
                        <td>
                          <span className={`badge ${p.status === "Available" ? "b-green" : p.status === "On Trip" ? "b-blue" : "b-gray"}`}>
                            {p.status}
                          </span>
                        </td>
                        <td style={{ color: "var(--gold-lt)", fontWeight: "600" }}>★ {p.rating.toFixed(1)}</td>
                        <td style={{ textAlign: "right" }}>
                          <button className="tbl-act-btn" onClick={() => { setEditingPartner(p); setIsPartnerModalOpen(true); }}>
                            <i className="ti ti-edit" />
                          </button>
                          <button className="tbl-act-btn del" onClick={() => handleDeletePartner(p.id)}>
                            <i className="ti ti-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ═══════════ SCHEDULE PLANNED DEPARTURES ═══════════ */}
          {activeTab === "schedule" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Upcoming Departures Schedule</div>
                  <div className="ps">Departures tracking calendar for scheduled school and college groups</div>
                </div>
                <button className="btn-p" onClick={handleOpenAddSchedule}><i className="ti ti-plus"></i> Schedule Trip</button>
              </div>

              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Departure Date</th>
                      <th>Trip Destination &amp; Group Client</th>
                      <th>Passengers</th>
                      <th>Assigned Logistics / Partner</th>
                      <th>Trip Status</th>
                      <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(s => (
                      <tr key={s.id}>
                        <td style={{ fontWeight: "700", color: "var(--gold-lt)" }}>{s.date}</td>
                        <td style={{ fontWeight: "600", color: "var(--text)" }}>{s.tourTitle}</td>
                        <td>{s.pax} Passengers</td>
                        <td>{s.assignedPartner}</td>
                        <td>
                          <span className={`badge ${
                            s.status === "Upcoming" ? "b-gold" :
                            s.status === "In Progress" ? "b-blue" : "b-green"
                          }`}>{s.status}</span>
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <button className="tbl-act-btn" onClick={() => { setEditingSchedule(s); setIsScheduleModalOpen(true); }}>
                            <i className="ti ti-edit" />
                          </button>
                          <button className="tbl-act-btn del" onClick={() => handleDeleteSchedule(s.id)}>
                            <i className="ti ti-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ═══════════ GALLERY MANAGER ═══════════ */}
          {activeTab === "gallery" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Gallery Catalogues</div>
                  <div className="ps">Manage home page image portfolio and client memories</div>
                </div>
              </div>

              <form onSubmit={handleAddPhoto} className="dash-card" style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="form-lbl" style={{ color: "var(--gold-lt)" }}>Catalog a New Image</div>
                <div className="form-grid" style={{ marginBottom: "0" }}>
                  <div>
                    <label className="form-lbl">Image URL</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="https://images.unsplash.com/..."
                      value={newPhotoUrl}
                      onChange={(e) => setNewPhotoUrl(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Caption / Alt text</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Munnar Campfire DJ night"
                      value={newPhotoAlt}
                      onChange={(e) => setNewPhotoAlt(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center" style={{ marginTop: "6px" }}>
                  <div>
                    <label className="form-lbl" style={{ marginBottom: "4px" }}>Filter Category</label>
                    <div className="flex gap-2">
                      {["Fleet", "Expeditions", "Moments"].map(cat => (
                        <button
                          key={cat}
                          type="button"
                          className={`chip ${newPhotoCategory === cat ? "on" : ""}`}
                          style={{ padding: "4px 12px" }}
                          onClick={() => setNewPhotoCategory(cat as any)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-p">Add Image</button>
                </div>
              </form>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
                {photos.map((p, idx) => (
                  <div key={idx} className="pc" style={{ minHeight: "auto", position: "relative" }}>
                    <img src={p.src} alt={p.alt} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
                    <div style={{ padding: "8px" }}>
                      <span className="badge b-gray" style={{ fontSize: "7.5px" }}>{p.category}</span>
                      <div className="pc-name" style={{ fontSize: "10px", marginTop: "4px", height: "28px", overflow: "hidden" }}>{p.alt}</div>
                      <button
                        className="pa pr"
                        style={{ width: "100%", padding: "4px", fontSize: "9px", marginTop: "8px" }}
                        onClick={() => handleDeletePhoto(p.src)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════ REVIEWS MANAGER ═══════════ */}
          {activeTab === "reviews" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">Reviews Moderator</div>
                  <div className="ps">Approve client responses or manually draft custom reviews ({reviews.length} reviews loaded)</div>
                </div>
                <button className="btn-p" onClick={() => setIsReviewModalOpen(true)}>
                  <i className="ti ti-plus"></i> Add Testimonial
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="dash-card"
                    style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "var(--bg2)" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <div style={{ display: "flex", color: "var(--gold)" }}>
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <i key={i} className="ti ti-star-filled" style={{ fontSize: "12px", color: "var(--gold)" }}></i>
                          ))}
                        </div>
                        <span style={{ fontSize: "10px", color: "var(--text-3)" }}>| {rev.date}</span>
                        <span className={`badge ${rev.approved ? "b-green" : "b-gold"}`}>
                          {rev.approved ? "Approved" : "Pending Approval"}
                        </span>
                      </div>
                      <blockquote style={{ fontSize: "12px", fontStyle: "italic", color: "var(--text)", marginBottom: "6px" }}>
                        "{rev.quote}"
                      </blockquote>
                      <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-3)" }}>
                        — {rev.author} · <span style={{ color: "var(--gold-lt)" }}>{rev.location}</span> · {rev.tripType}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                      <button
                        onClick={() => handleToggleReviewApprove(rev.id)}
                        className="btn-s"
                        style={{ padding: "6px 12px", fontSize: "10px" }}
                      >
                        {rev.approved ? "Unapprove" : "Approve"}
                      </button>
                      <button
                        onClick={() => handleDeleteReview(rev.id)}
                        className="btn-s"
                        style={{ padding: "6px 10px", color: "var(--red-tx)", borderColor: "rgba(232, 112, 88, 0.2)" }}
                      >
                        <i className="ti ti-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════ BUSINESS CONFIGURATION SETTINGS ═══════════ */}
          {activeTab === "settings" && (
            <div className="screen">
              <div className="ph">
                <div>
                  <div className="pt">General System Settings</div>
                  <div className="ps">Contact phone numbers, address, and email links synchronized with the customer website.</div>
                </div>
              </div>

              <form onSubmit={handleSaveSettings} className="dash-card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-lbl">Brand / Agency Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.name}
                      onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-lbl">Tagline</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.tagline}
                      onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-lbl">Primary Phone Call</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.phone1}
                      onChange={(e) => setSettings({ ...settings, phone1: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-lbl">Secondary Phone Call</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.phone2}
                      onChange={(e) => setSettings({ ...settings, phone2: e.target.value })}
                    />
                  </div>
                  <div className="form-group full">
                    <label className="form-lbl">WhatsApp Target Number</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. 917012775400"
                      value={settings.whatsapp}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-lbl">Business Email</label>
                    <input
                      type="email"
                      className="form-input"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-lbl">Instagram URL</label>
                    <input
                      type="text"
                      className="form-input"
                      value={settings.instagram}
                      onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-lbl">Office Address</label>
                  <textarea
                    rows={2}
                    className="form-input"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-p" style={{ alignSelf: "flex-start", padding: "12px 28px" }}>
                  Save and Sync Layout settings
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* ═══ DYNAMIC POPUP DIALOGS ═══ */}

      {/* 1. BOOKING DIALOG */}
      {isBookingModalOpen && editingBooking && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-hd">
              <span className="modal-title">{editingBooking.id ? "Edit Booking Card" : "New Booking Card"}</span>
              <button className="modal-close" onClick={() => setIsBookingModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleSaveBooking}>
              <div className="modal-bd">
                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Organization / Group Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Loyola School Batch A"
                      className="form-input"
                      value={editingBooking.title || ""}
                      onChange={(e) => setEditingBooking({ ...editingBooking, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Category Tag</label>
                    <select
                      className="form-input"
                      value={editingBooking.type || "School"}
                      onChange={(e) => setEditingBooking({ ...editingBooking, type: e.target.value as any })}
                    >
                      <option value="School">School</option>
                      <option value="College">College</option>
                      <option value="Family">Family</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Devotional">Devotional</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-lbl">Itinerary / Trip Summary Description</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3-Day — Munnar Expedition"
                    className="form-input"
                    value={editingBooking.description || ""}
                    onChange={(e) => setEditingBooking({ ...editingBooking, description: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Group Passengers (Pax count)</label>
                    <input
                      type="number"
                      required
                      className="form-input"
                      value={editingBooking.pax || ""}
                      onChange={(e) => setEditingBooking({ ...editingBooking, pax: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Total Estimated Price (Amount in INR)</label>
                    <input
                      type="number"
                      required
                      className="form-input"
                      placeholder="e.g. 52500"
                      value={editingBooking.amount || ""}
                      onChange={(e) => setEditingBooking({ ...editingBooking, amount: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Departure Date description</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Trip 15 Jun"
                      className="form-input"
                      value={editingBooking.date || ""}
                      onChange={(e) => setEditingBooking({ ...editingBooking, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Pipeline Stage</label>
                    <select
                      className="form-input"
                      value={editingBooking.stage || "Enquiry"}
                      onChange={(e) => setEditingBooking({ ...editingBooking, stage: e.target.value as any })}
                    >
                      <option value="Enquiry">Enquiry</option>
                      <option value="Quote Sent">Quote Sent</option>
                      <option value="Advance Paid">Advance Paid</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsBookingModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Save Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. LEAD DIALOG */}
      {isLeadModalOpen && editingLead && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-hd">
              <span className="modal-title">{editingLead.id ? "Edit Customer Lead" : "New Customer Lead"}</span>
              <button className="modal-close" onClick={() => setIsLeadModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleSaveLead}>
              <div className="modal-bd">
                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Client Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sreekanth Felix"
                      className="form-input"
                      value={editingLead.name || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Client Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. St. Francis School, TVM"
                      className="form-input"
                      value={editingLead.organization || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Client Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Faculty Coordinator"
                      className="form-input"
                      value={editingLead.designation || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, designation: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Expedition / Destination</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3-Day — Munnar &amp; Wayanad"
                      className="form-input"
                      value={editingLead.destination || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, destination: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Total passengers count</label>
                    <input
                      type="number"
                      required
                      className="form-input"
                      value={editingLead.pax || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, pax: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Estimated value (INR)</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 52500"
                      className="form-input"
                      value={editingLead.estimatedValue || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, estimatedValue: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Phone / WhatsApp Number</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 XXXXXXXXXX"
                      className="form-input"
                      value={editingLead.phone || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Client Email Address</label>
                    <input
                      type="email"
                      placeholder="client@mail.com"
                      className="form-input"
                      value={editingLead.email || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Preferred dates</label>
                    <input
                      type="text"
                      placeholder="e.g. 15 June 2026"
                      className="form-input"
                      value={editingLead.preferredDate || ""}
                      onChange={(e) => setEditingLead({ ...editingLead, preferredDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Lead Source</label>
                    <select
                      className="form-input"
                      value={editingLead.source || "WhatsApp"}
                      onChange={(e) => setEditingLead({ ...editingLead, source: e.target.value as any })}
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Website">Website</option>
                      <option value="Referral">Referral</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-lbl">Special Instructions / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Anniversary notes, specific bus request..."
                    className="form-input"
                    value={editingLead.message || ""}
                    onChange={(e) => setEditingLead({ ...editingLead, message: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsLeadModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Save Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. CONVERT LEAD DIALOG */}
      {isConvertModalOpen && convertingLead && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "420px" }}>
            <div className="modal-hd">
              <span className="modal-title">Convert Lead to Booking</span>
              <button className="modal-close" onClick={() => setIsConvertModalOpen(false)}>×</button>
            </div>
            <div className="modal-bd">
              <p style={{ fontSize: "13px", color: "var(--text-2)", marginBottom: "16px", lineHeight: "1.5" }}>
                You are converting <strong>{convertingLead.name}</strong> ({convertingLead.organization || "Direct Customer"}) into a booking pipeline.
              </p>
              <p style={{ fontSize: "11px", color: "var(--text-3)", marginBottom: "20px" }}>
                Select the pipeline column where this card should be added:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {(["Enquiry", "Quote Sent", "Advance Paid", "Confirmed"] as Booking["stage"][]).map(stage => (
                  <button
                    key={stage}
                    className="btn-s"
                    style={{ width: "100%", justifyContent: "flex-start", padding: "12px" }}
                    onClick={() => handleConfirmConvert(stage)}
                  >
                    <i className="ti ti-arrow-right" style={{ marginRight: "8px", color: "var(--gold)" }}></i>
                    Move to <strong>{stage}</strong> column
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-ft">
              <button className="btn-s" onClick={() => setIsConvertModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* 4. DIALER SIMULATED DIALOG */}
      {dialingLead && (
        <div className="modal-overlay" style={{ background: "rgba(0,0,0,0.9)" }}>
          <div className="dialer-modal">
            <div className="dialer-av">
              {dialingLead.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </div>
            <div className="dialer-name">{dialingLead.name}</div>
            <div className="dialer-num">{dialingLead.phone}</div>
            <div className="dialer-status">{dialingProgress}</div>
            <button className="dialer-hangup" onClick={closeSimulatedCall}>
              <i className="ti ti-phone-off"></i>
            </button>
          </div>
        </div>
      )}

      {/* 5. TOUR PACKAGES MODAL */}
      {isTourModalOpen && editingTour && (
        <div className="modal-overlay">
          <div className="modal-content wide">
            <div className="modal-hd">
              <span className="modal-title">{editingTour.slug ? "Edit Tour Package" : "Create New Tour Package"}</span>
              <button className="modal-close" onClick={() => setIsTourModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleSaveTour}>
              <div className="modal-bd">
                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Package Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Munnar Misty Escape"
                      className="form-input"
                      value={editingTour.title || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Category tag</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3-Day Expedition"
                      className="form-input"
                      value={editingTour.category || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, category: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Duration Text</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3 Days"
                      className="form-input"
                      value={editingTour.duration || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, duration: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Duration (Number of Days)</label>
                    <input
                      type="number"
                      required
                      min={1}
                      className="form-input"
                      value={editingTour.durationInDays || 1}
                      onChange={(e) => setEditingTour({ ...editingTour, durationInDays: parseInt(e.target.value) || 1 })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Starting Price (Format: ₹X / head)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ₹3,200 / head"
                      className="form-input"
                      value={editingTour.price || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, price: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group full">
                    <label className="form-lbl">Featured Image URL</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={editingTour.image || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, image: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-lbl">Short blurb (Sales Pitch)</label>
                  <input
                    type="text"
                    placeholder="e.g. Explore misty hillstations and lush green tea estates of Munnar."
                    className="form-input"
                    value={editingTour.blurb || ""}
                    onChange={(e) => setEditingTour({ ...editingTour, blurb: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-lbl">Detailed Description</label>
                  <textarea
                    rows={3}
                    className="form-input"
                    placeholder="Itinerary summary..."
                    value={editingTour.fullDescription || ""}
                    onChange={(e) => setEditingTour({ ...editingTour, fullDescription: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Highlights (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="Tea Garden, Eravikulam, Echo Point"
                      className="form-input"
                      value={editingTour.highlights?.join(", ") || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, highlights: e.target.value.split(",").map(x => x.trim()).filter(Boolean) })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Inclusions (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="AC coach, resort stay, breakfast"
                      className="form-input"
                      value={editingTour.inclusions?.join(", ") || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, inclusions: e.target.value.split(",").map(x => x.trim()).filter(Boolean) })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsTourModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Save Package</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. PARTNERS DIALOG */}
      {isPartnerModalOpen && editingPartner && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "450px" }}>
            <div className="modal-hd">
              <span className="modal-title">{editingPartner.id ? "Edit Operations Partner" : "New Operations Partner"}</span>
              <button className="modal-close" onClick={() => setIsPartnerModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleSavePartner}>
              <div className="modal-bd">
                <div className="form-group">
                  <label className="form-lbl">Partner Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kerala Travels Fleet"
                    className="form-input"
                    value={editingPartner.name || ""}
                    onChange={(e) => setEditingPartner({ ...editingPartner, name: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Partner Type</label>
                    <select
                      className="form-input"
                      value={editingPartner.type || "Transport"}
                      onChange={(e) => setEditingPartner({ ...editingPartner, type: e.target.value as any })}
                    >
                      <option value="Transport">Transport (Bus Operators)</option>
                      <option value="Accommodation">Accommodation (Resorts/Hotels)</option>
                      <option value="Guide">Guide (Trip Captains)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-lbl">Logistics Status</label>
                    <select
                      className="form-input"
                      value={editingPartner.status || "Available"}
                      onChange={(e) => setEditingPartner({ ...editingPartner, status: e.target.value as any })}
                    >
                      <option value="Available">Available</option>
                      <option value="On Trip">On Trip</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Contact Phone Number</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 XXXXXXXXXX"
                      className="form-input"
                      value={editingPartner.contact || ""}
                      onChange={(e) => setEditingPartner({ ...editingPartner, contact: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Staff / Client Rating (1.0 - 5.0)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      required
                      className="form-input"
                      value={editingPartner.rating || 5}
                      onChange={(e) => setEditingPartner({ ...editingPartner, rating: parseFloat(e.target.value) || 5.0 })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsPartnerModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Save Partner</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. TRIP SCHEDULE DIALOG */}
      {isScheduleModalOpen && editingSchedule && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "450px" }}>
            <div className="modal-hd">
              <span className="modal-title">{editingSchedule.id ? "Edit Scheduled Trip" : "Schedule New Trip"}</span>
              <button className="modal-close" onClick={() => setIsScheduleModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleSaveSchedule}>
              <div className="modal-bd">
                <div className="form-group">
                  <label className="form-lbl">Trip Date</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={editingSchedule.date || ""}
                    onChange={(e) => setEditingSchedule({ ...editingSchedule, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-lbl">Trip Client / Destination</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Loyola School TVM — Athirapally &amp; Silverstrom"
                    className="form-input"
                    value={editingSchedule.tourTitle || ""}
                    onChange={(e) => setEditingSchedule({ ...editingSchedule, tourTitle: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Passengers count</label>
                    <input
                      type="number"
                      required
                      className="form-input"
                      value={editingSchedule.pax || ""}
                      onChange={(e) => setEditingSchedule({ ...editingSchedule, pax: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Trip Status</label>
                    <select
                      className="form-input"
                      value={editingSchedule.status || "Upcoming"}
                      onChange={(e) => setEditingSchedule({ ...editingSchedule, status: e.target.value as any })}
                    >
                      <option value="Upcoming">Upcoming</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-lbl">Assigned Partner / Captain</label>
                  <select
                    className="form-input"
                    value={editingSchedule.assignedPartner || ""}
                    onChange={(e) => setEditingSchedule({ ...editingSchedule, assignedPartner: e.target.value })}
                  >
                    {partners.length === 0 ? (
                      <option value="Kerala Tourist Coaches">Kerala Tourist Coaches (Default)</option>
                    ) : (
                      partners.map(p => (
                        <option key={p.id} value={p.name}>{p.name} ({p.type})</option>
                      ))
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsScheduleModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Schedule Trip</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. REVIEWS ADD MODAL */}
      {isReviewModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-hd">
              <span className="modal-title">Add Client Testimonial</span>
              <button className="modal-close" onClick={() => setIsReviewModalOpen(false)}>×</button>
            </div>
            <form onSubmit={handleAddReview}>
              <div className="modal-bd">
                <div className="form-group">
                  <label className="form-lbl">Review Quote / Feedback text</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="We loved the Munnar trip! The buses were amazing..."
                    className="form-input"
                    value={newReview.quote || ""}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  />
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Author Name / Lead</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nikhil S."
                      className="form-input"
                      value={newReview.author || ""}
                      onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">School / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MG College Trivandrum"
                      className="form-input"
                      value={newReview.location || ""}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div>
                    <label className="form-lbl">Expedition / Trip Category</label>
                    <input
                      type="text"
                      placeholder="e.g. Munnar Expedition"
                      className="form-input"
                      value={newReview.tripType || ""}
                      onChange={(e) => setNewReview({ ...newReview, tripType: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-lbl">Star Rating (1 - 5)</label>
                    <select
                      className="form-input"
                      value={newReview.rating || 5}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) || 5 })}
                    >
                      <option value={5}>5 Stars</option>
                      <option value={4}>4 Stars</option>
                      <option value={3}>3 Stars</option>
                      <option value={2}>2 Stars</option>
                      <option value={1}>1 Star</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-ft">
                <button type="button" className="btn-s" onClick={() => setIsReviewModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-p">Add Review</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DYNAMIC TOASTS RENDERER */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.text}
          </div>
        ))}
      </div>
    </div>
  );
}
