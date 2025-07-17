"use client";

import React, { useState, useEffect } from 'react';
import styles from './FigmaViewer.module.css';

const FigmaViewer = ({ figmaUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!figmaUrl) return null;

  return (
    <>
      <button 
        className="live-view-btn"
        onClick={() => setIsOpen(true)}
        aria-label="View Figma Design"
      >
        <i className="fa-brands fa-figma"></i>
        <span>View Figma Design</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      {isOpen && (
        <div 
          className={styles.modalOverlay} 
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Figma Design Viewer"
        >
          <div 
            className={styles.modalContent} 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className={styles.closeButton} 
              onClick={() => setIsOpen(false)}
              aria-label="Close Figma viewer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className={styles.figmaContainer}>
              {isLoading && (
                <div className={styles.loadingOverlay}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading Figma design...</p>
                </div>
              )}
              <iframe
                src={figmaUrl}
                className={styles.figmaEmbed}
                allowFullScreen
                title="Project Figma Design"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FigmaViewer;