"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function OkButton() {
  const okRef = useRef(null);
  const [showOkBtn, setShowOkBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOkBtn(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (okRef.current && showOkBtn) {
      gsap.set(okRef.current, {
        width: "0px",
        height: "1px",
      });
      gsap.to(okRef.current, {
        width: "432px",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(okRef.current, {
            height: "auto",
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    }
  }, [showOkBtn]);

  function handleBtn() {
    gsap.to(okRef.current, {
      height: "1px",
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(okRef.current, {
          width: "0px",
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => setShowOkBtn(false),
        });
      },
    });
  }

  return (
    <>
      {showOkBtn && (
        <div
          ref={okRef}
          id="btn"
          style={{
            fontSize: "clamp(12px, 4px + .625vw, 16px)",
            overflow: "hidden",
          }}
          className="left-[32px] pop-up fixed top-[64px] z-[20] w-[432px] text-[#fcfcfc] tracking-[0] max-w-full"
        >
          <div className="border-b border-solid relative py-[12px] px-[15px] font-roobert text-[#fcfcfc]">
            This is our test environment, and we're currently in open Beta. Any
            orders you make here will not be fulfilled
          </div>
          <div className="items-center flex justify-end relative py-[0px] px-[15px]">
            <button onClick={handleBtn} className="ok__btn--wrapper">
              <span className="ok__btn">OK</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
