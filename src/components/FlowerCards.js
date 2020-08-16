import React from 'react';
import { 
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

function FlowerCards (props) {
  
  const flatCards = props.flats.map((flat) => {
    return ( 
      <div className="col-12 col-md-3 m-1">
        <Card key={flat.id}>
          <CardImg width="100%" src={flat.image} alt={flat.name} />
          <CardBody>
            <CardTitle>{flat.name}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
       {flatCards}
      </div>
    </div>
  );
}

export default FlowerCards;