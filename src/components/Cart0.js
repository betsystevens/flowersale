import React, { useState } from "react";

function Cart0() {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  // functions to update cart
  const updateCart = () => {
    console.log(`${name} - ${quantity}`);
    const flowerObj = data.flats2.filter((flower) => flower.name === name)[0];
    const variety = flowerObj.variety[selectedId].name;
    console.log(variety);
    // const cartCopy = cart;
    // stringify for deep copy
    const cartCopy = JSON.parse(JSON.stringify(props.cart));
    // 1. check for flower in cart
    // 2. if flower in cart then update quantity
    // 3. if flower not in cart add
    const item = cartCopy[name] && cartCopy[name][variety];
    if (item) cartCopy[name][variety]["quantity"] = quantity;
    else {
      /* flower exists with different variety */
      if (cartCopy[name]) {
        cartCopy[name][variety] = { quantity: quantity };
      } else {
        cartCopy[name] = {
          [variety]: {
            quantity: quantity,
          },
        };
      }
    }
    console.log("cartCopy -------");
    console.log(cartCopy);
    console.log("cart-------");
    console.log(props.cart);
    props.setCart(cartCopy);

    setFooTest(33);
  };
  return (
    <div cart={cart} setCart={setCart}>
      Cart
    </div>
  );
}

export default Cart0;
