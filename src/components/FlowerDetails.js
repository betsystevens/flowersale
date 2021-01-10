import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";

function NameDescription(props) {
  return (
    <div>
      <p className="font-extrabold text-lg">{props.name}</p>
      <p className="pt-2">{`Flat - ${props.description}`}</p>
    </div>
  );
}
function CheckoutOrContinue(props) {
  return (
    <div className="spanRows">
      <div className="flex flex-col">
        <Link to={`/`} className="mt-36">
          <p className="underline hover:text-purple-500">Checkout</p>
        </Link>
        <Link to={props.breadCrumb} className="mt-16">
          <p className="underline hover:text-purple-500">Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
}
// 'Add to Cart' button with cart icon
function AddToCartButton(props) {
  return (
    <div className="inline-block relative">
      <button
        onClick={(e) => props.toggleModal(e)}
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
  const { name, variety } = props.flower;
  useEffect(() => {
    props.setFlowerName(name);
  });
  const { container, price } = props.flowerGroup;

  const [open, setOpen] = useState(false);
  const opacity = open
    ? "gridDetailWrapper opacity-50"
    : "gridDetailWrapper opacity-100";
  const toggleModal = (e) => {
    e.target.blur();
    if (!open) props.updateCart();
    setOpen(!open);
  };
  return (
    <div className="mt-16 ml-16">
      <div className={opacity}>
        <NameDescription name={name} description={container.description} />
        <p className="pt-10">{`Price: $${price}`}</p>
        <CheckoutOrContinue breadCrumb={props.breadCrumb} />
        <BigImage
          flower={{
            image: variety[props.hoverId].image,
            name: name,
          }}
        />
        <div>
          <p className="topRow">{`Variety: ${variety[props.hoverId].name}`}</p>
          <Thumbnails
            flower={props.flower}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}
            onClick={props.handleClick}
          />
          <div className="flex pt-6">
            <Quantity
              quantity={props.quantity}
              handleOnChange={props.handleOnChange}
              handleMinus={(e) => props.handleMinus(e)}
              handlePlus={(e) => props.handlePlus(e)}
            />
            <AddToCartButton toggleModal={toggleModal} />
          </div>
        </div>
      </div>
      <AddedToCartModal
        open={open}
        toggleModal={(e) => toggleModal(e)}
        quantity={props.quantity}
        image={variety[props.selectedId].image}
        name={name}
        variety={variety[props.selectedId].name}
        price={price}
      />
    </div>
  );
}
