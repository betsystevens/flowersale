import React from "react";
import { Link } from "react-router-dom";
import AddedToCart from "./AddedToCart";

function AddToCart(props) {
  return (
    <div className="inline-block relative">
      <button
        onClick={props.showAddedModal}
        className="border-2 border-gray-200 bg-gray-100 rounded 
                        h-7 pr-2 mt-6 ml-6 text-sm
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
function Quantity(props) {
  return (
    <div className="mt-6">
      <div className="flex cursor-pointer border-2 border-gray-200 bg-gray-100 rounded relative h-7 w-20">
        <div onClick={props.handleMinus} className="relative h-full w-1/3">
          <div className="minus absolute"></div>
        </div>
        <div className="relative h-full w-1/3">
          <input
            className="w-full h-full bg-gray-50 text-center font-mono font-thin text-sm"
            type="number"
            min="0"
            max="99"
            value={props.quantity}
            onChange={props.handleOnChange}
          ></input>
        </div>
        <div onClick={props.handlePlus} className="relative h-full w-1/3">
          <div className="plus absolute"></div>
        </div>
      </div>
    </div>
  );
}
function BigImage(props) {
  return (
    <img
      src={props.flower.image}
      alt={props.flower.name}
      className="p-1.5 shadow-md rounded-md w-96"
    />
  );
}
class FlowerDetails extends React.Component {
  state = {
    imageId: 0,
    selectedImageId: 0,
    quantity: 0,
    show: false,
  };
  showAddedModal = (e) => {
    this.setState({
      show: true,
    });
    console.log("showAddedToCart");
  };
  closeAddedModal = (e) => {
    this.setState({
      show: false,
    });
    console.log("closeAddedToCart");
  };
  isValidNumber = (entry) => {
    const pattern = /^[0-9][0-9]?$/;
    return pattern.test(entry);
  };
  handleOnChange = (event) => {
    if (this.isValidNumber(event.target.value)) {
      this.setState({ quantity: Number(event.target.value) });
    } else this.setState({ quantity: "" });
  };

  handlePlus = () => {
    if (this.state.quantity < 99) {
      this.setState({ quantity: Number(this.state.quantity) + 1 });
    }
  };
  handleMinus = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: Number(this.state.quantity) - 1 });
    }
  };
  handleMouseEnter = (index) => {
    this.setState({ imageId: index });
  };
  handleMouseLeave = () => {
    this.setState({ imageId: this.state.selectedImageId });
  };
  handleClick = (index) => {
    this.setState({ selectedImageId: index });
  };

  thumbnails = this.props.flower.variety.map((variety, index) => {
    return (
      <div
        key={index}
        onMouseEnter={() => this.handleMouseEnter(index)}
        onMouseLeave={() => this.handleMouseLeave()}
        onClick={() => this.handleClick(index)}
      >
        <img
          src={variety.image}
          alt={variety.name}
          className="shadow-md rounded-md p-1 w-20"
        />
      </div>
    );
  });

  render() {
    const { name, variety } = this.props.flower;
    const { container, price } = this.props.flowerGroup;
    return (
      <div className="mt-16 ml-16">
        <div className="gridDetailWrapper">
          <div>
            <p className="font-extrabold text-lg">{name}</p>
            <p className="pt-2">{`Flat - ${container.description}`}</p>
          </div>
          <p className="pt-10">{`Price: $${price}`}</p>
          <div className="spanRows">
            <div className="flex flex-col">
              <Link to={`/`} className="mt-36">
                <p className="underline hover:text-purple-500">Checkout</p>
              </Link>
              <Link to={`/flats`} className="mt-16">
                <p className="underline hover:text-purple-500">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
          <BigImage
            flower={{
              image: variety[this.state.imageId].image,
              name: this.props.flower.name,
            }}
          />
          <div>
            <p className="topRow">{`Variety: ${variety[this.state.imageId].name}`}</p>
            <div className="pt-4 h-65 grid grid-rows-2 grid-cols-3 gap-2">
              {this.thumbnails}
            </div>
            <div className="flex">
              <Quantity
                quantity={this.state.quantity}
                handleOnChange={(e) => this.handleOnChange(e)}
                handleMinus={() => this.handleMinus()}
                handlePlus={() => this.handlePlus()}
              />
              <AddToCart showAddedModal={(e) => this.showAddedModal(e)} />
            </div>
          </div>
        </div>
        <AddedToCart
          show={this.state.show}
          closeAddedModal={(e) => this.closeAddedModal(e)}
        />
      </div>
    );
  }
}

export default FlowerDetails;
