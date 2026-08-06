"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import styles from './FlickrGallery.module.css';

export default function FlickrGallery() {
  const [photos, setPhotos] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reload = async () => {
    setLoading(true);
    setError('');
    try {
      const [photosRes, featuredRes] = await Promise.all([
        fetch('/api/flickr/photos', { cache: 'no-store' }),
        fetch('/api/flickr/featured', { cache: 'no-store' })
      ]);
      if (!photosRes.ok || !featuredRes.ok) throw new Error('Fetch failed');
      const photosJson = await photosRes.json();
      const featuredJson = await featuredRes.json();
      setPhotos(photosJson.photos || []);
      setFeatured(featuredJson.photo || null);
    } catch (e) {
      setError('Unable to load Flickr gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      const idx = photos.findIndex(p => p.src === selectedImage.src);
      if (idx >= 0) setCurrentIndex(idx);
    }
  }, [selectedImage, photos]);

  const tags = useMemo(() => {
    const map = new Map();
    photos.forEach(p => (p.tags || []).forEach(t => map.set(t, (map.get(t) || 0) + 1)));
    const list = Array.from(map.entries()).sort((a, b) => b[1] - a[1]).map(([t]) => t);
    return list.slice(0, 10);
  }, [photos]);

  const filtered = useMemo(() => {
    if (activeTag === 'All') return photos;
    return photos.filter(p => (p.tags || []).includes(activeTag));
  }, [photos, activeTag]);

  const handleNext = (e) => {
    e?.stopPropagation();
    if (!photos.length) return;
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(photos[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!photos.length) return;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(photos[prevIndex]);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, currentIndex, photos]);

  return (
    <section className="tmp-section-gap">
      <div className="container">
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>Flickr Gallery</h2>
          <p className={styles.sectionSubtitle}>Latest uploads from the profile</p>
        </div>

        {error && (
          <div className={styles.errorBox}>
            <span className={styles.errorText}>{error}</span>
            <button className={styles.retryBtn} onClick={() => {
              setActiveTag('All');
              setSelectedImage(null);
              setCurrentIndex(0);
              reload();
            }}>Retry</button>
          </div>
        )}

        <div className={styles.featuredWrapper}>
          {loading ? (
            <div className={styles.featuredSkeleton} />
          ) : featured ? (
            <div className={styles.featuredBox}>
              <div className={styles.featuredImageWrap}>
                <Image src={featured.src} alt={featured.alt || 'Featured'} fill priority className={styles.featuredImage} />
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles.filterBar}>
          <button className={`${styles.filterBtn} ${activeTag === 'All' ? styles.active : ''}`} onClick={() => setActiveTag('All')}>All</button>
          {tags.map(tag => (
            <button key={tag} className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`} onClick={() => setActiveTag(tag)}>{tag}</button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {loading && Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.cardSkeleton} />
          ))}
          {!loading && filtered.map((p, i) => (
            <div key={p.id + '-' + i} className={styles.galleryItem} onClick={() => setSelectedImage(p)}>
              <div className={styles.imageWrapper}>
                <Image src={p.thumb || p.src} alt={p.alt || ''} fill className={styles.galleryImage} />
                <div className={styles.overlay}><i className="fas fa-search-plus" /></div>
              </div>
              <div className={styles.caption}>{p.title}</div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setSelectedImage(null)}><i className="fas fa-times" /></button>
              <div className={styles.modalImageWrapper}>
                <Image src={selectedImage.src} alt={selectedImage.alt || ''} fill className={styles.modalImage} />
              </div>
              <div className={styles.modalNav}>
                <button className={styles.navBtn} onClick={handlePrev}><i className="fas fa-chevron-left" /></button>
                <button className={styles.navBtn} onClick={handleNext}><i className="fas fa-chevron-right" /></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}