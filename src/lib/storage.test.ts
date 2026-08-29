// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { 
  getStoredSettings, 
  saveStoredSettings, 
  getStoredLeads, 
  saveStoredLeads,
  Lead
} from "./storage";

describe("Storage API Utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should get default settings when storage is empty", () => {
    const settings = getStoredSettings();
    expect(settings.name).toBe("Emirates Expedition");
    expect(settings.email).toBe("emiratesexpedition25@gmail.com");
  });

  it("should save and retrieve custom business settings", () => {
    const customSettings = {
      name: "Custom Agency",
      tagline: "Unforgettable Journeys",
      phone1: "+91 99999 88888",
      phone2: "+91 88888 77777",
      email: "hello@custom.com",
      instagram: "https://instagram.com/custom",
      whatsapp: "919999988888",
      address: "123 Main St, Kerala",
    };
    saveStoredSettings(customSettings);
    const retrieved = getStoredSettings();
    expect(retrieved).toEqual(customSettings);
  });

  it("should initialize with empty array for stored leads", () => {
    const leads = getStoredLeads();
    expect(leads).toEqual([]);
  });

  it("should save and load leads", () => {
    const sampleLead: Lead = {
      id: "lead-12345",
      name: "Test User",
      organization: "College of Science",
      designation: "HOD",
      destination: "Munnar",
      pax: 45,
      preferredDate: "2026-08-10",
      estimatedValue: 144000,
      phone: "+91 98765 43210",
      email: "hod@science.edu",
      message: "Looking for an educational tour package.",
      source: "Website",
      status: "New",
      timeAgo: "Just now",
      timeline: [],
      converted: false
    };

    saveStoredLeads([sampleLead]);
    const leads = getStoredLeads();
    expect(leads.length).toBe(1);
    expect(leads[0].name).toBe("Test User");
    expect(leads[0].destination).toBe("Munnar");
  });
});
