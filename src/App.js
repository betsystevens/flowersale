import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import FlowerGroups from './components/FlowerGroupsComponent';
import './App.css';
import { FLOWERS } from './shared/flowers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: FLOWERS
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
        <FlowerGroups flowers={this.state.flowers}/>
      </div>
    );
  }
}

export default App;
