/// <reference types="vite/client" />
/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// standard way to initialize Supabase
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

// Fallback logic check to allow local testing
export const isSupabaseConfigured = 
  !!supabaseUrl && 
  !!supabaseAnonKey && 
  !supabaseUrl.includes('YOURPROJECT') && 
  !supabaseAnonKey.includes('YOUR_ANON_KEY');
