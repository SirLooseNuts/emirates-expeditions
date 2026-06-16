/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { TripSchedule, TourBooking, Partner } from '../types';

interface ScheduleScreenProps {
  schedules: TripSchedule[];
  bookings: TourBooking[];
  partners: Partner[];
  onAssignTransport: (bookingId: string, busNumber: string, driverName: string) => void;
  onUpdateTripStatus: (scheduleId: string, status: 'upcoming' | 'ongoing' | 'completed' | 'canceled') => void;
}

export default function ScheduleScreen({
  schedules,
  bookings,
  partners,
  onAssignTransport,
  onUpdateTripStatus
}: ScheduleScreenProps) {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState('');
  const [driverName, setDriverName] = useState('');
  const [busChoice, setBusChoice] = useState('');

  // Find bookings that have status 'advance' or 'confirmed' but do NOT have a designated driver/scheduled trip logged yet
  const unassignedBookings = bookings.filter(b => 
    (b.status === 'advance' || b.status === 'confirmed') && 
    !schedules.some(sch => sch.bookingId === b.id)
  );

  // Available buses from partners register
  const availableBuses = partners.filter(p => p.type === 'bus' && p.status === 'active');

  const handleAssignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookingId || !driverName || !busChoice) {
      alert('Please select a booking, write driver contact details, and lock in a vehicle coach.');
      return;
    }

    onAssignTransport(selectedBookingId, busChoice, driverName);
    setShowAssignModal(false);
    setSelectedBookingId('');
    setDriverName('');
    setBusChoice('');
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ongoing': return 'b-green';
      case 'upcoming': return 'b-blue';
      case 'completed': return 'b-gray';
      default: return 'b-red';
    }
  };

  return (
    <div className="screen" id="schedules-dispatch-panel">
      
      {/* Title block */}
      <div className="ph">
        <div>
          <h2 className="pt">Bus Fleet Dispatch Register</h2>
          <p className="ps">Assign drivers &amp; active Scania/Benz luxury buses to confirmed student excursions.</p>
        </div>
        <div className="acts">
          <button 
            onClick={() => setShowAssignModal(true)}
            disabled={unassignedBookings.length === 0}
            className="btn-p"
            style={{ opacity: unassignedBookings.length === 0 ? 0.5 : 1, cursor: unassignedBookings.length === 0 ? 'not-allowed' : 'pointer' }}
          >
            <i className="ti ti-navigation"></i> Book Driver/Coach ({unassignedBookings.length} unassigned)
          </button>
        </div>
      </div>

      {/* Grid of trip schedules */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '12px', marginBottom: '16px' }}>
        {schedules.map(s => (
          <div key={s.id} className="pc" style={{ padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px' }}>
            
            {/* Top row */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>Dispatch ID: {s.id}</span>
                <span className={`badge ${getStatusStyle(s.tripStatus)}`} style={{ textTransform: 'capitalize' }}>
                  {s.tripStatus}
                </span>
              </div>

              <div>
                <h3 className="pc-name" style={{ fontSize: '13px' }}>{s.institutionName}</h3>
                <span style={{ fontSize: '11px', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <i className="ti ti-map-pin"></i> {s.destination}
                </span>
              </div>
            </div>

            {/* Middle body driver information */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: 'var(--bg2)', padding: '10px', borderRadius: '6px', margin: '12px 0', fontSize: '11px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '8.5px', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 'bold' }}>Coach bus</span>
                <div style={{ fontWeight: 'bold', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="ti ti-bus" style={{ color: 'var(--gold)' }}></i> {s.busNumber.split('(')[0].trim()}
                </div>
                <span style={{ fontSize: '9px', color: 'var(--text-2)' }}>{s.busNumber.includes('(') ? s.busNumber.slice(s.busNumber.indexOf('(')) : ''}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', borderLeft: '0.5px solid var(--border)', paddingLeft: '8px' }}>
                <span style={{ fontSize: '8.5px', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 'bold' }}>Chauffeur</span>
                <div style={{ fontWeight: 'bold', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="ti ti-user" style={{ color: 'var(--text-3)' }}></i> {s.driverName.split('(')[0].trim()}
                </div>
                <span style={{ fontSize: '9px', color: 'var(--text-2)', fontFamily: 'var(--font-mono)' }}>{s.driverName.includes('(') ? s.driverName.slice(s.driverName.indexOf('(')) : ''}</span>
              </div>
            </div>

            {/* Bottom dates/controls */}
            <div style={{ paddingTop: '10px', borderTop: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'var(--text-2)', fontFamily: 'var(--font-mono)' }}>
                <i className="ti ti-calendar" style={{ color: 'var(--green-tx)' }}></i> {s.startDate} &mdash; {s.endDate}
              </div>

              {/* Modify Dispatch Stage drop menu */}
              <select 
                value={s.tripStatus}
                onChange={(e) => onUpdateTripStatus(s.id, e.target.value as any)}
                className="mini"
                style={{ fontWeight: 'bold' }}
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>

          </div>
        ))}
      </div>

      {schedules.length === 0 && (
        <div className="placeholder">
          <i className="ti ti-alert-circle"></i>
          <p>No trip dispatches loaded. Complete assignments above.</p>
        </div>
      )}

      {/* ═══ ASSIGN TRANSPORT MODAL ═══ */}
      {showAssignModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">Lock - Transport dispatch</span>
              <button onClick={() => setShowAssignModal(false)} className="modal-close">
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>

            <form onSubmit={handleAssignSubmit} className="modal-body">
              
              <div className="form-group">
                <label>Pick Confirmed Booking *</label>
                <select 
                  required
                  value={selectedBookingId}
                  onChange={(e) => setSelectedBookingId(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Choose student group --</option>
                  {unassignedBookings.map(b => (
                    <option key={b.id} value={b.id}>
                      {b.institution} ({b.paxCount} pax to {b.destination.slice(0, 15)}..)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Professional Coach Bus *</label>
                <select 
                  required
                  value={busChoice}
                  onChange={(e) => setBusChoice(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Choose bus companion --</option>
                  {availableBuses.length === 0 ? (
                    <option value="KL-16-Y-7788 (Royal Crown Scania)">KL-16-Y-7788 (Default Multi-axle Scania)</option>
                  ) : (
                    availableBuses.map(b => (
                      <option key={b.id} value={`${pNameForSelect(b)}`}>
                        {b.name} &mdash; {b.capacity}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="form-group">
                <label>Driver Name &amp; Phone Contact *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Mani Swamy (+91 94473 XXXXX)" 
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ background: 'var(--bg2)', padding: '8px', borderRadius: '6px', fontSize: '10px', color: 'var(--text-3)', lineHeight: '1.4', marginBottom: '14px' }}>
                📢 Dispatch scheduling will lock the status and synchronize this driver details inside the client group's quotation receipt.
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowAssignModal(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Confirm Assignment
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

// Quick helper
function pNameForSelect(p: Partner) {
  if (p.name.includes('Anora')) {
    return 'KL-01-CA-9900 (Anora Sleeper)';
  } else if (p.name.includes('Royal')) {
    return 'KL-16-Y-7788 (Royal Coach)';
  } else {
    return 'KL-12-Z-4560 (Luxury Coach)';
  }
}
