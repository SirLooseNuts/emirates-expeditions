import { createFileRoute, Link } from "@tanstack/react-router";
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
  Review,
  BusinessSettings
} from "@/lib/storage";
import type { Tour } from "@/data/tours";
import type { Photo } from "@/data/gallery";
import { 
  FolderKanban, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings as SettingsIcon, 
  Plus, 
  Trash2, 
  Edit2, 
  Eye, 
  EyeOff, 
  Save, 
  Phone, 
  Mail, 
  Compass, 
  Users, 
  Check, 
  X, 
  ArrowLeft,
  Upload,
  Star,
  MapPin,
  TrendingUp
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Control Panel — Emirates Expedition" },
      { name: "description", content: "Manage packages, gallery, reviews, and business settings." },
    ],
  }),
  component: AdminDashboard,
});

type TabType = "packages" | "gallery" | "reviews" | "settings";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("packages");
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
    address: ""
  });

  // Modal / Form States
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Partial<Tour> | null>(null);
  
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newPhotoAlt, setNewPhotoAlt] = useState("");
  const [newPhotoCategory, setNewPhotoCategory] = useState<Photo["category"]>("Moments");

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState<Partial<Review>>({
    quote: "",
    author: "",
    location: "",
    rating: 5,
    tripType: "",
    approved: true
  });

  // Load state on mount
  useEffect(() => {
    setTours(getStoredTours());
    setPhotos(getStoredPhotos());
    setReviews(getStoredReviews());
    setSettings(getStoredSettings());
  }, []);

  // Save updates helper
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

  // --- PACKAGE ACTIONS ---
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
      itinerary: [{ day: 1, title: "Exploring the best spots", activities: ["Scenic sightseeing", "Photography"] }],
      inclusions: ["AC Coach", "Sightseeing"],
      exclusions: ["Lunch", "Entry Tickets"],
      gallery: []
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
      toast.error("Please fill in the required fields.");
      return;
    }

    // Generate slug if new
    let finalTour = { ...editingTour } as Tour;
    if (!finalTour.slug) {
      finalTour.slug = finalTour.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const exists = tours.some((t) => t.slug === finalTour.slug);
    let updated: Tour[];

    if (editingTour.slug) {
      // Editing existing
      updated = tours.map((t) => (t.slug === editingTour.slug ? finalTour : t));
      toast.success("Package updated successfully!");
    } else {
      // Adding new
      if (exists) {
        finalTour.slug = `${finalTour.slug}-${Date.now().toString().slice(-4)}`;
      }
      updated = [finalTour, ...tours];
      toast.success("Package added successfully!");
    }

    updateTours(updated);
    setIsTourModalOpen(false);
    setEditingTour(null);
  };

  const handleDeleteTour = (slug: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      const updated = tours.filter((t) => t.slug !== slug);
      updateTours(updated);
      toast.success("Package deleted.");
    }
  };

  // --- GALLERY ACTIONS ---
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl) {
      toast.error("Please enter an image URL.");
      return;
    }

    const newPhoto: Photo = {
      src: newPhotoUrl,
      alt: newPhotoAlt || "Emirates Expedition Moment",
      category: newPhotoCategory
    };

    const updated = [newPhoto, ...photos];
    updatePhotos(updated);
    toast.success("Image added to gallery!");
    setNewPhotoUrl("");
    setNewPhotoAlt("");
  };

  const handleDeletePhoto = (src: string) => {
    if (confirm("Remove this image from the gallery?")) {
      const updated = photos.filter((p) => p.src !== src);
      updatePhotos(updated);
      toast.success("Image removed.");
    }
  };

  // --- REVIEW ACTIONS ---
  const handleToggleReviewApprove = (id: string) => {
    const updated = reviews.map((r) => r.id === id ? { ...r, approved: !r.approved } : r);
    updateReviews(updated);
    toast.success("Review status updated.");
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.quote || !newReview.author || !newReview.location) {
      toast.error("Please fill in the required fields.");
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
      date: new Date().toISOString().split("T")[0]
    };

    updateReviews([reviewToAdd, ...reviews]);
    setIsReviewModalOpen(false);
    setNewReview({ quote: "", author: "", location: "", rating: 5, tripType: "", approved: true });
    toast.success("Testimonial added!");
  };

  const handleDeleteReview = (id: string) => {
    if (confirm("Delete this testimonial?")) {
      const updated = reviews.filter((r) => r.id !== id);
      updateReviews(updated);
      toast.success("Review deleted.");
    }
  };

  // --- SETTINGS ACTIONS ---
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSettings(settings);
    toast.success("Business settings saved successfully!");
    window.dispatchEvent(new Event("local-settings-updated"));
  };

  return (
    <div className="pt-32 min-h-screen bg-background text-foreground">
      <Toaster />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold hover:underline mb-2">
              <ArrowLeft size={12} /> Back to Live Site
            </Link>
            <h1 className="font-display text-4xl sm:text-6xl tracking-wider uppercase">
              CONTROL <span className="gradient-gold-text">CENTER</span>.
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">Production Mode</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            <TabButton 
              active={activeTab === "packages"} 
              onClick={() => setActiveTab("packages")} 
              icon={<FolderKanban size={16} />} 
              label="Packages" 
            />
            <TabButton 
              active={activeTab === "gallery"} 
              onClick={() => setActiveTab("gallery")} 
              icon={<ImageIcon size={16} />} 
              label="Gallery" 
            />
            <TabButton 
              active={activeTab === "reviews"} 
              onClick={() => setActiveTab("reviews")} 
              icon={<MessageSquare size={16} />} 
              label="Reviews" 
            />
            <TabButton 
              active={activeTab === "settings"} 
              onClick={() => setActiveTab("settings")} 
              icon={<SettingsIcon size={16} />} 
              label="Settings" 
            />
          </div>

          {/* Tab Contents */}
          <div className="lg:col-span-9 bg-card/40 border border-border/60 rounded-sm p-6 sm:p-8 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              
              {/* PACKAGES TAB */}
              {activeTab === "packages" && (
                <motion.div
                  key="packages"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="font-display text-2xl tracking-wider uppercase text-white">Packages Manager</h2>
                      <p className="text-xs text-muted-foreground mt-1">Configure and release trip itineraries ({tours.length} packages loaded)</p>
                    </div>
                    <button 
                      onClick={handleOpenAddTour}
                      className="inline-flex items-center gap-2 bg-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all"
                    >
                      <Plus size={14} /> Add Package
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {tours.map((tour) => (
                      <div key={tour.slug} className="group relative flex flex-col justify-between border border-border bg-background p-5 rounded-sm hover:border-gold/50 transition-colors">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-sm">
                              {tour.category}
                            </span>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleOpenEditTour(tour)}
                                className="text-white/60 hover:text-white p-1 transition-colors"
                                title="Edit"
                              >
                                <Edit2 size={12} />
                              </button>
                              <button 
                                onClick={() => handleDeleteTour(tour.slug)}
                                className="text-destructive/70 hover:text-destructive p-1 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>

                          <h3 className="font-display text-xl tracking-wider text-white uppercase line-clamp-1">
                            {tour.title}
                          </h3>
                          <p className="font-mono text-xs text-gold/70 mt-1">{tour.duration} · {tour.price}</p>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{tour.blurb || "No description provided."}</p>
                          
                          {/* Highlights Preview */}
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {tour.highlights.slice(0, 3).map((h, i) => (
                              <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm text-white/70">
                                {h}
                              </span>
                            ))}
                            {tour.highlights.length > 3 && (
                              <span className="text-[9px] text-white/40 self-center">+{tour.highlights.length - 3} more</span>
                            )}
                          </div>
                        </div>

                        {/* Simulated occupancy display */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase text-white/50">
                          <div className="flex-1 mr-4">
                            <div className="flex justify-between mb-1">
                              <span>Occupancy / Leads</span>
                              <span className="text-gold font-bold">
                                {tour.durationInDays * 25}%
                              </span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gold rounded-full" 
                                style={{ width: `${Math.min(tour.durationInDays * 25, 100)}%` }} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* GALLERY TAB */}
              {activeTab === "gallery" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl tracking-wider uppercase text-white mb-2">Gallery Manager</h2>
                  <p className="text-xs text-muted-foreground mb-8">Manage the media feed displayed on the homepage and gallery catalogue</p>

                  <form onSubmit={handleAddPhoto} className="border border-border bg-background p-6 rounded-sm mb-8 space-y-4">
                    <h3 className="font-display text-lg tracking-wider text-gold uppercase flex items-center gap-2">
                      <Upload size={14} /> Add Image Url
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Image URL</label>
                        <input 
                          type="text" 
                          placeholder="https://..." 
                          value={newPhotoUrl}
                          onChange={(e) => setNewPhotoUrl(e.target.value)}
                          className="min-h-[40px] w-full rounded-sm border border-border bg-background/50 px-3 py-2 text-xs focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Caption / Alt text</label>
                        <input 
                          type="text" 
                          placeholder="Munnar Group Expedition" 
                          value={newPhotoAlt}
                          onChange={(e) => setNewPhotoAlt(e.target.value)}
                          className="min-h-[40px] w-full rounded-sm border border-border bg-background/50 px-3 py-2 text-xs focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Category</label>
                        <div className="flex gap-2">
                          {["Fleet", "Expeditions", "Moments"].map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setNewPhotoCategory(cat as Photo["category"])}
                              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-sm border ${
                                newPhotoCategory === cat 
                                  ? "border-gold text-gold bg-gold/10" 
                                  : "border-border text-white/60 hover:text-white"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button 
                        type="submit"
                        className="bg-gold px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all self-end"
                      >
                        Add Photo
                      </button>
                    </div>
                  </form>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {photos.slice(0, 24).map((p, idx) => (
                      <div key={idx} className="group relative aspect-square overflow-hidden rounded-sm border border-border bg-background">
                        <img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 z-10">
                          <span className="text-[8px] font-mono uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-sm self-start">
                            {p.category}
                          </span>
                          <div className="flex flex-col gap-2">
                            <p className="text-[10px] text-white/90 line-clamp-2 uppercase tracking-wide font-mono leading-tight">{p.alt}</p>
                            <button 
                              onClick={() => handleDeletePhoto(p.src)}
                              className="inline-flex items-center justify-center gap-1 bg-destructive hover:bg-destructive/90 text-white py-1 px-2 text-[9px] font-mono uppercase tracking-widest rounded-sm transition-colors"
                            >
                              <Trash2 size={10} /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {photos.length > 24 && (
                    <p className="text-center text-xs text-muted-foreground mt-6 font-mono uppercase tracking-widest">
                      And {photos.length - 24} more photos in gallery
                    </p>
                  )}
                </motion.div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="font-display text-2xl tracking-wider uppercase text-white">Reviews Moderator</h2>
                      <p className="text-xs text-muted-foreground mt-1">Approve client responses or manually draft custom reviews</p>
                    </div>
                    <button 
                      onClick={() => setIsReviewModalOpen(true)}
                      className="inline-flex items-center gap-2 bg-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all"
                    >
                      <Plus size={14} /> Add Testimonial
                    </button>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((rev) => (
                      <div key={rev.id} className={`border p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors ${rev.approved ? "border-border bg-background/40" : "border-amber-500/30 bg-amber-500/5"}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-gold">
                              {Array.from({ length: rev.rating }).map((_, i) => (
                                <Star key={i} size={12} fill="currentColor" className="text-gold" />
                              ))}
                            </div>
                            <span className="font-mono text-[9px] text-white/40">| {rev.date}</span>
                            {!rev.approved && (
                              <span className="text-[8px] font-mono uppercase tracking-widest bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-sm border border-amber-500/30">
                                Pending Approval
                              </span>
                            )}
                          </div>
                          <blockquote className="text-xs text-white/90 italic font-mono">
                            "{rev.quote}"
                          </blockquote>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-3">
                            — {rev.author} · <span className="text-gold">{rev.location}</span> · {rev.tripType}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <button
                            onClick={() => handleToggleReviewApprove(rev.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-sm border transition-colors ${
                              rev.approved 
                                ? "border-white/10 hover:border-amber-500 text-white/70 hover:text-amber-500" 
                                : "border-emerald-500/30 hover:border-emerald-500 text-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10"
                            }`}
                          >
                            {rev.approved ? <X size={10} /> : <Check size={10} />}
                            {rev.approved ? "Unapprove" : "Approve"}
                          </button>
                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            className="p-2 border border-destructive/20 hover:border-destructive text-destructive hover:text-white rounded-sm transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SETTINGS TAB */}
              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl tracking-wider uppercase text-white mb-2">Business Settings</h2>
                  <p className="text-xs text-muted-foreground mb-8">Edit contact parameters displayed on headers, footers, CTAs, and links</p>

                  <form onSubmit={handleSaveSettings} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Company Name</label>
                        <input 
                          type="text" 
                          value={settings.name}
                          onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Brand Tagline</label>
                        <input 
                          type="text" 
                          value={settings.tagline}
                          onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Contact Phone 1</label>
                        <input 
                          type="text" 
                          value={settings.phone1}
                          onChange={(e) => setSettings({ ...settings, phone1: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Contact Phone 2</label>
                        <input 
                          type="text" 
                          value={settings.phone2}
                          onChange={(e) => setSettings({ ...settings, phone2: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">WhatsApp Number (Clean - no spaces/symbols)</label>
                        <input 
                          type="text" 
                          value={settings.whatsapp}
                          onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                          placeholder="e.g. 917012775400"
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Business Email</label>
                        <input 
                          type="email" 
                          value={settings.email}
                          onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Instagram Link</label>
                        <input 
                          type="text" 
                          value={settings.instagram}
                          onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                          className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Office Address</label>
                      <textarea 
                        rows={2}
                        value={settings.address}
                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                        className="min-h-[48px] w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all"
                    >
                      <Save size={14} /> Save Configuration
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- TOUR FORM DIALOG --- */}
      <AnimatePresence>
        {isTourModalOpen && editingTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-card border border-border/80 rounded-sm p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsTourModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="font-display text-2xl tracking-wider text-gold uppercase mb-6">
                {editingTour.slug ? "Edit Package" : "Create New Package"}
              </h3>

              <form onSubmit={handleSaveTour} className="space-y-4 text-xs">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Package Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 3-Day — Wayanad Adventure"
                      value={editingTour.title || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, title: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Category / Tag</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Group Expedition"
                      value={editingTour.category || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, category: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Duration text</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 3 Days"
                      value={editingTour.duration || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, duration: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Duration (Number of Days)</label>
                    <input 
                      type="number" 
                      required
                      min={1}
                      value={editingTour.durationInDays || 1}
                      onChange={(e) => setEditingTour({ ...editingTour, durationInDays: parseInt(e.target.value) || 1 })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Starting Price per Head</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. ₹3,200 / head"
                      value={editingTour.price || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, price: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Image URL</label>
                    <input 
                      type="text" 
                      required
                      value={editingTour.image || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, image: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Package Highlights (comma-separated)</label>
                    <input 
                      type="text" 
                      placeholder="Wayanad, Banasura Sagar Dam, Lakkidi Viewpoint"
                      value={editingTour.highlights?.join(", ") || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, highlights: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Short Description (Blurb)</label>
                  <input 
                    type="text" 
                    placeholder="Brief 1-sentence sales line..."
                    value={editingTour.blurb || ""}
                    onChange={(e) => setEditingTour({ ...editingTour, blurb: e.target.value })}
                    className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Full Detailed Itinerary Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Deep paragraph explaining what makes this expedition memorable..."
                    value={editingTour.fullDescription || ""}
                    onChange={(e) => setEditingTour({ ...editingTour, fullDescription: e.target.value })}
                    className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-xs text-foreground focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Inclusions (comma-separated)</label>
                    <input 
                      type="text" 
                      placeholder="AC Coach, Hotel Stay, Breakfast, Dinner, Tour Guide"
                      value={editingTour.inclusions?.join(", ") || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, inclusions: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Exclusions (comma-separated)</label>
                    <input 
                      type="text" 
                      placeholder="Lunch, Entry Tickets, Personal Shopping"
                      value={editingTour.exclusions?.join(", ") || ""}
                      onChange={(e) => setEditingTour({ ...editingTour, exclusions: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                  <button 
                    type="button" 
                    onClick={() => setIsTourModalOpen(false)}
                    className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest border border-white/10 text-white/70 hover:text-white rounded-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- REVIEW DIALOG --- */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-card border border-border/80 rounded-sm p-6 sm:p-8"
            >
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="font-display text-2xl tracking-wider text-gold uppercase mb-6">
                Add Testimonial
              </h3>

              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Quote</label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="We loved the trip! The buses were amazing..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-xs focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Author Name / Designation</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Faculty Coordinator"
                      value={newReview.author}
                      onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">School / Organization</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. GHSS Thonnakkal"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Trip Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Munnar Expedition"
                      value={newReview.tripType}
                      onChange={(e) => setNewReview({ ...newReview, tripType: e.target.value })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-1">Star Rating (1-5)</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                      className="min-h-[40px] w-full rounded-sm border border-border bg-background px-3 py-2 text-xs focus:border-gold focus:outline-none"
                    >
                      {[5, 4, 3, 2, 1].map(n => (
                        <option key={n} value={n}>{n} Stars</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                  <button 
                    type="button" 
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest border border-white/10 text-white/70 hover:text-white rounded-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground rounded-sm hover:opacity-90 transition-all"
                  >
                    Add Testimonial
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-5 py-4 w-full text-left font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-all border rounded-sm ${
        active 
          ? "border-gold text-gold bg-gold/5" 
          : "border-border/60 text-muted-foreground hover:text-white hover:bg-white/5"
      }`}
    >
      <span className={active ? "text-gold" : "text-white/40"}>{icon}</span>
      <span className="hidden sm:inline lg:inline">{label}</span>
    </button>
  );
}
