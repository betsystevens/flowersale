import React from "react";
import { FLATS } from "../shared/flats";

function Thumbnails({ flowerId, imageHandlers }) {
  const thumbnails = FLATS[flowerId].variety.map((variety, index) => {
    return (
      <div
        key={index}
        onClick={() => imageHandlers.handleClick(index)}
        onMouseEnter={() => imageHandlers.handleMouseEnter(index)}
        onMouseLeave={imageHandlers.handleMouseLeave}
      >
        <img
          src={variety.image}
          alt={variety.name}
          className="shadow-md rounded-md p-1 w-20"
        />
      </div>
    );
  });
  return (
    <div className="pt-4 h-65 grid grid-rows-2 grid-cols-3 gap-2">
      {thumbnails}
    </div>
  );
}

export default Thumbnails;
