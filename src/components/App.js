import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import FlowerDetails from "./FlowerDetails";
import FlowerDetails2 from "./FlowerDetails2";
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
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [hoverId, setHoverId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

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
          <Route path="/cart" component={Cart} />
          <Route
            exact
            path="/flats"
            component={() => (
              <FlowerCardsContainer
                flats={data.flats2}
                containers={data.flowers}
              />
            )}
          />
          <Route
            exact
            path="/flats/:flowerId"
            render={({ match }) => (
              <FlowerDetails2
                flower={data.flats2[match.params.flowerId]}
                flowerGroup={
                  data.flowers.filter(
                    (flower) => flower.container.name === "flat"
                  )[0]
                }
                breadCrumb={"/flats"}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleClick={handleClick}
                hoverId={hoverId}
                selectedId={selectedId}
              />
              /*
              <FlowerDetails
                flower={data.flats2[match.params.flowerId]}
                flowerGroup={
                  data.flowers.filter(
                    (flower) => flower.container.name === "flat"
                  )[0]
                }
                breadCrumb={"/flats"}
              /> */
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
