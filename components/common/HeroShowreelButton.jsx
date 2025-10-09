"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroShowreelButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-showreel-container">
      <Link href="/works" className="hero-showreel-button">
        <div 
          className={`hero-showreel-inner ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="hero-showreel-icon">
            <svg 
              width="28" 
              height="28" 
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
          <div className="hero-showreel-text">
            <span className="hero-showreel-label">My Work</span>
            <span className="hero-showreel-subtitle">Latest Projects</span>
          </div>
          <div className="hero-showreel-arrow">
            <i className="fa-sharp fa-regular fa-arrow-right" />
          </div>
        </div>
        
        {/* Animated background effects */}
        <div className="hero-showreel-bg-effect"></div>
        <div className="hero-showreel-particles">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
        </div>
      </Link>
    </div>
  );
}