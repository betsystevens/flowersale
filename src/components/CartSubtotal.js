import React from "react";
import { Link } from "react-router-dom";
import { getPrice } from "../utils/utilities";

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
function CartSubtotal({ cart }) {
  let qtySum = 0;
  let subTotal = 0;
  if (cart.length) {
    qtySum = getItemsCount(cart);
    subTotal = (computeSubtotal(cart) / 100).toFixed(2);
  }
  return (
    <div
      className="order-first mdlg:order-last
                  w-3/4 mdlg:w-1/4
                  mb-2 mdlg:mb-0 mdlg:mt-0.5 pb-2"
    >
      <div
        className="hidden mdlg:flex flex-col justify-evenly items-center
                    bg-white shadow-lg
                    mdlg:h-52"
      >
        <img
          className="sm:pt-4 h-12 md:h-16"
          src="/assets/icons/Cart64x40.svg"
          alt="cart"
        />
        <p className="text-base md:text-lg lg:text-xl">
          Subtotal: <span className="font-semibold">${subTotal}</span>
        </p>
        <p className="text-lg">
          {qtySum} {qtySum === 1 ? " item" : " items"}{" "}
        </p>
        <Link to={`/printOrder`}>
          <button
            className="border-2 border-gray-200 bg-gray-100 rounded
                h-8 px-2 text-sm
                hover:text-purple-500"
          >
            Printer Friendly Order
          </button>
        </Link>
      </div>

      {/* mobile stacked */}
      <div
        className="bg-white shadow-lg h-80 w-60 mx-auto
                   flex flex-col justify-evenly items-center
                   sm:flex-row sm:h-32 sm:w-96 flex-wrap justify-evenly items-center
                   mdlg:hidden"
      >
        <img
          className="sm:pt-4 h-12 sm:h-16"
          src="/assets/icons/Cart64x40.svg"
          alt="cart"
        />
        <p className="text-lg">
          Subtotal: <span className="font-semibold">${subTotal}</span>
        </p>
        <p className="text-lg">
          {qtySum} {qtySum === 1 ? " item" : " items"}{" "}
        </p>
        <Link to={`/printOrder`}>
          <button
            className="border-2 border-gray-200 bg-gray-100 rounded
                h-8 px-2 text-sm
                hover:text-purple-500"
          >
            Printer Friendly Order
          </button>
        </Link>
      </div>
    </div>
  );
}
export default CartSubtotal;
