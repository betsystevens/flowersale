import React, { Component } from 'react';
import Header from './components/Header';
import FlowerGroups from './components/FlowerGroups';
import FlowerCards from './components/FlowerCards';
import FlowerCarousel from './components/FlowerCarousel';
import { FLOWERS } from './shared/flowers';
import { FLATS } from './shared/flats';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: FLOWERS,
      flats: FLATS
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FlowerCarousel />
        <FlowerGroups flowers={this.state.flowers}/>
        <FlowerCards flats={this.state.flats}/>
      </div>
    );
  }
}

export default App;
