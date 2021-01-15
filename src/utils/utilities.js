import { FLOWERS } from "../shared/flowers";
// const { FLOWERS } = require("../shared/flowers");

const getPrice = (container) => {
  return FLOWERS.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.price;
};

export { getPrice };
