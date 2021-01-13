import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import Cart from "./Cart";
import { FLATS } from "../shared/flats";
import "../App.css";
import "tailwindcss/tailwind.css";

function App() {
  let flowerGroup = "flats";
  const data = {
    flats: FLATS,
  };
  const [cart, setCart] = useState([]);
  const [flowerName, setFlowerName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

  // functions to update cart
  // 1. check for flower in cart
  // 2. if flower in cart then update quantity
  // 3. if flower not in cart add
  const updateCart = () => {
    // get variety from data file
    const flowerObj = data.flats.filter(
      (flower) => flower.name === flowerName
    )[0];
    const variety = flowerObj.variety[selectedId].name;
    const flower = cart.filter(
      (item) => item.name === flowerName && item.variety === variety
    );
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
      setCart(
        cart.concat({ name: flowerName, variety: variety, quantity: quantity })
      );
    }
  };
  // functions for handling hover/click on images
  const imageHandlers = {
    handleMouseEnter(index) {
      setHoverId(index);
    },
    handleMouseLeave() {
      setHoverId(selectedId);
    },
    handleClick(index) {
      setSelectedId(index);
    },
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
            render={() => (
              // <Cart cart={cart} quantityHandlers={quantityHandlers} />
              <Cart cart={cart} setQuantity={setQuantity} />
            )}
          />
          <Route
            exact
            path={`/${flowerGroup}`}
            render={() => (
              <FlowerCardsContainer
                setQuantity={setQuantity}
                setHoverId={setHoverId}
                setSelectedId={setSelectedId}
              />
            )}
          />
          <Route
            exact
            path={`/${flowerGroup}/:flowerId`}
            render={({ match }) => (
              <FlowerDetails
                flowerId={match.params.flowerId}
                breadCrumb={"/flats"}
                quantity={quantity}
                setQuantity={setQuantity}
                hoverId={hoverId}
                selectedId={selectedId}
                updateCart={updateCart}
                setFlowerName={setFlowerName}
                // quantityHandlers={quantityHandlers}
                imageHandlers={imageHandlers}
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
