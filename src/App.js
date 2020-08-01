import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import FlowerGroups from './components/FlowerGroupsComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Flowers For Sale</NavbarBrand>
          </div>
        </Navbar>
        <FlowerGroups />
      </div>
    );
  }
}


export default App;
