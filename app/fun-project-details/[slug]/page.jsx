import React from "react";
import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import FunProjectDetails from "@/components/fun-projects/FunProjectDetails";

export const metadata = {
  title: "Fun Project Details || Shopnil Mahamud",
  description: "Detailed information about fun projects and creative explorations - Shopnil Mahamud",
};

export default function FunProjectDetailsPage({ params }) {
  return (
    <>
      <div className="fun-project-details inner">
        <Header1 />
        <FunProjectDetails slug={params.slug} />
        <Footer3 />
        <Copyright />
      </div>
    </>
  );
} 