import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ebhrndmxnxireuvqjcmz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViaHJuZG14bnhpcmV1dnFqY216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMTM5NjEsImV4cCI6MjEwODg4OTk2MX0.t8--0BTgQnnqytNseyGo1EUgPxOPDPM7WVbWr4v_B_M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)