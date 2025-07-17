"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { funProjects } from "@/data/works";

export default function FunProjectDetails({ slug }) {
  // Find the project based on the slug
  const project = funProjects.find(item => item.slug === slug);

  if (!project) {
    return (
      <section className="fun-project-details-section tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h1>Project Not Found</h1>
                <p>The project you're looking for doesn't exist.</p>
                <Link href="/works" className="tmp-btn hover-icon-reverse radius-round btn-border btn-md">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Back to Works</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-left" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Function to render project content from data
  const renderProjectContent = () => {
    if (!project.detailedContent) {
      return (
        <>
          <h2>About This Project</h2>
          <p>
            This is where you can add detailed information about your {project.title.toLowerCase()}. 
            You can include information about:
          </p>
          <ul>
            <li>What inspired you to create this project</li>
            <li>The technologies and tools you used</li>
            <li>Challenges you faced and how you overcame them</li>
            <li>What you learned from this project</li>
            <li>Future improvements or plans</li>
          </ul>
        </>
      );
    }

    const content = project.detailedContent;
    
    return (
      <>
        {content.about && (
          <>
            <h2>About This Project</h2>
            <p>{content.about}</p>
          </>
        )}

        {content.howItWorks && (
          <>
            <h3>How It Works</h3>
            <p>{content.howItWorks}</p>
          </>
        )}

        {content.features && content.features.length > 0 && (
          <>
            <h3>Key Features</h3>
            <ul>
              {content.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {content.technicalDetails && (
          <>
            <h3>Technical Details</h3>
            <p>{content.technicalDetails}</p>
          </>
        )}

        {content.whatILearned && (
          <>
            <h3>What I Learned</h3>
            <p>{content.whatILearned}</p>
          </>
        )}

        {content.challenges && (
          <>
            <h3>Challenges Faced</h3>
            <p>{content.challenges}</p>
          </>
        )}

        {content.futurePlans && (
          <>
            <h3>Future Plans</h3>
            <p>{content.futurePlans}</p>
          </>
        )}
      </>
    );
  };

  return (
    <section className="fun-project-details-section tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Back Button */}
            <div className="back-button mb-4">
              <Link href="/works" className="tmp-btn hover-icon-reverse radius-round btn-border btn-sm">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Back to Works</span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-regular fa-arrow-left" />
                  </span>
                </span>
              </Link>
            </div>

            {/* Project Hero */}
            <div className="project-hero mb-5">
              <div className="project-hero-image">
                <Image
                  className="w-100 rounded"
                  alt={project.title}
                  src={project.imageSrc}
                  width={1200}
                  height={600}
                />
              </div>
              <div className="project-hero-content mt-4">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-subtitle">{project.description}</p>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-content">
                    {renderProjectContent()}

                    {project.liveUrl && (
                      <div className="project-links mt-4">
                        <h3>Project Links</h3>
                        <Link 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md me-3"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">View Live Project</span>
                            <span className="btn-icon">
                              <i className="fa-solid fa-external-link-alt" />
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-sidebar">
                    <div className="project-info-card">
                      <h3>Project Information</h3>
                      <div className="info-item">
                        <strong>Category:</strong> Fun Project
                      </div>
                      <div className="info-item">
                        <strong>Date:</strong> {new Date().toLocaleDateString()}
                      </div>
                      {project.tags && (
                        <div className="info-item">
                          <strong>Technologies:</strong>
                          <div className="tech-tags">
                            {project.tags.map((tag, index) => (
                              <span key={index} className="tech-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 