import React, { useEffect, useState } from "react";
import Quantity from "./Quantity";
import CartSubtotal from "./CartSubtotal";
import { PRICING } from "../shared/pricing";
import { FLOWERS } from "../shared/flowers";
import {
  getPrice,
  currency,
  getContainerDescription,
} from "../utils/utilities";

function getGroup(container) {
  let group = PRICING.filter((obj) => obj.container.name === container)[0]
    .group;
  return group;
}
function comparator(a, b) {
  return a.group < b.group
    ? -1
    : a.group === b.group
    ? a.name < b.name
      ? -1
      : a.name === b.name
      ? a.variety < b.variety
        ? -1
        : 1
      : 1
    : 1;
}
// Components
function ItemImage({ flower }) {
  const { name, variety, container } = flower;
  let image = FLOWERS.filter(
    (flower) => flower.name === name && flower.container === container
  )[0].variety.filter((v) => v.name === variety)[0].image;
  return (
    <img
      className="mb-4 sm:mb-0 w-56 border-8 border-gray-50 shadow-2xl"
      src={image}
      alt={name}
    ></img>
  );
}
function ItemTitle({ name, variety }) {
  return (
    <div className="col-span-4 flex items-center">
      <p className="text-xl">
        {name}: {variety}
      </p>
    </div>
  );
}
function RemoveBtn({ flower, removeFlowerFromCart }) {
  const { name, variety, container } = flower;
  return (
    <button
      className="text-xs text-left underline hover:text-purple-500"
      onClick={(e) => removeFlowerFromCart(e, name, variety, container)}
    >
      Remove
    </button>
  );
}
function ItemBody({ flower, updateFlowerInCart, removeFlowerFromCart }) {
  const { name, variety, container } = flower;
  const [quantity, setQuantity] = useState(flower.quantity);
  const flowerGroup = getGroup(container);
  const price = currency(getPrice(container));
  const containerDescription = getContainerDescription(container);
  const total = (quantity * price).toFixed(2);
  function quantityHandler(qty) {
    if (qty) {
      updateFlowerInCart(name, variety, container, flowerGroup, qty);
      setQuantity(qty);
    }
  }

  return (
    /* wide body */
    <div>
      <div className="hidden sm:grid mx-7 gap-y-1.5 gap-x-4 sm:grid-cols-cart-5 grid-rows-cart-4">
        <ItemTitle name={name} variety={variety} />
        <RemoveBtn
          flower={flower}
          removeFlowerFromCart={removeFlowerFromCart}
        />
        <p className="text-sm col-span-5 self-start">{containerDescription}</p>
        <p className="text-xs self-end"> Price</p>
        <CartQuantity quantity={quantity} quantityHandler={quantityHandler} />
        <p className="text-xs self-end">Total</p>
        <p className="text-lg lg:text-xl">${price}</p>
        <p className="text-lg lg:text-xl">${total}</p>
      </div>

      {/* stacked body */}
      <div className="sm:hidden mx-7 pb-8 flex flex-col justify-evenly items-center">
        <p className="font-extrabold text-lg">{name}</p>
        <p className="mb-2">{variety}</p>
        <p className="mb-2">{containerDescription}</p>
        <p className="mb-8">{`Price - $${price}`}</p>
        <CartQuantity quantity={quantity} quantityHandler={quantityHandler} />
        <p className="mt-4 mb-8">{`Total - $${total}`}</p>
        <RemoveBtn
          flower={flower}
          removeFlowerFromCart={removeFlowerFromCart}
        />
      </div>
    </div>
  );
}
function CartQuantity({ quantity, quantityHandler }) {
  return (
    <div className="flex items-center sm:col-span-3 sm:row-span-2 sm:justify-self-center sm:self-end">
      <p className="text-sm pr-2 sm:pr-4">Qty:</p>
      <Quantity quantity={quantity} callback={quantityHandler} />
    </div>
  );
}

function CartItems({ cart, updateFlowerInCart, removeFlowerFromCart }) {
  const items = cart.map((flower, key) => {
    return (
      <div
        key={key}
        className="px-4 pt-2 sm:pl-8 sm:pr-0 sm:py-7 mb-2 shadow-lg bg-white
        flex flex-col sm:flex-row items-center "
      >
        <ItemImage flower={flower} />
        <ItemBody
          flower={flower}
          updateFlowerInCart={updateFlowerInCart}
          removeFlowerFromCart={removeFlowerFromCart}
        />
      </div>
    );
  });
  return <div className="mb-2 mdlg:mr-2">{items}</div>;
}
function Cart({ cart, updateFlowerInCart, removeFlowerFromCart }) {
  useEffect(() => {
    document.title = `Flower Sale - Cart`;
  });

  // check for empty cart
  if (cart.length) {
    cart.sort(comparator);
    return (
      <div className="bg-gray-100 min-h-screen pt-12">
        <div className="m-auto w-11/12 flex flex-col">
          <div className="flex flex-wrap justify-evenly ">
            <CartItems
              cart={cart}
              updateFlowerInCart={updateFlowerInCart}
              removeFlowerFromCart={removeFlowerFromCart}
            />
            <CartSubtotal cart={cart} />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="mt-12 w-1/2 py-16 mx-auto shadow-lg text-bold text-4xl text-center bg-gray-50">
        <p>Your Cart is Empty</p>
      </div>
    );
}
export default Cart;
