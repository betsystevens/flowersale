import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import Cart from "./Cart";
import "../App.css";
import "tailwindcss/tailwind.css";

function App() {
  let flowerGroup = "flat";
  const [cart, setCart] = useState([]);

  // functions to update cart
  const getFlowerFromCart = (name, variety) => {
    const flower = cart.filter(
      (item) => item.name === name && item.variety === variety
    );
    return flower;
  };
  const updateFlowerInCart = (name, variety, quantity) => {
    let itemsNotChanging = cart.filter(
      (item) => !(item.name === name && item.variety === variety)
    );
    setCart(
      itemsNotChanging.concat({
        name: name,
        variety: variety,
        quantity: quantity,
      })
    );
  };
  const updateCart = (name, variety, quantity) => {
    const flower = getFlowerFromCart(name, variety);
    if (flower.length) {
      const newQuantity = flower[0].quantity + quantity;
      updateFlowerInCart(name, variety, newQuantity);
    } else {
      setCart(
        cart.concat({ name: name, variety: variety, quantity: quantity })
      );
    }
  };
  const removeFlowerFromCart = (name, variety, qty) => {
    console.log(`remove ${name} ${variety}, ${qty}`);
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
              <Cart
                cart={cart}
                updateFlowerInCart={updateFlowerInCart}
                removeFlowerFromCart={removeFlowerFromCart}
              />
            )}
          />
          <Route
            exact
            path={`/${flowerGroup}`}
            render={() => <FlowerCardsContainer />}
          />
          <Route
            exact
            path={`/${flowerGroup}/:flowerId`}
            render={({ match }) => (
              <FlowerDetails
                flowerId={match.params.flowerId}
                updateCart={updateCart}
                breadCrumb={"/flat"}
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
