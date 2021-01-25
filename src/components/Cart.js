import React, { useEffect, useState } from "react";
import Quantity from "./Quantity";
import { PRICING } from "../shared/pricing";
import { ALLFLOWERS } from "../shared/allFlowers";

// helper functions
function getPrice(container) {
  let price = PRICING.filter((obj) => obj.container.name === container)[0]
    .container.price;
  return price;
}
function getItemsCount(cart) {
  let count = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return count;
}
function computeSubtotal(cart) {
  let subTotal = 0;
  cart.forEach((flower) => {
    let price = getPrice(flower.container);
    subTotal = subTotal + flower.quantity * price;
  });
  return subTotal;
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
function ItemImage({ name, variety, container }) {
  let flower = ALLFLOWERS.filter(
    (flower) => flower.name === name && flower.container === container
  )[0];

  let image = flower.variety.filter((flower) => flower.name === variety)[0]
    .image;
  return (
    <img
      className="w-48 border-8 border-gray-50 shadow-2xl"
      src={image}
      alt={name}
    ></img>
  );
}
function ItemTitle({ name, variety }) {
  return (
    <div className="col-span-2 flex items-center">
      <p className="text-xl">
        {name}: {variety}
      </p>
    </div>
  );
}
function ItemBody({
  name,
  variety,
  container,
  orderQuantity,
  updateFlowerInCart,
  removeFlowerFromCart,
}) {
  const [quantity, setQuantity] = useState(orderQuantity);
  let flowerGroup = PRICING.filter((obj) => obj.container.name === container)[0]
    .group;
  let priceGroup = PRICING.filter((obj) => obj.container.name === container)[0];
  let price = (priceGroup.container.price / 100).toFixed(2);
  const total = (quantity * price).toFixed(2);
  function quantityHandler(qty) {
    if (qty) {
      updateFlowerInCart(name, variety, container, flowerGroup, qty);
      setQuantity(qty);
    }
  }

  return (
    <div className="mx-8 cartGrid">
      <ItemTitle name={name} variety={variety} />
      <button
        className="text-xs text-left underline "
        // is quantity needed?
        onClick={(e) =>
          removeFlowerFromCart(e, name, variety, container, quantity)
        }
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

function CartSubtotal({ cart }) {
  let qtySum = 0;
  let subTotal = 0;
  if (cart.length) {
    qtySum = getItemsCount(cart);
    subTotal = (computeSubtotal(cart) / 100).toFixed(2);
  }
  return (
    <div className="flex flex-col justify-around items-center w-1/3 h-60 text-center text-xl bg-white">
      <img className="pt-6 h-16" src="/assets/icons/Cart64x40.svg" alt="cart" />
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
  );
}
function getItems(cart, updateFlowerInCart, removeFlowerFromCart) {
  const items = cart.map((flower, key) => {
    return (
      <div
        key={key}
        className="pl-8 py-8 mb-2 shadow-lg flex items-center bg-white"
      >
        <ItemImage
          name={flower.name}
          variety={flower.variety}
          container={flower.container}
        />
        <ItemBody
          name={flower.name}
          variety={flower.variety}
          container={flower.container}
          orderQuantity={flower.quantity}
          updateFlowerInCart={updateFlowerInCart}
          removeFlowerFromCart={removeFlowerFromCart}
        />
        <hr></hr>
      </div>
    );
  });
  return items;
}
function Cart(props) {
  const { cart, updateFlowerInCart, removeFlowerFromCart } = props;
  useEffect(() => {
    document.title = `Flower Sale - Cart`;
  });

  // check for empty cart
  if (cart.length) {
    cart.sort(comparator);
    const items = getItems(cart, updateFlowerInCart, removeFlowerFromCart);
    return (
      <div className="bg-gray-100 h-screen pt-12">
        <div className="m-auto w-11/12 flex flex-col">
          <div className="flex justify-between ">
            <div>{items}</div>
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
