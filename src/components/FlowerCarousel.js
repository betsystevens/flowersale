import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const items2 = [
  {
    src: 'assets/images/carousel/cloverBee.jpg',
    altText: 'Clover',
    caption: 'Clover'
  },
  {
    src: 'assets/images/carousel/purple-fountain-grass1024x512.jpg',
    altText: 'Purple Fountain Grass',
    caption: 'Purple Fountain Grass'
  },
  {
    src: 'assets/images/carousel/jacques-barbary-mini-petunia1024x512.jpg',
    altText: 'Mini Petunia',
    caption: 'Mini Petunia'
  }
];

class FlowerCarousel extends Component {

  render() {
    const flower = items2.map((item) => {
      return (
        <Carousel.Item>
          <img className="img-fluid w-100" src={item.src} alt={item.altText} />
        </Carousel.Item>
      )
    });
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col p-4 border border-black">
            <Carousel>
              {flower}
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
};

export default FlowerCarousel;