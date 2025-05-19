'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User, AuthError, AuthResponse } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthContextProps {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Auth context initialized');
    // Check active sessions and sets the user
    const getSession = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching session...');
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error fetching session:', error);
          return;
        }
        
        if (data.session) {
          console.log('Session found:', data.session.user.email);
          setSession(data.session);
          setUser(data.session.user);
        } else {
          console.log('No active session found');
          setSession(null);
          setUser(null);
        }
      } catch (error) {
        console.error('Unexpected error in getSession:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed (onAuthStateChange):', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // User sign in function
  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    console.log('Sign in function called with email:', email);
    setIsLoading(true);
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (response.data?.user) {
        console.log('User signed in successfully (signIn function):', response.data.user.email);
        // Force page reload to ensure middleware picks up the new auth state
        window.location.reload();
      }
      if(response.error){
        console.error('Error in signIn function from Supabase:', response.error);
      }
      return response;
    } catch (error) {
      console.error('Catch block error in signIn function:', error);
      return { data: { user: null, session: null }, error: error as AuthError };
    } finally {
      setIsLoading(false);
    }
  };

  // User sign up function
  const signUp = async (email: string, password: string): Promise<AuthResponse> => {
    console.log('Sign up function called with email:', email);
    setIsLoading(true);
    try {
      const response = await supabase.auth.signUp({
        email,
        password,
      });

      if (response.data?.user) {
        console.log('User signed up successfully (signUp function):', response.data.user.email);
      }
      if(response.error){
        console.error('Error in signUp function from Supabase:', response.error);
      }
      return response;
    } catch (error) {
      console.error('Catch block error in signUp function:', error);
      return { data: { user: null, session: null }, error: error as AuthError };
    } finally {
      setIsLoading(false);
    }
  };

  // User sign out function
  const signOut = async () => {
    console.log('Sign out function called');
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
      // Force reload after sign out to ensure middleware picks up the new auth state
      window.location.href = '/signin';
      console.log('User signed out successfully (signOut function)');
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
  };

  console.log('Auth context current state:', { 
    isLoading, 
    hasUser: !!user, 
    hasSession: !!session 
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 