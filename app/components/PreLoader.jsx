"use client";

import React, { useEffect, useRef } from "react";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const preloaderMaskRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      preloaderRef.current.classList.add("preloader_is-animated");
      preloaderMaskRef.current.classList.add("preloader_is-animated");
    }, 1000);

    const hideTimeout = setTimeout(() => {
      preloaderRef.current.style.opacity = 0;
    }, 5000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div ref={preloaderRef} className="preloader_container">
      <span className="dotted-square-preloader preloader_square"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader_square-mask preloader_square-mask-1"
      >
        <div className="preloader_square-mask-inner"></div>
      </div>

      <span className="dotted-square-preloader preloader_square scale-1-1"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader_square-mask preloader_square-mask-2"
      >
        <div className="preloader_square-mask-inner"></div>
      </div>

      <span className="dotted-square-preloader preloader_square scale-1-2"></span>

      <div
        ref={preloaderMaskRef}
        className="preloader_square-mask preloader_square-mask-3"
      >
        <div className="preloader_square-mask-inner"></div>
      </div>
    </div>
  );
};

export default Preloader;
