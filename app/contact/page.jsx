import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";
import { getSettings } from "@/sanity/lib/queries";

export const metadata = {
  title:
    "Contact || Shopnil Mahamud",
  description:
    "Shopnil Mahamud",
};

export const revalidate = 60;

export default async function page() {
  const settings = await getSettings();
  return (
    <>
      <Header1 settings={settings} />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Contact</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact settings={settings} />
      <Footer2 settings={settings} />
      <Copyright settings={settings} />
    </>
  );
}
