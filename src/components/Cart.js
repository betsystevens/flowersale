import React from "react";
import Quantity from "./Quantity";

function Cart(props) {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <div className="mt-12 m-auto w-11/12 h-28 bg-white">
        <div className="flex items-center justify-between">
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
      {/* card */}
      <div className="mt-10 m-auto pl-8 py-8 flex items-center w-11/12 bg-white">
        <img
          className="w-48 border-8 border-gray-50 shadow-2xl"
          src="/assets/images/flats/dahliaMixed512x384.jpg"
          alt="flower"
        ></img>

        <div className="mx-8 cartGrid">
          <div className="col-span-2 flex items-center">
            <p className="text-xl">Alyssum: Purple</p>
          </div>
          <button className="text-xs text-left underline ">Remove</button>
          <p className="text-xs self-end">Price</p>
          <div className="row-span-2 justify-self-center self-end">
            <Quantity />
          </div>
          <p className="text-xs self-end">Total</p>
          <p className="text-xl">$17.00</p>
          <p className="text-xl">$54.00</p>
        </div>
      </div>
    </div>
  );
}
export default Cart;
