import React from "react";
import Image from "next/image";
import { counters2 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
import TyperComponent from "@/components/common/TyperComponent";
import HeroShowreelButton from "@/components/common/HeroShowreelButton";
import { urlForImage } from "@/sanity/lib/image";

export default function Hero({ hero }) {
  // console.log("Hero Data:", hero);
  const typerStrings = hero?.typerStrings || [
    "SaaS, B2B, B2C",
    "Health & Fintech",
    "Creative Storyteller"
  ];
  
  const stats = hero?.stats || counters2;
  const workedWithTitle = hero?.workedWithTitle || "Worked with";
  const workedWithText = hero?.workedWithText || (
    <>
      At BMO, I spearheaded UX for an AI fraud detection platform that slashed investigation time by 40% and prevented millions in losses.
      <br /><br />
      At Dynacare, I reduced test result delivery time by 2 days with AI Tool.
      <br /><br />
      At Augmedix, I contributed to documentation tools that empower clinicians with up to 3 hours of daily time savings, 20% productivity boost, and 40% higher work-life satisfaction.
    </>
  );
  
  const locationTitle = hero?.locationTitle || "I'm a Torontonian";
  const locationText = hero?.locationText || "shopnilmahamud@outlook.com";

  return (
    <div className="rpp-banner-five-area position-relative pt-5">
      <div className="container">
        <div className="banner-five-main-wrapper">
          <div className="inner mb-6">
            <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-title-split">
              {hero?.title || "I'm a Sr. Product designer"}<br />{" "}
              <span className="header-caption">
                <span className="cd-headline clip is-full-width">
                  <TyperComponent
                    strings={typerStrings}
                    className="theme-gradient"
                  />
                </span>
              </span>
            </h1>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <div className="bg-benner-img-five position-relative">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="banner-img-3"
                  src={hero?.profileImage?.asset ? urlForImage(hero.profileImage).url() : "/assets/images/banner/Profile.png"}
                  width={4080}
                  height={4080}
                />
                {/* Hero Showreel Button - Positioned over the image */}
                <div className="hero-button-overlay tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <HeroShowreelButton />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 order-lg-1">
              <div className="banner-left-content">
                <div className="banner-counter">
                  <ul className="list-unstyled">
                    {stats.map((item, index) => (
                      <li key={index} className="mb-4">
                        <div
                          className={`banner-counter-card tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder || index + 1}`}
                        >
                          <h4 className="counter title">
                            <OdometerComponent max={item.count} />
                            {item.suffix}
                          </h4>
                          <p className="para">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 order-lg-3">
              <div className="banner-right-content">
                <div className="banner-contact-info">
                  <div className="contact-info tmp-scroll-trigger tmp-fade-in animation-order-1 mb-4">
                    <h4 className="title" style={{textTransform: 'none'}}>{workedWithTitle}</h4>
                    <p className="para">
                      {workedWithText}
                    </p>
                  </div>
                  <div className="contact-info tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <h4 className="title" style={{textTransform: 'none'}}>{locationTitle}</h4>
                    <p className="para">{locationText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-img-bg position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: -1 }}>
        <Image
          alt="shape-img"
          src="/assets/images/banner/banner-shape-five-bg.png"
          width={1920}
          height={900}
          className="w-100 h-100 object-fit-cover"
        />
      </div>
    </div>
  );
}
