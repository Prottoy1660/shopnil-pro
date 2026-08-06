import React from "react";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import WorksSection from "@/components/works/WorksSection";
import { getProjects, getSettings } from "@/sanity/lib/queries";

export const metadata = {
  title: "Works || Shopnil Mahamud",
  description: "Explore my case studies, website projects, and fun projects - Shopnil Mahamud",
};

export const revalidate = 60;

export default async function WorksPage() {
  const projects = await getProjects();
  const settings = await getSettings();

  return (
    <>
      <div className="works inner">
        <Header1 settings={settings} />
        <WorksSection projects={projects} />
        <Footer2 settings={settings} />
        <Copyright settings={settings} />
      </div>
    </>
  );
}