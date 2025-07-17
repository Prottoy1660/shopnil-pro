import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "About || Shopnil Mahamud",
  description: "Shopnil Mahamud",
};

export default function page() {
  return (
    <>
      <div className="about inner">
        <Header1 />
        {/* Blank content area */}
        <div style={{ minHeight: "60vh" }}></div>
        <Footer2 />
      </div>
    </>
  );
}
