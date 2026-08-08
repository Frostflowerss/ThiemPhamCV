import { getSiteData } from "@/lib/data";
import { HomeView } from "@/components/home-view";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getSiteData();
  return <HomeView data={data} />;
}
