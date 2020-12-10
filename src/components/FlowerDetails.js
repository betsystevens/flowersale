import React from 'react';
import { Link } from 'react-router-dom';


function BigImage(props) {
  return (
    <img className="w-96" src={props.flower.image} alt={props.flower.name} />
  )
}
class FlowerDetails extends React.Component  {
  state = {
    imageId: 0,
    selectedImageId: 0,
  }
  handleMouseEnter = (index) => {
    this.setState({ imageId: index })
  }
  handleMouseLeave = () => {
    this.setState({ imageId: this.state.selectedImageId })
  }
  handleClick = (index) => {
    this.setState({ selectedImageId: index})
  }

  thumbnails = this.props.flower.variety.map((variety, index) => {
    return (
    <div key={index} 
      onMouseEnter={() => this.handleMouseEnter(index)} 
      onMouseLeave={() => this.handleMouseLeave()} 
      onClick={() => this.handleClick(index)} >
      <img src={variety.image} alt={variety.name} className="w-20 p-1"/>
    </div>
    )
  })

  render() {
    const { name, variety } = this.props.flower
    const { container, price } = this.props.flowerGroup
    return (
      <div className="mt-16 ml-16">
      <div className="gridDetailWrapper">
        <div>
          <p className="font-extrabold text-lg">{name}</p>
          <p className="pt-2">{`Flat - ${container.description}` }</p>
        </div>
        <p className="pt-10">{`Price: $${price}` }</p>
        <div className="spanRows">
          <div className="flex flex-col">
            <Link to={`/`} className="mt-36">
              <p className="underline hover:text-purple-500">Checkout</p>
            </Link>
            <Link to={`/flats`} className="mt-16">
                <p className="underline hover:text-purple-500">Continue Shopping</p>
            </Link>
          </div>
        </div>
        <BigImage flower={{image: variety[this.state.imageId].image, name: this.props.flower.name}} />
        <div>
          <p className="topRow">{`Variety: ${variety[this.state.imageId].name}` }</p>
          <div className="pt-4 h-65 grid grid-rows-2 grid-cols-3 gap-2">
            {this.thumbnails}
          </div>
        </div>
      </div>
    </div>
  )}
}

export default FlowerDetails;