import React, { useEffect } from "react";
import FlowerCards from "./FlowerCards";

function FlowerCardsContainer({ path }) {
  let flowerGroup = path.substring(1);
  let pageNames = new Map();
  pageNames.set("hb", "Hanging Baskets");
  pageNames.set("flat", "Flats");
  pageNames.set("pot", "Potted Plants");
  pageNames.set("herbTomato", "Herbs & Tomatoes");
  useEffect(() => {
    let page = pageNames.get(flowerGroup);
    document.title = `Flower Sale - ${page}`;
  });
  return (
    <div>
      <FlowerCards flowerGroup={flowerGroup} />
    </div>
  );
}
export default FlowerCardsContainer;
