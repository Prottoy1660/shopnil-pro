"use client";

import { closeSidebar } from "@/utils/toggleSidebar";
import { useEffect, useRef } from "react";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target === overlayRef.current) {
        closeSidebar();
      }
    };

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.addEventListener('click', handleOverlayClick);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
      }
    };
  }, []);

  return (
    <div className="d-none d-xl-block">
      <div ref={sidebarRef} className="tmp-sidebar-area tmp_side_bar">
        <div className="inner" style={{ 
          background: 'var(--color-secondary)',
          position: 'relative',
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--color-primary) transparent'
        }}>
          <div className="top-area" style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '20px',
            position: 'sticky',
            top: 0,
            zIndex: 2
          }}>
            <a href="index.html" className="logo">
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
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper" style={{ 
            padding: '40px 30px',
            minHeight: 'calc(100vh - 80px)'
          }}>
            <div className="profile-section" style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-2nd) 100%)',
              borderRadius: '24px',
              padding: '40px 30px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '40px',
              boxShadow: '0 20px 40px rgba(255, 1, 79, 0.15)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '300px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                animation: 'float 6s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                left: '-60px',
                width: '250px',
                height: '250px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                animation: 'float 8s ease-in-out infinite'
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div className="profile-avatar" style={{
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="avatar-glow" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }} />
                  <i className="fa-solid fa-user" style={{ 
                    fontSize: '48px', 
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1
                  }} />
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  marginBottom: '12px', 
                  fontSize: '28px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>Shopnil Mahamud</h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  textAlign: 'center', 
                  fontSize: '16px',
                  maxWidth: '200px',
                  lineHeight: '1.6'
                }}>
                  Full Stack Developer & UI/UX Designer
                </p>
              </div>
            </div>

            <div className="info-section" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease'
            }}>
              <h5 className="title" style={{
                color: 'var(--color-heading)',
                fontSize: '20px',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                Transforming Ideas into Powerful Web Experiences
              </h5>
              <p className="disc" style={{
                color: 'var(--color-body)',
                fontSize: '15px',
                lineHeight: '1.7',
                marginBottom: '25px'
              }}>
                Focused on building brands and creating digital experiences for 12+ years, currently based in Toronto, Canada
              </p>
            </div>

            <div className="contact-section" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div className="contact-card" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="contact-card-glow" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, var(--color-primary) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
                <i className="fa-solid fa-phone" style={{ 
                  fontSize: '20px',
                  color: 'var(--color-primary)',
                  marginRight: '15px',
                  position: 'relative',
                  zIndex: 1
                }} />
                <div className="information" style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{
                    display: 'block',
                    color: 'var(--color-gray)',
                    fontSize: '13px',
                    marginBottom: '4px'
                  }}>Call Now</span>
                  <a href="tel:+16478619894" style={{
                    color: 'var(--color-heading)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}>
                    +1 (647) 861-9894
                  </a>
                </div>
              </div>

              <div className="contact-card" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="contact-card-glow" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, var(--color-primary) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
                <i className="fa-solid fa-envelope" style={{ 
                  fontSize: '20px',
                  color: 'var(--color-primary)',
                  marginRight: '15px',
                  marginTop: '2px',
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0
                }} />
                <div className="information" style={{ 
                  position: 'relative', 
                  zIndex: 1,
                  flex: 1,
                  minWidth: 0
                }}>
                  <span style={{
                    display: 'block',
                    color: 'var(--color-gray)',
                    fontSize: '13px',
                    marginBottom: '4px'
                  }}>Mail Us</span>
                  <a href="mailto:contact@shopnilmahamud.com" style={{
                    color: 'var(--color-heading)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    lineHeight: '1.4',
                    display: 'block',
                    maxWidth: '100%'
                  }}>
                    contact@shopnilmahamud.com
                  </a>
                </div>
              </div>

              <div className="contact-card" style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="contact-card-glow" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, var(--color-primary) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
                <i className="fa-solid fa-location-crosshairs" style={{ 
                  fontSize: '20px',
                  color: 'var(--color-primary)',
                  marginRight: '15px',
                  position: 'relative',
                  zIndex: 1
                }} />
                <div className="information" style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{
                    display: 'block',
                    color: 'var(--color-gray)',
                    fontSize: '13px',
                    marginBottom: '4px'
                  }}>My Address</span>
                  <span style={{
                    color: 'var(--color-heading)',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Fort York Boulevard, Toronto, ON M5V 0E6
                  </span>
                </div>
              </div>
            </div>

            <div className="social-wrapper" style={{
              marginTop: '30px',
              textAlign: 'center'
            }}>
              <span style={{
                display: 'block',
                color: 'var(--color-gray)',
                fontSize: '14px',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Find With Me</span>
              <div className="social-link" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px'
              }}>
                <a href="https://www.instagram.com/shopnil.journey" target="_blank" rel="noopener noreferrer" className="social-icon sidebar-social-link">
                  <div className="social-icon-glow sidebar-glow" />
                  <i className="fa-brands fa-instagram sidebar-icon" />
                </a>
                <a href="https://www.linkedin.com/in/shopnilm" target="_blank" rel="noopener noreferrer" className="social-icon sidebar-social-link">
                  <div className="social-icon-glow sidebar-glow" />
                  <i className="fa-brands fa-linkedin-in sidebar-icon" />
                </a>
                <a href="https://www.facebook.com/designarium.net" target="_blank" rel="noopener noreferrer" className="social-icon sidebar-social-link">
                  <div className="social-icon-glow sidebar-glow" />
                  <i className="fa-brands fa-facebook sidebar-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={overlayRef}
        className="overlay_close_side_menu close_side_menu_active"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 99998
        }}
      />
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .tmp_side_bar {
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          height: 100vh;
          z-index: 99999;
        }

        .tmp_side_bar_open {
          transform: translateX(0);
        }

        .overlay_close_side_menu {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .tmp_side_bar_open + .overlay_close_side_menu {
          opacity: 1;
          visibility: visible;
        }

        /* Custom scrollbar styles */
        .inner::-webkit-scrollbar {
          width: 6px;
        }

        .inner::-webkit-scrollbar-track {
          background: transparent;
        }

        .inner::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 3px;
        }

        .inner::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary-2nd);
        }

        .profile-avatar:hover .avatar-glow {
          opacity: 1;
        }

        .profile-avatar:hover i {
          transform: scale(1.1);
        }

        .contact-card:hover {
          transform: translateY(-2px);
        }

        .contact-card:hover .contact-card-glow {
          opacity: 0.1;
        }

        .social-icon:hover {
          transform: translateY(-2px);
        }

        .social-icon:hover .social-icon-glow {
          opacity: 1;
        }

        .social-icon:hover i {
          color: #fff;
        }
      `}</style>
    </div>
  );
}
