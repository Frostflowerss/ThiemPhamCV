import { supabase, hasSupabase } from "./supabase/client";
import type {
  Profile,
  Project,
  Experience,
  Education,
  Skill,
  GalleryImage,
} from "./types";

/** Returned when Supabase env is missing OR a query errors. */
export interface SiteData {
  ok: boolean;
  profile: Profile | null;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

export async function getSiteData(): Promise<SiteData> {
  if (!hasSupabase) {
    return { ok: false, profile: null, projects: [], experiences: [], education: [], skills: [] };
  }
  try {
    const [p, pr, ex, ed, sk] = await Promise.all([
      supabase.from("profile").select("*").limit(1).maybeSingle(),
      supabase.from("projects").select("*").order("sort", { ascending: true }),
      supabase.from("experiences").select("*").order("sort", { ascending: true }),
      supabase.from("education").select("*").order("sort", { ascending: true }),
      supabase.from("skills").select("*").order("sort", { ascending: true }),
    ]);
    if (p.error || pr.error || ex.error || ed.error || sk.error) {
      return { ok: false, profile: null, projects: [], experiences: [], education: [], skills: [] };
    }
    return {
      ok: true,
      profile: (p.data as Profile) ?? null,
      projects: (pr.data as Project[]) ?? [],
      experiences: (ex.data as Experience[]) ?? [],
      education: (ed.data as Education[]) ?? [],
      skills: (sk.data as Skill[]) ?? [],
    };
  } catch {
    return { ok: false, profile: null, projects: [], experiences: [], education: [], skills: [] };
  }
}

export async function getProject(
  slug: string
): Promise<{ project: Project | null; gallery: GalleryImage[] }> {
  if (!hasSupabase) return { project: null, gallery: [] };
  try {
    const { data: project } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (!project) return { project: null, gallery: [] };
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .eq("project_id", (project as Project).id)
      .order("sort", { ascending: true });
    return {
      project: project as Project,
      gallery: (gallery as GalleryImage[]) ?? [],
    };
  } catch {
    return { project: null, gallery: [] };
  }
}
