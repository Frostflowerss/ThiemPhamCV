import { notFound } from "next/navigation";
import { getProject, getSiteData } from "@/lib/data";
import { ProjectDetail } from "@/components/project-detail";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [{ project, gallery }, site] = await Promise.all([
    getProject(slug),
    getSiteData(),
  ]);
  if (!project) notFound();
  return (
    <ProjectDetail
      project={project}
      gallery={gallery}
      email={site.profile?.email}
    />
  );
}
