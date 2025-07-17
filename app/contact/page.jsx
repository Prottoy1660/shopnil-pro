import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Contact || Shopnil Mahamud",
  description:
    "Shopnil Mahamud",
};
export default function page() {
  return (
    <>
      <Header1 />
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
      <Contact />
      <Footer2 />
      <Copyright />
    </>
  );
}
