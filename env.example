"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

type Table =
  | "profile"
  | "projects"
  | "experiences"
  | "education"
  | "skills"
  | "gallery";

async function assertAuth() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!verifyToken(token)) throw new Error("Unauthorized");
}

export interface ActionResult {
  ok: boolean;
  error?: string;
}

function revalidateAll() {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/cv");
  revalidatePath("/pntarch");
}

/** Upsert one row into a table. `payload` comes from the admin form. */
export async function saveRow(
  table: Table,
  payload: Record<string, unknown>
): Promise<ActionResult> {
  try {
    await assertAuth();
    const supabase = createAdminClient();
    const clean = { ...payload };
    // Empty id => insert
    if (!clean.id) delete clean.id;
    const { error } = await supabase.from(table).upsert(clean);
    if (error) return { ok: false, error: error.message };
    revalidateAll();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

export async function deleteRow(table: Table, id: string): Promise<ActionResult> {
  try {
    await assertAuth();
    const supabase = createAdminClient();
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) return { ok: false, error: error.message };
    revalidateAll();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Unknown error" };
  }
}
