import React, { useRef } from "react";
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

export class ComponentToPrint extends React.PureComponent {
  render() {
    const { cart, user } = this.props;
    let qtySum = 0;
    let subTotal = 0;
    if (cart.length) {
      qtySum = getItemsCount(cart);
      subTotal = (computeSubtotal(cart) / 100).toFixed(2);
      console.log(`subTotal = ${subTotal}`);
    }
    const tableBody = cart.map((flower, id) => {
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
        <div className="py-4 px-6 my-12 text-4xl shadow-lg">
          Flowers to Order
        </div>
        <table className="text-left mb-12 bg-blue-100">
          <thead>
            <tr className="">
              <th className="w-16 text-center">Qty</th>
              <th className="w-28">Flower</th>
              <th className="w-28">Variety</th>
              <th className="w-32">Container</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
            <tr>
              <td className="text-center">{qtySum}</td>
              <td></td>
              <td></td>
              <td>{`${subTotal}`}</td>
            </tr>
          </tbody>
        </table>

        <table className="w-200 text-xl bg-gray-50">
          <tbody>
            <tr className="h-10">
              <td className="w-36 font-medium">Name</td>
              <td>
                {user.first} {user.last}
              </td>
            </tr>
            <tr className="h-10">
              <td className="w-44 font-medium">Email</td>
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
          </tbody>
        </table>
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
          <button className="mt-24 mb-8 px-6 text-3xl border-2 border-gray-100 hover:bg-purple-200">
            Print
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default PrintOrder;
