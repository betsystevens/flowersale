import React from "react";

function Thumbnails(props) {
  const thumbnails = props.flower.variety.map((variety, index) => {
    return (
      <div
        key={index}
        onMouseEnter={() => props.onMouseEnter(index)}
        onMouseLeave={() => props.onMouseLeave()}
        onClick={() => props.onClick(index)}
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
