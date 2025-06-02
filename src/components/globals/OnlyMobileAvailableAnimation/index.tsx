"use client";

import Player from "lottie-react";
import animationData from "#/assets/bear.json";

export default function OnlyMobileAvailableAnimation() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Player
        autoplay
        loop
        animationData={animationData}
        style={{ width: 300, height: 300 }}
      />
      <p className="text-2xl font-semibold text-gray-700 tracking-wide">Oops! This design is tailored for mobile only.</p>
    </div>
  );
}
