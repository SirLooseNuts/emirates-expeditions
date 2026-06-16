/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface LoginScreenProps {
  onLoginSuccess: (user: any) => void;
  onBypass: () => void;
}

export default function LoginScreen({ onLoginSuccess, onBypass }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setErrorMsg('');
    setLoading(true);

    if (!isSupabaseConfigured || !supabase) {
      setErrorMsg('Supabase is not configured yet. Please configure it in your .env or use the offline bypass.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else if (data?.user) {
        onLoginSuccess(data.user);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg3)',
      padding: '20px',
      fontFamily: 'var(--font-sans)'
    }}>
      <div className="pc" style={{
        width: '100%',
        maxWidth: '400px',
        padding: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        background: 'var(--bg)',
        border: '0.5px solid var(--border-md)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        
        {/* Logo / Brand */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'var(--gold-lt)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Emirates Expedition
          </div>
          <div style={{
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: '3px'
          }}>
            Secure CRM Console
          </div>
        </div>

        <h2 className="pt" style={{ fontSize: '15px', marginBottom: '8px', textAlign: 'center' }}>
          Sign In to Account
        </h2>
        <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '20px', marginTop: 0 }}>
          Access active tour registers, bookings pipeline, and logistics schedules.
        </p>

        {errorMsg && (
          <div style={{
            background: 'var(--red-bg)',
            color: 'var(--red-tx)',
            border: '0.5px solid var(--border-md)',
            borderRadius: '6px',
            padding: '10px',
            fontSize: '11px',
            marginBottom: '16px',
            textAlign: 'left',
            lineHeight: '1.4'
          }}>
            <i className="ti ti-alert-circle" style={{ marginRight: '5px' }}></i>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email"
              id="email"
              required
              placeholder="operator@emiratesexpedition.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
            <label htmlFor="password">Security Password</label>
            <input 
              type="password"
              id="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <button 
            type="submit" 
            className="btn-p" 
            style={{ 
              marginTop: '12px',
              padding: '10px 14px',
              fontSize: '12px',
              justifyContent: 'center',
              width: '100%',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="ti ti-loader animate-spin" style={{ marginRight: '6px' }}></i> Sign In...
              </>
            ) : (
              <>
                <i className="ti ti-lock-open" style={{ marginRight: '6px' }}></i> Authenticate
              </>
            )}
          </button>
        </form>

        <div style={{ margin: '20px 0 10px', height: '0.5px', background: 'var(--border)' }}></div>

        {/* Offline Bypass Option */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontSize: '10px', color: 'var(--text-3)', margin: 0 }}>
            Testing locally? Skip Supabase Auth parameters.
          </p>
          <button 
            type="button" 
            onClick={onBypass}
            className="btn-s"
            style={{ 
              justifyContent: 'center',
              width: '100%',
              fontSize: '11px',
              padding: '8px 12px'
            }}
          >
            <i className="ti ti-terminal" style={{ marginRight: '6px' }}></i> Offline Developer Bypass
          </button>
        </div>

      </div>
    </div>
  );
}
