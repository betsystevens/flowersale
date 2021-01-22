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
  const [cart, setCart] = useState([]);

  // flower to update
  const getFlowerFromCart = (name, variety, container) => {
    const flower = cart.filter(
      (item) =>
        item.name === name &&
        item.variety === variety &&
        item.container === container
    );
    return flower;
  };
  const updateFlowerInCart = (name, variety, container, quantity) => {
    // filter out flower to update
    let flowersNotChanging = cart.filter(
      (item) =>
        !(item.name === name && item.variety === variety && item.container)
    );
    // add back in flower with updated properties
    setCart(
      flowersNotChanging.concat({
        name: name,
        variety: variety,
        container: container,
        quantity: quantity,
      })
    );
  };
  const updateCart = (name, variety, container, quantity) => {
    const flower = getFlowerFromCart(name, variety, container);
    // flower in cart, update it
    if (flower.length) {
      const newQuantity = flower[0].quantity + quantity;
      updateFlowerInCart(name, variety, container, newQuantity);
    } else {
      // flwower not in cart, add it
      setCart(
        cart.concat({
          name: name,
          variety: variety,
          container: container,
          quantity: quantity,
        })
      );
    }
  };
  const removeFlowerFromCart = (name, variety, container, qty) => {
    console.log(`remove ${name}, ${variety}, ${container}, ${qty}`);
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
            path={["/flat", "/hb"]}
            render={({ match }) => (
              <FlowerCardsContainer updateCart={updateCart} path={match.path} />
            )}
          />
          <Route
            exact
            path={[`/flat/:flowerId`, `/hb/:flowerId`]}
            render={({ match }) => (
              <FlowerDetails
                foo={() => console.log(match.params.flowerId)}
                flowerId={match.params.flowerId}
                updateCart={updateCart}
                path={match.path}
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
