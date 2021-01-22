import React, { useState } from "react";
import FlowerCards from "./FlowerCards";
import AddedToCartModal from "./AddedToCartModal";

function FlowerCardsContainer({ updateCart, path }) {
  let flowerGroup = path.substring(1);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  // const [container, setContainer] = useState(flowerGroup);
  const [container, setContainer] = useState("");
  const flowerInfo = {
    image,
    name,
    variety,
    container,
  };
  function updateAddedModalState(image, name, variety, container) {
    setImage(image);
    setName(name);
    setVariety(variety);
    setContainer(container);
  }
  function toggleModal() {
    setOpen(!open);
  }
  return (
    <div>
      <FlowerCards
        flowerGroup={flowerGroup}
        updateAddedModalState={updateAddedModalState}
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
        container={container}
      />
    </div>
  );
}
export default FlowerCardsContainer;
