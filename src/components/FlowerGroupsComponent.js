import React, { Component } from 'react';
import { Media } from 'reactstrap';

class FlowerGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [
        {
          id: 0,
          name: 'Hanging Baskets',
          image: 'assets/images/petuniaPinkPurpleHB750x500.jpg',
          container: 'hb',
          price: '24:00',
          description: 'Our 10-inch flower baskets of unbeatable quality, regularly sell out. Never disappointing, these spectacular baskets keep customers coming back year after year. The wave petunias and ivy geraniums are unrivaled in their beauty and quality.',
        },
        {
          id: 1,
          name: 'Herbs and Tomatoes',
          image: 'assets/images/basilHerb720x480.jpg',
          container: '4 inch pot',
          price: '3.00 and 4.00',
          description: 'Choose from our selection of popular herbs: basil, oregano, parsley, rosemary, chives, and cilantro. For the crown jewel of the home vegetable garden, delicious home-grown tomatoes, we offer several varieties in 4-inch pots.'
        },
        {
          id: 2,
          name: 'Alyssum Mixed',
          image: 'assets/images/alyssumMixed750x563.jpg',
          container: 'flat',
          price: '17.00',
          description: 'Carefree, low, spreading plants grown for their flowers and are useful in containers or for edging flower beds. Sweet Alyssum thrives in full sun or partial shade and prefers consistently moist, well-drained soil. Water regularly, especially if grown in hanging baskets or containers.'
        },
        {
          id: 3,
          name: 'Accent Plants',
          image: 'assets/images/potatoVine750x499.jpg',
          container: '4 inch pot',
          price: '4.00',
          description: 'Versatile plants to grow in containers and flower beds. These are loved for their colorful foliage and leaf shapes. They grow fast and fill space quickly, adding interest wherever they are placed.'
        }
      ],
    };
  }
  render() {
    const group = this.state.flowers.map((flower) => {
      const imgStyle = {
        width: 225,
        height: 150 
      }
      return (
        <div key={flower.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object className="shadow p-2 bg-white rounded" src={flower.image} alt={flower.name} style={imgStyle} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{flower.name}</Media>
              <p>{flower.description}</p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>
            {group}
          </Media>
        </div>
      </div>
    );
  };
}

export default FlowerGroups;