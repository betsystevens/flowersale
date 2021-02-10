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
function getItemsCount(cart) {
  let count = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return count;
}
function computeSubtotal(cart) {
  let subTotal = 0;
  cart.forEach((flower) => {
    let price = getPrice(flower.container);
    subTotal = subTotal + flower.quantity * price;
  });
  return subTotal;
}
export { getPrice, getContainerDescription, computeSubtotal, getItemsCount };
