"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const [name, setName] = useState("");
  const router = useRouter()

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
      gsap.fromTo(
        ".welcome",
        { opacity: 0, delay: 1 },
        { opacity: 1, delay: 1 }
      );
    } else if(!savedName) {
        router.push('/introduction')
    }
  }, []);

  return (
    <div className="flex flex-col welcome opacity-[0] flex-auto">
      <Header btnOn={true} />
      <main className="relative flex flex-col flex-auto">
        <div className="page">
          <div className="header__padding-welcome--container"></div>
          <div>
            <h1
              className={`welcome__title transition-all uppercase max-w-[1000px] text-ellipsis whitespace-nowrap overflow-hidden`}
            >
              {name && <span>WELCOME {name.trim().split(" ")[0]}</span>}
              <br />
            </h1>
            <span
              style={{ fontSize: "clamp(14px, 4px + .625vw, 16px)" }}
              className={`welcome__subtitle ${
                !name && "opacity-[0]"
              } transition-all`}
            >
              Pick one of the two options to
              <br />
              navigate our skincare platform.
            </span>
            <div className="32xl:scale-100 32xl:max-w-[80%] 32xl:mt-[88px] xl:w-full lg:fixed origin-top mt-[30px] flex-col lg:w-screen w-full 2xl:scale-100 2xl:max-w-[80%] 2xl:mt-[88px] lg:scale-90 xl:scale-95 xl:relative lg:flex-row lg:origin-center gap-6 justify-between items-center flex mx-auto inset-0">
              <div className="sm:max-w-[448px] opacity-[.5] bg-white border-[#1a1b1c] border-solid border cursor-not-allowed w-full h-[552px] relative">
                <div className="p-4">
                  <div className="justify-between items-center w-full flex">
                    <p className="text-black tracking-[-.02em] my-0 leading-[18px] text-sm font-roobert">
                      Option 1
                    </p>
                    <div className="w-[20px] h-[20px] border-solid border black__diamond duration-500 transition-all justify-center border-black items-center cursor-not-allowed rotate-45 flex relative">
                      <div className="w-[14px] h-[14px] bg-black ease-in-out duration-500"></div>
                    </div>
                  </div>
                  <h6 className="tracking-[-.02em] leading-8 text-2xl mt-3 mb-0">
                    <p className="max-w-[288px] my-0">
                      Let&apos;s Talk.
                      <span className="font-roobert">
                        {" "}
                        Book a Consult With Our Chemist
                      </span>
                    </p>
                  </h6>
                </div>
                <div className="flex justify-center items-center w-full"></div>
                <div className="h-[37.5px] absolute bottom-0 w-full overflow-hidden transition-all duration-500 ease-in-out">
                  <div className=" bg-[#1A1B1C] w-full transition-all duration-500 ease-in-out h-[1px]"></div>
                  <div className="flex w-full items-center h-full">
                    <button className="w-full text-[16px] cursor-not-allowed font-roobert tracking-[-0.02em] leading-[1.5] items-center flex justify-center">
                      2 SPOTS REMAINING (2/7/23)
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:flex justify-center items-center flex-col hidden">
                <img className="align-middle" src="preffered-cross.svg"></img>
                <p className="opacity-50 text-xs pt-2 my-0 leading-[1rem] text-[#1A1B1C]">
                  EXPLAINER VIDEO
                </p>
              </div>

              <div className="sm:max-w-[448px] ease-in-out welcome__box duration-500 overflow-hidden bg-white border-[#1a1b1c] border-solid border cursor-pointer w-full h-[552px] relative">
                <div className="p-4">
                  <div className="justify-between items-center w-full flex">
                    <p className="text-black tracking-[-.02em] my-0 leading-[18px] text-sm font-roobert">
                      Option 2
                    </p>
                    <div className="w-[20px] h-[20px] border-solid border black__diamond transition-all duration-500 justify-center border-black items-center cursor-pointer rotate-45 flex relative">
                      <div className="w-[14px] h-[14px] bg-black ease-in-out duration-500"></div>
                    </div>
                  </div>
                  <h6 className="tracking-[-.02em] leading-8 text-2xl mt-3 mb-0">
                    <p className="max-w-[288px] my-0">
                      Work With Our Chemistry A.I. To
                      <span className="font-roobert"> Formulate Together</span>
                    </p>
                  </h6>
                </div>
                <div className="flex justify-center items-center w-full"></div>

                <div className="welcome__btn--wrapper h-0 opacity-[0]  absolute bottom-0 w-full   overflow-hidden transition-all duration-500 ease-in-out">
                  {" "}
                  <div className=" welcome__btn bg-[#1A1B1C] w-0 transition-all duration-500 ease-in-out h-[1px]"></div>
                  <div className="flex w-full items-center h-full">
                    <button className="w-full text-[16px] font-roobert tracking-[-0.02em] leading-[1.5] items-center flex justify-center">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
