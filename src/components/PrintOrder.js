import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
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
      <p className="mb-2 text-xl font-semibold">
        Boy Scout Troop 34 - 2021 Spring Plant Sale
      </p>
      <p>Orders and Payments are due no later than Saturday March 6th</p>
      <p>Plants will be delivered on Friday, May 7th</p>
      <p>Please make checks out to Troop 34</p>
      <p>(no tax, we are non-profit organization)</p>
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
          <tr className="">
            <th className="w-16 text-center">Qty</th>
            <th className="w-28">Flower</th>
            <th className="w-28">Variety</th>
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
        <table className="w-200 text-xl">
          <tbody>
            <tr className="h-10">
              <td className="w-36 font-medium">Name</td>
              <td>
                {user.first} {user.last}
              </td>
            </tr>
            <tr className="h-10">
              <td className="font-medium">Email</td>
              <td>{user.email}</td>
            </tr>
            <tr className="h-10">
              <td className="font-medium">Address</td>
              <td>{user.address}</td>
            </tr>
            <tr className="h-10">
              <td className="font-medium">Telephone</td>
              <td>{user.tel}</td>
            </tr>
            <tr className="h-10">
              <td className="font-medium">Scout</td>
              <td>{user.scout}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to={"/userContact"}>
        <button className="mb-8 px-3 py-1 border-2 border-gray-100 rounded hover:bg-purple-200">
          Edit
        </button>
      </Link>
    </div>
  );
}

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center mt-16">
        <Header />
        <User user={this.props.user} />
        <Flowers cart={this.props.cart} />
      </div>
    );
  }
}

const PrintOrder = ({ cart, user }) => {
  const componentRef = useRef();

  return (
    <div className="flex flex-col items-center">
      <ComponentToPrint ref={componentRef} cart={cart} user={user} />
      <ReactToPrint
        trigger={() => (
          <button className="mb-8 px-3 py-1 border-2 border-gray-100 rounded hover:bg-purple-200">
            Print
          </button>
        )}
        // pageStyle="@page { size: auto; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; } }"
        pageStyle="@page { size: auto; margin: 0mm; } 
                    @media print { body { padding: 40px !important; } 
                                   button { display: none}}"
        content={() => componentRef.current}
      />
    </div>
  );
};

export default PrintOrder;
