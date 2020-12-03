import React from 'react';

function FlowerCards(props) {
  const flatInfo = props.flowers.filter((flower) => flower.container === 'flat')
  const price = flatInfo[0].price
  const flatCards = props.flats.map((flat) => {
    return (
      <div key={flat.id}>
        <div className="card">
          <div className="card-header">
            <img src={flat.image} alt={flat.name} />
          </div>
          <div className="card-body">
            <h2 className="card-title">{flat.name}</h2>
            <p className="card-text">{`36 plants per flat - ${price}`}</p>
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