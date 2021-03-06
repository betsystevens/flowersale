import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";
import { FLOWERS } from "../shared/flowers";
import {
  getPrice,
  currency,
  getContainerDescription,
} from "../utils/utilities";

function NameDescription({ name, containerDescription, price }) {
  return (
    <div className="flex flex-col px-1.5 min-w-full">
      <p
        className="font-extrabold text-lg 
                    text-center  md:text-left 
                    mb-2 md:mb-0 "
      >
        {name}
      </p>
      <div className="flex justify-between">
        <p>{containerDescription}</p>
        <p>${currency(price)}</p>
      </div>
    </div>
  );
}

function CheckoutOrContinue({ goBack }) {
  return (
    <div className="flex justify-evenly w-64 md:flex-col md:justify-start md:w-auto">
      <Link to={`/cart`}>
        <p className="md:mt-10 underline hover:text-purple-500">Checkout</p>
      </Link>
      <button
        className="cursor-pointer md:self-start md:mt-10"
        onClick={() => {
          goBack();
        }}
      >
        <p className="underline hover:text-purple-500">Continue Shopping</p>
      </button>
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
          className="inline-block m-auto px-2 mr-1 h-3/4 
                      pointer-events-none"
        ></img>
        Add To Cart
      </button>
    </div>
  );
}
const getFlower = (flowerId) => {
  const flower = FLOWERS.filter((flower) => flower.id === Number(flowerId))[0];
  return flower;
};
const getGroup = (path) => {
  return path.match(/[a-zA-Z]+/)[0];
};
function FlowerDetails({ flowerId, path, updateCart }) {
  const [hoverId, setHoverId] = useState(0);
  const [selectedVariety, setSelectedVariety] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const flower = getFlower(flowerId);
  const { name, variety, container } = flower;
  const price = getPrice(container);
  const containerDescription = getContainerDescription(container);
  const flowerGroup = getGroup(path);

  const history = useHistory();

  const goBack = () => {
    history.push({
      pathname: `/${flowerGroup}`,
      state: { flowerId: flowerId },
    });
  };
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
  const quantityHandler = (qty) => {
    if (qty) setQuantity(qty);
  };

  const openAddedToCartModal = (e) => {
    e.target.blur();
    if (!open) {
      setOpen(true);
      window.addEventListener("click", closeModal);
      updateCart(
        name,
        variety[selectedVariety].name,
        container,
        flowerGroup,
        quantity
      );
    }
  };
  const closeModal = (e) => {
    if (!(e.target.id === "addtocart")) {
      // warning memory leak, cancel all subscriptions ...
      setOpen(false);
      window.removeEventListener("click", closeModal);
    }
  };
  return (
    <div className="mt-16 flex flex-col items-center">
      {/* wide details */}
      <div className="hidden md:block">
        <div className={"detailsGrid " + (open ? "opacity-50" : "opacity-100")}>
          <NameDescription
            name={name}
            containerDescription={containerDescription}
            price={price}
          />
          <p></p>
          <p></p>
          <BigImage variety={variety[hoverId]} name={name} />
          <div className="flex flex-col items-center">
            <div className="pt-1 h-65">
              <Thumbnails flower={flower} imageHandlers={imageHandlers} />
            </div>
            <div className="flex justify-between pt-6">
              <Quantity quantity={quantity} callback={quantityHandler} />
              <AddToCartButton openAddedToCartModal={openAddedToCartModal} />
            </div>
          </div>
          <CheckoutOrContinue flowerId={flowerId} goBack={goBack} />
        </div>
      </div>
      {/* stacked details */}
      <div className="block md:hidden">
        <div className="mb-20 p-2 flex w-72 flex-col items-center shadow-md rounded-md">
          <NameDescription
            name={name}
            containerDescription={containerDescription}
            price={price}
          />
          <div className="mb-4">
            <BigImage variety={variety[hoverId]} name={name} />
          </div>
          <div className="mb-2 w-64">
            <Thumbnails flower={flower} imageHandlers={imageHandlers} />
          </div>
          <div className="flex py-6">
            <Quantity quantity={quantity} callback={quantityHandler} />
            <AddToCartButton openAddedToCartModal={openAddedToCartModal} />
          </div>
          <CheckoutOrContinue flowerId={flowerId} goBack={goBack} />
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
export default FlowerDetails;
