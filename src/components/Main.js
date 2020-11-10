import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from  './Header';
import Hero from  './Hero';
import FlowerGroups from './FlowerGroups';
import FlowerCards from './FlowerCards';
import FlowerDatabase from './FlowerDatabase';
import FlowerForm from './FlowerForm';
import Radios from './Radios';
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
      <div>
        <Hero />
        <FlowerGroups flowers={data.flowers} />
      </div>
    )
  }
  return (

    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/flats" component={() => <FlowerCards flats={data.flats} />} />
        <Route exact path="/flowerdatabase" component={() => <FlowerDatabase/>} />
        <Route exact path="/flowerform" component={() => <FlowerForm/>} />
        <Route exact path="/test" component={Radios} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default Main;