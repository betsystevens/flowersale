import React from 'react';

function Header(props) {
  return (
    <div>
      <nav className="flex-between">
        <ul className="flex">
          <li className="logo"><a href="/">BS Plant Sale</a></li>
        </ul>
        <ul class="flex">
          <li><a href="/">Hanging Baskets</a></li>
          <li><a href="/flats">Flats</a></li>
          <li><a href="/">Potted Plants</a></li>
          <li><a href="/">Herbs & Tomatoes</a></li>
        </ul>
      </nav> 

      <div className="hero">
        <div className="flex-center">
              <h1>2021 Plant Sale</h1>
        </div>
      </div>
    </div>
  )
}

export default Header;