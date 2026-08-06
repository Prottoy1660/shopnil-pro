"use client";
import React, { useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";

const TrustedBy = ({ trustedBy }) => {
  const defaultCompanies = [
    {
      name: "",
      logo: "/assets/images/trusted-by/Adplist.png"
    },
    {
      name: "",
      logo: "/assets/images/trusted-by/ADP-Tor.png"
    },
    {
      name: "",
      logo: "/assets/images/trusted-by/Design-X.png"
    },
    {
      name: "",
      logo: "/assets/images/trusted-by/Queer.png"
    },
    {
      name: "",
      logo: "/assets/images/trusted-by/Ux-Bangladesh.png"
    }
  ];

  const companies = trustedBy?.companies?.length > 0 ? trustedBy.companies : defaultCompanies;
  const title = trustedBy?.title || "Design Communities";
  const subtitle = trustedBy?.subtitle || "Join thousands of companies that trust our solutions to drive their success";

  useEffect(() => {
    // Initialize animations when component mounts
    const elements = document.querySelectorAll('.trusted-by-item');
    elements.forEach((el, index) => {
      el.style.setProperty('--animation-order', index);
    });
  }, [companies]);

  return (
    <section className="trusted-by-section tmp-scroll-trigger tmp-fade-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="trusted-by-header mb-5">
              <h2 className="trusted-by-title tmp-scroll-trigger slide_in animation-order-0">
                {title}
              </h2>
              <p className="trusted-by-subtitle tmp-scroll-trigger slide_in animation-order-1">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="trusted-by-grid">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className={`trusted-by-item tmp-scroll-trigger tmp-fade-in animation-order-${index + 2}`}
                  data-wow-delay={`${(index + 2) * 0.1}s`}
                >
                  <div className="company-logo-wrapper">
                    <img 
                      src={company.logo?.asset ? urlForImage(company.logo).url() : company.logo} 
                      alt={`${company.name || 'Company'} logo`}
                      className="company-logo"
                    />
                    {company.name && <span className="company-name">{company.name}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;