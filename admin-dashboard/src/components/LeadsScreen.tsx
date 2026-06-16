/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Lead, LeadStatus, LeadSource } from '../types';

interface LeadsScreenProps {
  leads: Lead[];
  onAddLead: (lead: Lead) => void;
  onUpdateLeadStatus: (id: string, status: LeadStatus) => void;
  onUpdateTimeline: (id: string, text: string) => void;
  onConvertLeadToBooking: (lead: Lead) => void;
}

export default function LeadsScreen({
  leads,
  onAddLead,
  onUpdateLeadStatus,
  onUpdateTimeline,
  onConvertLeadToBooking
}: LeadsScreenProps) {
  // Inbox search and detail states
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'whatsapp' | 'website' | 'referral'>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(leads[0] || null);
  
  // Interactive mini chat input text
  const [chatMessage, setChatMessage] = useState('');
  
  // Create lead modal
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);

  // Form states for adding manual leads
  const [lName, setLName] = useState('');
  const [lOrg, setLOrg] = useState('');
  const [lDest, setLDest] = useState('Wonderla & Forum Mall');
  const [lPax, setLPax] = useState(65);
  const [lVal, setLVal] = useState(48750);
  const [lSrc, setLSrc] = useState<LeadSource>('whatsapp');
  const [lNotes, setLNotes] = useState('');

  // Filters
  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSource = sourceFilter === 'all' || l.source === sourceFilter;
    return matchesSearch && matchesSource;
  });

  // Submit manual core lead
  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lName || !lOrg) return;

    const newL: Lead = {
      id: `L${Math.floor(100 + Math.random() * 900)}`,
      name: lName,
      organization: lOrg,
      destination: lDest,
      paxCount: Number(lPax),
      estimatedValue: Number(lVal),
      source: lSrc,
      createdAt: new Date().toISOString(),
      status: 'new',
      notes: lNotes || 'Inbound group inquiry. Pre-calculation logged.',
      category: lOrg.toLowerCase().includes('poly') || lOrg.toLowerCase().includes('college') ? 'college' : 'school',
      timeline: [
        { title: 'Enquiry received manually', time: 'Just now', completed: true },
        { title: 'Review booking schedule availability', time: 'Just now', completed: true },
        { title: 'Quotation delivery', time: 'Pending', completed: false }
      ]
    };

    onAddLead(newL);
    setSelectedLead(newL);
    setShowAddLeadModal(false);
  };

  // Chat message submission (appends timeline events)
  const handleAddChatLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage || !selectedLead) return;

    onUpdateTimeline(selectedLead.id, chatMessage);
    
    // update current focus state with newly appended text
    const updatedLead = {
      ...selectedLead,
      timeline: [
        ...selectedLead.timeline,
        { title: chatMessage, time: 'Just now', completed: true }
      ]
    };
    setSelectedLead(updatedLead);
    setChatMessage('');
  };

  const handleUpdateStatusDirectly = (status: LeadStatus) => {
    if (selectedLead) {
      onUpdateLeadStatus(selectedLead.id, status);
      setSelectedLead({ ...selectedLead, status });
    }
  };

  const notifyConversion = (lead: Lead) => {
    onConvertLeadToBooking(lead);
    alert(`🎉 Success! Lead "${lead.name}" converted to booking pipeline under "enquiry" state!`);
  };

  return (
    <div className="screen" id="leads-inbound-panel">
      
      {/* Search Inbox and Actions bar */}
      <div className="filter-bar">
        <div className="srch" style={{ flex: '1 1 200px' }}>
          <i className="ti ti-search"></i>
          <input 
            type="text" 
            placeholder="Search leads, schools, contacts..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Channels */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button 
            onClick={() => setSourceFilter('all')}
            className={`chip ${sourceFilter === 'all' ? 'on' : ''}`}
          >
            All Channels
          </button>
          <button 
            onClick={() => setSourceFilter('whatsapp')}
            className={`chip ${sourceFilter === 'whatsapp' ? 'on' : ''}`}
          >
            <i className="ti ti-brand-whatsapp"></i> WhatsApp Inflow
          </button>
          <button 
            onClick={() => setSourceFilter('website')}
            className={`chip ${sourceFilter === 'website' ? 'on' : ''}`}
          >
            <i className="ti ti-world"></i> Web Submission
          </button>
          <button 
            onClick={() => setSourceFilter('referral')}
            className={`chip ${sourceFilter === 'referral' ? 'on' : ''}`}
          >
            <i className="ti ti-users"></i> Direct Referrals
          </button>
        </div>

        {/* Trigger manually Add Lead */}
        <button 
          onClick={() => setShowAddLeadModal(true)}
          className="btn-p"
          style={{ marginLeft: 'auto' }}
        >
          <i className="ti ti-plus"></i> Create Lead Record
        </button>
      </div>

      {/* Main Two-column panel structure */}
      <div className="leads-layout">
        
        {/* Left Column: Lead Inbox List */}
        <div className="leads-list">
          <div style={{ paddingBottom: '8px', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-3)', uppercase: 'true', fontWeight: 'bold' }}>INBOUND LIVE ENQUIRIES LIST</span>
            <span className="badge b-gold" style={{ fontFamily: 'var(--font-mono)' }}>
              {filteredLeads.length} total
            </span>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="placeholder">
              <i className="ti ti-inbox"></i>
              <p>No leads found under the selected filters.</p>
            </div>
          ) : (
            filteredLeads.map(l => (
              <div 
                key={l.id}
                onClick={() => setSelectedLead(l)}
                className={`lr ${selectedLead && selectedLead.id === l.id ? 'sel' : ''}`}
              >
                {/* Lead Source Avatar */}
                <div className="lav">
                  {l.organization.slice(0, 2).toUpperCase()}
                </div>

                {/* Main Details */}
                <div className="lm">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="ln">{l.name}</span>
                    <span className="ltime">
                      {new Date(l.createdAt).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
                    </span>
                  </div>

                  <div className="lo">{l.organization}</div>
                  
                  <div className="ldest">
                    <i className="ti ti-map-pin" style={{ color: 'var(--gold)', marginRight: '3px' }}></i>
                    {l.destination} &bull; <strong>{l.paxCount} pax</strong>
                  </div>
                </div>

                {/* Right hand metadata */}
                <div className="lr-r">
                  <div className="lval">₹{l.estimatedValue.toLocaleString('en-IN')}</div>
                  <span className={`lsrc ${
                    l.source === 'whatsapp' ? 's-wa' :
                    l.source === 'website' ? 's-web' :
                    's-ref'
                  }`}>
                    {l.source}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Column: Lead Detail View, Interactive WhatsApp Sim logs & conversion handler */}
        <div className="dp">
          {selectedLead ? (
            <div>
              {/* Header Profile Title */}
              <div className="dp-hd">
                <div className="dp-top">
                  <div className="dp-av">
                    {selectedLead.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="dp-nm">{selectedLead.name}</h3>
                    <p className="dp-og">{selectedLead.organization}</p>
                  </div>
                </div>

                <div className="dp-sr">
                  <span className={`badge ${
                    selectedLead.status === 'new' ? 'b-red' :
                    selectedLead.status === 'contacted' ? 'b-blue' :
                    selectedLead.status === 'quoted' ? 'b-gold' :
                    'b-green'
                  }`} style={{ textTransform: 'capitalize' }}>
                    {selectedLead.status}
                  </span>
                  <span className="badge b-gray">Ref: #{selectedLead.id}</span>
                </div>
              </div>

              {/* Operational Fields List */}
              <div className="dp-bd">
                <div className="dp-f">
                  <div className="dp-lb">Requested Route</div>
                  <div className="dp-vl">{selectedLead.destination}</div>
                </div>

                <div className="dp-f">
                  <div className="dp-lb">Calculated Budget</div>
                  <div className="dp-vl" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--gold)' }}>
                    ₹{selectedLead.estimatedValue.toLocaleString('en-IN')}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="dp-f">
                    <div className="dp-lb">Pax Count</div>
                    <div className="dp-vl">{selectedLead.paxCount} students</div>
                  </div>
                  <div className="dp-f">
                    <div className="dp-lb">Inflow Channel</div>
                    <div className="dp-vl" style={{ textTransform: 'capitalize' }}>{selectedLead.source}</div>
                  </div>
                </div>

                {selectedLead.notes && (
                  <>
                    <div className="dp-dv"></div>
                    <div className="dp-f">
                      <div className="dp-lb">Incoming Message Notes</div>
                      <div className="dp-vl" style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>
                        "{selectedLead.notes}"
                      </div>
                    </div>
                  </>
                )}

                <div className="dp-dv"></div>

                {/* CRM Timeline / Operator Notes */}
                <div className="dp-f">
                  <div className="dp-lb">Timeline / Notes</div>
                  <div className="tl">
                    {selectedLead.timeline.map((event, evIdx) => (
                      <div key={evIdx} className="tli">
                        <span className={`tld ${event.completed ? 'done' : ''}`}></span>
                        <div style={{ flex: 1 }}>
                          <div className="tlt">{event.title}</div>
                          <div className="tltime">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated follow-up message form */}
                <form onSubmit={handleAddChatLog} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <input 
                    type="text" 
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Append timeline update..." 
                    className="form-control"
                    style={{ flex: 1 }}
                  />
                  <button 
                    type="submit" 
                    className="btn-p"
                    style={{ padding: '8px 12px' }}
                  >
                    <i className="ti ti-send"></i>
                  </button>
                </form>
              </div>

              {/* Detail footer conversion action */}
              <div className="dp-ft">
                <button 
                  onClick={() => notifyConversion(selectedLead)}
                  className="d-cv"
                >
                  <i className="ti ti-check"></i> Convert to Booking
                </button>
                <button 
                  onClick={() => handleUpdateStatusDirectly(selectedLead.status === 'hot' ? 'contacted' : 'hot')}
                  className="d-cl"
                >
                  <i className="ti ti-flame" style={{ color: selectedLead.status === 'hot' ? 'var(--red-tx)' : 'inherit' }}></i>
                  {selectedLead.status === 'hot' ? 'Mark Cold' : 'Mark Hot'}
                </button>
              </div>
            </div>
          ) : (
            <div className="placeholder">
              <i className="ti ti-message-square"></i>
              <p>Select an inquiry to view details &amp; logs.</p>
            </div>
          )}
        </div>

      </div>

      {/* ═══ NEW LEAD MANUAL ENTRY SYSTEM ═══ */}
      {showAddLeadModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-hd">
              <span className="modal-title">New Lead Entry Form</span>
              <button onClick={() => setShowAddLeadModal(false)} className="modal-close">
                <i className="ti ti-x" style={{ fontSize: '16px' }}></i>
              </button>
            </div>
            <form onSubmit={handleCreateLead} className="modal-body">
              <div className="form-group">
                <label>Lead Contact Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Sreekanth Felix" 
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Organization / Inst. Sponsor *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Govt. Polytechnic, TVM" 
                  value={lOrg}
                  onChange={(e) => setLOrg(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Target Excursion Region</label>
                <input 
                  type="text" 
                  required 
                  value={lDest}
                  onChange={(e) => setLDest(e.target.value)}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Pax count</label>
                  <input 
                    type="number" 
                    required 
                    value={lPax}
                    onChange={(e) => setLPax(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Est Value (INR ₹)</label>
                  <input 
                    type="number" 
                    required 
                    value={lVal}
                    onChange={(e) => setLVal(Number(e.target.value))}
                    className="form-control font-mono"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Source Channel</label>
                <select 
                  value={lSrc}
                  onChange={(e) => setLSrc(e.target.value as LeadSource)}
                  className="form-control"
                >
                  <option value="whatsapp">WhatsApp (Direct)</option>
                  <option value="website">Website Portal</option>
                  <option value="referral">Offline Referral</option>
                </select>
              </div>

              <div className="form-group">
                <label>Initial requirements notes</label>
                <textarea 
                  value={lNotes}
                  onChange={(e) => setLNotes(e.target.value)}
                  placeholder="e.g. Vegetarian breakfast required, wants premium light shows..." 
                  rows={2}
                  className="form-control"
                />
              </div>

              <div className="modal-ft">
                <button 
                  type="button" 
                  onClick={() => setShowAddLeadModal(false)}
                  className="btn-s"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-p"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
