import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";
import { PRICING } from "../shared/pricing";
import { FLOWERS } from "../shared/flowers";

function NameDescription({ name, containerDescription }) {
  return (
    <div>
      <p className="font-extrabold text-lg">{name}</p>
      <p className="pt-2">{`${containerDescription}`}</p>
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
function AddToCartButton({ openAddedToCartModal }) {
  return (
    <div className="inline-block relative">
      <button
        id="addtocart2"
        onClick={(e) => openAddedToCartModal(e)}
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
  const { flowerId, path } = props;
  const flowerGroup = path.match(/[a-z]+/)[0];
  const breadCrumb = "/" + flowerGroup;
  // const all = ALLFLOWERS;
  const flower = FLOWERS.filter((flower) => flower.id === Number(flowerId))[0];
  const { name, variety, container } = flower;
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
  const pricingContainer = PRICING.filter(
    (flower) => flower.container.name === container
  )[0].container;
  const price = pricingContainer.price;

  const [open, setOpen] = useState(false);
  const opacity = open
    ? "gridDetailWrapper opacity-50"
    : "gridDetailWrapper opacity-100";
  const openAddedToCartModal = (e) => {
    e.target.blur();
    if (!open) {
      setOpen(true);
      window.addEventListener("click", closeModal);
      props.updateCart(
        name,
        variety[selectedId].name,
        container,
        flowerGroup,
        quantity
      );
    }
  };
  function closeModal(e) {
    if (!(e.target.id === "addtocart2")) {
      setOpen(false);
      window.removeEventListener("click", closeModal);
    }
  }
  return (
    <div className="mt-16 ml-16">
      <div className={opacity}>
        <NameDescription
          name={name}
          containerDescription={pricingContainer.description}
        />
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
            <AddToCartButton openAddedToCartModal={openAddedToCartModal} />
          </div>
        </div>
      </div>
      <AddedToCartModal
        open={open}
        quantity={quantity}
        image={variety[selectedId].image}
        name={name}
        variety={variety[selectedId].name}
        container={container}
      />
    </div>
  );
}
