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
    <Link to={`/printOrder`}>
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
      className="order-first mdlg:order-last
                  w-3/4 mdlg:w-1/4
                  mb-2 mdlg:mb-0 mdlg:mt-0.5 pb-2"
    >
      <div
        className="hidden mdlg:flex flex-col justify-evenly items-center
                    bg-white shadow-lg
                    mdlg:h-52"
      >
        <CartImage />
        <Subtotals subTotal={subTotal} qtySum={qtySum} />
        <CompleteOrderBtn />
      </div>

      {/* mobile stacked */}
      <div
        className="bg-white shadow-lg h-64 w-60 mx-auto
                   flex flex-col justify-evenly items-center
                    sm:flex-row sm:h-32 sm:w-96 flex-wrap justify-evenly items-center
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
