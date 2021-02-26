import React from "react";
import { Link } from "react-router-dom";
import {
  getPrice,
  currency,
  computeSubtotal,
  getItemsCount,
} from "../utils/utilities";

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
  }
  return [qtySum, subTotal];
};
function Hero() {
  return (
    <div className="flex flex-cols items-center">
      {/* wide screen - bold */}
      <p className="hidden print:hidden sm:block text-xl font-semibold ">
        Boy Scout Troop 34 - 2021 Spring Plant Sale
      </p>
      {/* wide screen - print - no bold */}
      <p className="hidden print:block text-xl">
        Boy Scout Troop 34 - 2021 Spring Plant Sale
      </p>
      {/* mobile screen - bold */}
      <div className="sm:hidden print:hidden flex flex-col items-center">
        <p className="text-xl font-semibold mb-2">Boy Scout Troop 34</p>
        <p className="text-xl font-semibold mb-2">Spring Plant Sale</p>
        <p className="text-xl font-semibold mb-2">2021</p>
      </div>
    </div>
  );
}
function Header() {
  return (
    <>
      {/* wide screen & print */}
      <div className="hidden sm:flex print:flex flex-col items-center mb-12 py-4 px-6">
        <Hero />
        <p>Orders and Payments are due no later than Saturday, March 6th.</p>
        <p>
          Print this page or attach to an email and return it to your scout.
        </p>
        <p>Plants will be delivered on Friday, May 7th.</p>
        <p>Please make checks payable to Troop 34.</p>
        <p>(no tax, we are non-profit organization)</p>
      </div>
      {/* mobile */}
      <div className="sm:hidden print:hidden flex flex-col items-center">
        <Hero />
        {/* Info  */}
        <p>Orders and Payments are due no</p>
        <p>later than Saturday, March 6th.</p>
        <p>Print this page or attach to an email</p>{" "}
        <p>and return it to your scout.</p>
        <p>Plants will be delivered on Friday, May 7th.</p>
        <p>Please make checks payable to Troop 34.</p>
        <p>(no tax, we are a non-profit organization)</p>
      </div>
    </>
  );
}

function OrderedFlowers({ cart }) {
  const orderedFlowers = cart.map((flower, id) => {
    let container = containerNameMap.get(flower.container);
    return (
      <div
        className="grid grid-cols-order-xxs
                   my-2 text-xs
                      print:grid-cols-order
                      print:text-base
                      xs:grid-cols-order
                      xs:text-base"
      >
        <p className="text-center">{flower.quantity}</p>
        <p className="px-1 xs:px-0">{flower.name}</p>
        <p className="px-1 xs:px-0">{flower.variety}</p>
        <p className="px-1 xs:px-0">{container}</p>
        <p className="text-right px-1 xs:px-0">
          {currency(getPrice(flower.container) * flower.quantity)}
        </p>
      </div>
    );
  });
  return <div>{orderedFlowers}</div>;
}
function OrderedFlowersHeader() {
  return (
    <>
      {/* screen */}
      <div
        className="text-left font-semibold border-2 border-gray-50
                        grid grid-cols-order-xxs text-xs
                        xs:grid-cols-order xs:text-base
                        print:hidden"
      >
        <p className="text-center">Qty</p>
        <p className="px-1 xs:px-0">Flower</p>
        <p className="px-1 xs:px-0">Variety</p>
        <p className="px-1 xs:px-0">Container</p>
        <p className="text-right px-1 xs:px-0">Price</p>
      </div>
      {/* print - no bold */}
      <div className="hidden print:grid grid-cols-order text-left border-2 border-gray-50">
        <p className="text-center">Qty</p>
        <p>Flower</p>
        <p>Variety</p>
        <p>Container</p>
        <p className="text-right">Price</p>
      </div>
    </>
  );
}
function OrderedFlowersSummary({ sumOfItems, subTotal }) {
  return (
    <>
      {/* screen */}
      <div
        className="border-2 border-t-4 border-gray-50
                        grid grid-cols-order-xxs text-xs
                        xs:grid-cols-order xs:text-base
                        print:hidden text-left "
      >
        <p className="font-semibold text-center px-1 xs:px-0">{sumOfItems}</p>
        <p></p>
        <p></p>
        <p></p>
        <p className="text-right font-semibold px-1 xs:px-0">${subTotal}</p>
      </div>
      {/* print - no semibold */}
      <div className="hidden print:grid grid-cols-order text-left border-2 border-t-4 border-gray-50">
        <p className="text-center">${sumOfItems}</p>
        <p></p>
        <p></p>
        <p></p>
        <p className="text-right">{subTotal}</p>
      </div>
    </>
  );
}

function Flowers({ cart }) {
  const [sumOfItems, subTotal] = totals(cart);
  return (
    <div className="flex flex-col pr-2 items-center">
      <OrderedFlowersHeader />
      {/* flowers */}
      <div className="border-2 border-gray-50">
        <OrderedFlowers cart={cart} />
      </div>
      <OrderedFlowersSummary sumOfItems={sumOfItems} subTotal={subTotal} />
    </div>
  );
}

function User({ user }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="mb-2 border-2 border-gray-50 p-2">
        {/* printer  */}
        <div className="hidden print:block">
          <div className="grid grid-cols-user grid-rows-3">
            <div>Name: </div>
            <div>
              {user.first} {user.last}
            </div>
            <div>Tel: </div>
            <div>{user.tel}</div>
            <div>Email: </div>
            <div className="col-span-3">{user.email}</div>
            <div>Address: </div>
            <div className="col-span-3">{user.address}</div>
            <div>Scout: </div>
            <div className="col-span-3">{user.scout}</div>
          </div>
        </div>
        {/* screen */}
        <table className="w-200 print:hidden">
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
    </div>
  );
};

// export { DisplayOrder };
export default DisplayOrder;
