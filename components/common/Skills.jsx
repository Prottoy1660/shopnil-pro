import React from "react";
import Image from "next/image";
import { skillSections } from "@/data/skills";
import "@/styles/skills.css";

// Icon mapping for skills with their brand colors and gradient combinations
const skillIcons = {
  "Node.js": {
    src: "/assets/images/skill/nodejs.png",
    color: "#339933",
    colorRgb: "51, 153, 51",
    gradient: "linear-gradient(135deg, #339933 0%, #4CAF50 100%)"
  },
  "React": {
    src: "/assets/images/skill/react.png",
    color: "#61DAFB",
    colorRgb: "97, 218, 251",
    gradient: "linear-gradient(135deg, #61DAFB 0%, #282C34 100%)"
  },
  "JavaScript": {
    src: "/assets/images/skill/javascript.png",
    color: "#F7DF1E",
    colorRgb: "247, 223, 30",
    gradient: "linear-gradient(135deg, #F7DF1E 0%, #F0DB4F 100%)"
  },
  "HTML/CSS": {
    src: "/assets/images/skill/html-css.png",
    color: "#E34F26",
    colorRgb: "227, 79, 38",
    gradient: "linear-gradient(135deg, #E34F26 0%, #264DE4 100%)"
  },
  "PHP/Laravel": {
    src: "/assets/images/skill/laravel.png",
    color: "#FF2D20",
    colorRgb: "255, 45, 32",
    gradient: "linear-gradient(135deg, #FF2D20 0%, #FF6B6B 100%)"
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
  },
  "UI/UX Design": {
    src: "/assets/images/skill/ui-ux.png",
    color: "#7C4DFF",
    colorRgb: "124, 77, 255",
    gradient: "linear-gradient(135deg, #7C4DFF 0%, #448AFF 100%)"
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
                              background: iconData.gradient,
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
