import React from 'react';
import Header from './components/Header';
import FlowerGroups from './components/FlowerGroups';
import FlowerCards from './components/FlowerCards';
import { FLOWERS } from './shared/flowers';
import { FLATS } from './shared/flats';
import './App.css';


function App(props) {
  const data = {
    flowers : FLOWERS,
    flats : FLATS
  }
    return (
      <div className="App">
        <Header />
        <FlowerGroups flowers={data.flowers}/>
        <FlowerCards flats={data.flats}/>
      </div>
    );
  }

export default App;
