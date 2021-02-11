import React from "react";
import { Link } from "react-router-dom";
import { Test } from "./Test";
import { computeSubtotal, getItemsCount } from "../utils/utilities";

const containerNameMap = (() => {
  let nameMap = new Map();
  nameMap.set("flat", "Flat");
  nameMap.set("hb", "Hanging Basket");
  nameMap.set("combo hb", "Combo HB");
  nameMap.set("accent 4 inch", "4 inch pot");
  nameMap.set("herb 4 inch", "4 inch pot");
  nameMap.set("tomato 4 inch", "4 inch pot");
  nameMap.set("flower 4.5 inch", "4.5 inch pot");
  nameMap.set("flower 6 inch", "6 inch pot");
  nameMap.set("grass gallon", "1 gallon pot");
  nameMap.set("tomato gallon", "1 gallon pot");
  nameMap.set("patio pot", "12 inch patio");
  return nameMap;
})();

const totals = (cart) => {
  let qtySum = 0;
  let subTotal = 0;
  if (cart.length) {
    qtySum = getItemsCount(cart);
    subTotal = (computeSubtotal(cart) / 100).toFixed(2);
    console.log(`subTotal = ${subTotal}`);
  }
  return [qtySum, subTotal];
};
function Header() {
  return (
    <div className="flex flex-col items-center mb-12 py-4 px-6">
      <p className="hidden sm:block mb-2 text-xl font-semibold">
        Boy Scout Troop 34 - 2021 Spring Plant Sale
      </p>
      <div className="sm:hidden flex flex-col items-center text-xl font-semibold">
        <p className="mb-2">Boy Scout Troop 34</p>
        <p className="mb-2">Spring Plant Sale</p>
        <p className="mb-2">2021</p>
      </div>
      <p className="hidden sm:block">
        Orders and Payments are due no later than Saturday, March 6th
      </p>
      <div className="block sm:hidden flex flex-col items-center">
        <p>Orders and Payments are due no</p>
        <p>later than Saturday, March 6th</p>
      </div>
      <p>Plants will be delivered on Friday, May 7th</p>
      <p>Please make checks payable to Troop 34</p>
      <p>(no tax, we are non-profit organization)</p>
    </div>
  );
}

function Flowers2({ cart }) {
  const [sumOfItems, subTotal] = totals(cart);
  console.log(cart);
  const orderedFlowers = cart.map((flower, id) => {
    let container = containerNameMap.get(flower.container);
    return (
      <div className="grid grid-cols-order my-2">
        <p className="text-center">{flower.quantity}</p>
        <p>{flower.name}</p>
        <p>{flower.variety}</p>
        <p>{container}</p>
      </div>
    );
  });
  console.log(orderedFlowers);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-order text-left font-semibold border-2 border-gray-50">
        <p className="text-center">Qty</p>
        <p>Flower</p>
        <p>Variety</p>
        <p>Container</p>
      </div>
      <div className="border-2 border-gray-50">{orderedFlowers}</div>
      <div className="grid grid-cols-order text-left border-2 border-gray-50">
        <p className="text-center">{sumOfItems}</p>
        <p></p>
        <p></p>
        <p>{`$${subTotal}`}</p>
      </div>
    </div>
  );
}
function Flowers({ cart }) {
  const [sumOfItems, subTotal] = totals(cart);
  const orderedFlowers = cart.map((flower, id) => {
    let container = containerNameMap.get(flower.container);
    return (
      <tr style={{ height: "50px" }}>
        <td className="text-center">{flower.quantity}</td>
        <td>{flower.name}</td>
        <td>{flower.variety}</td>
        <td>{container}</td>
      </tr>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <table className="text-left mb-12 p-2 border-2 border-gray-50">
        <thead>
          <tr style={{ paddingBottom: "8px" }}>
            <th className="w-16 text-center">Qty</th>
            <th className="w-48">Flower</th>
            <th className="w-36">Variety</th>
            <th className="w-32">Container</th>
          </tr>
        </thead>
        <tbody>
          {orderedFlowers}
          <tr className="border-t-2">
            <td className="text-center">{sumOfItems}</td>
            <td></td>
            <td></td>
            <td>{`$${subTotal}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function User({ user }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="mb-2 border-2 border-gray-50 p-2">
        <table className="w-200">
          <tbody>
            <tr className="h-10">
              <td className="w-36 font-semibold">Name</td>
              <td>
                {user.first} {user.last}
              </td>
            </tr>
            <tr className="h-10">
              <td className="font-semibold">Email</td>
              <td>{user.email}</td>
            </tr>
            <tr className="h-10">
              <td className="font-semibold">Address</td>
              <td>{user.address}</td>
            </tr>
            <tr className="h-10">
              <td className="font-semibold">Telephone</td>
              <td>{user.tel}</td>
            </tr>
            <tr className="h-10">
              <td className="font-semibold">Scout</td>
              <td>{user.scout}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to={"/userContact"} className="editLink">
        <button className="mb-8 px-3 py-1 border-2 border-purple-100 rounded hover:bg-purple-200 print:hidden">
          Edit
        </button>
      </Link>
    </div>
  );
}

const DisplayOrder = ({ cart, user }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <Header />
      <User user={user} />
      <Flowers cart={cart} />
      <Flowers2 cart={cart} />
    </div>
  );
};

export { DisplayOrder };
