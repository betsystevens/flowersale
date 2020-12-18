import React from "react";

function AddedToCart(props) {
  let display = "";
  if (!props.open) {
    display = "hidden";
  }
  return (
    <div className={display}>
      <div className="fixed left-1/3 top-20 m-auto w-1/3 h-auto shadow bg-gray-50 px-8 py-4">
        <div className="flex justify-end m-auto">
          <img
            onClick={props.closeAddedModal}
            src="/assets/icons/cross3px.svg"
            alt="close icon"
            class="w-6 h-6 pt-1 cursor-pointer"
          />
        </div>
        <div class="m-auto py-4 flex flex-col items-center">
          <p class="font-medium text-2xl">Added to Cart!</p>
          <img
            src="/assets/images/flats/petuniaYellow512x384.jpg"
            alt="yellow petunia"
            class="my-4 w-40 shadow-lg border-4 border-white"
          />
          <p class="mt-1 text-2xl">Petunia</p>
          <p class="mt-1.5 text-sm">Variety: Yellow</p>
          <p class="mt-1 text-sm">$17.00 per flat</p>
          <p class="mt-5 text-lg">Quantity: {props.quantity}</p>
          <p class="py-1 text-lg">$54.00</p>
          <button class="my-3 py-1 px-4 text-sm rounded border-2 border-purple-500">
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
