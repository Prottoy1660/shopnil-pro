"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { urlForImage } from "@/sanity/lib/image";

function sortByPriority(list = []) {
  return [...list].sort(
    (a, b) => Number(a.allOrder ?? 999) - Number(b.allOrder ?? 999)
  );
}

function getAllTabProjects(projects = []) {
  return sortByPriority(projects.filter((p) => p.showInAll)).slice(0, 4);
}

export default function Portofolio({ isLight = false, projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(() => getAllTabProjects(projects));
  const categories = [
    "All",
    "Healthcare",
    "Non-profit",
    "Fintech",
  ];
  
  useEffect(() => {
    if (activeCategory == "All") {
      setFiltered(getAllTabProjects(projects));
    } else {
      setFiltered(
        sortByPriority(
          projects.filter((elm) => elm.categories?.includes(activeCategory))
        )
      );
    }
  }, [activeCategory, projects]);

  return (
    <section
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Case Studies</span>
          </div>

        </div>
        <div className="latest-portfolio-tabs-area">
          <nav>
            <ul className="nav nav-tabs">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="tab-content bg-blur-style-one">
            <div className="tab-pane fade show active">
              <div className="row">
                {filtered.map((item, i) => (
                  <div className="col-lg-6" key={item._id || i}>
                    <div
                      className={`latest-portfolio-card-style-two image-box-hover`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link
                            className=""
                            href={`/project-details${isLight ? "-white" : ""}/${
                              item.slug
                            }`}
                          >
                            <Image
                              className="w-100"
                              alt="Thumbnail"
                              src={item.image ? urlForImage(item.image).url() : ""}
                              width={item.width || 600}
                              height={item.height || 400}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className={`portfolio-card-title ${item.titleFontSize || ''} ${item.titleFontWeight || ''}`}>
                            <Link
                              href={`/project-details${
                                isLight ? "-white" : ""
                              }/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {item.tags?.map((tag, index) => (
                                <li key={index}>
                                  <Link href={`/project-details${
                                isLight ? "-white" : ""
                              }/${item.slug}`}>
                                    {tag}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="content-right">
                            {/* You can add something here if needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
