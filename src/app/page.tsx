"use client";

import Background from "@/components/globals/Background";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      // Redirect to the country selection page after 2 seconds
      window.location.href = "/begin-journey";
    }
    , 5000);

    // Clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <Background
      className="h-screen"
    >
      <div className="absolute inset-0 backdrop-blur-md"/>
      <Image 
        src="/assets/icons/loading-icon.svg"
        alt="Adler Random Chat Logo"
        width={113}
        height={103}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </Background>
  );
}
