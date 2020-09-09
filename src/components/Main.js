import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from  './Header';
import FlowerGroups from './FlowerGroups';
import FlowerCards2 from './FlowerCards2';
import { FLOWERS } from '../shared/flowers';
import { FLATS } from '../shared/flats';

import '../App.css';

function Main(props) {

  const data = {
    flowers : FLOWERS,
    flats : FLATS
  }

  const HomePage = () => {
    return(
      <FlowerGroups flowers={data.flowers} />
    )
  }
  return (

    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/flats" component={() => <FlowerCards2 flats={data.flats} />} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default Main;