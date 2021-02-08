import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "./hooks";

function NavItem({ location, label }) {
  return (
    <li>
      <NavLink
        to={location}
        activeClassName="current"
        activeStyle={{ fontStyle: "italic", textDecoration: "underline" }}
        exact
        className="hover:text-gray-50 whitespace-nowrap"
      >
        {label}
      </NavLink>
    </li>
  );
}
function Nav() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className="sticky top-0 z-10">
      <nav className="">
        {/* wide nav - row */}
        <div className="hidden sm:flex justify-evenly sm:items-center">
          <ul className="text-lg">
            <NavLink to="/" exact>
              <svg className="py-1 w-12 h-12 fill-current text-indigo-100">
                <use xlinkHref="/assets/icons/noun_flowers_short.svg#icon-flowers" />
              </svg>
            </NavLink>
          </ul>
          <div className="flex">
            <ul className="flex justify-between flex-wrap">
              <NavItem location="/flat" label="Flats" />
              <NavItem location="/hb" label="Hanging Baskets" />
            </ul>
            <ul className="flex flex-wrap">
              <NavItem location="/pot" label="Potted Plants" />
              <NavItem location="/herbTomato" label="Herbs & Tomatoes" />
            </ul>
          </div>
          <div className="mr-2">
            <NavLink to="/cart" exact>
              <img
                onClick={() => setOpen(false)}
                className="h-7 cursor-pointer flex-shrink-0"
                src="/assets/icons/CartWhite.svg"
                alt="cart"
              />
            </NavLink>
          </div>
        </div>

        {/* mobile nav - column */}
        <div className="sm:hidden">
          <ul>
            <li className="flex justify-between">
              {isOpen ? (
                <ul
                  ref={ref}
                  className="flex flex-col w-screen"
                  onClick={() => setOpen(false)}
                >
                  <NavItem location="/" label="Home" />
                  <NavItem location="/flat" label="Flats" />
                  <NavItem location="/hb" label="Hanging Baskets" />
                  <NavItem location="/pot" label="Potted Plants" />
                  <NavItem location="/herbTomato" label="Herbs & Tomatoes" />
                </ul>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="px-1 rounded ring-2 ring-opacity-10 ring-gray-50 "
                >
                  <svg className="w-4 h-4 mx-auto fill-current text-indigo-100">
                    <use xlinkHref="/assets/icons/menu.svg#icon-menu" />
                  </svg>
                </button>
              )}
              <div className="mr-2">
                <NavLink to="/cart" exact>
                  <img
                    onClick={() => setOpen(false)}
                    className="h-8 cursor-pointer"
                    src="/assets/icons/CartWhite.svg"
                    alt="cart"
                  />
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
