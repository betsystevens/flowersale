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

function NameDescription({ name, containerDescription }) {
  return (
    <div>
      <p
        className="font-extrabold text-lg 
                    text-center  md:text-left 
                    mb-2 md:mb-0 "
      >
        {name}
      </p>
      <p className="mb-2 md:mb-0 md:pt-2">{`${containerDescription}`}</p>
    </div>
  );
}

function CheckoutOrContinue({ goBack }) {
  return (
    <div className="mb-3">
      <div className="flex justify-evenly w-64 md:flex-col md:w-auto">
        <Link to={`/cart`} className="md:mt-36">
          <p className="underline hover:text-purple-500">Checkout</p>
        </Link>
        <button
          className="md:mt-16 md:self-start"
          onClick={() => {
            goBack();
          }}
        >
          <p className="underline hover:text-purple-500">Continue Shopping</p>
        </button>
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
const getFlower = (flowerId) => {
  const flower = FLOWERS.filter((flower) => flower.id === Number(flowerId))[0];
  return flower;
};
const getGroup = (path) => {
  return path.match(/[a-zA-Z]+/)[0];
};
function FlowerDetails({ flowerId, path, updateCart }) {
  const [hoverId, setHoverId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariety, setSelectedVariety] = useState(0);
  const [open, setOpen] = useState(false);

  const flower = getFlower(flowerId);
  const { name, variety, container } = flower;
  const price = getPrice(container);
  const containerDescription = getContainerDescription(container);
  const flowerGroup = getGroup(path);

  const history = useHistory();

  const goBack = () => {
    console.log(`${flowerGroup} ${flowerId}`);
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
          />
          <p className="pt-10">{`Price: $${currency(price)}`}</p>
          <div className="spanRows">
            <CheckoutOrContinue flowerId={flowerId} goBack={goBack} />
          </div>
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
          <NameDescription
            name={name}
            containerDescription={containerDescription}
          />
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
