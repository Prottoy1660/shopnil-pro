"use client";

import React, { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max }) => {
  const odometerRef = useRef(null);
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isOdometerReady, setIsOdometerReady] = useState(false);
  const odometerInitRef = useRef();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    import("odometer").then((Odometer) => {
      // Initialize Odometer or do something with it

      // Example usage of Odometer
      if (Odometer && odometerRef.current) {
        odometerInitRef.current = new Odometer.default({
          el: odometerRef.current,
          value: 0,
        });
        setIsOdometerReady(true);
      }
    });
  }, [isMounted]);
  useEffect(() => {
    if (odometerRef.current && odometerInitRef.current) {
      odometerInitRef.current.update(value); // Update odometer when value changes
    }
  }, [value]);

  const startCountup = () => {
    setValue(max);
  };

  useEffect(() => {
    if (!isMounted || !isOdometerReady) return;
    
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, [isMounted, isOdometerReady]);

  return (
    <>
      <div ref={odometerRef} className="odometer">
        {!isMounted ? 0 : null}
      </div>
    </>
  );
};

export default OdometerComponent;
