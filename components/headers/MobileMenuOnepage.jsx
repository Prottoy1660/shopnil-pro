"use client";

import { closeMobilemenu2 } from "@/utils/toggleMobilemenu";

import React, { useEffect, useRef } from "react";
import OnepageNavMobile from "./OnepageNavMobile";
import Link from "next/link";
import XIcon from "../common/XIcon";

export default function MobileMenuOnepage() {
  const menuRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        if (innerRef.current && innerRef.current.contains(event.target)) {
        } else {
          closeMobilemenu2();
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div ref={menuRef} className="tmp-popup-mobile-menu mobile-menu-onepage">
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="index.html" className="logo-area">
                <img
                  className="logo-dark"
                  alt="Shopnil Mahamud"
                  src="/assets/images/logo/SM-LOGO.png"
                  width={200}
                  height={70}
                />
                <img
                  className="SM-D"
                  alt="Shopnil Mahamud"
                  src="/assets/images/logo/SM-D.png"
                  width={200}
                  height={70}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={closeMobilemenu2}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <OnepageNavMobile />
          <div className="social-wrapper mt--40">
            <span className="subtitle">find with me</span>
            <div className="social-link">
              <a href="https://www.instagram.com/shopnil.journey" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/shopnilm" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://x.com/shopniljourney" target="_blank" rel="noopener noreferrer">
                <XIcon className="social-icon" />
              </a>
              <a href="https://www.facebook.com/designarium.net" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook" />
              </a>
            </div>
          </div>
          {/* social area end */}
        </div>
      </div>
    </div>
  );
}
