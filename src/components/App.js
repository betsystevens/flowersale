import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import HomePage from "./HomePage";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import Cart from "./Cart";
import DisplayOrder from "./DisplayOrder";
import UserContact from "./UserContact";
import "../App.css";
import "../index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

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

  const itemsNotChanging = (name, variety, container) => {
    let keepers = cart.filter(
      (item) =>
        !(
          item.name === name &&
          item.variety === variety &&
          item.container === container
        )
    );
    return keepers;
  };

  const updateFlowerInCart = (name, variety, container, group, quantity) => {
    // comes from cart, flower exists, quantity is overwritten
    // filter out flower to update
    let flowersNotChanging = itemsNotChanging(name, variety, container);
    // add back in flower with updated properties
    setCart(
      flowersNotChanging.concat({
        name: name,
        variety: variety,
        container: container,
        group: group,
        quantity: quantity,
      })
    );
  };
  const updateCart = (name, variety, container, group, quantity) => {
    // comes from flower cards and detail, if flower exists, quantity is added
    const flower = getFlowerFromCart(name, variety, container);
    // flower is in cart, update it
    if (flower.length) {
      const newQuantity = flower[0].quantity + quantity;
      let flowersNotChanging = itemsNotChanging(name, variety, container);
      setCart(
        flowersNotChanging.concat({
          name: name,
          variety: variety,
          container: container,
          group: group,
          quantity: newQuantity,
        })
      );
    } else {
      // flwower is not in cart, add it
      setCart(
        cart.concat({
          name: name,
          variety: variety,
          container: container,
          group: group,
          quantity: quantity,
        })
      );
    }
  };
  const removeFlowerFromCart = (e, name, variety, container) => {
    e.target.blur();
    let flowersNotChanging = itemsNotChanging(name, variety, container);
    setCart(flowersNotChanging);
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
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
            path={["/flat", "/hb", "/pot", "/herbTomato"]}
            render={({ match }) => (
              <FlowerCardsContainer updateCart={updateCart} path={match.path} />
            )}
          />
          <Route
            exact
            path={[
              `/flat/:flowerId`,
              `/hb/:flowerId`,
              `/pot/:flowerId`,
              `/herbTomato/:flowerId`,
            ]}
            render={({ match }) => (
              <FlowerDetails
                flowerId={match.params.flowerId}
                updateCart={updateCart}
                path={match.path}
              />
            )}
          />
          <Route
            exact
            path="/displayOrder"
            render={() => <DisplayOrder cart={cart} user={user} />}
          />
          <Route
            exact
            path="/userContact"
            render={() => (
              <UserContact cart={cart} user={user} setUser={setUser} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
