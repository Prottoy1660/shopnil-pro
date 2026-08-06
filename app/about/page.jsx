import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import React from "react";
import { getSettings } from "@/sanity/lib/queries";

export const metadata = {
  title: "About || Shopnil Mahamud",
  description: "Shopnil Mahamud",
};

export const revalidate = 60;

export default async function page() {
  const settings = await getSettings();
  return (
    <>
      <div className="about inner">
        <Header1 settings={settings} />
        {/* Blank content area */}
        <div style={{ minHeight: "60vh" }}></div>
        <Footer2 settings={settings} />
      </div>
    </>
  );
}
