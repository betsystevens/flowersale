import { PRICING } from "../shared/pricing";

export const pageNames = () => {
  let pageNames = new Map();
  pageNames.set("hb", "Hanging Baskets");
  pageNames.set("flat", "Flats");
  pageNames.set("pot", "Potted Plants");
  pageNames.set("herbTomato", "Herbs & Tomatoes");
  pageNames.set("cart", "Cart");
  pageNames.set("userContact", "User");
  pageNames.set("displayOrder", "Order");
  pageNames.set("home", "Home");
  return pageNames;
};

export const getPrice = (container) => {
  return PRICING.filter(
    (flowerGroup) => flowerGroup.container.name === container
  )[0].container.price;
};

export const currency = (price) => {
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
