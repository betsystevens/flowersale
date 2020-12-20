import React from "react";
import Quantity from "./Quantity";

function Cart(props) {
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
        {/* card */}
        <div className="mt-10 m-auto pl-8 py-8 flex items-center w-full bg-white">
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
            <div className="row-span-2 justify-self-center self-end flex ">
              <p className="text-xl pr-4">Qty:</p>
              <Quantity />
            </div>
            <p className="text-xs self-end">Total</p>
            <p className="text-xl">$17.00</p>
            <p className="text-xl">$54.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
