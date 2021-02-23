import React, { useEffect } from "react";
import FlowerCards from "./FlowerCards";
import { pageNames } from "../utils/utilities";

function FlowerCardsContainer({ path }) {
  let flowerGroup = path.substring(1);

  let pages = pageNames();

  useEffect(() => {
    let page = pages.get(flowerGroup);
    document.title = `Flower Sale - ${page}`;
  });
  return (
    <div>
      <FlowerCards flowerGroup={flowerGroup} />
    </div>
  );
}
export default FlowerCardsContainer;
