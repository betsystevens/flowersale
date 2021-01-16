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
function getPrice(container) {
  let price = FLOWERS.filter((obj) => obj.container.name === container)[0]
    .container.price;
  return price;
}
function getItemsCount(cart) {
  let count = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return count;
}
function getSubtotal(cart) {
  let subTotal = 0;
  cart.forEach((flower) => {
    let price = getPrice("flat");
    console.log(price);
    subTotal = subTotal + flower.quantity * getPrice("flat");
  });
  return subTotal;
}
function Cart(props) {
  const { cart, updateFlowerInCart, removeFlowerFromCart } = props;
  let qtySum = 0;
  let subTotal = 0;
  if (cart.length) {
    qtySum = getItemsCount(cart);
    subTotal = (getSubtotal(cart) / 100).toFixed(2);
  }

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
        className="pl-8 py-8 mb-2 shadow-lg flex items-center bg-white"
      >
        <CartImage name={flower.name} variety={flower.variety} />
        <CartBody
          name={flower.name}
          variety={flower.variety}
          orderQuantity={flower.quantity}
          updateFlowerInCart={updateFlowerInCart}
          removeFlowerFromCart={removeFlowerFromCart}
        />
        <hr></hr>
      </div>
    );
  });
  return (
    <div className="bg-gray-100 h-screen pt-12">
      <div className="m-auto w-11/12 flex flex-col">
        {/* cards */}
        <div className="flex justify-between ">
          <div>{items}</div>
          <div className="flex flex-col justify-around items-center w-1/3 h-60 text-center text-xl bg-white">
            <img
              className="pt-6 h-16"
              src="/assets/icons/Cart64x40.svg"
              alt="cart"
            />
            <p>
              Subtotal ({qtySum} items):{" "}
              <span className="font-semibold">${subTotal}</span>
            </p>
            <button
              className="border-2 border-gray-200 bg-gray-100 rounded 
                        h-8 px-2 ml-6 text-sm
                        hover:text-purple-500"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
