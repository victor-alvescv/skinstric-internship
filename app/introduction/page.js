"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import gsap from "gsap";
import Button from "../components/Button";
import axios from "axios";
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import OkButton from "../components/OkButton";
const libraries = ["places"];

export default function Introduction() {
  const [showLabel, setShowLabel] = useState(true);
  const [labelText, setLabelText] = useState(1);
  const [textLength, setTextLength] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phase1, setPhase1] = useState(true);
  const [phase2, setPhase2] = useState(false);
  const [infoArr, setInfoArr] = useState({ name, location });
  const router = useRouter();

  const inputRef = useRef("");
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const labelTextRef = useRef(null);
  const backRef = useRef(null);
  const proceedRef = useRef(null);
  const inputGoogleRef = useRef(null);

  // Google Api
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBhaUyPeQjr0zYkM8HI42Ad1YP5tsH7u50',
    libraries,
  });

  function handleOnPlacesChange() {
    let address = inputGoogleRef.current.getPlaces();
    setLocation(address[0].formatted_address || "");
  }

  // Handle API
  async function handleData() {
    try {
      const apiEndpoint =
        "https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level2";
      const response = await axios.post(apiEndpoint, infoArr);
      console.log("Data successfully submitted:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  // Phase Cases
  function previousPhase() {
    setPhase1(true);
    setShowLabel(false);
    setProceed(true);
  }

  function handleProceed() {
    setShowLabel(true);
    if (name) infoArr.name = name;
    if (location) {
      infoArr.location = location;
      setShowLabel(false);
    }
    console.log(infoArr);
    setPhase2(true);
    setProceed(false);
    setPhase1(false);
  }

  function handleNameKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (phase2) return;
      if (inputRef.current) {
        inputRef.current.blur();
      }
      setProceed(true);
      setShowLabel(true);
      if (name) infoArr.name = name;
      if (location) {
        infoArr.location = location;
        setShowLabel(false);
      }
      console.log(infoArr);
      setPhase2(true);
      setProceed(false);
      setPhase1(false);
    }
  }

  function handleInputAnimations(elem) {
    if (elem === 2) {
      setLabelText(2);
      setShowLabel(false);
      setTextLength(false);
    } else if (elem === 1) {
      if (textLength) {
        setShowLabel(false);
      } else {
        setShowLabel(true);
      }
      setLabelText(1);
    }
  }

  useEffect(() => {
    console.log(textLength);
  }, [textLength]);

  // onChanges
  function handleName(event) {
    setName(event.target.value || "");
    setTextLength(event.target.value.length > 0);
    setProceed(event.target.value.length > 0);
  }

  function handleLocation(event) {
    setLocation(event.target.value || "");
    setTextLength(event.target.value.length > 0);
    setProceed(event.target.value.length > 0);
  }

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1 },
    });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { yPercent: 100, duration: 1, ease: "power4.out" },
        { yPercent: 0, duration: 1, ease: "power4.out" }
      );
    }
    const formItems = [];
    if (formRef.current) {
      formItems.push(formRef.current);
    }
    if (labelTextRef.current) {
      formItems.push(labelTextRef.current);
    }

    if (formItems.length > 0) {
      tl.fromTo(
        formItems,
        { clipPath: "inset(0% 50% 0% 50%)" },
        { clipPath: "inset(0% 0% 0% 0%)" },
        0
      );
    }

    if (backRef.current) {
      tl.fromTo(
        backRef.current,
        {
          transform: "translate(20px)",
          opacity: 0,
        },
        { transform: "translate(0px)", opacity: 1 }
      );
    }
  }, []);

  return (
    <div className="flex flex-auto flex-col h-[100vh]">
      <Header className="pl-[32px]" />
      <main className="relative flex flex-auto flex-col">
        <div className="overflow-clip flex flex-auto flex-col pb-[36px] relative ml-auto mr-auto px-[32px] w-full">
          <div
            style={{
              fontSize: "clamp(10px, -2px + .9375vw, 16px)",
            }}
            className="block overflow-hidden absolute left-[32px] top-[86px]"
          >
            <h1 ref={titleRef} className="font-roobert tracking-[-.03em]">
              TO START ANALYSIS
            </h1>
          </div>
          <div
            style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
            className="left-[50%] absolute top-[50%] z-[-1] translate"
          >
            <span
              style={{ transform: "rotate(45deg)" }}
              className="w-[23.43vw] dotted-span-square dotted--square h-[23.43vw] block relative will-change-transform"
            ></span>
          </div>
          <div
            style={{ transform: "translate(-50%, -50%)" }}
            className="flex items-center flex-col justify-center left-[50%] absolute text-center top-[50%]"
          >
            <div
              style={{
                clipPath: "inset(0%)",
                fontSize: "clamp(10px, -6px + 1.5625vw, 14px)",
              }}
              ref={labelTextRef}
              className="bottom-[100%] leading-[1.71] tracking-[0] mb-[2px] opacity-[.4] absolute"
            >
              {labelText === 1
                ? "CLICK TO TYPE"
                : phase1
                ? "INTRODUCE YOURSELF"
                : "WHERE ARE YOU FROM?"}
            </div>
            {phase1 ? (
              <form // name
                ref={formRef}
                style={{
                  clipPath: "inset(0%)",
                }}
              >
                <div className="relative">
                  <input
                    style={{
                      width: "calc((18ch - 5.5ch))",
                      fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                    }}
                    onFocus={() => handleInputAnimations(2)}
                    onBlur={() => handleInputAnimations(1)}
                    onChange={handleName}
                    onKeyDown={handleNameKeyDown}
                    value={name || ""}
                    ref={inputRef}
                    className="border-b-[1px] bg-transparent border-[#1a1b1c] py-[5px] text-center outline-none text-[#1a1b1c] border-solid leading-[1] tracking-[-.07em]"
                    type="text"
                  ></input>
                  <label
                    id="name-label"
                    ref={labelRef}
                    style={{
                      width: `calc((18ch - 5.5ch))`,
                      fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                    }}
                    className={`text-[#1a1b1c] ${
                      showLabel ? "opacity-[1]" : "opacity-[0]"
                    } text-center leading-[1.33] left-0 top-[5px] absolute pointer-events-none tracking-[-.07em]`}
                  >
                    Introduce yourself
                  </label>

                  <div
                    style={{
                      fontSize:
                        "clamp(10px, 5.4285714286px + .4464285714vw, 14px)",
                    }}
                    className="min-h-[1.2em] mt-[.6em] leading-[1.2] tracking-[0] "
                  ></div>
                </div>
              </form>
            ) : (
              // location
              <form
                ref={formRef}
                style={{
                  clipPath: "inset(0%)",
                }}
              >
                <div className="relative">
                  {isLoaded && (
                    <StandaloneSearchBox
                      onLoad={(ref) => (inputGoogleRef.current = ref)}
                      onPlacesChanged={handleOnPlacesChange}
                    >
                      <input
                        style={{
                          width: "calc((21ch - 5.5ch))",
                          fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                        }}
                        placeholder={
                          !textLength && !showLabel ? "Enter a location" : ""
                        }
                        onFocus={() => handleInputAnimations(2)}
                        onBlur={() => handleInputAnimations(1)}
                        onChange={handleLocation}
                        onKeyDown={handleNameKeyDown}
                        ref={inputRef}
                        className="border-b-[1px] bg-transparent border-[#1a1b1c] py-[5px] text-center outline-none text-[#1a1b1c] border-solid leading-[1] tracking-[-.07em]"
                        type="text"
                        value={location || ""}
                      ></input>
                    </StandaloneSearchBox>
                  )}
                  <label
                    id="name-label"
                    ref={labelRef}
                    style={{
                      width: `calc((21ch - 5.5ch))`,
                      fontSize: "clamp(44px, 12px + 2.5vw, 60px)",
                    }}
                    className={`text-[#1a1b1c] ${
                      showLabel ? "opacity-[1]" : "opacity-[0]"
                    } text-center leading-[1.33] left-0 top-[5px] absolute pointer-events-none tracking-[-.07em]`}
                  >
                    Where are you from?
                  </label>

                  <div
                    style={{
                      fontSize:
                        "clamp(10px, 5.4285714286px + .4464285714vw, 14px)",
                    }}
                    className="min-h-[1.2em] mt-[.6em] leading-[1.2] tracking-[0] "
                  ></div>
                </div>
              </form>
            )}
          </div>

          <div className="items-center flex mt-auto">
            <Link
              ref={backRef}
              style={{ flex: "0 1 25%" }}
              className="mr-auto pr-[10px]"
              href={phase1 ? "/" : ""}
              onClick={previousPhase}
            >
              <Button label={"BACK"} arrow={"left"} order={"icon-first"} />
            </Link>

            <div
              style={{ flex: "0 1 25%" }}
              className="ml-auto flex justify-end pl-[10px]"
            >
              <Link
                href={"/introduction"}
                className={` ${proceed ? "opacity-1" : "opacity-0"} `}
                onClick={handleProceed}
                ref={proceedRef}
              >
                <Button
                  label={"PROCEED"}
                  arrow={"right"}
                  order={"label-first"}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <OkButton />
    </div>
  );
}
