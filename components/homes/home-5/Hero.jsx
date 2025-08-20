import React from "react";
import Image from "next/image";
import { counters2 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="rpp-banner-five-area position-relative pt-5">
      <div className="container">
        <div className="banner-five-main-wrapper">
          <div className="inner mb-6">
            <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-title-split">
              I’m a Sr. Product designer<br />{" "}
              <span className="header-caption">
                <span className="cd-headline clip is-full-width">
                  <TyperComponent
                    strings={[
                      "SaaS, B2B, B2C",
                      "Health & Fintech",
                      "Creative Storyteller"
                    ]}
                    className="theme-gradient"
                  />
                </span>
              </span>
            </h1>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <div className="bg-benner-img-five">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="banner-img-3"
                  src="/assets/images/banner/Profile.png"
                  width={4080}
                  height={4080}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 order-lg-1">
              <div className="banner-left-content">
                <div className="banner-counter">
                  <ul className="list-unstyled">
                    {counters2.map((item, index) => (
                      <li key={index} className="mb-4">
                        <div
                          className={`banner-counter-card tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
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
                    <h4 className="title">Hello :</h4>
                    <p className="para">
                    I love taking ownership & responsibilities to learn and grow in a challenging environment. I specialize in user-centered design, smooth and joyful experience by solving real problems to delight the users.
                    </p>
                  </div>
                  <div className="contact-info tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <h4 className="title">Contact :</h4>
                    <p className="para">Fort York Blvd, Toronto</p>
                    <p className="para">contact@shopnilmahamud.com</p>
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
