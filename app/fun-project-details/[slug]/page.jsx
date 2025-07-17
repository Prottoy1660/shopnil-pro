import React from "react";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
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
        <Footer2 />
        <Copyright />
      </div>
    </>
  );
}