import React from 'react';

function FlowerCards(props) {
  const flatDetails = props.flowers.filter((flower) => flower.container.name === 'flat')
  const price = flatDetails[0].price
  const containerDetails = flatDetails[0].container.description
  const flatCards = props.flats.map((flat) => {
    const varietyCount = flat.variety.length;
    const varietyDetails = (varietyCount === 1) ? flat.variety[0] : `${flat.variety.length} varieties`
    const buttonText = (varietyCount === 1) ? 'Add to Cart' : 'View Options'
    return (
      <div key={flat.id} >
        <div className="m-5 w-60 shadow-lg border border-white hover:border-purple-200">
          <div>
            <img className="px-4 pt-4 pb-6"
                 src={flat.image} alt={flat.name} />
          </div>
          <div className="p-2 flex flex-col items-center">
            <p className="font-extrabold text-lg">{flat.name}</p>
            <p className="pt-1">{`${varietyDetails}`}</p>
            <p className="pt-1">{`Price - ${price}`}</p>
            <p className="pt-1">{`${containerDetails}`}</p>
          </div>
          <div className="flex flex-col items-center w-full p-4 pb-7">
            <button className="px-8 pb-2 hover:bg-purple-100 fancy-button">
              {buttonText}
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