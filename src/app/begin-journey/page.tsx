"use client";

import Background from "@/components/globals/Background";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page: React.FC = () => {


    const router = useRouter();
    const [clicked, setClicked] = useState(false);


    const handleClicked = () => {
        setClicked(!clicked);
        setTimeout(() => {
            router.push("/login");
        }, 1000);
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
            <div className="w-full relative z-80 flex flex-col gap-[clamp(0px,7.1vh,22px)] items-center justify-center -mt-[81px] pb-[20px]">
                <h1 
                    className="text-[var(--Heading-color,#555)] text-center text-[72px] font-normal leading-normal tracking-[-2.16px] lowercase"
                    style={{ fontFamily: "var(--font-outfit)" }}
                >
                    adler
                </h1>
                <div 
                    className="text-[#555] text-center text-base font-normal leading-normal mb-[clamp(0px,3.6vh,32px)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Where your world reflects your soul
                </div>
                <button
                    onClick={handleClicked}
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="relative rounded-full w-[262px] h-[45px] mb-[clamp(0px,7.1vh,62px)] cursor-pointer"
                >
                    <span
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "9999px",
                            border: "#FFFFFF",
                            backgroundColor: "#EEEEFA",
                            opacity: 0.3,
                            transition: "box-shadow 0.3s ease-in-out",
                            boxShadow: clicked
                                ? "inset 0px 5px 4px 0 rgba(0, 0, 0, 0.4), inset 0px -6px 4px 0 #FFF"
                                : "0px 4px 4px rgba(17, 17, 17, 0.8), 0px -8px 4px #FFF",
                            zIndex: 0,
                        }}
                    />

                    <span className="relative z-10 flex items-center justify-center h-full text-[14px] font-semibold leading-normal text-[#555]">
                        Begin Journey
                    </span>
                </button>
                <div 
                    className="text-[#555555] text-center text-[11px] font-light leading-[16px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    ©2025 Adler. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Page;