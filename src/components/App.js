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

function App() {
  const data = {
    flowers: FLOWERS,
    flats2: FLATS2,
  };
  const [cart, setCart] = useState([]);
  const [flowerName, setFlowerName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

  // functions to update cart
  const updateCart = () => {
    // get variety from data file
    const flowerObj = data.flats2.filter(
      (flower) => flower.name === flowerName
    )[0];
    const variety = flowerObj.variety[selectedId].name;
    const flower = cart.filter(
      (item) => item.name === flowerName && item.variety === variety
    );
    // 1. check for flower in cart
    // 2. if flower in cart then update quantity
    if (flower.length) {
      let newQuantity = flower[0].quantity + quantity;
      let itemsNotChanging = cart.filter(
        (item) => !(item.name === flowerName && item.variety === variety)
      );
      setCart(
        itemsNotChanging.concat({
          name: flowerName,
          variety: variety,
          quantity: newQuantity,
        })
      );
    } else {
      // 3. if flower not in cart add
      setCart(
        cart.concat({ name: flowerName, variety: variety, quantity: quantity })
      );
    }
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
        <FlowerGroups />
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/cart"
            render={() => <Cart cart={cart} handleOnChange={handleOnChange} />}
          />
          <Route
            exact
            path="/flats"
            render={() => (
              <FlowerCardsContainer
                flats={data.flats2}
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
                setFlowerName={setFlowerName}
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
