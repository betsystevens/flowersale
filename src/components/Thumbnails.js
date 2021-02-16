import React from "react";

function Thumbnails({ flower, imageHandlers }) {
  const onClick = (index) => {
    imageHandlers.handleClick(index);
  };
  const mouseEnter = (index) => {
    imageHandlers.handleMouseEnter(index);
  };
  const mouseLeave = () => {
    imageHandlers.handleMouseLeave();
  };
  const thumbnails = flower.variety.map((variety, index) => {
    return (
      <div
        key={index}
        onClick={() => onClick(index)}
        onTouchStart={() => onClick(index)}
        onMouseEnter={() => mouseEnter(index)}
        onTouchEnd={() => mouseEnter(index)}
        onMouseLeave={mouseLeave}
      >
        <img
          src={variety.image}
          alt={variety.name}
          className="shadow-md rounded-md p-1 w-20 cursor-pointer"
        />
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-2">{thumbnails}</div>;
}

export default Thumbnails;
