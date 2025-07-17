import { useState, useEffect } from 'react';

export default function AnimatedText() {
  const [isDesigner, setIsDesigner] = useState(true);
  const roles = ["UX/UI Designer", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDesigner(prev => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-text-container">
      <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1">
        Hi, I'm Shopnil Mahamud
        <br />
        a{" "}
        <span className={`role-text ${isDesigner ? 'fade-in' : 'fade-out'}`}>
          {roles[isDesigner ? 0 : 1]}
        </span>
      </h2>
      <style jsx>{`
        .animated-text-container {
          position: relative;
          min-height: 60px;
        }
        .role-text {
          display: inline-block;
          position: relative;
          color: #ff6b6b;
          font-weight: 600;
        }
        .fade-in {
          animation: fadeIn 0.5s ease-in forwards;
        }
        .fade-out {
          animation: fadeOut 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
} 