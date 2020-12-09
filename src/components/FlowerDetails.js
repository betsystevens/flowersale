import React from 'react';
import { Link } from 'react-router-dom';

function FlowerDetails({ flower, flowerGroup }) {

  const thumbnails = flower.image.map((image, index) => {
    return (
      <div key={index} className="">
        <img src={image} alt={"flower"} className="w-20 p-1"/>
      </div>
    )
  })
  const image = flower.image[0]
  const description = flowerGroup[0].container.description
  const price = flowerGroup[0].price
  let variety = flower.variety[0]
  return (
    // <div className="mt-9 flex justify-center">
    <div className="mt-16 ml-16">
      <div className="gridDetailWrapper">
        <div>
          <p className="font-extrabold text-lg">{flower.name}</p>
          <p className="pt-2">{`Flat - ${description}` }</p>
        </div>
        <p className="pt-10">{`Price: $${price}` }</p>
          <div className="spanRows">
            <div className="flex flex-col">
              <Link to={`/`} >
                <p className="pt-36 underline">Checkout</p>
              </Link>
              <Link to={`/flats`} >
                 <p className="pt-16 underline">Continue Shopping</p>
              </Link>
            </div>
          </div>
          <img className="w-96" src={image} alt={flower.name} />
          <div>
            <p className="topRow">{`Variety: ${variety}` }</p>
            <div className="pt-4 h-65 grid grid-rows-2 grid-cols-3 gap-2">
              {thumbnails}
            </div>
          </div>
      </div>
    </div>
  )
}

export default FlowerDetails;