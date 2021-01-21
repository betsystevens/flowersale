import { FLOWERS } from "../shared/flowers";
// const { FLOWERS } = require("../shared/flowers");
import { FLATS } from "../shared/flats";
import { HB } from "../shared/hb";

const allFlowersFile = () => {
  const allFlowers = HB.concat(FLATS);
  console.log(`utilities ${allFlowers[0]}`);
  return allFlowers;
};
const getPrice = (container) => {
  return FLOWERS.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.price;
};
const getContainerDescription = (container) => {
  return FLOWERS.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.description;
};
const getFlowerFile = (flowerGroup) => {
  // return data file
  let file;
  switch (flowerGroup) {
    case "flat":
      console.log("flat file");
      file = FLATS;
      break;
    case "hb":
      console.log("hb file");
      file = HB;
      break;
    default:
      console.log("default");
      file = FLATS;
      break;
  }
  return file;
};

export { getPrice, getFlowerFile, allFlowersFile, getContainerDescription };
