import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

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
    const tableBody = cart.map((flower, id) => {
      let container = containerNameMap.get(flower.container);
      return (
        <tbody>
          <tr style={{ height: "50px" }}>
            <td className="text-center">{flower.quantity}</td>
            <td>{flower.name}</td>
            <td>{flower.variety}</td>
            <td>{container}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="flex flex-col items-center">
        <div className="py-4 px-6 my-12 text-4xl shadow-lg">
          Flowers to Order
        </div>
        <div>{`${user.first} ${user.last} ${user.email} ${user.tel}`}</div>
        <div className="">
          <table className="text-left">
            {/* <table> */}
            <thead>
              <tr>
                <th className="w-16 text-center">Qty</th>
                <th className="w-28">Flower</th>
                <th className="w-28">Variety</th>
                <th className="w-32">Container</th>
              </tr>
            </thead>
            {tableBody}
          </table>
        </div>
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
