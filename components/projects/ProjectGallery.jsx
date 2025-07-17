"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectGallery.module.css';

const ProjectGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex when selectedImage changes
  useEffect(() => {
    if (selectedImage) {
      const index = images.findIndex(img => img.src === selectedImage.src);
      setCurrentIndex(index);
    }
  }, [selectedImage, images]);

  if (!images || images.length === 0) return null;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') {
        handleNext(e);
      } else if (e.key === 'ArrowLeft') {
        handlePrevious(e);
      } else if (e.key === 'Escape') {
        handleClose();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Project Gallery</h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleImageClick(image)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <div className={styles.overlay}>
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClose}>
              <i className="fas fa-times"></i>
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || 'Selected image'}
                width={1200}
                height={800}
                className={styles.modalImage}
              />
              <div className={styles.navigationButtons}>
                <button className={styles.navButton} onClick={handlePrevious}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className={styles.navButton} onClick={handleNext}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery; 