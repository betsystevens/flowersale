import React from 'react';
import Radios from './Radios';

function FlowerCards(props) {
  const flatCards = props.flats.map((flat) => {
    return (
      <div>
        <div key={flat.id} className="card">
          <div className="card-header">
            <img src={flat.image} alt={flat.name} />
          </div>
          <div className="card-body">
            <h2 className="card-title">{flat.name}</h2>
            <Radios values={flat.variety} />
            <p className="card-text">{flat.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex-center">
       {flatCards}
    </div>
  );
}

export default FlowerCards;