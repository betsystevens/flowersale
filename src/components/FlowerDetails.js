import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";
import { FLOWERS } from "../shared/flowers";
import { FLATS } from "../shared/flats";

function NameDescription({ name, description }) {
  return (
    <div>
      <p className="font-extrabold text-lg">{name}</p>
      <p className="pt-2">{`Flat - ${description}`}</p>
    </div>
  );
}
function CheckoutOrContinue(props) {
  return (
    <div className="spanRows">
      <div className="flex flex-col">
        <Link to={`/cart`} className="mt-36">
          <p className="underline hover:text-purple-500">Checkout</p>
        </Link>
        <Link to={props.breadCrumb} className="mt-16">
          <p className="underline hover:text-purple-500">Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
}
function AddToCartButton({ toggleModal }) {
  return (
    <div className="inline-block relative">
      <button
        onClick={(e) => toggleModal(e)}
        className="border-2 border-gray-200 bg-gray-100 rounded 
                        h-7 pr-2 ml-6 text-sm
                        hover:text-purple-500"
      >
        <img
          src="/assets/icons/Cart64x40.svg"
          alt="shopping cart"
          className="inline-block m-auto px-2 mr-1 h-3/4 "
        ></img>
        Add To Cart
      </button>
    </div>
  );
}
export default function FlowerDetails(props) {
  const { flowerId } = props;
  const variety = FLATS[flowerId].variety;
  const name = FLATS[flowerId].name;

  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [hoverVariety, setHoverVariety] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");
  const [quantity, setQuantity] = useState(1);

  const imageHandlers = {
    handleMouseEnter(index) {
      const varietyName = variety[index].name;
      setHoverVariety(varietyName);
      setHoverId(index);
    },
    handleMouseLeave() {
      setHoverVariety(selectedVariety);
      setHoverId(selectedId);
    },
    handleClick(index) {
      const varietyName = variety[index].name;
      setSelectedVariety(varietyName);
      setSelectedId(index);
    },
  };
  function quantityHandler(qty) {
    setQuantity(qty);
  }
  const container = FLOWERS.filter(
    (flower) => flower.container.name === "flat"
  )[0].container;
  const price = container.price;

  const [open, setOpen] = useState(false);
  const opacity = open
    ? "gridDetailWrapper opacity-50"
    : "gridDetailWrapper opacity-100";
  const toggleModal = (e) => {
    e.target.blur();
    if (!open) {
      props.updateCart(name, variety[selectedId].name, quantity);
    }
    setOpen(!open);
  };
  return (
    <div className="mt-16 ml-16">
      <div className={opacity}>
        <NameDescription name={name} description={container.description} />
        <p className="pt-10">{`Price: $${(price / 100).toFixed(2)}`}</p>
        <CheckoutOrContinue breadCrumb={props.breadCrumb} />
        <BigImage image={variety[hoverId].image} name={name} />
        <div>
          <p className="topRow">{`Variety: ${variety[hoverId].name}`}</p>
          <Thumbnails flowerId={flowerId} imageHandlers={imageHandlers} />
          <div className="flex pt-6">
            <Quantity quantity={quantity} callback={quantityHandler} />
            <AddToCartButton toggleModal={toggleModal} />
          </div>
        </div>
      </div>
      <AddedToCartModal
        open={open}
        toggleModal={(e) => toggleModal(e)}
        quantity={quantity}
        image={variety[selectedId].image}
        name={name}
        variety={variety[selectedId].name}
      />
    </div>
  );
}
