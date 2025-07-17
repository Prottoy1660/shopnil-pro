"use client";
import { testimonials2 } from "@/data/testimonials";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination, EffectCards, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  
  const openModal = (testimonial, index) => {
    setSelectedTestimonial({ ...testimonial, index });
  };
  
  const closeModal = () => {
    setSelectedTestimonial(null);
  };
  
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  
  return (
    <section className="clients-testimonial-area tmp-section-gapTop" id="testimonials">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="testimonial-bg-pattern"
      />
      <div className="section-head mb--50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-sub-title center-title"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="subtitle"
          >
            Testimonials
          </motion.span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="title split-collab"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What Others
          </motion.span>{" "}
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gradient-text"
          >
            Say About My Work
          </motion.span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="description section-sm"
        >
          Discover why our clients love working with us and how we've helped them achieve their goals
        </motion.p>
      </div>
      <div className="client-testimonial-swiper position-relative">
        <Swiper
          className="swiper testimonial-swiper-v2"
          {...{
            slidesPerView: 2.5,
            grabCursor: true,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            },
            pagination: {
              el: ".tmp-swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              767: {
                slidesPerView: 2,
                centeredSlides: true,
              },
            },
          }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
        >
          {testimonials2.map((testimonial, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="client-testimonial-card-wrap"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="testimonial-decoration"
                />
                <div className="client-card-head">
                  <div className="client-info">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="client-img"
                    >
                      <Image
                        alt={testimonial.name}
                        src={testimonial.image}
                        width={301}
                        height={301}
                        className="rounded-full"
                      />
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="client-img-decoration"
                      />
                    </motion.div>
                    <div className="client-details">
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="client-title"
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="client-para"
                      >
                        {testimonial.role}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="tmp-star"
                  >
                    <ul>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                        >
                          <i className="fa-solid fa-star" />
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <div className="testimonial-text-container">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="client-para"
                  >
                    {truncateText(testimonial.text)}
                  </motion.p>
                  {testimonial.text.length > 120 && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(testimonial, index)}
                      className="read-more-btn"
                    >
                      <span>Read Full Review</span>
                      <motion.i 
                        className="fa-solid fa-external-link"
                      />
                    </motion.button>
                  )}
                </div>
                <motion.div 
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  className="quat-logo"
                >
                  <Image
                    alt="quat-logo"
                    src="/assets/images/testimonial/quat-logo.svg"
                    width={47}
                    height={40}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="tmp-swiper-pagination tmp-swiper-pagination-01" 
        />
      </div>
      
      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="testimonial-modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              className="testimonial-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="modal-close-btn"
              >
                <i className="fa-solid fa-times" />
              </motion.button>
              
              <div className="modal-content">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="modal-header"
                >
                  <div className="client-info-modal">
                    <div className="client-img-modal">
                      <Image
                        alt={selectedTestimonial.name}
                        src={selectedTestimonial.image}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div className="client-details-modal">
                      <h3 className="client-name">{selectedTestimonial.name}</h3>
                      <p className="client-role">{selectedTestimonial.role}</p>
                      <div className="stars-modal">
                        {[...Array(selectedTestimonial.stars)].map((_, i) => (
                          <motion.i 
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="fa-solid fa-star"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="modal-text"
                >
                  <div className="quote-icon">
                    <i className="fa-solid fa-quote-left" />
                  </div>
                  <p className="testimonial-full-text">
                    {selectedTestimonial.text}
                  </p>
                  <div className="quote-icon quote-right">
                    <i className="fa-solid fa-quote-right" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
