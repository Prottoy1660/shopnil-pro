"use client";
import { resumeItems } from "@/data/experiences";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function Experience({ experiences = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (experiences && experiences.length > 0) {
      setItems(experiences);
    } else {
      setItems(resumeItems);
    }
  }, [experiences]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      rotateY: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -8,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="modern-resume-section tmp-section-gapTop" id="resume-section">
      <div className="container">
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="col-md-12">
            <motion.div 
              className="section-header mb--60"
              variants={titleVariants}
            >
              <div className="modern-section-title-wrapper">
                <motion.div 
                  className="icon-container"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <i className="fa-regular fa-award" />
                </motion.div>
                <h2 className="modern-section-title">
                  Experience
                  <span className="title-accent"></span>
                </h2>
              </div>
            </motion.div>
            <motion.div 
              className="modern-resume-widget"
              variants={containerVariants}
            >
              <div className="row g-4">
                {items.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <motion.div
                      className={`modern-resume-card ${index === items.length - 1 ? "mb--0" : ""}`}
                      variants={cardVariants}
                      whileHover="hover"
                      onHoverStart={() => {
                        setHoveredIndex(index);
                        setHoveredSection('experience');
                      }}
                      onHoverEnd={() => {
                        setHoveredIndex(null);
                        setHoveredSection(null);
                      }}
                    >
                      <div className="card-glow"></div>
                      <div className="card-content">
                        <div className="experience-header">
                          <motion.div 
                            className="company-logo"
                            animate={{
                              scale: hoveredIndex === index && hoveredSection === 'experience' ? 1.1 : 1,
                              rotate: hoveredIndex === index && hoveredSection === 'experience' ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={item.logo?.asset ? urlForImage(item.logo).url() : item.logo || "/assets/images/logo/logo1.jpg"}
                              alt={`${item.title} logo`}
                              width={40}
                              height={40}
                              className="logo-image"
                            />
                          </motion.div>
                          <motion.div 
                            className="time-badge"
                            animate={{
                              scale: hoveredIndex === index && hoveredSection === 'experience' ? 1.01 : 1,
                              boxShadow: hoveredIndex === index && hoveredSection === 'experience' 
                                ? '0 0 12px rgba(255, 1, 79, 0.1)' 
                                : '0 0 0px rgba(255, 1, 79, 0)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.i 
                              className="fa-duotone fa-solid fa-circle-dot time-icon" 
                              animate={{
                                rotate: hoveredIndex === index && hoveredSection === 'experience' ? 360 : 0
                              }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="time-text">{item.duration}</span>
                          </motion.div>
                        </div>
                        <motion.h3 
                          className="modern-resume-title"
                          animate={{
                            color: hoveredIndex === index && hoveredSection === 'experience' 
                              ? '#ffffff' 
                              : '#e0e0e0'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.div 
                          className="modern-institute"
                          animate={{
                            color: hoveredIndex === index && hoveredSection === 'experience' 
                              ? 'rgba(255, 1, 79, 0.8)' 
                              : '#9f9f9f'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.institute}
                        </motion.div>
                      </div>
                      <div className="card-border"></div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
