/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type BookingStatus = 'enquiry' | 'quote' | 'advance' | 'confirmed' | 'completed';
export type TourCategory = 'school' | 'college' | 'family' | 'devotional' | 'corporate';
export type LeadSource = 'whatsapp' | 'website' | 'referral';
export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'hot';
export type PartnerType = 'bus' | 'hotel' | 'resort' | 'guide';
export type TripStatus = 'upcoming' | 'ongoing' | 'completed' | 'canceled';

export interface TourBooking {
  id: string;
  institution: string;
  category: TourCategory;
  destination: string;
  duration: string;
  paxCount: number;
  amount: number;
  status: BookingStatus;
  date: string;
  createdDate: string;
  notes?: string;
  coordinatorName: string;
  coordinatorPhone: string;
  assignedBusId?: string | null;
  assignedDriver?: string | null;
  feedbackRating?: number | null;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  stops: string[];
  pricePerHead: number;
  totalBookings: number;
  isTopPackage: boolean;
  description: string;
  image?: string;
}

export interface LeadTimelineEvent {
  title: string;
  time: string;
  completed: boolean;
}

export interface Lead {
  id: string;
  name: string;
  organization: string;
  destination: string;
  paxCount: number;
  estimatedValue: number;
  source: LeadSource;
  createdAt: string;
  status: LeadStatus;
  notes: string;
  category: TourCategory;
  timeline: LeadTimelineEvent[];
}

export interface Partner {
  id: string;
  name: string;
  type: PartnerType;
  contact: string;
  rating: number;
  status: 'active' | 'busy' | 'inactive';
  capacity: string;
  rateInfo: string;
}

export interface TripSchedule {
  id: string;
  bookingId: string;
  institutionName: string;
  destination: string;
  startDate: string;
  endDate: string;
  driverName: string;
  busNumber: string;
  tripStatus: TripStatus;
}
