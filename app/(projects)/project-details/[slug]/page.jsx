import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { getProject, getProjects, getSettings } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Project Details || Shopnil Mahamud",
  description: "Shopnil Mahamud",
};

export const revalidate = 60;

export default async function page({ params }) {
  const { slug } = await params;
  const portfolioItem = await getProject(slug);
  const projects = await getProjects();
  const settings = await getSettings();

  if (!portfolioItem) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header1 settings={settings} />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">{portfolioItem.title}</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">
                    Project Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectDetails portfolioItem={portfolioItem} projects={projects} />
      <Footer2 settings={settings} />
      <Copyright settings={settings} />
    </>
  );
}
