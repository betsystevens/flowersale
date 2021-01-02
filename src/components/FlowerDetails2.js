import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import BigImage from "./BigImage";
import Thumbnails from "./Thumbnails";
import AddedToCartModal from "./AddedToCartModal";

function NameDescription(props) {
  return (
    <div>
      <p className="font-extrabold text-lg">{props.name}</p>
      <p className="pt-2">{`Flat - ${props.description}`}</p>
    </div>
  );
}
function CheckoutOrContinue(props) {
  return (
    <div className="spanRows">
      <div className="flex flex-col">
        <Link to={`/`} className="mt-36">
          <p className="underline hover:text-purple-500">Checkout</p>
        </Link>
        <Link to={props.breadCrumb} className="mt-16">
          <p className="underline hover:text-purple-500">Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
}
// 'Add to Cart' button with cart icon
function AddToCartButton(props) {
  return (
    <div className="inline-block relative">
      <button
        onClick={(e) => props.toggleModal(e)}
        className="border-2 border-gray-200 bg-gray-100 rounded 
                        h-7 pr-2 ml-6 text-sm
                        hover:text-purple-500"
      >
        <img
          src="/assets/icons/Cart64x40.svg"
          alt="shopping cart"
          className="inline-block m-auto px-2 mr-1 h-3/4 "
        ></img>
        Add To Cart
      </button>
    </div>
  );
}
export default function FlowerDetails2(props) {
  const { name, variety } = props.flower;
  const { container, price } = props.flowerGroup;
  const [imageId, setImageId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const opacity = open
    ? "gridDetailWrapper opacity-50"
    : "gridDetailWrapper opacity-100";
  const toggleModal = (e) => {
    e.target.blur();
    setOpen(!open);
    console.log(open);
  };
  // functions for handling quantity changes
  const isValidNumber = (entry) => {
    const pattern = /^[0-9][0-9]?$/;
    return pattern.test(entry);
  };
  const handleOnChange = (event) => {
    if (isValidNumber(event.target.value)) {
      setQuantity(Number(event.target.value));
    } else setQuantity("");
  };
  const handlePlus = () => {
    if (quantity < 99) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  };
  // functions for handling hover/click on images
  const handleMouseEnter = (index) => {
    setImageId(index);
  };
  const handleMouseLeave = () => {
    setImageId(selectedImageId);
  };
  const handleClick = (index) => {
    setSelectedImageId(index);
  };

  return (
    <div className="mt-16 ml-16">
      <div className={opacity}>
        <NameDescription name={name} description={container.description} />
        <p className="pt-10">{`Price: $${price}`}</p>
        <CheckoutOrContinue breadCrumb={props.breadCrumb} />
        <BigImage
          flower={{
            image: variety[imageId].image,
            name: name,
          }}
        />
        <div>
          <p className="topRow">{`Variety: ${variety[imageId].name}`}</p>
          <Thumbnails
            flower={props.flower}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <div className="flex pt-6">
            <Quantity
              quantity={quantity}
              handleOnChange={(e) => handleOnChange(e)}
              handleMinus={handleMinus}
              handlePlus={handlePlus}
            />
            <AddToCartButton toggleModal={toggleModal} />
          </div>
        </div>
      </div>
      <AddedToCartModal
        open={open}
        toggleModal={(e) => toggleModal(e)}
        quantity={quantity}
        image={variety[selectedImageId].image}
        name={name}
        variety={variety[selectedImageId].name}
        price={price}
      />
    </div>
  );
}
