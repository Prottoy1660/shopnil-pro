import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Project || Shopnil Mahamud",
  description: "Shopnil Mahamud",
};

export default function page() {
  return (
    <>
      <div className="project inner">
        <Header1 />
        {/* Blank content area */}
        <div style={{ minHeight: "60vh" }}></div>
        <Footer3 />
        <Copyright />
      </div>
    </>
  );
}
