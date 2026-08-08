import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Admin client using the service role key. Bypasses RLS.
 * NEVER import this into a Client Component.
 */
export function createAdminClient() {
  if (!url || !service) {
    throw new Error("Missing Supabase admin env vars.");
  }
  return createClient(url, service, { auth: { persistSession: false } });
}
