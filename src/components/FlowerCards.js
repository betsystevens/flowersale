import React from "react";
import { Link } from "react-router-dom";
import { FLATS } from "../shared/flats";
import { getPrice } from "../utils/utilities";

function ActionButton(props) {
  if (props.varietyCount === 1) {
    return (
      <div>
        <button
          className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button"
          onClick={() => props.openModal()}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <Link to={`/flat/${props.flatId}`}>
        <button className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button">
          View Options
        </button>
      </Link>
    );
  }
}
function FlowerCards(props) {
  const container = "flat";
  const price = (getPrice(container) / 100).toFixed(2);
  const cards = FLATS.map((flower) => {
    const { name, image } = flower.variety[0];
    const varietyCount = flower.variety.length;
    const varietyCountOrName =
      varietyCount === 1 ? name : `${varietyCount} varieties`;
    const openModal = () => {
      props.updateState(image, flower.name, varietyCountOrName);
      props.toggleModal();
    };
    return (
      <div key={flower.id}>
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <div>
            <img className="px-4 pt-4 pb-6" src={image} alt={name} />
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="font-extrabold text-lg">{flower.name}</p>
            <p className="pt-1">{`${varietyCountOrName}`}</p>
            <p className="pt-1">{`Price - $${price}`}</p>
            <p className="pt-1">{`${props.containerDescription}`}</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 pb-7">
            <ActionButton
              varietyCount={varietyCount}
              openModal={openModal}
              flatId={flower.id}
            />
          </div>
        </div>
      </div>
    );
  });
  return <div className="flex-center">{cards}</div>;
}

export default FlowerCards;
