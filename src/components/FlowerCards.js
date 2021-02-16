import React from "react";
import { Link } from "react-router-dom";
import { FLOWERS } from "../shared/flowers";
import { getPrice, getContainerDescription } from "../utils/utilities";

function flowerInfo(flower) {
  const name = flower.name;
  const variety = flower.variety[0].name;
  const image = flower.variety[0].image;
  return [name, variety, image];
}
function containerInfo(flower) {
  const container = flower.container;
  const price = (getPrice(flower.container) / 100).toFixed(2);
  const containerDescription = getContainerDescription(flower.container);
  return [container, price, containerDescription];
}
function sunInfo(flower) {
  let color;
  let emoji;
  switch (flower.sun) {
    case "full sun":
      color = "text-yellow-500";
      emoji = "\u2600";
      break;
    case "filtered sun":
      color = "text-yellow-300";
      emoji = "\u26C5";
      break;
    case "part shade":
      color = "text-indigo-400";
      emoji = "\u26C5";
      break;
    case "shade":
      color = "text-indigo-600";
      emoji = "\u2601";
      break;
    default:
      color = "";
      emoji = "";
      break;
  }
  return [flower.sun, color, emoji];
}
function varietyInfo(flower) {
  const varietyCount = flower.variety.length;
  const variety = flower.variety[0].name;
  const varietyCountOrName =
    varietyCount === 1 ? variety : `${varietyCount} varieties`;
  return [varietyCount, varietyCountOrName];
}
function ActionButton({ varietyCount, addToCart, flowerGroup, flowerId }) {
  if (varietyCount === 1) {
    return (
      // <div>
      <div className="flex flex-col items-center w-full p-4 pb-7">
        <button
          id="addtocart"
          className="px-8 pt-1 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button"
          onClick={() => addToCart()}
        >
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center w-full p-4 pb-7">
        <Link to={`/${flowerGroup}/${flowerId}`}>
          <button className="px-8 pt-1 pb-2 hover:bg-purple-100 hover:text-gray-700 fancy-button">
            View Options
          </button>
        </Link>
      </div>
    );
  }
}
function CardBody({ name, price, containerDescription, varietyCountOrName }) {
  return (
    <div className="p-2 flex flex-col items-center">
      <p className="font-extrabold text-lg">{name}</p>
      <p className="pt-1">{`${varietyCountOrName}`}</p>
      <p className="pt-1">{`Price - $${price}`}</p>
      <p className="pt-1">{`${containerDescription}`}</p>
    </div>
  );
}
function CardImage({ name, image, color, sunShade, emoji }) {
  return (
    <figure className="flex flex-col px-4 pb-2 items-center">
      <img className="pt-4 pb-1" src={image} alt={name} />
      <figcaption className={color}>{`${sunShade} ${emoji}`}</figcaption>
    </figure>
  );
}

function FlowerCards({
  flowerGroup,
  openAddedToCartModal,
  updateCart,
  updateAddedModalState,
  opacity,
}) {
  const flowerFile = FLOWERS.filter((flower) => flower.group === flowerGroup);

  const cards = flowerFile.map((flower) => {
    const [container, price, containerDescription] = containerInfo(flower);
    const [name, variety, image] = flowerInfo(flower);
    const [sunShade, color, emoji] = sunInfo(flower);
    const [varietyCount, varietyCountOrName] = varietyInfo(flower);
    const addToCart = () => {
      updateAddedModalState(image, name, varietyCountOrName, container);
      updateCart(name, variety, container, flowerGroup, 1);
      openAddedToCartModal();
    };
    return (
      <div key={flower.id} id={`{flower.id}`}>
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <CardImage
            name={name}
            image={image}
            color={color}
            sunShade={sunShade}
            emoji={emoji}
          />
          <CardBody
            name={name}
            varietyCountOrName={varietyCountOrName}
            price={price}
            containerDescription={containerDescription}
          />
          <ActionButton
            varietyCount={varietyCount}
            addToCart={addToCart}
            flowerId={flower.id}
            flowerGroup={flowerGroup}
          />
        </div>
      </div>
    );
  });
  return (
    <div className={"flex justify-center flex-wrap " + opacity}>{cards}</div>
  );
}

export default FlowerCards;
