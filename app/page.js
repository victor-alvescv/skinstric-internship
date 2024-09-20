"use client";
import Link from "next/link";
import Header from "./components/Header";
import { IoPlaySharp } from "react-icons/io5";
import { useEffect } from "react";
import gsap from "gsap";
import Button from "./components/Button";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      "#title",
      { y: 200 },
      { y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo("#right-link", { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
    gsap.fromTo("#left-link", { x: 50, opacity: 0 }, { x: 0, opacity: 0.5 });
    gsap.fromTo("#diamond", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  function handleAnimationsIn() {
    gsap.to("#title", {
      marginLeft: 0,
      duration: 0.7,
    });
    gsap.to(".bottom-span", {
      transform: "translateX(-120px)",
      ease: "power2.out",
      delay: 0.1,
      duration: 1,
    });
    gsap.to(".research--btn", {
      transform: "translateX(-320px)",
    });
  }

  function handleAnimationsOut() {
    gsap.to("#title", {
      marginLeft: "auto",
      duration: 0.7,
    });
    gsap.to(".bottom-span", {
      transform: "translateX(0px)",
      ease: "power2.out",
      delay: 0.1,
      duration: 0.7,
    });
    gsap.to(".research--btn", {
      transform: "translateX(0px)",
    });
  }

  return (
    <>
      <div id="__next">
        <Header />
        <main className="main">
          <div className="page">
            <div className="index-content">
              <div className="index-title-container"></div>
            </div>
            <div className="index-dotted-square">
              <span className="dotted-square"></span>
              <div className="dotted-square__link-wrapper">
                <button disabled>
                  <span className="icon-btn__icon">
                    <span className="icon-btn__icon-inner">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 11 12"
                        fill="#1A1B1C"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        className="icon--btn"
                      >
                        <path
                          d="m.714 6 9.429 5.444V.556L.714 6Z"
                          fill="current"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <span className="icon-btn__text">CLINICAL RESEARCH</span>
                </button>
              </div>
            </div>
            <div className="index-dotted-square">
              <span className=""></span> {/* stopped here */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
