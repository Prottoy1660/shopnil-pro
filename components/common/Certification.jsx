"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificationData } from "@/data/certifications";

export default function Certification({ certifications = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (certifications && certifications.length > 0) {
      setItems(certifications);
    } else {
      setItems(certificationData);
    }
  }, [certifications]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="education-experience tmp-section-gapTop">
      <div className="container">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="custom-title mb-32">
            <motion.div 
              className="certification-icon-container"
              variants={iconVariants}
              whileHover="hover"
            >
              <i className="fa-solid fa-certificate" />
            </motion.div>
            Certifications{" "}
            <span>
              <Image
                alt="custom-line"
                width={81}
                height={6}
                src="/assets/images/custom-line/custom-line.png"
              />
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="row g-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <motion.div
                className="enhanced-certification-card"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="card-glow" />
                <div className="card-border" />
                <div className="card-content">
                  <motion.div 
                    className="certification-badge"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="badge-icon"
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className="fa-solid fa-award" />
                    </motion.div>
                    <span className="badge-text">{item.date}</span>
                  </motion.div>
                  
                  <motion.h4 
                    className="cert-title"
                    animate={{
                      color: hoveredIndex === index ? "#ffffff" : "var(--color-heading)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h4>
                  
                  <motion.div 
                    className="cert-issuer"
                    animate={{
                      color: hoveredIndex === index ? "rgba(255, 255, 255, 0.9)" : "var(--color-primary)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fa-solid fa-building" />
                    <span>Issued by: {item.issuer}</span>
                  </motion.div>
                  
                  {item.description && (
                    <motion.p 
                      className="cert-description"
                      animate={{
                        color: hoveredIndex === index ? "rgba(255, 255, 255, 0.8)" : "var(--color-body)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}