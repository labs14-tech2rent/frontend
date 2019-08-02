import React from 'react';

function Rating(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star" />
    </div>
  );
}

export default Rating;
