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
function CheckoutOrContinue({ breadCrumb }) {
  return (
    <div className="spanRows">
      <div className="flex flex-col">
        <Link to={`/cart`} className="mt-36">
          <p className="underline hover:text-purple-500">Checkout</p>
        </Link>
        <Link to={breadCrumb} className="mt-16">
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
        id="addtocart"
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
const getPricing = (container) => {
  const pot = PRICING.filter((flower) => flower.container.name === container)[0]
    .container;
  return [pot.price, pot.description];
};
const getFlower = (flowerId) => {
  const flower = FLOWERS.filter((flower) => flower.id === Number(flowerId))[0];
  return flower;
};
const getGroup = (path) => {
  return path.match(/[a-z]+/)[0];
};
export default function FlowerDetails(props) {
  const [hoverId, setHoverId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariety, setSelectedVariety] = useState(0);
  const [open, setOpen] = useState(false);

  const { flowerId, path } = props;
  const flower = getFlower(flowerId);
  const { name, variety, container } = flower;
  const [price, containerDescription] = getPricing(container);
  const flowerGroup = getGroup(path);

  useEffect(() => {
    document.title = `${name} - Details`;
  });

  const imageHandlers = {
    handleMouseEnter(index) {
      setHoverId(index);
    },
    handleMouseLeave() {
      setHoverId(selectedVariety);
    },
    handleClick(index) {
      setSelectedVariety(index);
    },
  };
  function quantityHandler(qty) {
    if (qty) setQuantity(qty);
  }

  const openAddedToCartModal = (e) => {
    e.target.blur();
    if (!open) {
      setOpen(true);
      window.addEventListener("click", closeModal);
      props.updateCart(
        name,
        variety[selectedVariety].name,
        container,
        flowerGroup,
        quantity
      );
    }
  };
  function closeModal(e) {
    if (!(e.target.id === "addtocart")) {
      // warning memory leak, cancel all subscriptions ...
      setOpen(false);
      window.removeEventListener("click", closeModal);
    }
  }
  return (
    <div className="mt-16 flex flex-col items-center">
      {/* wide details */}
      <div className="hidden md:block">
        <div className={"detailsGrid " + (open ? "opacity-50" : "opacity-100")}>
          <NameDescription
            name={name}
            containerDescription={containerDescription}
          />
          <p className="pt-10">{`Price: $${(price / 100).toFixed(2)}`}</p>
          <CheckoutOrContinue breadCrumb={"/" + flowerGroup} />
          <BigImage image={variety[hoverId].image} name={name} />
          <div>
            <p>{`Variety: ${variety[hoverId].name}`}</p>
            <div className="pt-1 h-65">
              <Thumbnails
                flowerId={flowerId}
                flower={flower}
                imageHandlers={imageHandlers}
              />
            </div>
            <div className="flex pt-6">
              <Quantity quantity={quantity} callback={quantityHandler} />
              <AddToCartButton openAddedToCartModal={openAddedToCartModal} />
            </div>
          </div>
        </div>
      </div>
      {/* stacked details */}
      <div className="block md:hidden">
        <div className="mb-20 p-2 flex w-72 flex-col items-center shadow-md rounded-md">
          <p className="mb-2 font-extrabold text-lg">{name}</p>
          <p className="mb-2">{`${containerDescription}`}</p>
          <div className="mb-4">
            <BigImage image={variety[hoverId].image} name={name} />
          </div>
          <p className="mb-2">{`Variety: ${variety[hoverId].name}`}</p>
          <div className="mb-2 w-64">
            <Thumbnails
              flowerId={flowerId}
              flower={flower}
              imageHandlers={imageHandlers}
            />
          </div>
          <div className="flex py-6">
            <Quantity quantity={quantity} callback={quantityHandler} />
            <AddToCartButton openAddedToCartModal={openAddedToCartModal} />
          </div>
          <div className="flex justify-evenly w-64">
            <Link to={`/cart`}>
              <p className="underline hover:text-purple-500">Checkout</p>
            </Link>
            <Link to={"/" + flowerGroup}>
              <p className="underline hover:text-purple-500">
                Continue Shopping
              </p>
            </Link>
          </div>
        </div>
      </div>
      <AddedToCartModal
        open={open}
        quantity={quantity}
        image={variety[selectedVariety].image}
        name={name}
        variety={variety[selectedVariety].name}
        container={container}
      />
    </div>
  );
}
