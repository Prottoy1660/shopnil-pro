"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop",
}) {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    
    // Show loading state
    toast.info("Sending message...", {
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
        if (res.status === 200) {
          toast.dismiss(); // Dismiss loading toast
          toast.success("Message sent successfully!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch((error) => {
        toast.dismiss(); // Dismiss loading toast
        toast.error("Failed to send message. Please try again later.", {
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
    <section className={parentClass + " mb--60"} id="contact">
      <div className="container">
        <div className="get-in-touch-wrapper tmponhover">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title-left">Let's Create A Story Together</span>
                </div>
                <ul className="ft-link v2">
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">E-mail:</h4>
                      <a href="#">contact@shopnilmahamud.com</a>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Location:</h4>
                      <div>Fort York Boulevard, Toronto, ON M5V 0E6</div>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-phone" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Contact:</h4>
                      <a href="#">+1 (647) 861-9894</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {/* <span className="title">GET IN TOUCH</span> */}
                </div>
                <div className="contact-form">
                  <div id="form-messages" className="error" />
                  <form
                    className="tmp-dynamic-form"
                    id="contact-form"
                    ref={form}
                    onSubmit={sendMail}
                  >
                    <div className="contact-form-wrapper row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="name"
                            id="contact-name"
                            placeholder="Your Name"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="phone"
                            id="contact-phone"
                            placeholder="Phone Number"
                            type="number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            id="contact-email"
                            name="email"
                            placeholder="Your Email"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="input-field"
                            placeholder="Your Message"
                            name="message"
                            id="contact-message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="tmp-button-here">
                          <button
                            className="tmp-btn hover-icon-reverse radius-round w-100"
                            name="submit"
                            type="submit"
                            id="submit"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get in touch</span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
