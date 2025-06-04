"use client";

import Background from "@/components/globals/Background";
import Image from "next/image";
import { useState } from "react";
import { pretendardFontSetting } from "src/font";

const Page: React.FC = () => {


    const [googleClicked, setGoogleClicked] = useState(false);
    const [facebookClicked, setFacebookClicked] = useState(false);
    const [checked, setChecked] = useState(false);


    const handleGoogleClicked = () => {
        setGoogleClicked(!googleClicked);
    }

    const handleFacebookClicked = () => {
        setFacebookClicked(!facebookClicked);
    }

    return (
        <div 
            className="relative min-w-[262px] bg-[#EEEEFA] flex flex-col"
            style={{ height: '100dvh' }}
        >
            <div className="relative h-full max-h-[64%]">
                <div className="absolute bottom-0 z-50 left-0 w-full h-[288px] flex-shrink-0 bg-gradient-to-b from-[rgba(238,238,250,0)] to-[#EEEefa]" />
                <Background className="h-full" />
            </div>
            <div className="w-full relative z-80 flex flex-col gap-[12px] items-center justify-center mt-[30px] pb-[20px]">
                <button
                    onClick={handleGoogleClicked}
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="relative rounded-full w-full max-w-[342px] h-[50px] cursor-pointer"
                >
                    <span
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "9999px",
                            border: "2px #FFFFFF solid",
                            backgroundColor: "#EBEAEF",
                            opacity: 0.3,
                            transition: "box-shadow 0.3s ease-in-out",
                            boxShadow: googleClicked
                                ? "inset 0px 5px 4px rgba(0, 0, 0, 0.4), inset 0px -6px 4px #FFF"
                                : "0px 4px 4px rgba(17, 17, 17, 0.8), 0px -8px 4px #FFF",
                            zIndex: 0,
                        }}
                    />

                    <span className="relative z-10 gap-[5px] flex items-center justify-center h-full text-[14px] font-semibold leading-normal text-[#555]">
                        <Image 
                            src='/assets/imgs/google.png'
                            alt="Google Icon"
                            width={18}
                            height={18}
                        />
                        Sign up using Google
                    </span>
                </button>
                <button
                    onClick={handleFacebookClicked}
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="relative rounded-full w-full max-w-[342px] h-[50px] cursor-pointer"
                >
                    <span
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        border: "1px solid #FAFAFA",
                        backgroundColor: "#4C63A1",
                        boxShadow: facebookClicked
                        ? "inset 0 3px 6px rgba(0, 0, 0, 0.3), inset 0 -4px 4px rgba(255, 255, 255, 0.6)"
                        : "0 2px 4px rgba(0, 0, 0, 0.4)",
                        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
                        zIndex: 0,
                    }}
                    />

                    <span className="relative z-10 gap-[4px] flex items-center justify-center h-full text-[14px] font-semibold leading-normal text-[#F4F4F4]">
                        <Image 
                            src='/assets/imgs/facebook.png'
                            alt="Facebook Icon"
                            width={18}
                            height={18}
                        />
                        Sign up with Facebook
                    </span>
                </button>
                <label className="flex items-center space-x-2 cursor-pointer mt-[11px]">
                  <input
                    type="checkbox"
                    id="custom-checkbox"
                    className="peer hidden"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <div
                    className={`w-4 h-4 rounded-[3px] border border-[0.5px] flex items-center justify-center`}
                    style={
                      checked
                        ? {
                            background:
                              "linear-gradient(318deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.40) 105.18%), #FC2D7C",
                            backgroundBlendMode: "soft-light, normal",
                            boxShadow:
                              "inset -2.5px -2.5px 5px rgba(250, 251, 255, 0.10), inset 2.5px 2.5px 5px #B21E57",
                            borderColor: "rgba(255, 255, 255, 0.4)",
                          }
                        : {
                            background: "#FFFFFF",
                            boxShadow:
                              "inset -2.5px -2.5px 5px rgba(250, 251, 255, 0.10), inset 2.5px 2.5px 5px rgba(17, 17, 17, 0.20)",
                            borderColor: "white",
                          }
                    }
                  >
                    {checked && (
                      <Image 
                        src="/assets/icons/check-icon.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="w-2.5 h-2.5"
                      />
                    )}
                  </div>
                  <span 
                    className={`
                      text-gray-900 
                      text-center 
                      text-[13px] 
                      font-normal 
                      leading-snug 
                      tracking-tight
                    `}
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                    >
                    Join Anonymous
                  </span>
                </label>
                <div 
                    className="
                      text-[#2A3B6E]
                      text-center
                      text-[11px]
                      font-light
                      leading-[16px]
                      whitespace-pre-line
                      mt-[25px]
                    "
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                >
                    By continuing you confirm you’re 18 years old and agree to{'\n'} 
                    our <span className="
                    font-semibold
                    underline
                    decoration-solid
                    decoration-skip-ink-auto
                    decoration-thickness-auto
                    underline-offset-auto
                    underline-position-from-font
                    "
                    >Terms of Service</span> 
                    {' '}and Adler <span className="
                      font-semibold
                      underline
                      decoration-solid
                      decoration-skip-ink-auto
                      decoration-thickness-auto
                      underline-offset-auto
                      underline-position-from-font
                    ">Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Page;