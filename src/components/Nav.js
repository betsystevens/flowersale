import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  console.log(window.innerWidth);
  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center">
        {/* nav row */}
        <div className="hidden sm:block">
          {/* <ul className="flex items-center text-base md:text-lg"> */}
          <ul className="flex items-center text-lg">
            <li className="">
              <NavLink to="/" exact>
                <svg className="py-1 w-12 h-12 fill-current text-indigo-100">
                  <use xlinkHref="/assets/icons/noun_flowers_short.svg#icon-flowers" />
                </svg>
              </NavLink>
            </li>
            <div className="flex flex-wrap">
              <li>
                <NavLink
                  to="/flat"
                  exact
                  className="hover:text-gray-50 whitespace-nowrap"
                >
                  Flats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hb"
                  exact
                  className="hover:text-gray-50 whitespace-nowrap"
                >
                  Hanging Baskets
                </NavLink>
              </li>
            </div>
            <div className="flex flex-wrap">
              <li>
                <NavLink
                  to="/pot"
                  exact
                  className="hover:text-gray-50 whitespace-nowrap"
                >
                  Potted Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/herbTomato"
                  exact
                  className="hover:text-gray-50 whitespace-nowrap"
                >
                  Herbs & Tomatoes
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        {/* end of nav row */}

        {/* nav column */}
        <div className="block sm:hidden border-2 border-red-300">
          <ul className="flex flex-col text-base">
            <li className="">
              <button className="block py-0.5 px-1 rounded ring-2 ring-opacity-10 ring-gray-50 ">
                <svg className="w-4 h-4 mx-auto fill-current text-indigo-100">
                  <use xlinkHref="/assets/icons/menu.svg#icon-menu" />
                </svg>
              </button>
            </li>
            <li>
              <NavLink
                to="/flat"
                exact
                className="hover:text-gray-50 whitespace-nowrap"
              >
                Flats
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hb"
                exact
                className="hover:text-gray-50 whitespace-nowrap"
              >
                Hanging Baskets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pot"
                exact
                className="hover:text-gray-50 whitespace-nowrap"
              >
                Potted Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/herbTomato"
                exact
                className="hover:text-gray-50 whitespace-nowrap"
              >
                Herbs & Tomatoes
              </NavLink>
            </li>
          </ul>
        </div>
        {/* end of nav column */}

        {/* cart icon link */}
        <ul className="flex justify-around">
          <li className="flex-shrink-0 self-center">
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
