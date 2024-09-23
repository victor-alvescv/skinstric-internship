"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";

export default function Header({ btnOn }) {
  /* Header Link Animation */
  useEffect(() => {
    gsap.fromTo(
      ".header__link",
      { clipPath: "inset(0% 80% 0% 80%)", duration: 1 },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }
    );
  }, []);

  return (
    <header className="items-center flex justify-between fixed left-[0] top-[0] z-[3] mx-auto w-full h-[64px] px-[32px]">
      <div className="items-center flex relative z-[30] text-[#1a1b1c]">
        <Link
          style={{
            clipPath: "inset(0%)",
            fontSize: "clamp(10px, 2px + .625vw, 14px) ",
          }}
          className="header__link leading-[1.6] tracking-[-.02em] font-roobert"
          href="/"
        >
          SKINSTRIC
        </Link>
      </div>
      {btnOn && (
        <div className="flex items-center relative z-[30]">
          <div className="items-center flex">
            <button className="cursor-not-allowed bg-[#1a1b1c] relative text-center border-[1px] border-[#1a1b1c] header__btn--wrapper rounded-none px-[16px] py-[8px] text-[#fcfcfc] inline-block flex-shrink-0">
              <span className="items-center font-roobert inline-flex transition-all">CONSULT CHEMIST</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
