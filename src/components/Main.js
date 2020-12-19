import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";
import FlowerCardsContainer from "./FlowerCardsContainer";
import Radios from "./Radios";
import FlowerDetails from "./FlowerDetails";
import { FLOWERS } from "../shared/flowers";
import { FLATS } from "../shared/flats";
import { FLATS2 } from "../shared/flats2";

import "../App.css";

function Main(props) {
  const data = {
    flowers: FLOWERS,
    flats: FLATS,
    flats2: FLATS2,
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
      <React.StrictMode>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
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
              <FlowerDetails
                flower={data.flats2[match.params.flowerId]}
                flowerGroup={
                  data.flowers.filter(
                    (flower) => flower.container.name === "flat"
                  )[0]
                }
                breadCrumb={"/flats"}
              />
            )}
          />
          <Route exact path="/test" component={Radios} />
          <Redirect to="/home" />
        </Switch>
      </React.StrictMode>
    </div>
  );
}

export default Main;
