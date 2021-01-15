import React, { useState } from "react";
import FlowerCards from "./FlowerCards";
import AddedToCartModal from "./AddedToCartModal";
import { FLOWERS } from "../shared/flowers";

function FlowerCardsContainer() {
  const flatDetails = FLOWERS.filter(
    (container) => container.container.name === "flat"
  );
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const flowerInfo = {
    image,
    name,
    variety,
  };
  function toggleModal() {
    setOpen(!open);
  }
  function updateState(image, name, variety) {
    setImage(image);
    setName(name);
    setVariety(variety);
  }
  return (
    <div>
      <FlowerCards
        containerDescription={flatDetails[0].container.description}
        flowerInfo={flowerInfo}
        updateState={updateState}
        toggleModal={() => toggleModal()}
      />
      {/* modal initially hidden */}
      <AddedToCartModal
        open={open}
        toggleModal={() => toggleModal()}
        quantity={1}
        image={image}
        name={name}
        variety={variety}
      />
    </div>
  );
}
export default FlowerCardsContainer;
