import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  console.log(window.innerWidth);
  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center">
        <ul>
          <li className="hidden sm:block">
            <NavLink to="/" exact>
              <svg className="pt-1 w-12 h-12 fill-current text-indigo-100">
                <use xlinkHref="/assets/icons/noun_flowers_ext.svg#icon-flowers" />
              </svg>
            </NavLink>
          </li>
          <li className="block sm:hidden">
            <button className="block mx-auto">
              <svg className="w-6 h-6 mx-auto fill-current text-indigo-100">
                <use xlinkHref="/assets/icons/menu.svg#icon-menu" />
              </svg>
            </button>
          </li>
        </ul>
        <ul className="flex">
          <li className="hidden sm:block text-sm md:text-lg">
            <NavLink to="/flat" exact className="hover:text-gray-50">
              Flats
            </NavLink>
          </li>
          <li className="hidden sm:block text-sm md:text-lg">
            <NavLink to="/hb" exact className="hover:text-gray-50">
              Hanging Baskets
            </NavLink>
          </li>
          <li className="hidden sm:block text-sm md:text-lg">
            <NavLink to="/pot" exact className="hover:text-gray-50">
              Potted Plants
            </NavLink>
          </li>
          <li className="hidden sm:block text-sm md:text-lg">
            <NavLink to="/herbTomato" exact className="hover:text-gray-50">
              Herbs & Tomatoes
            </NavLink>
          </li>
          <li className="flex-shrink-0 self-center">
            <NavLink to="/cart" exact>
              <img
                className="h-5 md:h-8 cursor-pointer"
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
