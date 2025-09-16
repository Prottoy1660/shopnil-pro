import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, websiteProjects, funProjects } from "@/data/works";

export default function WorksSection() {
  return (
    <div className="works-section">
      {/* Hero Section */}
      <section className="works-hero tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="works-hero-content text-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">
                  Case <span className="text-gradient">Studies</span>
                </h2>
                <p className="section-subtitle">
                  In-depth analysis of complex projects and their solutions
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {caseStudies.map((item) => (
              <div key={item.id} className="col-lg-6">
                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link
                        className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                        href={`/project-details/${item.slug}`}
                      >
                        <Image
                          className="w-100"
                          alt={item.title}
                          src={item.imageSrc}
                          width={item.width}
                          height={item.height}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link href={`/project-details/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <div className="tag-items">
                        <ul>
                          {item.tags.map((tag, index) => (
                            <li key={index}>
                              <a href="#" className="tag-item">
                                {tag}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                      href={`/project-details/${item.slug}`}
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
      </section>

      {/* Website Projects Section */}
      <section className="website-projects-section tmp-section-gap" style={{ display: 'none' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">
                  Website <span className="text-gradient">Projects</span>
                </h2>
                <p className="section-subtitle">
                  Live websites you can visit and explore
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {websiteProjects.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link
                        className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="w-100"
                          alt={item.title}
                          src={item.imageSrc}
                          width={item.width}
                          height={item.height}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link 
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Visit site</span>
                        <span className="btn-icon">
                          <i className="fa-solid fa-external-link-alt" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-solid fa-external-link-alt" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Projects Section */}
      <section className="fun-projects-section tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">
                  Fun <span className="text-gradient">Projects</span>
                </h2>
                <p className="section-subtitle">
                  Experimental projects and creative explorations
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {funProjects.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in">
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link
                        className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                        href={`/fun-project-details/${item.slug}`}
                      >
                        <Image
                          className="w-100"
                          alt={item.title}
                          src={item.imageSrc}
                          width={item.width}
                          height={item.height}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap fun-project-content">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link href={`/fun-project-details/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="fun-project-description">{item.description}</p>
                    </div>
                    <div className="content-right">
                      <Link
                        className="tmp-btn hover-icon-reverse radius-round btn-border btn-sm"
                        href={item.liveUrl ? item.liveUrl : `/fun-project-details/${item.slug}`}
                        {...(item.liveUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View details</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}