'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "./OdometerComponent";
import { motion, useAnimation } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export default function About({ parentClass = "about-us-area", about }) {
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

  const yearsExperience = about?.yearsExperience || 12;
  const projectCount = about?.projectCount || "90+";
  const title = about?.title || "I design software that's simple to use and helps businesses achieve their goals.";
  const description = about?.description || "I excel in high-stakes, regulated environments-translating complex business needs into elegant, user-centred experiences through rapid prototyping, cross-functional alignment, and thoughtful documentation.";
  
  const defaultCards = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that drive results",
      icon: "/assets/images/about/logo-1.svg"
    },
    {
      title: "Product Development",
      description: "Building innovative solutions from concept to deployment",
      icon: "/assets/images/about/logo-2.svg"
    }
  ];

  const cards = about?.cards?.length > 0 ? about.cards : defaultCards;

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
                  <OdometerComponent max={yearsExperience} /> +
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
                  <p className="card-para">{projectCount} Projects</p>
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
                  {title}
                </motion.h2>
                <motion.p 
                  className="description"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>
              </motion.div>
              <div className="about-us-section-card row g-5">
                {cards.map((card, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                    <motion.div 
                      className="about-us-card"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="card-head">
                        <div className="logo-img">
                          <Image
                            alt="logo"
                            src={card.icon?.asset ? urlForImage(card.icon).url() : (typeof card.icon === 'string' ? card.icon : "/assets/images/about/logo-1.svg")}
                            width={24}
                            height={24}
                          />
                        </div>
                        <h3 className="card-title">{card.title}</h3>
                      </div>
                      <p className="card-para">
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
