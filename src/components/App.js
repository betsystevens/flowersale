import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import Cart from "./Cart";
import { FLOWERS } from "../shared/flowers";
import { FLATS2 } from "../shared/flats2";
import "../App.css";
import "tailwindcss/tailwind.css";

function App(props) {
  const data = {
    flowers: FLOWERS,
    flats2: FLATS2,
  };
  const [cart, setCart] = useState({});
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [fooTest, setFooTest] = useState(99);

  // functions to update cart
  const updateCart = () => {
    console.log(`${name} - ${quantity}`);
    const flowerObj = data.flats2.filter((flower) => flower.name === name)[0];
    const variety = flowerObj.variety[selectedId].name;
    console.log(variety);
    // const cartCopy = cart;
    // stringify for deep copy
    const cartCopy = JSON.parse(JSON.stringify(cart));
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
    console.log(cart);
    setCart(cartCopy);

    setFooTest(33);
  };
  // functions for handling quantity changes
  const isValidNumber = (entry) => {
    const pattern = /^[0-9][0-9]?$/;
    return pattern.test(entry);
  };
  const handleOnChange = (event) => {
    if (isValidNumber(event.target.value)) {
      setQuantity(Number(event.target.value));
    } else setQuantity("");
  };
  const handlePlus = () => {
    if (quantity < 99) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  };
  // functions for handling hover/click on images
  const handleMouseEnter = (index) => {
    setHoverId(index);
  };
  const handleMouseLeave = () => {
    setHoverId(selectedId);
  };
  const handleClick = (index) => {
    setSelectedId(index);
  };
  const HomePage = () => {
    return (
      <div>
        <Hero />
        <FlowerGroups flowers={data.flowers} />
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                cart={cart}
                quantity={quantity}
                name={name}
                fooTest={fooTest}
              />
            )}
          />
          <Route
            exact
            path="/flats"
            render={() => (
              <FlowerCardsContainer
                flats={data.flats2}
                containers={data.flowers}
                setQuantity={setQuantity}
                setHoverId={setHoverId}
                setSelectedId={setSelectedId}
              />
            )}
          />
          <Route
            exact
            path="/flats/:flowerId"
            render={({ match }) => (
              <FlowerDetails
                flower={data.flats2[match.params.flowerId]}
                flowerGroup={
                  data.flowers.filter(
                    (flower) => flower.container.name === "flat"
                  )[0]
                }
                breadCrumb={"/flats"}
                quantity={quantity}
                setQuantity={setQuantity}
                setName={setName}
                handleOnChange={handleOnChange}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleClick={handleClick}
                hoverId={hoverId}
                selectedId={selectedId}
                updateCart={updateCart}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
