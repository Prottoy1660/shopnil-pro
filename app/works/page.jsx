import React from "react";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import WorksSection from "@/components/works/WorksSection";

export const metadata = {
  title: "Works || Shopnil Mahamud",
  description: "Explore my case studies, website projects, and fun projects - Shopnil Mahamud",
};

export default function WorksPage() {
  return (
    <>
      <div className="works inner">
        <Header1 />
        <WorksSection />
        <Footer2 />
        <Copyright />
      </div>
    </>
  );
}