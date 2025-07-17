'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "./OdometerComponent";
import { motion, useAnimation } from "framer-motion";

export default function About({ parentClass = "about-us-area" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={parentClass} id="about">
      <div className="container">
        <motion.div 
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <motion.div 
                className="years-of-experience-card"
                variants={counterVariants}
              >
                <h2 className="counter card-title">
                  <OdometerComponent max={15} /> +
                </h2>
                <p className="card-para">Years of Problem Solving</p>
              </motion.div>
              <motion.div 
                className="design-card"
                variants={itemVariants}
              >
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-lock" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">UI/UX</h3>
                  <p className="card-para">100+ Projects</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <motion.div 
                className="section-head text-align-left mb--50"
                variants={containerVariants}
              >
                <motion.div 
                  className="section-sub-title"
                  variants={itemVariants}
                >
                  <span className="subtitle">About Me</span>
                </motion.div>
                <motion.h2 
                  className="title split-collab"
                  variants={itemVariants}
                >
                  Solving problems clients feel but can't express.
                </motion.h2>
                <motion.p 
                  className="description"
                  variants={itemVariants}
                >
                  I stand at the confluence where design and code intersect. I'm a natural problem solver who have been involved with the product and UI UX design for 15+ years starting from a Silicon valley startup working on complex Google Glass projects for US based healthcare system to Designing cutting edge financial web apps for Bank of Montreal.
                </motion.p>
              </motion.div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <motion.div 
                    className="about-us-card"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">UI/UX Design</h3>
                    </div>
                    <p className="card-para">
                      Creating intuitive and engaging user experiences that drive results
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <motion.div 
                    className="about-us-card"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Product Development</h3>
                    </div>
                    <p className="card-para">
                      Building innovative solutions from concept to deployment
                    </p>
                  </motion.div>
                </div>
              </div>
              <motion.div 
                className="about-btn mt--40"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  href={`/#about`}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Me</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
