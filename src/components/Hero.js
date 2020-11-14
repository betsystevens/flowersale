import React from 'react';
import { plantSaleYear } from '../shared/config';

function Hero(props) {
  return (
    <div className="hero">
      <div className="flex-center">
          <h1>{plantSaleYear} Plant Sale</h1>
      </div>
    </div>
  )
}

export default Hero;