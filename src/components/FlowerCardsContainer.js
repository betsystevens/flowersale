import React, { useState, useEffect } from "react";
import FlowerCards from "./FlowerCards";
import AddedToCartModal from "./AddedToCartModal";
import { FLOWERS } from "../shared/flowers";

function FlowerCardsContainer(props) {
  const flatDetails = FLOWERS.filter(
    (container) => container.container.name === "flat"
  );
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const [price, setPrice] = useState("");
  const flowerInfo = {
    image,
    name,
    variety,
    price,
  };
  useEffect(() => {
    /* reset state variables */
    props.setQuantity(1);
    props.setHoverId(0);
    props.setSelectedId(0);
  });
  function toggleModal() {
    setOpen(!open);
  }
  function updateState(image, name, variety, price) {
    setImage(image);
    setName(name);
    setVariety(variety);
    setPrice(price);
  }
  return (
    <div>
      <FlowerCards
        price={flatDetails[0].container.price}
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
        price={price}
      />
    </div>
  );
}
export default FlowerCardsContainer;
