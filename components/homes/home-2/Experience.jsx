"use client";
import { resumeItems } from "@/data/experiences";
import { educationResumeItems } from "@/data/education";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

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
          <div className="col-md-6">
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
              {resumeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`modern-resume-card ${item.isLast ? "mb--0" : ""}`}
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
              ))}
            </motion.div>
          </div>
          <div className="col-md-6">
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
                  <i className="fa-regular fa-graduation-cap" />
                </motion.div>
                <h2 className="modern-section-title">
                  Education
                  <span className="title-accent"></span>
                </h2>
              </div>
            </motion.div>
            <motion.div 
              className="modern-resume-widget"
              variants={containerVariants}
            >
              {educationResumeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`modern-resume-card ${item.isLast ? "mb--0" : ""}`}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => {
                    setHoveredIndex(index);
                    setHoveredSection('education');
                  }}
                  onHoverEnd={() => {
                    setHoveredIndex(null);
                    setHoveredSection(null);
                  }}
                >
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <motion.div 
                      className="time-badge"
                      animate={{
                        scale: hoveredIndex === index && hoveredSection === 'education' ? 1.01 : 1,
                        boxShadow: hoveredIndex === index && hoveredSection === 'education' 
                          ? '0 0 12px rgba(255, 1, 79, 0.1)' 
                          : '0 0 0px rgba(255, 1, 79, 0)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.i 
                        className="fa-duotone fa-solid fa-circle-dot time-icon" 
                        animate={{
                          rotate: hoveredIndex === index && hoveredSection === 'education' ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="time-text">{item.duration}</span>
                    </motion.div>
                    <motion.h3 
                      className="modern-resume-title"
                      animate={{
                        color: hoveredIndex === index && hoveredSection === 'education' 
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
                        color: hoveredIndex === index && hoveredSection === 'education' 
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
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
