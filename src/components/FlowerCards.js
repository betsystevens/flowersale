import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FLOWERS } from "../shared/flowers";
import {
  getPrice,
  currency,
  getContainerDescription,
} from "../utils/utilities";

function flowerInfo(flower) {
  const name = flower.name;
  const image = flower.variety[0].image;
  return [name, image];
}
function containerInfo(flower) {
  const price = currency(getPrice(flower.container));
  const containerDescription = getContainerDescription(flower.container);
  return [price, containerDescription];
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
  return [varietyCountOrName];
}
function CardBody({
  flowerGroup,
  flowerId,
  name,
  price,
  containerDescription,
  varietyCountOrName,
}) {
  return (
    <Link to={`/${flowerGroup}/${flowerId}`}>
      <div className="p-2 flex flex-col items-center cursor-pointer">
        <p className="font-extrabold text-lg">{name}</p>
        <p className="pt-1">{`${varietyCountOrName}`}</p>
        <p className="pt-1">{`Price - $${price}`}</p>
        <p className="pt-1 pb-3">{`${containerDescription}`}</p>
      </div>
    </Link>
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
// **** the MAIN component *****
function FlowerCards({
  flowerGroup,
  // openAddedToCartModal,
  // updateCart,
  // updateAddedModalState,
  opacity,
}) {
  const flowers = FLOWERS.filter((flower) => flower.group === flowerGroup);

  const location = useLocation();
  const cardId = location.state && location.state.flowerId;

  // ref created here
  const refArr = Array(FLOWERS.length);
  const cardRef = useRef(refArr);
  useEffect(() => {
    if (cardId && cardRef.current && cardRef.current[cardId]) {
      cardRef.current[cardId].scrollIntoView();
    }
  }, [cardId]);

  const cards = flowers.map((flower) => {
    const [price, containerDescription] = containerInfo(flower);
    const [name, image] = flowerInfo(flower);
    const [sunShade, color, emoji] = sunInfo(flower);
    const [varietyCountOrName] = varietyInfo(flower);
    return (
      <div
        key={flower.id}
        id={`${flower.id}`}
        ref={(element) => (cardRef.current[flower.id] = element)}
      >
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <CardImage
            name={name}
            image={image}
            color={color}
            sunShade={sunShade}
            emoji={emoji}
          />
          <CardBody
            flowerId={flower.id}
            flowerGroup={flowerGroup}
            name={name}
            varietyCountOrName={varietyCountOrName}
            price={price}
            containerDescription={containerDescription}
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
