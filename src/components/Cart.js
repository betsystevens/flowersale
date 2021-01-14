import React, { useState } from "react";
import Quantity from "./Quantity";
import { FLATS } from "../shared/flats";
import { FLOWERS } from "../shared/flowers";

function CartImage({ name, variety }) {
  let flower = FLATS.filter((obj) => obj.name === name)[0];
  let image = flower.variety.filter((obj) => obj.name === variety)[0].image;
  return (
    <img
      className="w-48 border-8 border-gray-50 shadow-2xl"
      src={image}
      alt={name}
    ></img>
  );
}
function CartBody({
  name,
  variety,
  orderQuantity,
  updateFlowerInCart,
  removeFlowerFromCart,
}) {
  function Title({ name, variety }) {
    return (
      <div className="col-span-2 flex items-center">
        <p className="text-xl">
          {name}: {variety}
        </p>
      </div>
    );
  }
  const [quantity, setQuantity] = useState(orderQuantity);
  let group = FLOWERS.filter((obj) => obj.container.name === "flat")[0];
  let price = (group.container.price / 100).toFixed(2);
  const total = (quantity * price).toFixed(2);
  function quantityHandler(qty) {
    updateFlowerInCart(name, variety, qty);
    setQuantity(qty);
  }

  return (
    <div className="mx-8 cartGrid">
      <Title name={name} variety={variety} />
      <button
        className="text-xs text-left underline "
        onClick={() => removeFlowerFromCart(name, variety, quantity)}
      >
        Remove
      </button>
      <p className="text-xs self-end"> Price</p>
      <CartQuantity quantity={quantity} quantityHandler={quantityHandler} />
      <p className="text-xs self-end">Total</p>
      <p className="text-xl">${price}</p>
      <p className="text-xl">${total}</p>
    </div>
  );
}
function CartQuantity({ quantity, quantityHandler }) {
  return (
    <div className="row-span-2 justify-self-center self-end flex">
      <p className="text-xl pr-4">Qty:</p>
      <Quantity quantity={quantity} callback={quantityHandler} />
    </div>
  );
}
function Cart(props) {
  const { cart, updateFlowerInCart, removeFlowerFromCart } = props;

  cart.sort((a, b) =>
    a.name < b.name
      ? -1
      : a.name === b.name
      ? a.variety < b.variety
        ? -1
        : 1
      : 1
  );
  const items = cart.map((flower, key) => {
    return (
      <div
        key={key}
        className="mt-10 m-auto pl-8 py-8 flex items-center w-full bg-white"
      >
        <CartImage name={flower.name} variety={flower.variety} />
        <CartBody
          name={flower.name}
          variety={flower.variety}
          orderQuantity={flower.quantity}
          updateFlowerInCart={updateFlowerInCart}
          removeFlowerFromCart={removeFlowerFromCart}
        />
      </div>
    );
  });
  return (
    <div className="bg-gray-100 h-screen pt-12">
      <div className="m-auto w-11/12 flex flex-col">
        {/* header */}
        <div className="h-28 flex items-center justify-between bg-white">
          <p className="pl-8 text-4xl text-gray-700 font-semibold p-4">
            Shopping Cart
          </p>
          <img
            className="pt-6 pr-20 h-16"
            src="/assets/icons/CartGray.svg"
            alt="cart"
          />
        </div>

        {/* cards */}
        {items}
      </div>
    </div>
  );
}
export default Cart;
