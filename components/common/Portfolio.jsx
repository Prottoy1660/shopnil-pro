"use client";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { useEffect, useState } from "react";

export default function Portofolio({ isLight = false }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(portfolioItems);
  const categories = [
    "All",
    "Healthcare",
    "Non-profit",
    "Fintech",
  ];
  useEffect(() => {
    if (activeCategory == "All") {
      setFiltered(
        portfolioItems
          .filter(item => item.showInAll === true && typeof item.allOrder === 'number')
          .sort((a, b) => a.allOrder - b.allOrder)
          .slice(0, 6)
      );
    } else {
      setFiltered(
        portfolioItems.filter((elm) => elm.categories.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  return (
    <section
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Latest Portfolio</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Expert in fintech, healthcare, eCommerce, and marketing domains.<br />
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            As a UI/UX designer, I transform complex problems into elegant, user-centered solutions. 
            Each project showcases my passion for creating intuitive interfaces and memorable digital experiences 
            that connect users with brands.
          </p>
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
                {filtered.map((item) => (
                  <div className="col-lg-6" key={item.id}>
                    <div
                      className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                            href={`/project-details${isLight ? "-white" : ""}/${
                              item.slug
                            }`}
                          >
                            <Image
                              className="w-100"
                              alt="Thumbnail"
                              src={item.imageSrc}
                              width={item.width}
                              height={item.height}
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
                              {item.tags.map((tag, index) => (
                                <li key={index}>
                                  <a href="#" className={`tag-item ${item.tagFontSize || ''} ${item.tagFontWeight || ''}`}>
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <Link
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                          href={`/project-details${isLight ? "-white" : ""}/${
                            item.slug
                          }`}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">View design</span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-5">
          <Link
            href="/works"
            className="tmp-btn hover-icon-reverse radius-round btn-border btn-lg"
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">View All Projects</span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
