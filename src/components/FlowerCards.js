import React from 'react';

function FCard2(props) {
  const flatInfo = props.flowers.filter((flower) => flower.container === 'flat')
  const price = flatInfo[0].price
  const flatCards = props.flats.map((flat) => {
    return (
      <div key={flat.id} >
        <div className="m-5 w-60 shadow-lg">
          <div className="">
            <img src={flat.image} alt={flat.name} 
                  className="p-4"
            />
          </div>
          <div className="p-2 flex flex-col items-center">
            <h2 className="pt-2 font-extrabold">{flat.name}</h2>
            <p className="pt-2 pb-4">{`Price - ${price}`}</p>
            <button className="mb-4 px-8 py-2 rounded-lg 
                              bg-pink-400 ">
            Add to Bag
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