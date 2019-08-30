import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageViewer = props => {
  console.log(props);
  return (
    <Carousel
      emulateTouch
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
    >
      {props.images.map((image, i) => (
        <div key={i}>
          <img src={image} alt="equipment" />
        </div>
      ))}
    </Carousel>
  );
};
export default ImageViewer;
