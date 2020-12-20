import React from "react";
import { Link } from "react-router-dom";
import AddedToCart from "./AddedToCart";
import Quantity from "./Quantity";

// 'Add to Cart' button with cart icon
function AddToCart(props) {
  return (
    <div className="inline-block relative">
      <button
        onClick={props.toggleModal}
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
function BigImage(props) {
  return (
    <img
      src={props.flower.image}
      alt={props.flower.name}
      className="p-1.5 shadow-md rounded-md w-96"
    />
  );
}

function Thumbnails(props) {
  const thumbnails = props.flower.variety.map((variety, index) => {
    return (
      <div
        key={index}
        onMouseEnter={() => props.onMouseEnter(index)}
        onMouseLeave={() => props.onMouseLeave()}
        onClick={() => props.onClick(index)}
      >
        <img
          src={variety.image}
          alt={variety.name}
          className="shadow-md rounded-md p-1 w-20"
        />
      </div>
    );
  });
  return (
    <div className="pt-4 h-65 grid grid-rows-2 grid-cols-3 gap-2">
      {thumbnails}
    </div>
  );
}

class FlowerDetails extends React.Component {
  state = {
    imageId: 0,
    selectedImageId: 0,
    quantity: 1,
    open: false,
  };
  toggleModal = () => {
    this.setState({
      open: !this.state.open,
    });
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

  render() {
    const { name, variety } = this.props.flower;
    const { container, price } = this.props.flowerGroup;
    const opacity = this.state.open
      ? "gridDetailWrapper opacity-50"
      : "gridDetailWrapper opacity-100";
    return (
      <div className="mt-16 ml-16">
        <div className={opacity}>
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
              <Link to={this.props.breadCrumb} className="mt-16">
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
            <Thumbnails
              flower={this.props.flower}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleClick}
            />
            <div className="flex pt-6">
              <Quantity
                quantity={this.state.quantity}
                handleOnChange={(e) => this.handleOnChange(e)}
                handleMinus={() => this.handleMinus()}
                handlePlus={() => this.handlePlus()}
              />
              <AddToCart toggleModal={(e) => this.toggleModal(e)} />
            </div>
          </div>
        </div>
        <AddedToCart
          open={this.state.open}
          toggleModal={(e) => this.toggleModal(e)}
          quantity={this.state.quantity}
          image={variety[this.state.selectedImageId].image}
          name={this.props.flower.name}
          variety={variety[this.state.selectedImageId].name}
          price={price}
        />
      </div>
    );
  }
}

export default FlowerDetails;
