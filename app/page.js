"use client";
import Link from "next/link";
import Header from "./components/Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./components/Button";

export default function Home() {
 const beginRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      "#title",
      { y: 200 },
      { y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(
      "#right-link",
      { x: -20, opacity: 0, ease: "power2.out" },
      { x: 0, opacity: 1 }
    );
    gsap.fromTo(
      "#left-link",
      { x: 50, opacity: 0, ease: "power2.out" },
      { x: 20, opacity: 1 }
    );
    gsap.fromTo("#diamond", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  function handleAnimationsIn() {
    const titleElement = document.getElementById("title");
    const titleRect = titleElement.getBoundingClientRect();
    const translateX = titleRect.left * 0.95;
    beginRef.current.classList.add('begin-btn')

    gsap.to("#title", {
      x: -translateX,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.to(".bottom-title", {
      x: "-30%",
      ease: "power2.out",
      duration: 1,
    });

    gsap.to(".index-left-link", {
      x: "-100vw",
      ease: "power2.out",
    });
  }

  function handleAnimationsOut() {
    beginRef.current.classList.remove('begin-btn')
    gsap.to("#title", {
      x: 0,
      duration: 0.7,
    });

    gsap.to(".bottom-title", {
      x: "0%",
      ease: "power2.out",
      duration: 1,
    });

    gsap.to(".index-left-link", {
      x: "0",
      ease: "power2.out",
    });
  }

  return (
    <>
      <div id="__next">
        <Header />
        <main className="main">
          <div className="page">
            <div className="index-content">
              <div className="index-title-container">
                <div id="title" className="index-title-wrapper">
                  <h1 className="index-title">
                    <span>Sophisticated</span>
                    <br />
                    <span className="bottom-title">Skincare</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="index-dotted-square index-left-link">
              <span id="diamond" className="dotted-square"></span>
              <div id="left-link" className="dotted-square__link-wrapper">
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
                  <span className="icon-btn__text font-roobert">
                    CLINICAL RESEARCH
                  </span>
                </button>
              </div>
            </div>
            <div ref={beginRef} className="index-dotted-square index-right-link">
              <span id="diamond" className="dotted-square-2"></span>
              <div className="dotted-square__link-wrapper-2">
                <Link
                  onMouseEnter={handleAnimationsIn}
                  onMouseLeave={handleAnimationsOut}
                  href={"/introduction"}
                  className="dotted-square__link"
                >
                    <Button
                      label={"LET'S BEGIN"}
                      arrow={"right"}
                      order={"label-first"}
                    />
                </Link>
              </div>
            </div>
            <div className="bottom-grid-container">
              <p className="bottom-text font-roobert">
                Premium Custom Skincare For
                <br />
                Faces With Sophisticated Needs
              </p>

              <p className="bottom-text opacity-[0.7]">
                Proprietary Algorithms For
                <br />
                Effective Formula Design
              </p>

              <p className="bottom-text opacity-[0.7]">
                Complete Control over
                <br />
                Skincare ingredients
              </p>
              <p className="bottom-text opacity-[0.7]">
                Expert clinical
                <br />
                diagnostics + guidance
              </p>
              <p className="bottom-text opacity-[0.7]">
                Fully Customizable
                <br />
                from Scratch
              </p>
              <p className="bottom-text opacity-[0.7]">
                FDA / TGA Approved
                <br />
                Compound Pharmacies
              </p>
              <p className="bottom-text opacity-[0.7]">
                Highly Personalized
                <br />
                Experience
              </p>
            </div>
          </div>
          <div className="background-overlay">
            <div className="video--wrapper">
              <video
                className="video--content"
                preload="auto"
                muted
                autoPlay
                loop
              >
                <source src="bubble-animation.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div className="glassy_container"></div>
        </main>
      </div>
    </>
  );
}
