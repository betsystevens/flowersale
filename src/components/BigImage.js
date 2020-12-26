import React from "react";

function BigImage(props) {
  return (
    <img
      src={props.flower.image}
      alt={props.flower.name}
      className="p-1.5 shadow-md rounded-md w-96"
    />
  );
}
export default BigImage;
