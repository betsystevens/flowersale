import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import Cart from "./Cart";
import PrintOrder from "./PrintOrder";
import CustomerForm from "./CustomerForm";
import "../App.css";
// import "tailwindcss/tailwind.css";
import "../index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState([]);
  // const [dropDownDisplay, setDropDownDisplay] = useState("hidden");
  // useOnClickOutside(ref, () => setDropDownDisplay("hidden"));

  // const toggleDropDown = () => {
  // console.log(`toggleDropDown ${dropDownDisplay}`);
  // let value = dropDownDisplay === "hidden" ? "block" : "hidden";
  // setDropDownDisplay(value);
  // };

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
  const HomePage = () => {
    useEffect(() => {
      document.title = "Flower Sale - Home";
    });
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
        <Nav
        // toggleDropDown={toggleDropDown}
        // dropDownDisplay={dropDownDisplay}
        />
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
                // customer={customer}
                // setCustomer={setCustomer}
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
            path="/printOrder"
            render={() => <PrintOrder cart={cart} foo={"hello foo"} />}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
