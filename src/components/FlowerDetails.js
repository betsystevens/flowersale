import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";
import { PRICING } from "../shared/pricing";
import { ALLFLOWERS } from "../shared/allFlowers";

function NameDescription({ name, description }) {
  return (
    <div>
      <p className="font-extrabold text-lg">{name}</p>
      <p className="pt-2">{`${description}`}</p>
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
/**
 * * todo: rename 'newContainer' to something meaningfull
 * * todo: look at references to 'container',
 * * todo: need some clarification on what these variable names refer to
 */
export default function FlowerDetails(props) {
  const { flowerId, path } = props;
  const flowerGroup = path.match(/[a-z]+/)[0];
  const breadCrumb = "/" + flowerGroup;
  const all = ALLFLOWERS;
  const flower = all.filter((flower) => flower.id === Number(flowerId))[0];

  const variety = flower.variety;
  const name = flower.name;
  const newContainer = flower.container;

  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    document.title = `${name} - Details`;
  });
  const imageHandlers = {
    handleMouseEnter(index) {
      setHoverId(index);
    },
    handleMouseLeave() {
      setHoverId(selectedId);
    },
    handleClick(index) {
      setSelectedId(index);
    },
  };
  function quantityHandler(qty) {
    if (qty) setQuantity(qty);
  }
  const container = PRICING.filter(
    (flower) => flower.container.name === newContainer
  )[0].container;
  const price = container.price;

  const [open, setOpen] = useState(false);
  const opacity = open
    ? "gridDetailWrapper opacity-50"
    : "gridDetailWrapper opacity-100";
  const toggleModal = (e) => {
    e.target.blur();
    if (!open) {
      props.updateCart(
        name,
        variety[selectedId].name,
        newContainer,
        flowerGroup,
        quantity
      );
    }
    setOpen(!open);
  };
  return (
    <div className="mt-16 ml-16">
      <div className={opacity}>
        <NameDescription name={name} description={container.description} />
        <p className="pt-10">{`Price: $${(price / 100).toFixed(2)}`}</p>
        <CheckoutOrContinue breadCrumb={breadCrumb} />
        <BigImage image={variety[hoverId].image} name={name} />
        <div>
          <p className="topRow">{`Variety: ${variety[hoverId].name}`}</p>
          <Thumbnails
            flowerId={flowerId}
            flower={flower}
            imageHandlers={imageHandlers}
          />
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
        container={newContainer}
      />
    </div>
  );
}
