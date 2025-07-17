"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { slugify } from "@/utils/slugify";
import styles from "./ProjectsShowcase.module.css";

export default function ProjectsShowcase({ currentProjectId }) {
  const [displayedProjectId, setDisplayedProjectId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const imageRef = useRef(null);

  // Find current project index in the full portfolio
  const currentProjectIndex = portfolioItems.findIndex(project => project.id === currentProjectId);
  
  // Get adjacent projects based on project numbers (IDs)
  const getAdjacentProjects = () => {
    const currentId = currentProjectId;
    const prevId = currentId > 1 ? currentId - 1 : portfolioItems.length;
    const nextId = currentId < portfolioItems.length ? currentId + 1 : 1;
    
    return {
      previous: portfolioItems.find(project => project.id === prevId),
      next: portfolioItems.find(project => project.id === nextId)
    };
  };
  
  const { previous: prevProject, next: nextProject } = getAdjacentProjects();
  
  // Initialize with next project
  useEffect(() => {
    if (!displayedProjectId && nextProject) {
      setDisplayedProjectId(nextProject.id);
    }
  }, [nextProject, displayedProjectId]);

  const handlePrevious = () => {
    if (!isAnimating && prevProject && displayedProjectId !== prevProject.id) {
      setSlideDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayedProjectId(prevProject.id);
        setTimeout(() => setIsAnimating(false), 100);
      }, 400);
    }
  };

  const handleNext = () => {
    if (!isAnimating && nextProject && displayedProjectId !== nextProject.id) {
      setSlideDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayedProjectId(nextProject.id);
        setTimeout(() => setIsAnimating(false), 100);
      }, 400);
    }
  };

  // Get the currently displayed project
  const displayedProject = portfolioItems.find(project => project.id === displayedProjectId);

  // Function to extract dominant color from image
  const extractDominantColor = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Sample pixels from corners and edges to get background color
    const samplePoints = [
      [0, 0], [canvas.width - 1, 0], [0, canvas.height - 1], [canvas.width - 1, canvas.height - 1],
      [Math.floor(canvas.width / 2), 0], [Math.floor(canvas.width / 2), canvas.height - 1],
      [0, Math.floor(canvas.height / 2)], [canvas.width - 1, Math.floor(canvas.height / 2)]
    ];
    
    const colorCounts = {};
    
    samplePoints.forEach(([x, y]) => {
      const index = (y * canvas.width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const color = `rgb(${r}, ${g}, ${b})`;
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    });
    
    // Find the most common color
    const dominantColor = Object.keys(colorCounts).reduce((a, b) => 
      colorCounts[a] > colorCounts[b] ? a : b
    );
    
    return dominantColor;
  };

  // Handle image load to extract background color
  const handleImageLoad = () => {
    if (imageRef.current) {
      try {
        const dominantColor = extractDominantColor(imageRef.current);
        setBackgroundColor(dominantColor);
      } catch (error) {
        console.log('Could not extract color from image:', error);
        setBackgroundColor('transparent');
      }
    }
  };

  // Reset background color when project changes
  useEffect(() => {
    setBackgroundColor('transparent');
  }, [displayedProjectId]);

  if (!displayedProject) return null;

  return (
    <div className={`${styles.showcaseContainer} tmp-section-gap`}>
      <div className="container">
        {/* Modern Header */}
        <div className={styles.showcaseHeader}>
          <div className={styles.headerContent}>
            <span className={styles.headerBadge}>
              <i className="fa-solid fa-sparkles"></i>
              Discover More
            </span>
            <h2 className={styles.headerTitle}>Explore Related Projects</h2>
            <p className={styles.headerDescription}>
              Continue your journey through my portfolio with these carefully curated projects
            </p>
          </div>
        </div>

        {/* Main Showcase */}
        <div className={styles.showcaseMain}>
          {/* Project Card */}
          <div className={`${styles.projectCard} ${isAnimating ? styles[`animating-${slideDirection}`] : ''}`}>
            <div className={styles.cardInner}>
              {/* Project Image */}
              <div className={styles.projectImageWrapper}>
                <div 
                  className={styles.imageContainer}
                  style={{ backgroundColor }}
                >
                  <Image
                    ref={imageRef}
                    src={displayedProject.imageSrc}
                    alt={displayedProject.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                    onLoad={handleImageLoad}
                    crossOrigin="anonymous"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <div className={styles.projectTags}>
                        {displayedProject.tags?.slice(0, 3).map((tag, index) => (
                          <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.contentHeader}>
                  <div className={styles.projectBadge}>
                    <i className="fa-solid fa-star"></i>
                    <span>Project {displayedProject?.id}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{displayedProject.title}</h3>
                </div>
                
                <p className={styles.projectDescription}>{displayedProject.description}</p>
                
                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <i className="fa-solid fa-layer-group"></i>
                    <span>{displayedProject.categories?.[0]}</span>
                  </div>
                  {displayedProject.details && (
                    <div className={styles.metaItem}>
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>
                        {displayedProject.details.find(d => d.label.includes("Duration"))?.value || "2024"}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={styles.projectActions}>
                  <Link 
                    href={`/project-details/${slugify(displayedProject.title)}`}
                    className={styles.primaryAction}
                  >
                    <span>Explore Details</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className={styles.navigationControls}>
            <button 
              className={`${styles.navButton} ${styles.prevButton} ${displayedProjectId === prevProject?.id ? styles.active : ''}`}
              onClick={handlePrevious}
              disabled={!prevProject || displayedProjectId === prevProject?.id}
              title={`Project ${prevProject?.id}: ${prevProject?.title || 'No previous project'}`}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <div className={styles.navTooltip}>
                <span className={styles.tooltipLabel}>Project {prevProject?.id}</span>
                <span className={styles.tooltipTitle}>{prevProject?.title}</span>
              </div>
            </button>

            <div className={styles.navigationInfo}>
              <div className={styles.navDots}>
                <span className={`${styles.dot} ${displayedProjectId === prevProject?.id ? styles.active : ''}`}></span>
                <span className={`${styles.dot} ${displayedProjectId === nextProject?.id ? styles.active : ''}`}></span>
              </div>
              <div className={styles.projectCounter}>
                <span className={styles.currentCount}>
                  {String(displayedProject?.id).padStart(2, '0')}
                </span>
                <span className={styles.totalCount}>/ {String(portfolioItems.length).padStart(2, '0')}</span>
              </div>
            </div>

            <button 
              className={`${styles.navButton} ${styles.nextButton} ${displayedProjectId === nextProject?.id ? styles.active : ''}`}
              onClick={handleNext}
              disabled={!nextProject || displayedProjectId === nextProject?.id}
              title={`Project ${nextProject?.id}: ${nextProject?.title || 'No next project'}`}
            >
              <i className="fa-solid fa-chevron-right"></i>
              <div className={styles.navTooltip}>
                <span className={styles.tooltipLabel}>Project {nextProject?.id}</span>
                <span className={styles.tooltipTitle}>{nextProject?.title}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Action */}
        <div className={styles.showcaseFooter}>
          <Link href="/works" className={styles.exploreAllBtn}>
            <div className={styles.btnContent}>
              <i className="fa-solid fa-grid-2"></i>
              <span>Explore All Projects</span>
              <i className="fa-solid fa-arrow-up-right"></i>
            </div>
            <div className={styles.btnGlow}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}