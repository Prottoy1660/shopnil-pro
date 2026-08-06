"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import styles from "./ProjectsShowcase.module.css";

export default function ProjectsShowcase({ currentProjectId, currentProjectSlug, projects = [] }) {
  const [displayedProjectSlug, setDisplayedProjectSlug] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const imageRef = useRef(null);

  // Filter projects that should be shown (if needed) or use all projects
  // Assuming 'projects' passed are already sorted and filtered if necessary
  const displayProjects = projects.length > 0 ? projects : [];

  // Find current project index
  const currentProjectIndex = displayProjects.findIndex(p => 
    (p.slug === currentProjectSlug) || (p.slug?.current === currentProjectSlug)
  );
  
  // Get adjacent projects based on index
  const getAdjacentProjects = () => {
    if (displayProjects.length === 0) return { previous: null, next: null };
    
    // If current project not found in list, start from 0
    const currentIndex = currentProjectIndex !== -1 ? currentProjectIndex : 0;
    
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : displayProjects.length - 1;
    const nextIndex = currentIndex < displayProjects.length - 1 ? currentIndex + 1 : 0;
    
    return {
      previous: displayProjects[prevIndex],
      next: displayProjects[nextIndex]
    };
  };
  
  const { previous: prevProject, next: nextProject } = getAdjacentProjects();
  
  // Initialize with next project
  useEffect(() => {
    if (!displayedProjectSlug && nextProject) {
      setDisplayedProjectSlug(nextProject.slug?.current || nextProject.slug);
    }
  }, [nextProject, displayedProjectSlug]);

  const handlePrevious = () => {
    const prevSlug = prevProject?.slug?.current || prevProject?.slug;
    if (!isAnimating && prevProject && displayedProjectSlug !== prevSlug) {
      setSlideDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayedProjectSlug(prevSlug);
        setTimeout(() => setIsAnimating(false), 100);
      }, 400);
    }
  };

  const handleNext = () => {
    const nextSlug = nextProject?.slug?.current || nextProject?.slug;
    if (!isAnimating && nextProject && displayedProjectSlug !== nextSlug) {
      setSlideDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayedProjectSlug(nextSlug);
        setTimeout(() => setIsAnimating(false), 100);
      }, 400);
    }
  };

  // Get the currently displayed project
  const displayedProject = displayProjects.find(p => (p.slug?.current || p.slug) === displayedProjectSlug);

  // Helper to get image URL safely
  const getImageUrl = (image) => {
    if (!image) return "";
    try {
      return urlForImage(image).url();
    } catch (e) {
      return "";
    }
  };

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
        // console.log('Could not extract color from image:', error);
        setBackgroundColor('transparent');
      }
    }
  };

  // Reset background color when project changes
  useEffect(() => {
    setBackgroundColor('transparent');
  }, [displayedProjectSlug]);

  if (!displayedProject) return null;

  const displayedProjectSlugValue = displayedProject.slug?.current || displayedProject.slug;
  const prevProjectSlugValue = prevProject?.slug?.current || prevProject?.slug;
  const nextProjectSlugValue = nextProject?.slug?.current || nextProject?.slug;

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
                    src={getImageUrl(displayedProject.image)}
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
                    <span>Project {displayedProject.allOrder || String(displayProjects.indexOf(displayedProject) + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{displayedProject.title}</h3>
                </div>
                
                <p className={styles.projectDescription}>
                  {displayedProject.description || displayedProject.summary?.substring(0, 150) + "..."}
                </p>
                
                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <i className="fa-solid fa-layer-group"></i>
                    <span>{displayedProject.categories?.[0]}</span>
                  </div>
                  {displayedProject.details && (
                    <div className={styles.metaItem}>
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>
                        {displayedProject.details.find(d => d.label?.includes("Duration"))?.value || "2024"}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={styles.projectActions}>
                  <Link 
                    href={`/project-details/${displayedProjectSlugValue}`}
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
              className={`${styles.navButton} ${styles.prevButton} ${displayedProjectSlugValue === prevProjectSlugValue ? styles.active : ''}`}
              onClick={handlePrevious}
              disabled={!prevProject || displayedProjectSlugValue === prevProjectSlugValue}
              title={`Project ${prevProject?.title || 'No previous project'}`}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <div className={styles.navTooltip}>
                <span className={styles.tooltipLabel}>
                  Project {prevProject?.allOrder || (prevProject ? String(displayProjects.indexOf(prevProject) + 1).padStart(2, '0') : '')}
                </span>
                <span className={styles.tooltipTitle}>{prevProject?.title}</span>
              </div>
            </button>

            <div className={styles.navigationInfo}>
              <div className={styles.navDots}>
                <span className={`${styles.dot} ${displayedProjectSlugValue === prevProjectSlugValue ? styles.active : ''}`}></span>
                <span className={`${styles.dot} ${displayedProjectSlugValue === nextProjectSlugValue ? styles.active : ''}`}></span>
              </div>
              <div className={styles.projectCounter}>
                <span className={styles.currentCount}>
                  {String(displayedProject.allOrder || displayProjects.indexOf(displayedProject) + 1).padStart(2, '0')}
                </span>
                <span className={styles.totalCount}>/ {String(displayProjects.length).padStart(2, '0')}</span>
              </div>
            </div>

            <button 
              className={`${styles.navButton} ${styles.nextButton} ${displayedProjectSlugValue === nextProjectSlugValue ? styles.active : ''}`}
              onClick={handleNext}
              disabled={!nextProject || displayedProjectSlugValue === nextProjectSlugValue}
              title={`Project ${nextProject?.title || 'No next project'}`}
            >
              <i className="fa-solid fa-chevron-right"></i>
              <div className={styles.navTooltip}>
                <span className={styles.tooltipLabel}>
                  Project {nextProject?.allOrder || (nextProject ? String(displayProjects.indexOf(nextProject) + 1).padStart(2, '0') : '')}
                </span>
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