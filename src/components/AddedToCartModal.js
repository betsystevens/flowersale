import React from "react";
import { Link } from "react-router-dom";
import { PRICING } from "../shared/pricing";

// modal component when 'add to cart' is clicked
// displays selected flower and quantity
// toggle from hidden and not hidden in parent state variable
function AddedToCartModal({ open, image, name, variety, container, quantity }) {
  let display = "";
  if (!open) {
    display = "hidden";
  }

  let price;
  let total;
  if (name) {
    let group = PRICING.filter(
      (group) => group.container.name === container
    )[0];
    price = (group.container.price / 100).toFixed(2);
    total = (quantity * price).toFixed(2);
  }
  return (
    <div className={display}>
      {/* <div className="fixed left-1/3 top-20 m-auto w-1/3 h-auto shadow bg-gray-50 px-8 py-4"> */}
      <div
        className="fixed addedToCart md:addedToCartWide 
                      px-8 py-4
                      shadow bg-gray-50"
      >
        <div className="flex justify-end m-auto">
          <img
            src="/assets/icons/cross3px.svg"
            alt="close icon"
            className="w-6 h-6 pt-1 cursor-pointer"
          />
        </div>
        <div className="m-auto py-4 flex flex-col items-center">
          <p className="font-medium text-lg md:text-2xl">Added to Cart!</p>
          <img
            src={image}
            alt={name}
            className="my-1 md:my-4 w-40 shadow-lg border-4 border-white"
          />
          <p className="mt-1 text-lg md:text-2xl">{name}</p>
          <p className="mt-0.5 md:mt-1.5 text-sm">{variety}</p>
          <p className="mt-5 md:text-lg">Quantity: {quantity}</p>
          <p className="py-1 mb-3 md:text-lg">${total}</p>

          <Link to="/cart">
            <p className="py-1 px-4 text-sm rounded border-2 border-purple-500 hover:text-gray-50 hover:bg-purple-500">
              Checkout
            </p>
          </Link>

          <button className="mt-4 py-1 px-4 rounded border-2 border-purple-400 hover:text-gray-50 hover:bg-purple-500">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedToCartModal;
