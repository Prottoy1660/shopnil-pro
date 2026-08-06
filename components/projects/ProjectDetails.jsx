"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectsShowcase from "./ProjectsShowcase";
import FigmaViewer from "./FigmaViewer";
import ProjectGallery from "./ProjectGallery";
import VideoModal from "../common/VideoModal";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export default function ProjectDetails({ portfolioItem, projects }) {
  // State for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // Use the figmaUrl directly from the portfolio item
  const figmaUrl = portfolioItem.figmaUrl;

  // Use the project-specific gallery images from the portfolio item data
  const galleryImages = portfolioItem.galleryImages || [
    {
      src: portfolioItem.image ? urlForImage(portfolioItem.image).url() : "",
      alt: `${portfolioItem.title} - Main Image`
    }
  ];

  // Video modal handlers
  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
  };

  const components = {
    block: {
      normal: ({children}) => <p className="docs">{children}</p>,
      h3: ({children}) => <h3 className="mini-title">{children}</h3>,
      h4: ({children}) => <h4 className="check-box-item">{children}</h4>,
    },
    marks: {
      strong: ({children}) => <strong>{children}</strong>,
      em: ({children}) => <em>{children}</em>,
    }
  };

  // Render a section with optional image
  const renderSection = (section) => {
    const { title, content, image, imagePosition, images, videoUrl, videoPosition, titleFontSize, titleFontWeight, contentFontSize, contentLineHeight } = section;

    const renderImages = (imgs) => (
      <div className="section-images">
        {imgs.map((img, idx) => (
          <div className="section-image" key={idx}>
            <img src={urlForImage(img).url()} alt={`${title} illustration ${idx + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    );

    const renderVideo = (videoUrl) => {
      // Extract YouTube video ID for thumbnail
      const getYouTubeVideoId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      const videoId = getYouTubeVideoId(videoUrl);
      const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

      return (
        <div className="video-thumbnail" onClick={() => openVideoModal(videoUrl)}>
          {thumbnailUrl && (
            <img 
              src={thumbnailUrl} 
              alt="Video thumbnail" 
              className="img-fluid" 
            />
          )}
          <div className="play-button"></div>
        </div>
      );
    };

    // Determine title class based on content
    const titleClass = title && (
      title.includes("Previous process:") ||
      title.includes("New process:") ||
      title.includes("Challenge 1: Fitting 7 Pages into 1 Screen") ||
      title.includes("Challenge 2: Fitting PDF Viewer on top of that") ||
      title.includes("Challenge 3: Designing the dark mode because some of them works at night shift")
    ) ? "mini-title small" : "mini-title";

    // Build title classes with font properties
    const titleClasses = [
      titleClass,
      titleFontSize || '',
      titleFontWeight || ''
    ].filter(Boolean).join(' ');

    // Add inline styles for smaller title
    const titleStyle = title && (title.includes("Previous process:") || title.includes("New process:")) ? {
      fontSize: '18px',
      lineHeight: '24px',
      marginBottom: '15px',
      fontWeight: '600'
    } : {};

    return (
      <div className="section-block">
        {title && <h3 className={titleClasses} style={titleStyle}>{title}</h3>}
        {videoPosition === 'before' && videoUrl && renderVideo(videoUrl)}
        {imagePosition === 'before' && (images ? renderImages(images) : image && (
          <div className="section-image">
            <img src={urlForImage(image).url()} alt={`${title} illustration`} className="img-fluid" />
          </div>
        ))}
        
        {content && <PortableText value={content} components={components} />}
        
        {videoPosition === 'after' && videoUrl && renderVideo(videoUrl)}
        {imagePosition === 'after' && (images ? renderImages(images) : image && (
          <div className="section-image">
            <img src={urlForImage(image).url()} alt={`${title} illustration`} className="img-fluid" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap" style={{ marginBottom: '30px' }}>
              <Image
                alt="thumbnail"
                src={portfolioItem.image ? urlForImage(portfolioItem.image).url() : ""}
                width={1290}
                height={560}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className={`title ${portfolioItem.titleFontSize || ''} ${portfolioItem.titleFontWeight || ''}`}>
                {portfolioItem.title}
              </h2>
              
              {/* Project Summary/Introduction */}
              {portfolioItem.summary && (
                <div className="project-summary">
                  <p className={`summary-text ${portfolioItem.descriptionFontSize || ''} ${portfolioItem.descriptionLineHeight || ''}`}>
                    {portfolioItem.summary}
                  </p>
                </div>
              )}
              
              {/* Render sections based on project configuration */}
              {portfolioItem.sections?.map((section, index) => (
                <React.Fragment key={index}>
                  {renderSection(section)}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-box">
                  <div className="project-details-info">
                    {portfolioItem.details?.map((detail, index) => (
                      <div key={index} className="project-details-info-item">
                        <span className="project-details-info-title">{detail.label}</span>
                        <span className="project-details-info-text">
                          {Array.isArray(detail.value)
                            ? detail.value.join(', ')
                            : detail.value || detail.valueString}
                        </span>
                      </div>
                    )) || (
                      <>
                        <div className="project-details-info-item">
                          <span className="project-details-info-title">Author</span>
                          <span className="project-details-info-text">{portfolioItem.author}</span>
                        </div>
                        <div className="project-details-info-item">
                          <span className="project-details-info-title">Date</span>
                          <span className="project-details-info-text">{portfolioItem.date}</span>
                        </div>
                        <div className="project-details-info-item">
                          <span className="project-details-info-title">Tags</span>
                          <span className="project-details-info-text">
                            {portfolioItem.tags?.map((tag, index) => (
                              <span key={index}>
                                {tag}
                                {index < portfolioItem.tags.length - 1 && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  {figmaUrl && (
                    <FigmaViewer figmaUrl={figmaUrl} />
                  )}
                  {portfolioItem.liveUrl && (
                    <a href={portfolioItem.liveUrl} target="_blank" rel="noopener noreferrer" className="live-view-btn">
                      <i className="fa-solid fa-globe"></i>
                      <span>View Live Project</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            {/* Projects Showcase Section */}
            <ProjectsShowcase currentProjectId={portfolioItem.id} currentProjectSlug={portfolioItem.slug?.current || portfolioItem.slug} projects={projects} />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={closeVideoModal} 
        videoUrl={currentVideoUrl} 
      />
    </div>
  );
}
