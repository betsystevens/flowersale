import { PRICING } from "../shared/pricing";
const getPrice = (container) => {
  return PRICING.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.price;
};
const getContainerDescription = (container) => {
  return PRICING.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.description;
};
export { getPrice, getContainerDescription };
