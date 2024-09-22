"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Preloader() {
  const preloaderRef = useRef(null);
  const preloaderMaskRef = useRef(null);

  /* Preloader Animations */
  useEffect(() => {
    const timeout = setTimeout(() => {
      preloaderRef.current.classList.add("preloader__animated");
      preloaderMaskRef.current.classList.add("preloader__animated");
    }, 1000);

    const hideTimeout = setTimeout(() => {
      gsap.to(".scale-1", {
        y: -50,
        delay: 0.2,
      });
      gsap.to(".scale-1-1", {
        y: -50,
        delay: 0.1,
      });
      gsap.to(".scale-1-2", {
        y: -50,
      });
    }, 5000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div ref={preloaderRef} className="preloader__container">
      <span className="dotted__square--preloader preloader__square scale-1"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader__square--mask preloader__square--mask1"
      >
        <div className="preloader__square--mask-inner"></div>
      </div>

      <span className="dotted__square--preloader preloader__square scale-1-1"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader__square--mask preloader__square--mask2"
      >
        <div className="preloader__square--mask-inner"></div>
      </div>

      <span className="dotted__square--preloader preloader__square scale-1-2"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader__square--mask preloader__square--mask3"
      >
        <div className="preloader__square--mask-inner"></div>
      </div>
    </div>
  );
}
