import React from "react";
import { plantSaleYear } from "../shared/config";

function Hero() {
  return (
    <div className="hero">
      <div className="h-32 md:h-64 flex flex-col justify-evenly items-center font-semibold">
        <p className="text-2xl md:text-5xl">Scout Troop 34</p>
        <p className="text-2xl md:text-5xl">Plant Sale</p>
        <p className="hidden md:block text-2xl">{plantSaleYear}</p>
      </div>
    </div>
  );
}

export default Hero;
