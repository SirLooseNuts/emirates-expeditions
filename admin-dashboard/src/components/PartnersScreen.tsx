/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { Partner, PartnerType } from '../types';

interface PartnersScreenProps {
  partners: Partner[];
  onToggleStatus: (id: string) => void;
  onAddPartner: (partner: Partner) => void;
}

export default function PartnersScreen({ partners, onToggleStatus, onAddPartner }: PartnersScreenProps) {
  const [partnerType, setPartnerType] = useState<PartnerType | 'all'>('all');
  const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);

  // Form state
  const [ptName, setPtName] = useState('');
  const [ptType, setPtType] = useState<PartnerType>('bus');
  const [ptContact, setPtContact] = useState('');
  const [ptCapacity, setPtCapacity] = useState('');
  const [ptRate, setPtRate] = useState('');
  const [ptRating, setPtRating] = useState(4.8);

  const filteredPartners = partners.filter(p => partnerType === 'all' || p.type === partnerType);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ptName || !ptContact) return;

    const newPartner: Partner = {
      id: `PART${Math.floor(100 + Math.random() * 900)}`,
      name: ptName,
      type: ptType,
      contact: ptContact,
      rating: Number(ptRating),
      status: 'active',
      capacity: ptCapacity || 'Standard capacity',
      rateInfo: ptRate || 'Standard tariff card'
    };

    onAddPartner(newPartner);
    setShowAddPartnerModal(false);
  };

  return (
    <div className="screen" id="partners-assets-panel">
      
      {/* Intro section */}
      <div className="ph">
        <div>
          <h2 className="pt">Logistics Asset Register</h2>
          <p className="ps">Synchronize luxury coaches, hotel dormitories, and local tourist guides in South India.</p>
        </div>
        <div className="acts">
          <button 
            onClick={() => setShowAddPartnerModal(true)}
            className="btn-p"
          >
            <i className="ti ti-plus"></i> Add Partner Contract
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar" style={{ background: 'var(--bg2)', padding: '10px', borderRadius: '8px', marginBottom: '16px' }}>
        <span style={{ fontSize: '10px', color: 'var(--text-3)', fontWeight: 'bold', textTransform: 'uppercase', marginRight: '8px' }}>
          Asset category:
        </span>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setPartnerType('all')}
            className={`chip ${partnerType === 'all' ? 'on' : ''}`}
          >
            All assets
          </button>
          <button 
            onClick={() => setPartnerType('bus')}
            className={`chip ${partnerType === 'bus' ? 'on' : ''}`}
          >
            <i className="ti ti-bus" style={{ marginRight: '3px' }}></i> Bus Coaches
          </button>
          <button 
            onClick={() => setPartnerType('hotel')}
            className={`chip ${partnerType === 'hotel' ? 'on' : ''}`}
          >
            <i className="ti ti-building-community" style={{ marginRight: '3px' }}></i> High Stays / Hotels
          </button>
          <button 
            onClick={() => setPartnerType('guide')}
            className={`chip ${partnerType === 'guide' ? 'on' : ''}`}
          >
            <i className="ti ti-user-check" style={{ marginRight: '3px' }}></i> Guides &amp; Food Catering
          </button>
        </div>
      </div>

      {/* Asset grid list */}
      <div className="partner-grid">
        {filteredPartners.map(p => (
          <div key={p.id} className="pc" style={{ padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              
              {/* Card Top Name & Rating */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontSize: '8.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase' }}>
                    ID: {p.id}
                  </span>
                  <h3 className="pc-name" style={{ marginTop: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {p.type === 'bus' ? (
                      <i className="ti ti-bus" style={{ color: 'var(--gold)' }}></i>
                    ) : p.type === 'hotel' ? (
                      <i className="ti ti-building-community" style={{ color: 'var(--gold-lt)' }}></i>
                    ) : (
                      <i className="ti ti-user-check" style={{ color: 'var(--gold)' }}></i>
                    )}
                    {p.name}
                  </h3>
                </div>
                
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: 'var(--bg3)', padding: '2px 6px', borderRadius: '4px', fontSize: '10.5px', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
                  <i className="ti ti-star-filled" style={{ color: 'var(--gold)' }}></i> {p.rating}
                </div>
              </div>

              {/* Dynamic details */}
              <div style={{ margin: '14px 0 0', fontSize: '11px', color: 'var(--text-2)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>
                  <strong style={{ color: 'var(--text-3)', fontWeight: 'normal' }}>Sourcing stats:</strong> {p.capacity}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-3)', fontWeight: 'normal' }}>Pricing tariff:</strong> <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontWeight: 'bold' }}>{p.rateInfo}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="ti ti-phone" style={{ color: 'var(--text-3)' }}></i>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px' }}>{p.contact}</span>
                </div>
              </div>

            </div>

            {/* Availability Status bottom action toggle */}
            <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>Operation Status</span>
              <button 
                onClick={() => onToggleStatus(p.id)}
                className={`badge ${
                  p.status === 'active' ? 'b-green' :
                  p.status === 'busy' ? 'b-red' :
                  'b-gray'
                }`}
                style={{ cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px', textTransform: 'capitalize' }}
              >
                {p.status === 'active' ? (
                  <>
                    <i className="ti ti-circle-check"></i> Available
                  </>
                ) : p.status === 'busy' ? (
                  <>
                    <i className="ti ti-alert-circle"></i> Assigned
                  </>
                ) : (
                  <>
                    <i className="ti ti-clock"></i> Unavailable
                  </>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* ═══ ADD PARTNER MODAL ═══ */}
      {showAddPartnerModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">New Partner Registration</span>
              <button onClick={() => setShowAddPartnerModal(false)} className="modal-close">
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="modal-body">
              <div className="form-group">
                <label>Company/Partner Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Cochin Royal Travels" 
                  value={ptName}
                  onChange={(e) => setPtName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Partner Type</label>
                  <select 
                    value={ptType}
                    onChange={(e) => setPtType(e.target.value as PartnerType)}
                    className="form-control"
                  >
                    <option value="bus">Bus/Coach line</option>
                    <option value="hotel">Hotel/Dorm Stay</option>
                    <option value="guide">Tourist Guide</option>
                    <option value="resort">Nature Resort</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Rating Index (Avg)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    min="1" 
                    max="5"
                    value={ptRating}
                    onChange={(e) => setPtRating(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Rent / Flat Pricing Policy *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. ₹38/km or ₹1200 student dormitory pack" 
                  value={ptRate}
                  onChange={(e) => setPtRate(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Capacity Inventory Index</label>
                <input 
                  type="text" 
                  placeholder="e.g. 3 x Multi-Axle Volvo Scanias (50-seaters)" 
                  value={ptCapacity}
                  onChange={(e) => setPtCapacity(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Contact Details (Name &amp; Phone) *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Sunil Kumar (+91 94000 XXXXX)" 
                  value={ptContact}
                  onChange={(e) => setPtContact(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowAddPartnerModal(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Submit Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
