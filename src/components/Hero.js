import React from "react";
import { plantSaleYear } from "../shared/config";

function Hero(props) {
  return (
    <div className="hero">
      <div className="flex flex-col items-center">
        <p className="mb-4 text-5xl font-semibold">Scout Troop 34</p>
        <p className="mb-5 text-5xl font-semibold">Plant Sale</p>
        <p className="text-2xl font-semibold">{plantSaleYear}</p>
      </div>
    </div>
  );
}

export default Hero;
