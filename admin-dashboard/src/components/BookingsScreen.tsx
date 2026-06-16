/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TourBooking, BookingStatus, TourCategory } from '../types';

interface BookingsScreenProps {
  bookings: TourBooking[];
  onUpdateBookingStatus: (id: string, status: BookingStatus) => void;
  onUpdateBookingDetails: (updated: TourBooking) => void;
  onAddBooking: (booking: TourBooking) => void;
  onDeleteBooking: (id: string) => void;
}

export default function BookingsScreen({
  bookings,
  onUpdateBookingStatus,
  onUpdateBookingDetails,
  onAddBooking,
  onDeleteBooking
}: BookingsScreenProps) {
  // Filters & State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'all'>('all');
  const [selectedBooking, setSelectedBooking] = useState<TourBooking | null>(bookings[0] || null);
  
  // Modals state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Form states for new booking
  const [newInstitution, setNewInstitution] = useState('');
  const [newCategory, setNewCategory] = useState<TourCategory>('school');
  const [newDestination, setNewDestination] = useState('Wonderla & Forum Mall');
  const [newDuration, setNewDuration] = useState('1-Day');
  const [newPax, setNewPax] = useState(60);
  const [newAmount, setNewAmount] = useState(45000);
  const [newDate, setNewDate] = useState('2026-06-15');
  const [newCoordinator, setNewCoordinator] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newNotes, setNewNotes] = useState('');

  // Form states for Editing booking
  const [editObj, setEditObj] = useState<TourBooking | null>(null);

  // Column definitions
  const columns: { id: BookingStatus; label: string; bg: string; text: string }[] = [
    { id: 'enquiry', label: 'Enquiry Received', bg: 'bg-safari-100/50', text: 'text-amber-400' },
    { id: 'quote', label: 'Quotation Sent', bg: 'bg-blue-500/5', text: 'text-blue-400' },
    { id: 'advance', label: 'Advance Paid', bg: 'bg-purple-500/5', text: 'text-purple-400' },
    { id: 'confirmed', label: 'Confirmed Trip', bg: 'bg-emerald-500/5', text: 'text-emerald-400' },
    { id: 'completed', label: 'Trip Completed', bg: 'bg-gray-500/5', text: 'text-gray-400' }
  ];

  // Apply filters
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.coordinatorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || b.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const getCategoryBadgeClass = (cat: TourCategory) => {
    switch (cat) {
      case 'school': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'college': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      case 'family': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 'corporate': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'devotional': return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
    }
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'enquiry': return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase">Enquiry</span>;
      case 'quote': return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase">Quote Sent</span>;
      case 'advance': return <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase">Advance Paid</span>;
      case 'confirmed': return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase">Confirmed</span>;
      case 'completed': return <span className="bg-gray-500/20 text-gray-400 border border-gray-500/20 text-[10px] px-2 py-0.5 rounded font-mono font-semibold uppercase">Completed</span>;
    }
  };

  const handleOpenAddModal = () => {
    setNewInstitution('');
    setNewCoordinator('');
    setNewPhone('');
    setNewNotes('');
    setNewPax(60);
    setNewAmount(45000);
    setShowAddModal(true);
  };

  // Submit new booking
  const handleCreateBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInstitution || !newCoordinator) {
      alert('Please fill out core Name and Coordinator details.');
      return;
    }
    const newB: TourBooking = {
      id: `B${Math.floor(100 + Math.random() * 900)}`,
      institution: newInstitution,
      category: newCategory,
      destination: newDestination,
      duration: newDuration,
      paxCount: Number(newPax),
      amount: Number(newAmount),
      status: 'enquiry',
      date: newDate,
      createdDate: new Date().toISOString().split('T')[0],
      coordinatorName: newCoordinator,
      coordinatorPhone: newPhone,
      notes: newNotes,
      feedbackRating: null
    };

    onAddBooking(newB);
    setSelectedBooking(newB);
    setShowAddModal(false);
  };

  // Setup Edit modal inputs
  const handleOpenEditModal = (b: TourBooking) => {
    setEditObj({ ...b });
    setShowEditModal(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editObj) {
      onUpdateBookingDetails(editObj);
      if (selectedBooking && selectedBooking.id === editObj.id) {
        setSelectedBooking(editObj);
      }
      setShowEditModal(false);
    }
  };

  const handleDeleteTrigger = (id: string) => {
    if (confirm('Are you sure you want to delete this trip booking record?')) {
      onDeleteBooking(id);
      setSelectedBooking(null);
    }
  };

  // Status index transitions
  const statusHierarchy: BookingStatus[] = ['enquiry', 'quote', 'advance', 'confirmed', 'completed'];
  
  const handleTransitionStatus = (b: TourBooking, direction: 'next' | 'back') => {
    const currIdx = statusHierarchy.indexOf(b.status);
    let nextIdx = currIdx;
    if (direction === 'next' && currIdx < statusHierarchy.length - 1) {
      nextIdx = currIdx + 1;
    } else if (direction === 'back' && currIdx > 0) {
      nextIdx = currIdx - 1;
    }
    
    if (nextIdx !== currIdx) {
      const nextStatus = statusHierarchy[nextIdx];
      onUpdateBookingStatus(b.id, nextStatus);
      // keep selected card details state aligned
      setSelectedBooking({ ...b, status: nextStatus });
    }
  };

  return (
    <div className="screen active" id="bookings-pipeline-panel">
      
      {/* Page Header */}
      <div className="ph">
        <div>
          <div className="pt">Booking Pipeline</div>
          <div className="ps">All group trips &middot; {bookings.length} total this month</div>
        </div>
        <div className="acts">
          <button className="btn-s"><i className="ti ti-filter"></i> Filter</button>
          <button className="btn-s"><i className="ti ti-download"></i> Export</button>
          <button className="btn-p" onClick={handleOpenAddModal}><i className="ti ti-plus"></i> New Booking</button>
        </div>
      </div>

      {/* Stats row */}
      <div className="stats-row">
        <div className="stat-box">
          <div className="sl">Enquiry</div>
          <div className="sv">{bookings.filter(b => b.status === 'enquiry').length}</div>
          <div className="ss">Awaiting response</div>
        </div>
        <div className="stat-box">
          <div className="sl">Quote Sent</div>
          <div className="sv">{bookings.filter(b => b.status === 'quote').length}</div>
          <div className="ss">₹{(bookings.filter(b => b.status === 'quote').reduce((sum, b) => sum + b.amount, 0)/100000).toFixed(1)}L pipeline</div>
        </div>
        <div className="stat-box">
          <div className="sl">Advance Paid</div>
          <div className="sv">{bookings.filter(b => b.status === 'advance').length}</div>
          <div className="ss">₹{(bookings.filter(b => b.status === 'advance').reduce((sum, b) => sum + b.amount, 0)/100000).toFixed(1)}L secured</div>
        </div>
        <div className="stat-box">
          <div className="sl">Confirmed</div>
          <div className="sv">{bookings.filter(b => b.status === 'confirmed').length}</div>
          <div className="ss">Excursions lock-in</div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="filter-bar">
        <div className="srch">
          <i className="ti ti-search"></i>
          <input 
            type="text" 
            placeholder="Search school, group, destination..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={() => setSelectedCategory('all')} 
          className={`chip ${selectedCategory === 'all' ? 'on' : ''}`}
        >
          All
        </button>
        {(['school', 'college', 'family', 'corporate', 'devotional'] as TourCategory[]).map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)} 
            className={`chip ${selectedCategory === cat ? 'on' : ''}`}
            style={{ textTransform: 'capitalize' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Kanban Board Area + Detail Panel */}
      <div className="leads-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '12px', alignItems: 'start' }}>
        
        {/* Left Side: Kanban Board */}
        <div className="kanban-wrap" style={{ overflowX: 'auto' }}>
          <div className="kanban" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(190px, 1fr))', gap: '8px', minWidth: '980px' }}>
            {columns.map(col => {
              const colBookings = filteredBookings.filter(b => b.status === col.id);
              return (
                <div key={col.id} className="k-col">
                  <div className="k-head">
                    <span className="k-lbl">{col.label.split(' ')[0]}</span>
                    <span className="k-cnt">{colBookings.length}</span>
                  </div>
                  
                  <div style={{ minHeight: '380px' }}>
                    {colBookings.length === 0 ? (
                      <div style={{ border: '0.5px dashed var(--border-md)', borderRadius: '8px', padding: '24px 8px', textAlign: 'center', fontSize: '10px', color: 'var(--text-3)', background: 'var(--bg)' }}>
                        No groups here
                      </div>
                    ) : (
                      colBookings.map(b => (
                        <div 
                          key={b.id}
                          onClick={() => setSelectedBooking(b)}
                          className={`kc ${selectedBooking && selectedBooking.id === b.id ? 'sel' : ''}`}
                        >
                          <span className={`ktag ${
                            b.category === 'school' ? 't-sc' :
                            b.category === 'college' ? 't-co' :
                            b.category === 'family' ? 't-fa' :
                            b.category === 'corporate' ? 't-cr' : 't-dv'
                          }`} style={{ textTransform: 'capitalize' }}>
                            {b.category}
                          </span>
                          <div className="ko">{b.institution}</div>
                          <div className="kd">{b.duration} &mdash; {b.destination}</div>
                          <div className="km">
                            <span className="kpax"><i className="ti ti-users" style={{ fontSize: '9px' }}></i> {b.paxCount} pax</span>
                            <span className="kamt">₹{b.amount.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="kdate">Dept: {b.date}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: CRM Detail sidebar */}
        <div className="dp">
          {selectedBooking ? (
            <div>
              <div className="dp-hd">
                <div className="dp-top">
                  <div className="dp-av" style={{ textTransform: 'uppercase' }}>
                    {selectedBooking.institution.slice(0, 2)}
                  </div>
                  <div>
                    <div className="dp-nm">{selectedBooking.institution}</div>
                    <div className="dp-og">Ref ID: #{selectedBooking.id}</div>
                  </div>
                </div>
                <div className="dp-sr">
                  <span className={`badge ${
                    selectedBooking.category === 'school' ? 'b-blue' :
                    selectedBooking.category === 'college' ? 'b-gold' :
                    selectedBooking.category === 'family' ? 'b-green' : 'b-red'
                  }`} style={{ textTransform: 'capitalize' }}>
                    {selectedBooking.category} Group
                  </span>
                  <span className="badge b-gray" style={{ textTransform: 'uppercase' }}>
                    {selectedBooking.status}
                  </span>
                </div>
              </div>

              <div className="dp-bd">
                <div className="dp-f">
                  <div className="dp-lb">Destination</div>
                  <div className="dp-vl">{selectedBooking.duration} &mdash; {selectedBooking.destination}</div>
                </div>
                <div className="dp-f">
                  <div className="dp-lb">Group Size</div>
                  <div className="dp-vl">{selectedBooking.paxCount} students/chaperones (pax)</div>
                </div>
                <div className="dp-f">
                  <div className="dp-lb">Departure Date</div>
                  <div className="dp-vl">{selectedBooking.date}</div>
                </div>
                <div className="dp-f">
                  <div className="dp-lb">Valuation Quote</div>
                  <div className="dp-vl" style={{ color: 'var(--gold)', fontWeight: '700' }}>
                    ₹{selectedBooking.amount.toLocaleString('en-IN')}
                  </div>
                </div>
                
                <div className="dp-dv"></div>
                
                <div className="dp-lb" style={{ marginBottom: '8px' }}>Pipeline Advance Actions</div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <button 
                    onClick={() => handleTransitionStatus(selectedBooking, 'back')}
                    disabled={selectedBooking.status === 'enquiry'}
                    className="btn-s"
                    style={{ flex: 1, padding: '5px' }}
                  >
                    <i className="ti ti-chevron-left"></i> Back
                  </button>
                  <button 
                    onClick={() => handleTransitionStatus(selectedBooking, 'next')}
                    disabled={selectedBooking.status === 'completed'}
                    className="btn-p"
                    style={{ flex: 1, padding: '5px', justifyContent: 'center' }}
                  >
                    Next <i className="ti ti-chevron-right"></i>
                  </button>
                </div>

                <div className="dp-dv"></div>

                <div className="dp-lb">Representative Contact</div>
                <div className="dp-vl" style={{ fontWeight: '600' }}>{selectedBooking.coordinatorName}</div>
                <div className="dp-vl" style={{ fontStyle: 'normal', color: 'var(--text-3)', fontSize: '10.5px', marginTop: '2px' }}>
                  {selectedBooking.coordinatorPhone}
                </div>

                <div className="dp-dv"></div>

                <div className="dp-lb">Dispatch Allocation</div>
                {selectedBooking.assignedBusId ? (
                  <div className="dp-vl" style={{ color: 'var(--green-tx)', fontWeight: 'bold' }}>
                    <i className="ti ti-bus"></i> Coach locked: {selectedBooking.assignedBusId} ({selectedBooking.assignedDriver})
                  </div>
                ) : (
                  <div className="dp-vl" style={{ color: 'var(--warn-tx)', fontSize: '10.5px' }}>
                    <i className="ti ti-alert-circle"></i> Transport not assigned. Assign in Schedule view.
                  </div>
                )}

                {selectedBooking.notes && (
                  <div>
                    <div className="dp-dv"></div>
                    <div className="dp-lb">Coordinator Notes</div>
                    <p style={{ fontSize: '10.5px', color: 'var(--text-2)', fontStyle: 'italic', lineHeight: '1.4' }}>
                      "{selectedBooking.notes}"
                    </p>
                  </div>
                )}
              </div>

              <div className="dp-ft">
                <button 
                  onClick={() => handleOpenEditModal(selectedBooking)}
                  className="d-cl"
                >
                  <i className="ti ti-edit"></i> Edit Details
                </button>
                <button 
                  onClick={() => handleDeleteTrigger(selectedBooking.id)}
                  className="d-wa"
                  style={{ background: 'var(--red-bg)', color: 'var(--red-tx)', border: 'none' }}
                >
                  <i className="ti ti-trash"></i> Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="placeholder" style={{ padding: '40px 0' }}>
              <i className="ti ti-clipboard-list" style={{ fontSize: '32px' }}></i>
              <p>Select booking pipeline card to see dispatch details</p>
            </div>
          )}
        </div>

      </div>

      {/* ═══ ADD BOOKING POP-UP MODAL ═══ */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">New Group Booking Form</span>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleCreateBookingSubmit} className="modal-body">
              <div className="form-group">
                <label>Institution/Group Title *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Loyola School Youth Club" 
                  value={newInstitution}
                  onChange={(e) => setNewInstitution(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Category Segment</label>
                  <select 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as TourCategory)}
                    className="form-control"
                  >
                    <option value="school">School Group</option>
                    <option value="college">College Group</option>
                    <option value="family">Family Group</option>
                    <option value="corporate">Corporate</option>
                    <option value="devotional">Devotional Group</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Trip Duration</label>
                  <select 
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="form-control"
                  >
                    <option value="1-Day">1-Day Outing</option>
                    <option value="2-Day">2-Day Escape</option>
                    <option value="3-Day">3-Day Adventure</option>
                    <option value="4-Day">4-Day Retreat</option>
                    <option value="5-Day">5-Day Grand Expedition</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Primary Route Destination *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Munnar, Marayoor &amp; Wonderla" 
                  value={newDestination}
                  onChange={(e) => setNewDestination(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Head Count (Pax) *</label>
                  <input 
                    type="number" 
                    required 
                    min={1} 
                    value={newPax}
                    onChange={(e) => setNewPax(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Quoted Amount (INR ₹) *</label>
                  <input 
                    type="number" 
                    required 
                    min={0} 
                    value={newAmount}
                    onChange={(e) => setNewAmount(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Departure Date *</label>
                <input 
                  type="date" 
                  required 
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="form-control font-mono"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Coordinator Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Prof. Sreekanth" 
                    value={newCoordinator}
                    onChange={(e) => setNewCoordinator(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Coordinator Phone *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="+91 94460 00000" 
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Special Instructions</label>
                <textarea 
                  placeholder="Need luxury seat covers, DJ audio setup..." 
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  rows={2}
                  className="form-control"
                />
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Create Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ═══ EDIT EXISTING BOOKING MODAL ═══ */}
      {showEditModal && editObj && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">Edit Booking Ref: {editObj.id}</span>
              <button className="modal-close" onClick={() => setShowEditModal(false)}>
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="modal-body">
              <div className="form-group">
                <label>Institution/Group Title</label>
                <input 
                  type="text" 
                  required 
                  value={editObj.institution}
                  onChange={(e) => setEditObj({ ...editObj, institution: e.target.value })}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Category Segment</label>
                  <select 
                    value={editObj.category}
                    onChange={(e) => setEditObj({ ...editObj, category: e.target.value as TourCategory })}
                    className="form-control"
                  >
                    <option value="school">School Group</option>
                    <option value="college">College Group</option>
                    <option value="family">Family Group</option>
                    <option value="corporate">Corporate</option>
                    <option value="devotional">Devotional Group</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Trip Duration</label>
                  <input 
                    type="text"
                    required
                    value={editObj.duration}
                    onChange={(e) => setEditObj({ ...editObj, duration: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Destination Route</label>
                <input 
                  type="text" 
                  required 
                  value={editObj.destination}
                  onChange={(e) => setEditObj({ ...editObj, destination: e.target.value })}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Pax Students count</label>
                  <input 
                    type="number" 
                    required 
                    value={editObj.paxCount}
                    onChange={(e) => setEditObj({ ...editObj, paxCount: Number(e.target.value) })}
                    className="form-control font-mono"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Invoice Pricing (INR ₹)</label>
                  <input 
                    type="number" 
                    required 
                    value={editObj.amount}
                    onChange={(e) => setEditObj({ ...editObj, amount: Number(e.target.value) })}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Departure Date</label>
                  <input 
                    type="date" 
                    required 
                    value={editObj.date}
                    onChange={(e) => setEditObj({ ...editObj, date: e.target.value })}
                    className="form-control font-mono"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Current Status</label>
                  <select 
                    value={editObj.status}
                    onChange={(e) => setEditObj({ ...editObj, status: e.target.value as BookingStatus })}
                    className="form-control font-mono"
                    style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
                  >
                    <option value="enquiry">enquiry</option>
                    <option value="quote">quote</option>
                    <option value="advance">advance</option>
                    <option value="confirmed">confirmed</option>
                    <option value="completed">completed</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Primary Representative</label>
                  <input 
                    type="text" 
                    required 
                    value={editObj.coordinatorName}
                    onChange={(e) => setEditObj({ ...editObj, coordinatorName: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Phone Contacts</label>
                  <input 
                    type="text" 
                    required 
                    value={editObj.coordinatorPhone}
                    onChange={(e) => setEditObj({ ...editObj, coordinatorPhone: e.target.value })}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Internal Notes &amp; Requests</label>
                <textarea 
                  value={editObj.notes || ''}
                  onChange={(e) => setEditObj({ ...editObj, notes: e.target.value })}
                  rows={2}
                  className="form-control"
                />
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowEditModal(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Save Updates
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
