import React from "react";
import Image from "next/image";
import { skillSections } from "@/data/skills";
import "@/styles/skills.css";

// Icon mapping for skills with their brand colors and gradient combinations
const skillIcons = {
  "Framer": {
    src: "/assets/images/skill/framer.png",
    color: "#e9e9e9",
    colorRgb: "233, 233, 233",
    gradient: "linear-gradient(135deg,#e9e9e9 0%,rgb(227, 238, 236) 100%)"
  },
  "Maze": {
    src: "/assets/images/skill/Maze.png",
    color: "#1a41c2",
    colorRgb: "26, 65, 194",
    gradient: "linear-gradient(135deg,#1a41c2 0%,rgb(7, 72, 202) 100%)"
  },
  "Uizard": {
    src: "/assets/images/skill/Uizard.png",
    color: "#F7DF1E",
    colorRgb: "247, 223, 30",
    gradient: "linear-gradient(135deg,rgb(228, 188, 13) 0%, #F0DB4F 100%)"
  },
  "Justinmind": {
    src: "/assets/images/skill/Justinmind.png",
    color: "#fa2061",
    colorRgb: "250, 32, 97",
    gradient: "linear-gradient(135deg,rgb(250, 32, 97) 0%,rgb(38, 136, 228) 100%)"
  },
  "Figma": {
    src: "/assets/images/skill/figma.png",
    color: "#F24E1E",
    colorRgb: "242, 78, 30",
    gradient: "linear-gradient(135deg, #F24E1E 0%, #A259FF 100%)"
  },
  "Adobe XD": {
    src: "/assets/images/skill/adobe-xd.png",
    color: "#FF61F6",
    colorRgb: "255, 97, 246",
    gradient: "linear-gradient(135deg, #FF61F6 0%, #9D4EDD 100%)"
  },
  "Photoshop": {
    src: "/assets/images/skill/photoshop.png",
    color: "#31A8FF",
    colorRgb: "49, 168, 255",
    gradient: "linear-gradient(135deg, #31A8FF 0%, #0066CC 100%)"
  },
  "Illustrator": {
    src: "/assets/images/skill/illustrator.png",
    color: "#FF9A00",
    colorRgb: "255, 154, 0",
    gradient: "linear-gradient(135deg, #FF9A00 0%, #FF6B6B 100%)"
  }
};

export default function Skills({
  parentClass = "tmp-skill-area tmp-section-gapTop",
}) {
  return (
    <div className={parentClass} id="skills">
      <div className="container">
        <div className="row g-5">
          {skillSections.map((section, sectionIndex) => (
            <div className="col-lg-6" key={sectionIndex}>
              <div className="progress-wrapper">
                <div className="content">
                  <div className="skill-section-header mb--40 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <h2 className="custom-title skill-main-title mb--10">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="skill-subtitle">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  {section.skills.map((skill, skillIndex) => {
                    const iconData = skillIcons[skill.name] || {
                      src: "/assets/images/skill/default-skill.png",
                      color: "#FFFFFF",
                      gradient: "linear-gradient(135deg, #FFFFFF 0%, #CCCCCC 100%)"
                    };
                    
                    return (
                      <div 
                        className="progress-charts skill-card tmponhover" 
                        key={skillIndex}
                        data-aos="fade-up"
                        data-aos-delay={skillIndex * 100}
                        style={{
                          "--skill-color": iconData.color,
                          "--skill-color-rgb": iconData.colorRgb,
                          "--skill-gradient": iconData.gradient,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: "translateY(0)",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                          }
                        }}
                      >
                        <div className="skill-header">
                          <div className="skill-icon">
                            <Image
                              alt={skill.name}
                              src={iconData.src}
                              width={32}
                              height={32}
                              className="skill-image"
                              style={{
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                  transform: "scale(1.1)"
                                }
                              }}
                            />
                          </div>
                          <div className="skill-info">
                            <h6 className="heading heading-h6">{skill.name}</h6>
                            <div className="skill-level">
                              <span className="level-dot"></span>
                              <span className="level-text">Expert</span>
                            </div>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar animated-progress-bar"
                            data-wow-duration={skill.duration}
                            data-wow-delay={skill.delay}
                            role="progressbar"
                            style={{
                              width: `${skill.percent}%`,
                              visibility: "visible",
                              animationDuration: skill.duration,
                              animationDelay: skill.delay,
                              backgroundImage: iconData.gradient,
                              backgroundSize: "200% 100%",
                              "--progress-width": `${skill.percent}%`,
                              transition: "width 1s ease-in-out",
                              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                              borderRadius: "10px",
                              height: "10px",
                              animation: "progressAnimation 1.5s ease-in-out forwards, gradientMove 3s linear infinite, shimmerEffect 2s infinite"
                            }}
                            aria-valuenow={skill.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="percent-label">
                              {skill.percent}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
