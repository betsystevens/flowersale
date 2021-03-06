import React from "react";
import { Link } from "react-router-dom";
import { computeSubtotal, getItemsCount } from "../utils/utilities";

function CartImage() {
  return <img className="h-12" src="/assets/icons/Cart64x40.svg" alt="cart" />;
}
function Subtotals({ subTotal, qtySum }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">
        Subtotal: <span className="font-semibold">${subTotal}</span>
      </p>
      <p className="text-lg">
        {qtySum} {qtySum === 1 ? " item" : " items"}{" "}
      </p>
    </div>
  );
}
function CompleteOrderBtn() {
  return (
    <Link to={`/userContact`}>
      <button
        className="border-2 border-gray-200 bg-gray-100 rounded
                h-8 px-2 text-sm
                hover:text-purple-500"
      >
        Complete Order
      </button>
    </Link>
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
      className="order-first 
                  lg:order-last
                  sm:w-3/4 mb-2 pb-2
                  mdlg:w-1/4 mdlg:mb-0 mdlg:mt-0.5 "
    >
      {/* large screens */}
      <div
        className="hidden mdlg:flex flex-col justify-evenly items-center
                    bg-white shadow-lg
                    mdlg:h-56"
      >
        <CartImage />
        <Subtotals subTotal={subTotal} qtySum={qtySum} />
        <CompleteOrderBtn />
      </div>

      {/* small screens */}
      <div
        className="bg-white shadow-lg h-64 w-64 mx-auto
                   flex flex-col justify-evenly items-center
                   sm:h-32 sm:w-96
                   sm:flex-row
                   mdlg:hidden"
      >
        <CartImage />
        <Subtotals subTotal={subTotal} qtySum={qtySum} />
        <CompleteOrderBtn />
      </div>
    </div>
  );
}
export default CartSubtotal;
