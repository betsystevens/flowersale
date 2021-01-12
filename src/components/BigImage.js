import React from "react";

function BigImage({ image, name }) {
  return (
    <img src={image} alt={name} className="p-1.5 shadow-md rounded-md w-96" />
  );
}
export default BigImage;
