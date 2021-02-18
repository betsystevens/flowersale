import { PRICING } from "../shared/pricing";

export const getPrice = (container) => {
  return PRICING.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.price;
};

export const currency = (price) => {
  // <p className="pt-10">{`Price: $${(price / 100).toFixed(2)}`}</p>
  return (price / 100).toFixed(2);
};
export const getContainerDescription = (container) => {
  return PRICING.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.description;
};

export const getItemsCount = (cart) => {
  let count = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return count;
};
export const computeSubtotal = (cart) => {
  let subTotal = 0;
  cart.forEach((flower) => {
    let price = getPrice(flower.container);
    subTotal = subTotal + flower.quantity * price;
  });
  return subTotal;
};
