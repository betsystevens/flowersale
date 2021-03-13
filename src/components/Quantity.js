import React from "react";

function Quantity({ quantity, callback }) {
  const isValidNumber = (entry) => {
    const pattern = /^[1-9][0-9]?$/;
    return pattern.test(entry);
  };
  const handleOnChange = (event) => {
    if (isValidNumber(event.target.value)) {
      callback(Number(event.target.value));
    } else callback("");
  };
  const handlePlus = () => {
    if (quantity < 99) {
      callback(Number(quantity) + 1);
    }
  };
  const handleMinus = () => {
    if (quantity > 1) {
      callback(Number(quantity) - 1);
    }
  };
  function Container({ handler, children }) {
    return (
      <div onClick={handler} className="relative h-full w-1/3">
        {children}
      </div>
    );
  }
  return (
    <div className="flex cursor-pointer border-2 border-gray-200 bg-gray-100 rounded relative h-7 w-20">
      <Container handler={handleMinus}>
        <div className="minus"></div>
      </Container>
      <Container>
        <input
          className="w-full h-full bg-gray-50 text-center font-mono font-thin text-sm"
          type="number"
          min="1"
          max="99"
          onChange={handleOnChange}
          value={quantity}
        ></input>
      </Container>
      <Container handler={handlePlus}>
        <div className="plus"></div>
      </Container>
    </div>
  );
}
export default Quantity;
