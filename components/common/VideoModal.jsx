"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [showYouTubeUI, setShowYouTubeUI] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      
      // Focus on modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    // Pause video when modal closes
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=0&fs=1&iv_load_policy=3&cc_load_policy=0&playsinline=1&enablejsapi=1` : null;

  return (
    <div className="video-modal-overlay" role="dialog" aria-modal="true" aria-label="Video Player">
      <div 
        className="video-modal-container"
        ref={modalRef}
        tabIndex={-1}
      >
        <button 
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
          type="button"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18 6L6 18M6 6l12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <button 
          className="video-ui-toggle"
          onClick={() => setShowYouTubeUI(!showYouTubeUI)}
          aria-label={showYouTubeUI ? "Hide video info" : "Show video info"}
          type="button"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {showYouTubeUI ? (
              <path 
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              <path 
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            )}
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
        
        <div className="video-modal-content">
          {embedUrl ? (
            <>
              <iframe
                ref={videoRef}
                src={embedUrl}
                title="Showreel Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="video-iframe"
              />
              
              {/* YouTube UI Overlays - Hidden by default */}
              <div className={`youtube-ui-overlays ${showYouTubeUI ? 'youtube-ui-visible' : 'youtube-ui-hidden'}`}>
                <div className="youtube-title-overlay"></div>
                <div className="youtube-channel-overlay"></div>
                <div className="youtube-controls-overlay"></div>
              </div>
            </>
          ) : (
            <div className="video-error">
              <p>Unable to load video. Please check the video URL.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}