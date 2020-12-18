import React from "react";

// modal component when 'add to cart' is clicke
// displays selected flower and quantity
// toggle from hidden and not hidden in parent state variable

function AddedToCart(props) {
  let display = "";
  if (!props.open) {
    display = "hidden";
  }
  console.log(props.image);
  const total = (props.quantity * props.price).toFixed(2);
  return (
    <div className={display}>
      <div className="fixed left-1/3 top-20 m-auto w-1/3 h-auto shadow bg-gray-50 px-8 py-4">
        <div className="flex justify-end m-auto">
          <img
            onClick={props.closeAddedModal}
            src="/assets/icons/cross3px.svg"
            alt="close icon"
            className="w-6 h-6 pt-1 cursor-pointer"
          />
        </div>
        <div className="m-auto py-4 flex flex-col items-center">
          <p className="font-medium text-2xl">Added to Cart!</p>
          <img
            src={props.image}
            // src="/assets/images/flats/petuniaYellow512x384.jpg"
            alt="yellow petunia"
            className="my-4 w-40 shadow-lg border-4 border-white"
          />
          <p className="mt-1 text-2xl">{props.name}</p>
          <p className="mt-1.5 text-sm">Variety: {props.variety}</p>
          <p className="mt-1 text-sm">$17.00 per flat</p>
          <p className="mt-5 text-lg">Quantity: {props.quantity}</p>
          <p className="py-1 text-lg">${total}</p>
          <button className="my-3 py-1 px-4 text-sm rounded border-2 border-purple-500">
            Checkout
          </button>
          <a href="#" class="mt-3">
            continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddedToCart;
