/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';

interface SettingsScreenProps {
  onResetData: () => void;
  currency: 'INR' | 'AED';
  onSetCurrency: (curr: 'INR' | 'AED') => void;
  onSignOut?: () => void;
}

export default function SettingsScreen({ onResetData, currency, onSetCurrency, onSignOut }: SettingsScreenProps) {
  const [selectedTheme, setSelectedTheme] = useState('Golden Sands');
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [enableWhatsAppSync, setEnableWhatsAppSync] = useState(true);

  const colorsTheme: Record<string, string> = {
    'Golden Sands': '#C9942A',
    'Arabian Oud': '#4B320C',
    'Lush Oasis': '#10B981',
    'Indian Ocean': '#2A5ABF'
  };

  const notifyReset = () => {
    if (confirm('⚠️ Warning: This will wipe all current booking edits and re-seed the standard default mock values. Proceed?')) {
      onResetData();
      alert('🔄 All system registers have been re-seeded to factory standard!');
    }
  };

  return (
    <div className="screen" id="settings-admin-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
      
      {/* Title */}
      <div className="ph">
        <div>
          <h2 className="pt" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-settings" style={{ color: 'var(--gold)' }}></i> CRM Settings Center
          </h2>
          <p className="ps">Set active branding configurations and control local memory indices safely.</p>
        </div>
      </div>

      {/* Control Widgets */}
      <div className="pc" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        {/* Dynamic Theme Presets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-3)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <i className="ti ti-palette" style={{ color: 'var(--gold)' }}></i> Operational Theme HUD Preset
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px' }}>
            {Object.keys(colorsTheme).map(themeName => (
              <button 
                key={themeName}
                type="button"
                onClick={() => setSelectedTheme(themeName)}
                className="btn-s"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: selectedTheme === themeName ? 'var(--gold)' : 'var(--border-md)',
                  background: selectedTheme === themeName ? 'var(--gold-bg)' : 'transparent',
                  color: selectedTheme === themeName ? 'var(--warn-tx)' : 'var(--text-2)',
                  fontWeight: selectedTheme === themeName ? 'bold' : 'normal'
                }}
              >
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: colorsTheme[themeName] }} />
                {themeName}
              </button>
            ))}
          </div>
        </div>

        {/* Currency and Pricing System Mode Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '0.5px solid var(--border)', paddingTop: '14px' }}>
          <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-3)', textTransform: 'uppercase' }}>
            Base Currency Settings
          </label>
          <p style={{ fontSize: '11px', color: 'var(--text-2)', margin: 0 }}>
            All student group quotation bills will translate to this prefix.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            <button 
              type="button"
              onClick={() => onSetCurrency('INR')}
              className={currency === 'INR' ? 'btn-p' : 'btn-s'}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Indian Rupee (₹) &mdash; Kerala Tours
            </button>
            <button 
              type="button"
              onClick={() => onSetCurrency('AED')}
              className={currency === 'AED' ? 'btn-p' : 'btn-s'}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              UAE Dirham (AED) &mdash; Dubai Inbound
            </button>
          </div>
        </div>

        {/* Sync Settings checkboxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '0.5px solid var(--border)', paddingTop: '14px' }}>
          <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-3)', textTransform: 'uppercase' }}>
            Automations &amp; CRM Syncs
          </label>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input 
              type="checkbox" 
              id="notif"
              checked={enableNotifications}
              onChange={(e) => setEnableNotifications(e.target.checked)}
              style={{ width: '15px', height: '15px', cursor: 'pointer', marginTop: '2px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <label htmlFor="notif" style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text)', cursor: 'pointer', userSelect: 'none' }}>
                Real-time Browser Push Notifications
              </label>
              <p style={{ fontSize: '10.5px', color: 'var(--text-2)', margin: 0 }}>
                Send brief reminders during upcoming Kerala student departures.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input 
              type="checkbox" 
              id="waSync"
              checked={enableWhatsAppSync}
              onChange={(e) => setEnableWhatsAppSync(e.target.checked)}
              style={{ width: '15px', height: '15px', cursor: 'pointer', marginTop: '2px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <label htmlFor="waSync" style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text)', cursor: 'pointer', userSelect: 'none' }}>
                WhatsApp API Auto-Ingest Sync (Simulated)
              </label>
              <p style={{ fontSize: '10.5px', color: 'var(--text-2)', margin: 0 }}>
                Scan inbound text queries from Kerala school coordinators and place them directly as "New" enquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Database seed reset - visual action */}
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '14px' }}>
          <div style={{ padding: '12px', background: 'var(--red-bg)', border: '0.5px solid var(--border-md)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--red-tx)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <i className="ti ti-adjustments"></i> Maintenance &amp; Reseeding
            </div>
            <p style={{ fontSize: '10.5px', color: 'var(--text-2)', lineHeight: '1.4', margin: 0 }}>
              Wipe current memory modifications inside state registers and restore default settings loaded from factory CRM spreadsheets.
            </p>
            <button 
              type="button"
              onClick={notifyReset}
              className="btn-s"
              style={{ color: 'var(--red-tx)', borderColor: 'var(--red-tx)', display: 'inline-flex', alignSelf: 'flex-start' }}
            >
              <i className="ti ti-refresh"></i> Direct Reseed CRM State
            </button>
          </div>
        </div>

        {/* Sign Out block */}
        {onSignOut && (
          <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '14px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-3)', textTransform: 'uppercase' }}>
                Session Control
              </label>
              <button 
                type="button" 
                onClick={onSignOut}
                className="btn-s"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: 'var(--border-md)',
                  color: 'var(--text)',
                  width: 'fit-content'
                }}
              >
                <i className="ti ti-logout"></i> Sign Out from Console
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Trust and credits block */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', marginTop: '20px', fontSize: '10px', color: 'var(--text-3)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
        <i className="ti ti-shield-lock" style={{ color: 'var(--gold)', fontSize: '14px' }}></i>
        <span>Emirates Expedition Security Engine Live</span>
      </div>

    </div>
  );
}
