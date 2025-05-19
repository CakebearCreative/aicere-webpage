'use client';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

// Initialize Supabase client in the browser; this will manage cookies for auth
export const supabase = createPagesBrowserClient(); 