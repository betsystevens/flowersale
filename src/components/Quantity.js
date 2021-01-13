import React from "react";

function Quantity({ quantity, setQuantity }) {
  const isValidNumber = (entry) => {
    const pattern = /^[0-9][0-9]?$/;
    return pattern.test(entry);
  };
  const handleOnChange = (event) => {
    console.log(`onChange: ${quantity}`);
    if (isValidNumber(event.target.value)) {
      setQuantity(Number(event.target.value));
    } else setQuantity("");
  };
  const handlePlus = () => {
    console.log(`Plus: ${quantity}`);
    if (quantity < 99) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const handleMinus = () => {
    console.log(`Minus: ${quantity}`);
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  };
  return (
    <div className="">
      <div className="flex cursor-pointer border-2 border-gray-200 bg-gray-100 rounded relative h-7 w-20">
        <div onClick={handleMinus} className="relative h-full w-1/3">
          <div className="minus absolute"></div>
        </div>
        <div className="relative h-full w-1/3">
          <input
            className="w-full h-full bg-gray-50 text-center font-mono font-thin text-sm"
            type="number"
            min="0"
            max="99"
            onChange={handleOnChange}
            value={quantity}
          ></input>
        </div>
        <div onClick={handlePlus} className="relative h-full w-1/3">
          <div className="plus absolute"></div>
        </div>
      </div>
    </div>
  );
}
export default Quantity;
