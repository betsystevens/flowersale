import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center">
        <ul>
          <li>
            <NavLink to="/" exact>
              <svg className="pt-1 w-12 h-12 fill-current text-indigo-100">
                <use xlinkHref="/assets/icons/noun_flowers_ext.svg#icon-flowers" />
              </svg>
            </NavLink>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <NavLink to="/flat" exact className="hover:text-gray-50">
              Flats
            </NavLink>
          </li>
          <li>
            <NavLink to="/hb" exact className="hover:text-gray-50">
              Hanging Baskets
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
