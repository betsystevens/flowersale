import React from "react";
import { Link } from "react-router-dom";
import { ALLFLOWERS } from "../shared/allFlowers";
import {
  getPrice,
  getContainerDescription,
  getFlowerFile,
} from "../utils/utilities";

function ActionButton(props) {
  if (props.varietyCount === 1) {
    return (
      <div>
        <button
          className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button"
          onClick={() => props.addToCart()}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <Link to={`/${props.flowerGroup}/${props.flowerId}`}>
        <button className="px-8 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button">
          View Options
        </button>
      </Link>
    );
  }
}
function FlowerCards(props) {
  const container = props.flowerGroup;
  // const flowerFile = getFlowerFile(container);
  const all = ALLFLOWERS;

  const flowerFile = all.filter((flower) => flower.container === container);
  const cards = flowerFile.map((flower) => {
    const price = (getPrice(container) / 100).toFixed(2);
    const containerDescription = getContainerDescription(container);
    const name = flower.name;
    const image = flower.variety[0].image;
    const variety = flower.variety[0].name;
    const varietyCount = flower.variety.length;
    const varietyCountOrName =
      varietyCount === 1 ? variety : `${varietyCount} varieties`;
    const addToCart = () => {
      props.updateAddedModalState(image, name, varietyCountOrName, container);
      props.updateCart(name, variety, container, 1);
      props.toggleModal();
    };
    return (
      <div key={flower.id}>
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <div>
            <img className="px-4 pt-4 pb-6" src={image} alt={name} />
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="font-extrabold text-lg">{name}</p>
            <p className="pt-1">{`${varietyCountOrName}`}</p>
            <p className="pt-1">{`Price - $${price}`}</p>
            <p className="pt-1">{`${containerDescription}`}</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 pb-7">
            <ActionButton
              varietyCount={varietyCount}
              addToCart={addToCart}
              flowerId={flower.id}
              flowerGroup={container}
            />
          </div>
        </div>
      </div>
    );
  });
  return <div className="flex-center">{cards}</div>;
}

export default FlowerCards;
