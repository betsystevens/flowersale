import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <nav className="flex-between">
        <ul className="flex">
          <li className="logo">
            <NavLink to="/" exact>
              BS Plant Sale
            </NavLink>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <NavLink to="/" exact>
              Hanging Baskets
            </NavLink>
          </li>
          <li>
            <NavLink to="/flats" exact>
              Flats
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              Potted Plants
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              Herbs & Tomatoes
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" exact>
              <img
                className="h-8 cursor-pointer"
                src="/assets/icons/CartWhite.svg"
                alt="cart"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
