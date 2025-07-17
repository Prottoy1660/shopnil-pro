"use client";
import { menuItems } from "@/data/menu";
import { closeMobilemenu } from "@/utils/toggleMobilemenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import XIcon from "../common/XIcon";

export default function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const innerRef = useRef(null);
  const [activeParent, setActiveParent] = useState(-1);
  useEffect(() => {
    function handleClick(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        if (innerRef.current && innerRef.current.contains(event.target)) {
        } else {
          closeMobilemenu();
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div ref={menuRef} className="tmp-popup-mobile-menu">
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="index.html" className="logo-area">
                <img
                  className="logo-dark"
                  alt="Shopnil Mahamud"
                  src="/assets/images/logo/SM-LOGO.png"
                  width={260}
                  height={90}
                />
                <img
                  className="SM-D"
                  alt="Shopnil Mahamud"
                  src="/assets/images/logo/SM-D.png"
                  width={260}
                  height={90}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={closeMobilemenu}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.hasDropdown ? "has-dropdown" : ""} ${
                  item.submenu
                    ? item.submenu.some(
                        (elm) =>
                          elm.href.split("/")[1] == pathname.split("/")[1]
                      )
                      ? "menu-item-open"
                      : ""
                    : ""
                }`}
              >
                {item.isLink ? (
                  <Link
                    className={`${
                      item.href.split("/")[1] == pathname.split("/")[1]
                        ? "active"
                        : ""
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() =>
                      setActiveParent((pre) => (pre == index ? -1 : index))
                    }
                    className={activeParent == index ? "open" : ""}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fa-regular fa-chevron-down" />
                    )}
                  </a>
                )}

                {item.hasDropdown && (
                  <ul
                    className="submenu"
                    style={{
                      display: activeParent == index ? "block" : "none",
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className={`${
                            subItem.href.split("/")[1] == pathname.split("/")[1]
                              ? "active"
                              : ""
                          }`}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
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
