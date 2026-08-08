import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** fetch with an 8s timeout so build/render never hangs on a dead endpoint. */
const timeoutFetch: typeof fetch = (input, init) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  return fetch(input, { ...init, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
};

/** Public (anon) client — read-only via RLS. Safe on client and server. */
export const supabase = createClient(url ?? "", anon ?? "", {
  auth: { persistSession: false },
  global: { fetch: timeoutFetch },
});

export const hasSupabase = Boolean(url && anon);
