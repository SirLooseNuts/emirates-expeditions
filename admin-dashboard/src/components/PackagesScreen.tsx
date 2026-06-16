/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TourPackage } from '../types';

interface PackagesScreenProps {
  packages: TourPackage[];
  onAddPackage: (pkg: TourPackage) => void;
  onEditPackage: (pkg: TourPackage) => void;
}

export default function PackagesScreen({
  packages,
  onAddPackage,
  onEditPackage
}: PackagesScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPkg, setEditingPkg] = useState<TourPackage | null>(null);

  // Filter state for duration
  const [durationFilter, setDurationFilter] = useState<'all' | '1-Day' | '2-Day' | '3-Day' | '5-Day'>('all');

  // Form states for new/edit
  const [pName, setPName] = useState('');
  const [pDuration, setPDuration] = useState('1-Day');
  const [pStops, setPStops] = useState('');
  const [pPrice, setPPrice] = useState(1000);
  const [pDesc, setPDesc] = useState('');
  const [pIsTop, setPIsTop] = useState(false);

  const filteredPackages = packages.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.stops.some(stop => stop.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDuration = durationFilter === 'all' || p.duration.includes(durationFilter);
    return matchesSearch && matchesDuration;
  });

  const handleOpenAdd = () => {
    setPName('');
    setPDuration('3-Day');
    setPStops('Munnar, Marayoor, Cochin');
    setPPrice(2500);
    setPDesc('Unpack South India\'s natural tea-leaf paradise paired with luxury water parks.');
    setPIsTop(false);
    setShowAddForm(true);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pName) return;

    const stopsArray = pStops.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const newPkg: TourPackage = {
      id: `P${Math.floor(100 + Math.random() * 900)}`,
      name: pName,
      duration: pDuration,
      stops: stopsArray,
      pricePerHead: Number(pPrice),
      totalBookings: 0,
      isTopPackage: pIsTop,
      description: pDesc
    };

    onAddPackage(newPkg);
    setShowAddForm(false);
  };

  const handleStartEdit = (p: TourPackage) => {
    setEditingPkg(p);
    setPName(p.name);
    setPDuration(p.duration);
    setPStops(p.stops.join(', '));
    setPPrice(p.pricePerHead);
    setPDesc(p.description);
    setPIsTop(p.isTopPackage);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPkg) {
      const stopsArray = pStops.split(',').map(s => s.trim()).filter(s => s.length > 0);
      const updated: TourPackage = {
        ...editingPkg,
        name: pName,
        duration: pDuration,
        stops: stopsArray,
        pricePerHead: Number(pPrice),
        description: pDesc,
        isTopPackage: pIsTop
      };
      onEditPackage(updated);
      setEditingPkg(null);
    }
  };

  return (
    <div className="screen" id="packages-inventory-panel">
      
      {/* Page Title & Intro */}
      <div className="ph">
        <div>
          <h2 className="pt">Active Tour Catalogue</h2>
          <p className="ps">Manage rates per head, routes inventory, and dynamic promotional status.</p>
        </div>
        <div className="acts">
          <button 
            onClick={handleOpenAdd}
            className="btn-p"
          >
            <i className="ti ti-plus"></i> Add New Itinerary
          </button>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="filter-bar">
        <div className="srch">
          <i className="ti ti-search"></i>
          <input 
            type="text" 
            placeholder="Search stops, places, Munnar..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {(['all', '1-Day', '2-Day', '3-Day', '5-Day'] as const).map(dur => (
            <button 
              key={dur}
              onClick={() => setDurationFilter(dur)}
              className={`chip ${durationFilter === dur ? 'on' : ''}`}
            >
              {dur === 'all' ? 'All Durations' : dur}
            </button>
          ))}
        </div>
      </div>

      {/* Grid display of active catalogues */}
      <div className="pkg-grid">
        {filteredPackages.map(p => (
          <div 
            key={p.id}
            className={`pc ${p.isTopPackage ? 'promoted' : ''}`}
          >
            {/* Package top */}
            <div className="pc-hd">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="dur-b">
                  {p.duration}
                </span>
                {p.isTopPackage && (
                  <span className="badge b-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <i className="ti ti-trending-up"></i> Best Seller
                  </span>
                )}
              </div>

              <h3 className="pc-name">
                {p.name}
              </h3>

              {/* Route stop points tags */}
              <div className="stops">
                {p.stops.map((stop, sIdx) => (
                  <span key={sIdx} className="sp">
                    <i className="ti ti-map-pin" style={{ color: 'var(--gold)', marginRight: '3px' }}></i>
                    {stop}
                  </span>
                ))}
              </div>
            </div>

            {/* Package rates and controls bottom */}
            <div className="pc-bd">
              <p style={{ fontSize: '11px', color: 'var(--text-2)', lineHeight: '1.4', marginBottom: '10px' }}>
                {p.description}
              </p>

              <div className="pc-r2">
                <div>
                  <span className="pps">Student rate index</span>
                  <div className="pprice">
                    ₹{p.pricePerHead.toLocaleString('en-IN')}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="pbkd">{p.totalBookings}</div>
                  <div className="pbss">Total Bookings</div>
                </div>
              </div>

              {/* Primary catalogue interactive CTA */}
              <div className="pc-acts">
                <button 
                  onClick={() => handleStartEdit(p)}
                  className="pa pr"
                >
                  <i className="ti ti-edit"></i> Modify Pricing
                </button>
              </div>
            </div>

          </div>
        ))}

        {/* Empty layout card triggered CTA */}
        <div 
          onClick={handleOpenAdd}
          className="add-c"
        >
          <i className="ti ti-plus"></i>
          <span>Create new excursion</span>
        </div>
      </div>

      {/* ═══ ADD PACKAGE MODAL ═══ */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">Add Catalogue Itinerary</span>
              <button onClick={() => setShowAddForm(false)} className="modal-close">
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleCreateSubmit} className="modal-body">
              <div className="form-group">
                <label>Package Name / Primary Destinations *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Athirapally Forest Walks &amp; Theme Park" 
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Estimated Duration</label>
                  <select 
                    value={pDuration}
                    onChange={(e) => setPDuration(e.target.value)}
                    className="form-control"
                  >
                    <option value="1-Day">1-Day</option>
                    <option value="2-Day">2-Day</option>
                    <option value="3-Day">3-Day</option>
                    <option value="4-Day">4-Day</option>
                    <option value="5-Day">5-Day</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Price Per Head (INR ₹) *</label>
                  <input 
                    type="number" 
                    required 
                    min={1} 
                    value={pPrice}
                    onChange={(e) => setPPrice(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Itinerary Landmarks &amp; Key Stops (comma separated) *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Wonderla Park, Lulumall, Fort Kochi" 
                  value={pStops}
                  onChange={(e) => setPStops(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Catalogue Marketing Description</label>
                <textarea 
                  value={pDesc}
                  onChange={(e) => setPDesc(e.target.value)}
                  placeholder="Short, evocative description to print onto quotation bills..." 
                  rows={3}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <input 
                  type="checkbox" 
                  id="pIsTop"
                  checked={pIsTop}
                  onChange={(e) => setPIsTop(e.target.checked)}
                  style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                />
                <label htmlFor="pIsTop" style={{ fontSize: '11px', color: 'var(--text-2)', cursor: 'pointer', userSelect: 'none' }}>
                  Promote as <strong>Best Seller / Top Choice</strong>
                </label>
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Create Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ═══ EDIT PACKAGE MODAL ═══ */}
      {editingPkg && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">Edit Itinerary: #{editingPkg.id}</span>
              <button onClick={() => setEditingPkg(null)} className="modal-close">
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="modal-body">
              <div className="form-group">
                <label>Package Name / Primary Destinations</label>
                <input 
                  type="text" 
                  required 
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Duration tag</label>
                  <input 
                    type="text" 
                    required 
                    value={pDuration}
                    onChange={(e) => setPDuration(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Price Per Head (INR ₹) *</label>
                  <input 
                    type="number" 
                    required 
                    min={1} 
                    value={pPrice}
                    onChange={(e) => setPPrice(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Stops List (comma separated)</label>
                <input 
                  type="text" 
                  required 
                  value={pStops}
                  onChange={(e) => setPStops(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Marketing Description</label>
                <textarea 
                  value={pDesc}
                  onChange={(e) => setPDesc(e.target.value)}
                  rows={3}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <input 
                  type="checkbox" 
                  id="pIsTopEdit"
                  checked={pIsTop}
                  onChange={(e) => setPIsTop(e.target.checked)}
                  style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                />
                <label htmlFor="pIsTopEdit" style={{ fontSize: '11px', color: 'var(--text-2)', cursor: 'pointer', userSelect: 'none' }}>
                  Promote as <strong>Best Seller / Top Choice</strong>
                </label>
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setEditingPkg(null)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Save Modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
