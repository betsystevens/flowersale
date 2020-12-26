import React from "react";

function Nav(props) {
  return (
    <div>
      <nav className="flex-between">
        <ul className="flex">
          <li className="logo">
            <a href="/">BS Plant Sale</a>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <a href="/">Hanging Baskets</a>
          </li>
          <li>
            <a href="/flats">Flats</a>
          </li>
          <li>
            <a href="/">Potted Plants</a>
          </li>
          <li>
            <a href="/">Herbs & Tomatoes</a>
          </li>
          <li>
            <a href="/cart">
              <img
                className="h-8 cursor-pointer"
                src="/assets/icons/CartWhite.svg"
                alt="cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
