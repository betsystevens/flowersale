import React from "react";
import { Link } from "react-router-dom";
import { FLOWERS } from "../shared/flowers";
import { getPrice, getContainerDescription } from "../utils/utilities";

function emojiColor(sun) {
  let color = "text-yellow-400";
  switch (sun) {
    case "sun":
      color = "text-yellow-400";
      break;
    case "shade":
      color = "text-indigo-600";
      break;
    case "part shade":
      color = "text-indigo-400";
      break;
    case "filtered sun":
      color = "text-yellow-200";
      break;
    default:
      break;
  }
  return color;
}
function ActionButton(props) {
  if (props.varietyCount === 1) {
    return (
      <div>
        <button
          id="addtocart"
          className="px-8 pt-1 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button"
          onClick={() => props.addToCart()}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <Link to={`/${props.flowerGroup}/${props.flowerId}`}>
        <button className="px-8 pt-1 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button">
          View Options
        </button>
      </Link>
    );
  }
}
function FlowerCards({
  flowerGroup,
  openAddedToCartModal,
  updateCart,
  updateAddedModalState,
  opacity,
}) {
  const containerGroup = flowerGroup;

  const flowerFile = FLOWERS.filter(
    (flower) => flower.group === containerGroup
  );
  const cards = flowerFile.map((flower) => {
    const price = (getPrice(flower.container) / 100).toFixed(2);
    const containerDescription = getContainerDescription(flower.container);
    const container = flower.container;
    const name = flower.name;
    const emojiCode = flower.sunCode ?? "";
    const sunShade = flower.sun ?? "";
    const color = emojiColor(sunShade);
    console.log(sunShade);
    console.log(color);
    const image = flower.variety[0].image;
    const variety = flower.variety[0].name;
    const varietyCount = flower.variety.length;
    const varietyCountOrName =
      varietyCount === 1 ? variety : `${varietyCount} varieties`;
    const addToCart = () => {
      updateAddedModalState(image, name, varietyCountOrName, container);
      updateCart(name, variety, container, flowerGroup, 1);
      openAddedToCartModal();
    };
    return (
      <div key={flower.id}>
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <figure className="flex flex-col px-4 pb-2 items-center">
            <img className="pt-4 pb-1" src={image} alt={name} />
            <figcaption className={color}>
              {`${sunShade} ${emojiCode}`}
            </figcaption>
          </figure>

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
              flowerGroup={containerGroup}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={"flex justify-center flex-wrap " + opacity}>{cards}</div>
  );
}

export default FlowerCards;
