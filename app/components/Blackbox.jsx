"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Blackbox() {
  const boxRef = useRef(null);
  const [blackBox, setBlackBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlackBox(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (boxRef.current && blackBox) {
      gsap.set(boxRef.current, {
        width: "0px",
        height: "1px",
      });
      gsap.to(boxRef.current, {
        width: "432px",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(boxRef.current, {
            height: "auto",
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    }
  }, [blackBox]);

  function handleBtn() {
    gsap.to(boxRef.current, {
      height: "1px",
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(boxRef.current, {
          width: "0px",
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => setBlackBox(false),
        });
      },
    });
  }

  return (
    <>
      {blackBox && (
        <div
          ref={boxRef}
          style={{
            fontSize: "clamp(12px, 4px + .625vw, 16px)",
            overflow: "hidden",
          }}
          className="left-[32px] box__wrapper fixed top-[64px] z-[20] w-[432px] text-[#fcfcfc] tracking-[0] max-w-full"
        >
          <div className="border-b border-solid relative py-[12px] px-[15px] font-roobert text-[#fcfcfc]">
            This is our test environment, and we&apos;re currently in open Beta.
            Any orders you make here will not be fulfilled
          </div>
          <div className="items-center flex justify-end relative py-[0px] px-[15px]">
            <button onClick={handleBtn} className="box__btn--wrapper">
              <span className="box__btn">OK</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
