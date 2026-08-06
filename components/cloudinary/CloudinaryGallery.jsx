"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ZoomIn,
  ZoomOut,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import styles from './CloudinaryGallery.module.css';

export default function CloudinaryGallery({ folder = '', allLabel = 'All', filterExtras = null }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [columns, setColumns] = useState(3);
  const [zoom, setZoom] = useState(1);

  const sentinelRef = useRef(null);
  const thumbnailStripRef = useRef(null);

  // Fetch photos
  const fetchPhotos = useCallback(async (isLoadMore = false) => {
    try {
      if (!isLoadMore) {
        setLoading(true);
        setError('');
      } else {
        setIsLoadingMore(true);
      }

      const params = new URLSearchParams({ folder });
      if (isLoadMore && nextCursor) params.append('cursor', nextCursor);

      const res = await fetch(`/api/cloudinary/photos?${params.toString()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch photos');

      const data = await res.json();

      setPhotos(prev => isLoadMore ? [...prev, ...(data.photos || [])] : (data.photos || []));
      setNextCursor(data.nextCursor || null);
    } catch (err) {
      console.error(err);
      if (!isLoadMore) setError('Unable to load gallery');
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  }, [folder, nextCursor]);

  // Initial load
  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder]);

  // Infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !nextCursor || isLoadingMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchPhotos(true);
      }
    }, { rootMargin: '200px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, [nextCursor, isLoadingMore, fetchPhotos]);

  // Responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Filter logic
  const tags = useMemo(() => {
    const map = new Map();
    photos.forEach(p => (p.tags || []).forEach(t => map.set(t, (map.get(t) || 0) + 1)));
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t);
  }, [photos]);

  const filteredPhotos = useMemo(() => {
    return activeTag === 'All' ? photos : photos.filter(p => (p.tags || []).includes(activeTag));
  }, [photos, activeTag]);

  // Distribute photos into columns for masonry
  const masonryColumns = useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    filteredPhotos.forEach((photo, i) => {
      cols[i % columns].push(photo);
    });
    return cols;
  }, [filteredPhotos, columns]);

  // Navigation
  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const idx = filteredPhotos.findIndex(p => p.src === selectedImage.src);
    if (idx === -1) return;
    const next = filteredPhotos[(idx + 1) % filteredPhotos.length];
    setSelectedImage(next);
    setZoom(1);
  }, [selectedImage, filteredPhotos]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const idx = filteredPhotos.findIndex(p => p.src === selectedImage.src);
    if (idx === -1) return;
    const prev = filteredPhotos[(idx - 1 + filteredPhotos.length) % filteredPhotos.length];
    setSelectedImage(prev);
    setZoom(1);
  }, [selectedImage, filteredPhotos]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, handleNext, handlePrev]);

  // Scroll thumbnail strip to active image
  useEffect(() => {
    if (selectedImage && thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.querySelector(`.${styles.active}`);
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedImage]);

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.headerRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <p className={styles.sectionSubtitle}>A collection of moments and memories</p>
        </motion.div>

        {error ? (
          <div className={styles.errorBox}>
            <p>{error}</p>
            <button className={styles.retryBtn} onClick={() => fetchPhotos()}>Try Again</button>
          </div>
        ) : (
          <>
            <motion.div
              className={styles.filterBar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <button
                className={`${styles.filterBtn} ${activeTag === 'All' ? styles.active : ''}`}
                onClick={() => setActiveTag('All')}
              >
                {allLabel}
              </button>
              {tags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
              {filterExtras}
            </motion.div>

            {loading && photos.length === 0 ? (
              <div className={styles.loader}>
                <div className={styles.spinner} />
              </div>
            ) : (
              <div className={styles.masonryGrid}>
                {masonryColumns.map((col, colIndex) => (
                  <div key={colIndex} className={styles.masonryColumn}>
                    <AnimatePresence mode='popLayout'>
                      {col.map((photo) => (
                        <motion.div
                          key={photo.src}
                          layoutId={`image-${photo.src}`}
                          className={styles.galleryItem}
                          onClick={() => setSelectedImage(photo)}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className={styles.imageWrapper}>
                            <NextImage
                              src={photo.thumb || photo.src}
                              alt={photo.alt || 'Gallery image'}
                              width={500}
                              height={500}
                              className={styles.galleryImage}
                              loading="lazy"
                              unoptimized
                            />
                            <div className={styles.overlay}>
                              <div className={styles.overlayContent}>
                                <div className={styles.overlayIcon}>
                                  <Maximize2 size={20} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            {nextCursor && <div ref={sentinelRef} className={styles.sentinel} />}
            {isLoadingMore && (
              <div className={styles.loader}>
                <div className={styles.spinner} />
              </div>
            )}
          </>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.topBar}>
                <div className={styles.imageCounter}>
                  {filteredPhotos.findIndex(p => p.src === selectedImage.src) + 1} / {filteredPhotos.length}
                </div>
                <div className={styles.topBarActions}>
                  <button className={styles.actionBtn} onClick={() => setZoom(z => z > 1 ? 1 : 2)} title={zoom > 1 ? "Zoom Out" : "Zoom In"}>
                    {zoom > 1 ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                  </button>
                  <a href={selectedImage.src} download className={styles.actionBtn} title="Download">
                    <Download size={20} />
                  </a>
                  <button className={styles.actionBtn} onClick={() => setSelectedImage(null)} title="Close">
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className={styles.modalMain} onClick={() => setSelectedImage(null)}>
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
                  <ChevronLeft size={32} />
                </button>

                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>
                  <ChevronRight size={32} />
                </button>

                <motion.div
                  className={styles.modalImageWrapper}
                  onClick={e => e.stopPropagation()}
                  layoutId={`image-${selectedImage.src}`}
                >
                  <motion.img
                    src={selectedImage.src}
                    alt={selectedImage.alt || ''}
                    className={styles.modalImage}
                    animate={{ scale: zoom }}
                    drag={zoom > 1}
                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onDoubleClick={() => setZoom(z => z > 1 ? 1 : 2)}
                  />
                </motion.div>
              </div>

              <motion.div
                className={styles.thumbnailStrip}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                ref={thumbnailStripRef}
              >
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`${styles.modalThumb} ${selectedImage.src === photo.src ? styles.active : ''}`}
                    onClick={() => { setSelectedImage(photo); setZoom(1); }}
                  >
                    <NextImage
                      src={photo.thumb || photo.src}
                      alt=""
                      fill
                      className={styles.thumbImage}
                      sizes="50px"
                      unoptimized
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}