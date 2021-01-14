import React from "react";
import { FLATS } from "../shared/flats";

function Thumbnails({ flowerId, imageHandlers }) {
  const onClick = (index) => {
    imageHandlers.handleClick(index);
  };
  const mouseEnter = (index) => {
    imageHandlers.handleMouseEnter(index);
  };
  const mouseLeave = () => {
    imageHandlers.handleMouseLeave();
  };
  const thumbnails = FLATS[flowerId].variety.map((variety, index) => {
    return (
      <div
        key={index}
        onClick={() => onClick(index)}
        onMouseEnter={() => mouseEnter(index)}
        onMouseLeave={mouseLeave}
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
