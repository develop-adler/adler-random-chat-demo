'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { pretendardFontSetting } from 'src/font';

type Country = {
    code: string;
    name: string;
}

const Page: React.FC = () => {

    const router = useRouter();

    const [countries, setCountries] = useState<Country[]>([]);
    const [recommendedCountries, setRecommendedCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>('global');

    const [clicked, setClicked] = useState(false);

    const handleNextClicked = () => {
        if (selectedCountry) {
            setClicked(true);
            setTimeout(() => {
                router.push('/personal-info')
            }, 1000); 
        } else {
            alert("Please select a country before proceeding.");
        }
    };

    useEffect(() => {
        async function FetchCountries() {
            try {
                const response = await fetch('https://cdn.simplelocalize.io/public/v1/countries');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const countries = await response.json();
                setCountries(countries);
                
                if (Array.isArray(countries)) {
                    const random6 = getRandomItems(countries, 6);
                    setRecommendedCountries(random6);
                }

            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        FetchCountries();
    }, []);

    const getRandomItems = (array: Country[], n: number) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    console.log('Recommended Countries:', recommendedCountries);
    console.log('All Countries:', countries);

    return (
            <div className='bg-[#EEEEFA] w-full h-screen flex flex-col p-[24px] pt-[50px] relative'>
                <div
                    className='text-[18px] font-[700] text-black text-[18px] leading-normal'
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                >
                    Choose your country
                </div>
                <div
                    className='text-[12px] font-[200] text-black whitespace-pre-wrap leading-normal'
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                >
                    Selecting your country helps us find better and relevant results 
                </div>
                <div
                    className="text-[12px] font-[500] text-black whitespace-pre-wrap leading-normal mt-[25px]"
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                >
                    Recommended
                </div>
                <div className='grid grid-cols-3 gap-[10px] mt-[16px]'>
                    {recommendedCountries.map((country, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-center justify-center gap-[4px] h-[34px] border-[1px] rounded-full border-[#EAEAEA] cursor-pointer transition-colors
                                ${selectedCountry === country.code ? 'rounded-[24px] border border-white bg-[rgba(235,234,239,0.3)] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.2)] opacity-100' : 'opacity-50 hover:opacity-100'}
                            `}
                            onClick={() => setSelectedCountry(country.code)}
                        >
                            <div className='flex items-center w-[20px] h-[20px]'>
                                <Image 
                                    src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <span 
                                className='text-[12px] font-[400] w-[55px] text-[#111111] leading-normal truncate'
                                style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                            >{country.name}</span>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-between mt-[32px]'>
                    <div 
                    className='text-black text-center text-[12px] font-medium leading-none'
                    style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                    >
                        All countries
                    </div>
                    <div
                     className='flex items-center gap-[4px]'
                    >
                        <Image 
                        src="/assets/icons/search.svg"
                        alt="Search Icon"
                        width={16}
                        height={16}
                        />
                        <div
                        className="text-[rgba(0,0,0,0.4)] text-center text-[12px] font-medium leading-none"
                        style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                        >
                            Search
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-[10px] mt-[16px] max-h-[47vh] overflow-y-auto'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div
                            className={`
                                flex items-center justify-center gap-[4px] h-[34px] border-[1px] rounded-full border-[#EAEAEA] cursor-pointer transition-colors
                                ${selectedCountry === 'global' ? 'rounded-[24px] border border-white bg-[rgba(235,234,239,0.3)] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.2)] opacity-100' : 'opacity-50 hover:opacity-100'}
                            `}
                            onClick={() => setSelectedCountry('global')}
                        >
                            <div className='flex items-center w-[17px] h-[17px]'>
                                <Image 
                                    src={`/assets/icons/global.svg`}
                                    alt={`global flag`}
                                    width={17}
                                    height={17}
                                />
                            </div>
                            <span 
                                className='text-[12px] font-[400] w-[55px] text-[#111111] leading-normal truncate'
                                style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                            >Global</span>
                        </div>
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-center justify-center gap-[4px] h-[34px] border-[1px] rounded-full border-[#EAEAEA] cursor-pointer transition-colors
                                ${selectedCountry === country.code ? 'rounded-[24px] border border-white bg-[rgba(235,234,239,0.3)] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.2)] opacity-100' : 'opacity-50 hover:opacity-100'}
                            `}
                            onClick={() => setSelectedCountry(country.code)}
                        >
                            <div className='flex items-center w-[20px] h-[20px]'>
                                <Image 
                                    src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <span 
                                className='text-[12px] font-[400] w-[55px] text-[#111111] leading-normal truncate'
                                style={{ fontFamily: pretendardFontSetting.style.fontFamily }}
                            >{country.name}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[33px] w-[calc(100vw-48px)] flex justify-center">
                    <button
                        onClick={handleNextClicked}
                        style={{ fontFamily: "var(--font-inter)" }}
                        className="relative rounded-full w-full max-w-[262px] h-[50px] cursor-pointer"
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
                            Continue
                        </span>
                    </button>
                </div>
            </div>
        );
};

export default Page;