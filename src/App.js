import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import FlowerGroups from './components/FlowerGroups';
import { FLOWERS } from './shared/flowers';
import { FLATS } from './shared/flats';
import FlowerCards from './components/FlowerCards';
import FlowerCarousel from './components/FlowerCarousel';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Flowers For Sale</NavbarBrand>
          </div>
        </Navbar>
        <FlowerCarousel />
        <FlowerGroups flowers={this.state.flowers}/>
        <FlowerCards flats={this.state.flats}/>
      </div>
    );
  }
}

export default App;
