import React from 'react';

// component lays out top level groups of flowers, hb, flats, pots, herbs
function FlowerGroups(props) {
  const group = props.flowers.map((flower) => {
    return (
      <div key={flower.id} className="band shadow">
          <img src={flower.image} alt={flower.name} />
          <div className="band-body">
            <h3>{flower.name}</h3>
            <p>{flower.description}</p>
          </div>
      </div>
    );
  });
  return (
    <div className="outer">
      {group}
    </div>
  );
};

export default FlowerGroups;