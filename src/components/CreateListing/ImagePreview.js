import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ImagePreview = props => {
  // uses the count state and makes an array from those numbers.
  const imageAmount = Array(props.count)
    .fill(0)
    .map(Number.call, Number);

  return (
    <Carousel useKeyboardArrows emulateTouch>
      {imageAmount.map(number => (
        <div>
          <img
            src={`https://ucarecdn.com/${props.image}/nth/${number}/`}
            alt="preview"
          />
          {/* <p className="legend">Picture {`${number + 1}`}</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default ImagePreview;
