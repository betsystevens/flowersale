import React from 'react';
import { plantSaleYear } from '../shared/config';

function Hero(props) {
  return (
    <div className="hero">
      <div className="flex-center">
          <p className="text-5xl font-semibold">{plantSaleYear} Plant Sale</p>
      </div>
    </div>
  )
}

export default Hero;