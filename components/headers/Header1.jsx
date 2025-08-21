"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utils/toggleSidebar";
import { openMobilemenu } from "@/utils/toggleMobilemenu";
import XIcon from "../common/XIcon";

export default function Header1({
  darkLogo = "/assets/images/logo/SM-LOGO.png",
  lightLogo = "/assets/images/logo/SM-D.png",
}) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-dark"
                    alt="Shopnil Mahamud"
                    src={darkLogo}
                    width={260}
                    height={90}
                  />
                  <Image
                    className="SM-D"
                    alt="Shopnil Mahamud"
                    src={lightLogo}
                    width={260}
                    height={90}
                  />
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
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
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={openMobilemenu}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
