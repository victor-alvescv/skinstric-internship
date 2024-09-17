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
      <div
        style={{ padding: "0 32px 36px 32px" }}
        className="index-page bubble flex flex-col justify-center relative items-center h-[100vh]"
      >
        <video
          className="absolute blur-sm top-0 w-[100%] h-[100%] object-cover z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src="bubble-animation.mp4" type="video/mp4"></source>
        </video>
        <Header />
        <div id="title" className="m-auto  text-center">
          <div>
            <h1 className="max-w-[100%] dynamic--font tracking-[-.07em] leading-[.945] text-[124px]">
              <span className="relative inline-block">Sophisticated</span>
              <br />
              <span
                style={{ marginRight: "0px" }}
                className="relative  bottom-span inline-block"
              >
                Skincare
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-7 justify-items-center mx-[67px] my-0 max-w-[95%] w-full tracking-[-.02em]">
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] font-roobert"
          >
            Premium Custom Skincare For
            <br />
            Faces With Sophisticated Needs
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            Proprietary Algorithms For
            <br />
            Effective Formula Design
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            Complete Control over
            <br />
            Skincare ingredients
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            Expert clinical
            <br />
            diagnostics + guidance
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            Fully Customizable
            <br />
            from Scratch
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            FDA / TGA Approved
            <br />
            Compound Pharmacies
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 7.5384615385px + .6153846154vw, 14px)",
            }}
            className="max-w-[254px] opacity-[0.7]"
          >
            Highly Personalized
            <br />
            Experience
          </p>
        </div>
        <div
          className=" absolute top-[50%] left-[92%] flex items-center gap-x-4"
          style={{ transform: "translate(0%, -50%) translate(0px, -0.1562px)" }}
        >
          <span
            id="diamond"
            className="w-[23.43vw] h-[23.43vw] dotted--square2 absolute top-[50%] left-[92%]"
          ></span>
          <div style={{ transform: "translate3d(-20px, 0, 0)" }}>
            <Link
              href={"/introduction"}
              onMouseEnter={handleAnimationsIn}
              onMouseLeave={handleAnimationsOut}
            >
              <Button
                label={"LET'S BEGIN"}
                arrow={"right"}
                order={"label-first"}
              />
            </Link>
          </div>
        </div>
        <div
          className="research--btn absolute top-[50%] left-[0%] flex items-center gap-x-4"
          style={{ transform: "translate(0%, -50%) translate(0px, -0.0312px)" }}
        >
          <span
            id="diamond"
            style={{ opacity: "0.5" }}
            className="w-[23.43vw] h-[23.43vw] dotted--square absolute top-[50%] left-[0%]"
          ></span>
          <div style={{ transform: "translate3d(20px, 0, 0)" }}>
            <button
              style={{ transform: "translate(0px, 0px)" }}
              disabled
              id="left-link"
              className="cursor-not-allowed opacity-50 text-[#a0a4ab] ml-[32px] inline-flex items-center justify-center dynamic--font3 leading-[1.6] tracking-[-.02em]"
            >
              <span className="shrink-0 h-[24px] w-[24px]">
                <span className="items-center play-icon rotate-[45deg] text-[#a0a4ab] inline-flex justify-center">
                  <IoPlaySharp
                    style={{ padding: "calc( 20px * .35)" }}
                    className="text-[24px] rotate-[140deg]"
                  />
                </span>
              </span>

              <span
                style={{ fontSize: "clamp(10px, 2px + .625vw, 14px)" }}
                className="pl-[18px] font-roobert"
              >
                CLINICAL RESEARCH
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
