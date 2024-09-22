"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {

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
    </header>
  );
}
