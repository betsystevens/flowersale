import React from "react";
import Quantity from "./Quantity";

function Cart(props) {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <div className="mt-12">
        <div className="m-auto flex justify-between w-11/12 h-20 bg-white">
          <p className="pl-8 text-4xl text-gray-700 font-semibold p-4">
            Shopping Cart
          </p>
          <img
            className="pt-6 pr-20 h-16"
            src="/assets/icons/cartGray.svg"
            alt="cart"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="m-auto flex flex-col w-11/12 bg-white">
          <img className="w-24 h-20 bg-green-500"></img>
          <p>Alyssum: Purple</p>
          <p>price</p>
          <p>$17.00</p>
          <Quantity />
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
