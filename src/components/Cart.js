import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import { PRICING } from "../shared/pricing";
import { FLOWERS } from "../shared/flowers";
import { getContainerDescription } from "../utils/utilities";

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
function getGroup(container) {
  let group = PRICING.filter((obj) => obj.container.name === container)[0]
    .group;
  return group;
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
  let flower = FLOWERS.filter(
    (flower) => flower.name === name && flower.container === container
  )[0];

  let image = flower.variety.filter((flower) => flower.name === variety)[0]
    .image;
  return (
    <img
      className="mb-4 sm:mb-0 w-48 border-8 border-gray-50 shadow-2xl"
      src={image}
      alt={name}
    ></img>
  );
}
function ItemTitle({ name, variety }) {
  return (
    <div className="col-span-4 flex items-center">
      <p className="text-lg lg:text-xl mdlg:text-red-400">
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
  const flowerGroup = getGroup(container);
  const price = (getPrice(container) / 100).toFixed(2);
  const containerDescription = getContainerDescription(container);
  const total = (quantity * price).toFixed(2);
  function quantityHandler(qty) {
    if (qty) {
      updateFlowerInCart(name, variety, container, flowerGroup, qty);
      setQuantity(qty);
    }
  }

  return (
    <div className="mx-7 gap-y-1.5 gap-x-4 grid grid-cols-cart-5 grid-rows-4">
      <ItemTitle name={name} variety={variety} container={container} />
      <button
        className="text-xs text-left underline "
        // is quantity needed?
        onClick={(e) =>
          removeFlowerFromCart(e, name, variety, container, quantity)
        }
      >
        Remove
      </button>
      <p className="text-sm col-span-5 self-start">{containerDescription}</p>
      <p className="text-xs self-end"> Price</p>
      <CartQuantity quantity={quantity} quantityHandler={quantityHandler} />
      <p className="text-xs self-end">Total</p>
      <p className="text-lg lg:text-xl">${price}</p>
      <p className="text-lg lg:text-xl">${total}</p>
    </div>
  );
}
function CartQuantity({ quantity, quantityHandler }) {
  return (
    <div className="col-span-3 row-span-2 justify-self-center self-end flex">
      <p className="text-lg lg:text-xl pr-4">Qty:</p>
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
    <div
      className="order-first mdlg:order-last mdlg:w-1/4 h-36 mdlg:h-52 
                mb-2 mdlg:mb-0 mdlg:mt-0.5 pb-2 flex-grow
                  flex mdlg:flex-col justify-around items-center
                  bg-white shadow-lg"
    >
      <img
        className="mdlg:pt-6 px-4 h-12 mdlg:h-16"
        src="/assets/icons/Cart64x40.svg"
        alt="cart"
      />
      <p className="text-base md:text-lg lg:text-xl text-center">
        Subtotal: <span className="font-semibold">${subTotal}</span>
        <p className="text-lg">
          {qtySum} {qtySum === 1 ? " item" : " items"}{" "}
        </p>
      </p>

      <Link to={`/printOrder`}>
        <button
          className="border-2 border-gray-200 bg-gray-100 rounded 
              h-8 px-2 mx-auto text-sm
              hover:text-purple-500"
        >
          Printer Friendly Order
        </button>
      </Link>
    </div>
  );
}
function getItems(cart, updateFlowerInCart, removeFlowerFromCart) {
  const items = cart.map((flower, key) => {
    return (
      <div
        key={key}
        className="pl-8 py-8 mb-2 shadow-lg bg-white
        flex flex-col sm:flex-row items-center "
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
      <div className="bg-gray-100 min-h-screen pt-12">
        <div className="m-auto w-11/12 flex flex-col">
          <div className="flex flex-wrap justify-evenly ">
            <div className="mb-2 mdlg:mr-2">{items}</div>
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
