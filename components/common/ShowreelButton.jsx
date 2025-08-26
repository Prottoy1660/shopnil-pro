"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import VideoModal from "./VideoModal";

export default function ShowreelButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  
  // Replace this with your actual YouTube video URL
  const videoUrl = ""; // Example URL - replace with actual showreel

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      // Only update if scroll position changed significantly
      if (Math.abs(scrollY - lastScrollY.current) > 5) {
        const offset = 100; // Show button after scrolling 100px
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.min(scrollY / Math.max(documentHeight, 1), 1);
        
        setIsVisible(scrollY > offset);
        setScrollProgress(progress);
        lastScrollY.current = scrollY;
      }
    });
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const handleClick = () => {
    setIsVideoModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <div 
        className={`showreel-button ${isVisible ? 'showreel-visible' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          '--gradient-opacity': scrollProgress,
          '--gradient-intensity': scrollProgress * 0.8 + 0.2 // Min 0.2, max 1.0
        }}
      >
        <div className="showreel-inner">
          <div className="showreel-icon">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8 5v14l11-7z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="showreel-text">
            <span className="showreel-label">Showreel</span>
          </div>
        </div>
        
        {/* Glossy overlay effect */}
        <div className="showreel-gloss"></div>
        
        {/* Animated background particles */}
        <div className="showreel-particles">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        videoUrl={videoUrl}
      />
    </>
  );
}