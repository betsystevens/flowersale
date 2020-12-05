import React from 'react';

function FlowerCards(props) {
  const flatInfo = props.flowers.filter((flower) => flower.container.name === 'flat')
  const price = flatInfo[0].price
  const containerInfo = flatInfo[0].container.description
  const flatCards = props.flats.map((flat) => {
    return (
      <div key={flat.id} >
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <div className="">
            <img src={flat.image} alt={flat.name} 
                 className="px-4 pt-4 pb-6" />
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="font-extrabold text-lg">{flat.name}</p>
            <p className="pt-1">{`Price - ${price}`}</p>
            <p className="pt-1">{`${containerInfo}`}</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 pb-7">
            <button 
              className="px-8 pb-2 hover:bg-purple-100
                         fancy-button">
              Add to Cart
            </button>
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