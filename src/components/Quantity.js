import React from "react";

function Quantity(props) {
  return (
    <div className="mt-6">
      <div className="flex cursor-pointer border-2 border-gray-200 bg-gray-100 rounded relative h-7 w-20">
        <div onClick={props.handleMinus} className="relative h-full w-1/3">
          <div className="minus absolute"></div>
        </div>
        <div className="relative h-full w-1/3">
          <input
            className="w-full h-full bg-gray-50 text-center font-mono font-thin text-sm"
            type="number"
            min="0"
            max="99"
            value={props.quantity}
            onChange={props.handleOnChange}
          ></input>
        </div>
        <div onClick={props.handlePlus} className="relative h-full w-1/3">
          <div className="plus absolute"></div>
        </div>
      </div>
    </div>
  );
}
export default Quantity;
