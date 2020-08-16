import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header(props) {

  return (
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Flowers For Sale</NavbarBrand>
      </div>
    </Navbar>
  );
}

export default Header;
