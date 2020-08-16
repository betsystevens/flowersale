import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

function Header(props) {

  return (
    <div>
      <Navbar dark expand="md" color="primary">
        <div className="container">
          <NavbarBrand href="/">Flowers For Sale</NavbarBrand>
          <Nav navbar navbar-default className="mr-auto">
            <NavItem>
              <NavLink className="nav-link px-4" href='/flats'>Flats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link px-4" href='/hb'>Hanging Baskets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link px-4" href='/pots'>Potted Plants</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link px-4" href='/tomatoes'>Tomatoes & Herbs</NavLink>
            </NavItem>
          </Nav>    
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>2021 Plant Sale</h1>
              <p>Orders due March 10, 2021</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Header;
