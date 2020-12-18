import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddedToCart from "./AddedToCart";

function ActionButton(props) {
  if (props.varietyCount === 1) {
    return (
      <div>
        <button
          className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button"
          onClick={props.toggleOpen}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <Link to={`/flats/${props.flatId}`}>
        <button className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button">
          View Options
        </button>
      </Link>
    );
  }
}
function FlowerCards(props) {
  const [open, setOpen] = useState(false);
  const [addedImage, setAddedImage] = useState("");
  const [addedName, setAddedName] = useState("");
  const [addedVariety, setAddedVariety] = useState("");
  const [addedPrice, setAddedPrice] = useState("");
  function toggleOpen(image, name, variety, price) {
    setOpen(!open);
    setAddedImage(image);
    setAddedName(name);
    setAddedVariety(variety);
    setAddedPrice(price);
  }
  const flatDetails = props.flowers.filter(
    (flower) => flower.container.name === "flat"
  );
  const price = flatDetails[0].price;
  const containerDetails = flatDetails[0].container.description;
  const flatCards = props.flats.map((flat) => {
    const variety = flat.variety[0].name;
    const image = flat.variety[0].image;
    const varietyCount = flat.variety.length;
    const varietyDetails =
      varietyCount === 1
        ? flat.variety[0].name
        : `${flat.variety.length} varieties`;
    return (
      <div key={flat.id}>
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <div>
            <img className="px-4 pt-4 pb-6" src={image} alt={variety} />
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="font-extrabold text-lg">{flat.name}</p>
            <p className="pt-1">{`${varietyDetails}`}</p>
            <p className="pt-1">{`Price - $${price}`}</p>
            <p className="pt-1">{`${containerDetails}`}</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 pb-7">
            <ActionButton
              open={open}
              varietyCount={varietyCount}
              toggleOpen={() =>
                toggleOpen(image, flat.name, varietyDetails, price)
              }
              flatId={flat.id}
            />
          </div>
        </div>
        <AddedToCart
          open={open}
          closeAddedModal={() => toggleOpen()}
          quantity={1}
          image={addedImage}
          name={addedName}
          variety={addedVariety}
          price={addedPrice}
        />
      </div>
    );
  });

  return <div className="flex-center">{flatCards}</div>;
}

export default FlowerCards;
