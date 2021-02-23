import React from "react";

function BigImage({ variety, name }) {
  return (
    <figure className="flex flex-col items-center">
      <img
        src={variety.image}
        alt={name}
        className="p-1.5 mb-1.5 shadow-md rounded-md w-96"
      />
      <figcaption>{variety.name}</figcaption>
    </figure>
  );
}
export default BigImage;
