import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavItem({ location, label }) {
  return (
    <li>
      <NavLink
        to={location}
        exact
        className="hover:text-gray-50 whitespace-nowrap"
      >
        {label}
      </NavLink>
    </li>
  );
}
function Nav() {
  const handleClick = () => {
    let value = display === "hidden" ? "block" : "hidden";
    setDisplay(value);
  };
  const [display, setDisplay] = useState("hidden");
  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center">
        {/* wide nav - row */}
        <div className="hidden sm:block">
          <ul className="flex items-center text-lg">
            <li className="">
              <NavLink to="/" exact>
                <svg className="py-1 w-12 h-12 fill-current text-indigo-100">
                  <use xlinkHref="/assets/icons/noun_flowers_short.svg#icon-flowers" />
                </svg>
              </NavLink>
            </li>
            <div className="flex flex-wrap">
              <NavItem location="/flat" label="Flats" />
              <NavItem location="/hb" label="Hanging Baskets" />
            </div>
            <div className="flex flex-wrap">
              <NavItem location="/pot" label="Potted Plants" />
              <NavItem location="/herbTomato" label="Herbs & Tomatoes" />
            </div>
          </ul>
        </div>
        {/* end of wide nav - row */}

        {/* mobile nav - column */}
        <div className="block sm:hidden">
          <ul className="flex flex-col text-base">
            <li className="block">
              <button
                onClick={handleClick}
                className="block py-0.5 px-1 rounded ring-2 ring-opacity-10 ring-gray-50 "
              >
                <svg className="w-4 h-4 mx-auto fill-current text-indigo-100">
                  <use xlinkHref="/assets/icons/menu.svg#icon-menu" />
                </svg>
              </button>
            </li>

            <div className="w-screen">
              <div className={display} onClick={handleClick}>
                <NavItem location="/" label="Home" />
                <NavItem location="/flat" label="Flats" />
                <NavItem location="/hb" label="Hanging Baskets" />
                <NavItem location="/pot" label="Potted Plants" />
                <NavItem location="/herbTomato" label="Herbs & Tomatoes" />
                <NavItem location="/cart" label="Cart" />
              </div>
            </div>
          </ul>
        </div>
        {/* end of wide nav - column */}

        {/* cart icon link */}
        <div className="hidden sm:block mr-2">
          <NavLink to="/cart" exact>
            <img
              className="h-8 cursor-pointer"
              src="/assets/icons/CartWhite.svg"
              alt="cart"
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
