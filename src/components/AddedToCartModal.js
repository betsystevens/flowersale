import React from "react";
import { Link } from "react-router-dom";
import { PRICING } from "../shared/pricing";
import { currency } from "../utils/utilities";

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
    price = currency(group.container.price);
    total = (quantity * price).toFixed(2);
  }
  return (
    <div className={display}>
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
        </div>
      </div>
    </div>
  );
}

export default AddedToCartModal;
