import React from 'react';

function FlowerCards2(props) {
  const flatCards = props.flats.map((flat) => {
    return (
      <div className="col-12 col-md-3 m-1">
        <div key={flat.id} className="board">
          <div className="board-header">
            <img src={flat.image} alt={flat.name} />
          </div>
          <div className="board-body">
            <h2 className="board-title">{flat.name}</h2>
            <p className="board-text">{flat.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
       {flatCards}
      </div>
    </div>
  );
}

export default FlowerCards2;