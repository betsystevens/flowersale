import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

export class ComponentToPrint extends React.PureComponent {
  render() {
    let printName = new Map();
    printName.set("flat", "Flat");
    printName.set("hb", "Hanging Basket");
    printName.set("combo hb", "Combo HB");
    printName.set("accent 4 inch", "4 inch pot");
    printName.set("herb 4 inch", "4 inch pot");
    printName.set("tomato 4 inch", "4 inch pot");
    printName.set("flower 4.5 inch", "4.5 inch pot");
    printName.set("flower 6 inch", "6 inch pot");
    printName.set("grass gallon", "1 gallon pot");
    printName.set("tomato gallon", "1 gallon pot");
    printName.set("patio pot", "12 inch patio");
    const { cart } = this.props;
    console.log(this.props.cart);
    const tableBody = cart.map((flower, id) => {
      let container = printName.get(flower.container);
      return (
        <tbody>
          <tr style={{ height: "50px" }}>
            <td className="text-center">{flower.quantity}</td>
            <td>{flower.name}</td>
            <td>{flower.variety}</td>
            {/* <td>{flower.container}</td> */}
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

const PrintOrder = ({ cart }) => {
  const componentRef = useRef();

  return (
    <div className="flex flex-col items-center">
      <ComponentToPrint ref={componentRef} cart={cart} />
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
