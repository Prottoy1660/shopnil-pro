"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
import XIcon from "../common/XIcon";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Footer2({
  darkLogo = "/assets/images/logo/SM-LOGO.png",
  lightLogo = "/assets/images/logo/SM-D.png",
}) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendNewsletter = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.info("Subscribing...", {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rch0yms",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_d3zw9lt",
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "FR61761uRFyHO8Z_x",
        }
      )
      .then((res) => {
        setLoading(false);
        toast.dismiss();
        if (res.status === 200) {
          toast.success("Thank you for subscribing to our newsletter!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        } else {
          toast.error("Subscription failed. Please try again later.", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.dismiss();
        toast.error("Subscription failed. Please try again later.", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error("EmailJS error:", error);
      });
  };

  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="Shopnil Mahamud"
                        src={darkLogo}
                        width={220}
                        height={80}
                      />
                      <Image
                        className="SM-D"
                        alt="Shopnil Mahamud"
                        src={lightLogo}
                        width={220}
                        height={80}
                      />
                    </Link>
                  </div>
                  <p className="description">
                  Focused on building brands and creating digital experiences for 12+ years, currently based in Toronto, Canada
                  </p>
                  <div className="social-link footer">
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
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger dark-content animation-order-1 tmp-link-animation">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-scroll-trigger light-content2 animation-order-1 tmp-link-animation">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="#">+1 (647) 861-9894</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Toronto, Canada
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="#">contact@shopnilmahamud.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Newslatter</h3>
                  <p className="para">
                  If you want to keep in touch, please subscribe to my newsletter.
                  </p>
                  <form
                    ref={form}
                    onSubmit={sendNewsletter}
                    className="newsletter-form-1"
                  >
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your e-mail"
                      required
                      suppressHydrationWarning
                      disabled={loading}
                    />
                    <span>
                      <button
                        type="submit"
                        className="form-icon"
                        disabled={loading}
                        style={{ border: "none", cursor: loading ? "not-allowed" : "pointer" }}
                        aria-label="Subscribe"
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
