import React from 'react';

function Hero() {
  return (
    <div className='hero'>
      <div className='h-32 md:h-64 flex flex-col justify-evenly items-center font-semibold'>
        <p className='text-2xl md:text-5xl'>
          {process.env.REACT_APP_FUNDRAISER_NAME}
        </p>
        <p className='text-2xl md:text-5xl'>Plant Sale</p>
        <p className='hidden md:block text-2xl'>{process.env.REACT_APP_YEAR}</p>
      </div>
    </div>
  );
}

export default Hero;
