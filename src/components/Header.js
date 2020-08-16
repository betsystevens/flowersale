import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Header(props) {

  return (
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
  );
}

export default Header;
