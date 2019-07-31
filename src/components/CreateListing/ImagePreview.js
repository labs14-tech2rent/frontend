import React from 'react';

const ImagePreview = props => {
  const imageAmount = Array(props.count)
    .fill(0)
    .map(Number.call, Number);

  return (
    <div>
      {imageAmount.map(number => (
        <img
          key={number}
          src={`https://ucarecdn.com/${props.image}/nth/${number}/`}
          alt="preview"
        />
      ))}
    </div>
  );
};

export default ImagePreview;
