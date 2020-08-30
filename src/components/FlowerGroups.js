import React from 'react';
import { Media } from 'reactstrap';

// component lays out top level groups of flowers, hb, flats, pots, herbs
// reactStrap Media displays image, heading and paragraph for each group
function FlowerGroups(props) {
  const group = props.flowers.map((flower) => {
    const imgStyle = {
      width: 225,
      height: 150 
    }
    return (
      <div key={flower.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object className="shadow p-2 bg-white rounded" src={flower.image} alt={flower.name} style={imgStyle} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{flower.name}</Media>
            <p>{flower.description}</p>
          </Media>
        </Media>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Media list>
          {group}
        </Media>
      </div>
    </div>
  );
};

export default FlowerGroups;