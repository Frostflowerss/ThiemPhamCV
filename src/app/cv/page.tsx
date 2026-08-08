import { getSiteData } from "@/lib/data";
import { CvView } from "@/components/cv-view";

export const dynamic = "force-dynamic";

export default async function CvPage() {
  const data = await getSiteData();
  return <CvView data={data} />;
}
