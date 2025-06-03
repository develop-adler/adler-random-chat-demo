"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { pretendardFontSetting } from "src/font";

const Page: React.FC = () => {

  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [clicked, setClicked] = useState(false);

  const handleNextClicked = () => {
    if (selectedGender) {
      setClicked(true);
      setTimeout(() => {
        router.push("/country-selection");
      }, 1000); 
    } else {
      alert("Please select a gender before proceeding.");
    }
  }

    return (
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#EEEEFA]">
        <div className="w-full flex flex-col gap-[10px] -mt-[50px] items-center justify-center">
          <div 
            className={`text-black text-[18px] font-bold leading-normal`}
            style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
          >
            Select Your Gender
          </div>
          <div 
            className={`text-black whitespace-pre-wrap text-center text-[12px] font-extralight leading-normal`}
            style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
          >
            Choose your gender for more personalized{'\n'} and accurate match results
          </div>
          <button
              onClick={() => {setSelectedGender('male')}}
              style={{ fontFamily: "var(--font-inter)" }}
              className="relative rounded-full w-full max-w-[262px] h-[50px] mt-[22px] cursor-pointer"
              >
              {/* Background with opacity and shadows */}
              <span
                  aria-hidden="true"
                  style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  border: `${selectedGender === 'male' ? '2px solid #FFF' : '1px solid #9FABD2'}`,
                  backgroundColor: "rgba(42, 59, 110, 0.12)",
                  opacity: 0.3,
                  boxShadow: selectedGender === 'male'
                      ? "0px -2px 4px 0px #FFF inset, 0px 5px 4px 0px rgba(0, 0, 0, 0.40) inset"
                      : "0px 4px 4px rgba(17, 17, 17, 0.80), 0px -8px 4px #FFF",
                  zIndex: 0,
                  }}
              />
              {/* Text on top, fully opaque */}
              <span 
                className="relative z-10 gap-[4px] flex items-center justify-center h-full text-[#12B2D2] text-[12px] font-semibold leading-normal" 
                style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
              >
                  <Image 
                      src='/assets/icons/male.svg'
                      alt="male icon"
                      width={30}
                      height={30}
                  />
                  Male
              </span>
          </button>
          <button
              onClick={() => {setSelectedGender('female')}}
              style={{ fontFamily: "var(--font-inter)" }}
              className="relative rounded-full w-full mt-[5px] max-w-[262px] h-[50px] cursor-pointer"
              >
              {/* Background with opacity and shadows */}
              <span
                  aria-hidden="true"
                  style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  border: `${selectedGender === 'female' ? '2px #FFF' : '1px #9FABD2'} solid`,
                  backgroundColor: "#EBEAEF",
                  opacity: 0.3,
                  boxShadow: selectedGender === 'female'
                      ? "0px -2px 4px 0px #FFF inset, 0px 5px 4px 0px rgba(0, 0, 0, 0.40) inset"
                      : "0px 4px 4px rgba(17, 17, 17, 0.80), 0px -8px 4px #FFF",
                  zIndex: 0,
                  }}
              />
          
              {/* Text on top, fully opaque */}
              <span 
                className="relative z-10 gap-[4px] flex items-center justify-center h-full text-[#9C45FF] text-[12px] font-semibold leading-normal" 
                style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
              >
                  <Image 
                      src='/assets/icons/female.svg'
                      alt="female icon"
                      width={30}
                      height={30}
                  />
                  Female
              </span>
          </button>
        </div>
        <div className="absolute bottom-[33px] w-full max-w-[262px] w-full h-[50px]">
            <button
              onClick={handleNextClicked}
              style={{ fontFamily: "var(--font-inter)" }}
              className="relative rounded-full w-full mt-[5px] max-w-[262px] h-[50px] cursor-pointer"
              >
              {/* Background with opacity and shadows */}
              <span
                  aria-hidden="true"
                  style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  border: `${clicked ? '2px #FFF' : '1px #9FABD2'} solid`,
                  backgroundColor: "rgba(42, 59, 110, 0.12)",
                  opacity: 0.3,
                  boxShadow: clicked
                      ? "0px -2px 4px 0px #FFF inset, 0px 5px 4px 0px rgba(0, 0, 0, 0.40) inset"
                      : "0px 4px 4px rgba(17, 17, 17, 0.80), 0px -8px 4px #FFF",
                  zIndex: 0,
                  }}
              />
          
              {/* Text on top, fully opaque */}
              <span 
                className="relative z-10 gap-[4px] flex items-center justify-center h-full text-[#2F314E] text-[14px] font-semibold leading-normal" 
                style={{ fontFamily: "var(--font-inter)" }}
              >
                  Next
              </span>
          </button>
        </div>
      </div>
    )
}

export default Page;

