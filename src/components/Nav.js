import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      {/* <nav className="flex-between"> */}
      <nav className="flex justify-between">
        <ul className="flex">
          <li className="logo">
            <NavLink to="/" exact>
              BS Plant Sale
            </NavLink>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <NavLink to="/hb" exact className="hover:text-gray-50">
              Hanging Baskets
            </NavLink>
          </li>
          <li>
            <NavLink to="/flat" exact className="hover:text-gray-50">
              Flats
            </NavLink>
          </li>
          <li>
            <NavLink to="/pot" exact className="hover:text-gray-50">
              Potted Plants
            </NavLink>
          </li>
          <li>
            <NavLink to="/herbTomato" exact className="hover:text-gray-50">
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
