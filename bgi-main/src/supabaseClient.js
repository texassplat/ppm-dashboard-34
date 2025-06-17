import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://swobsftagtdxculglkna.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2JzZnRhZ3RkeGN1bGdsa25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzU3MDEsImV4cCI6MjA2NTE1MTcwMX0.sQpA20P2g3qyKvB2eXQjrsIiXYAq98G3PRqYeIXxye8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 