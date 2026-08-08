import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { getSiteData, getProject } from "@/lib/data";
import { supabase } from "@/lib/supabase/client";
import type { Project } from "@/lib/types";
import { AdminDashboard } from "@/components/admin/dashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const store = await cookies();
  if (!verifyToken(store.get(COOKIE_NAME)?.value)) {
    redirect("/pntarch/login");
  }

  const data = await getSiteData();

  return (
    <AdminDashboard
      profile={data.profile}
      projects={data.projects}
      experiences={data.experiences}
      education={data.education}
      skills={data.skills}
    />
  );
}
