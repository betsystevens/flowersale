import React, { useState } from "react";
import FlowerCards from "./FlowerCards";
import AddedToCartModal from "./AddedToCartModal";

function FlowerCardsContainer({ updateCart }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const flowerInfo = {
    image,
    name,
    variety,
  };
  function updateState(image, name, variety) {
    setImage(image);
    setName(name);
    setVariety(variety);
  }
  function toggleModal() {
    setOpen(!open);
  }
  return (
    <div>
      <FlowerCards
        flowerInfo={flowerInfo}
        updateState={updateState}
        updateCart={updateCart}
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
