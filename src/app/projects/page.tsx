import { getSiteData } from "@/lib/data";
import { ProjectsView } from "@/components/projects-view";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const data = await getSiteData();
  return (
    <ProjectsView
      projects={data.projects}
      ok={data.ok}
      email={data.profile?.email}
    />
  );
}
