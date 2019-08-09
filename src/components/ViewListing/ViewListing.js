import React, { useState, useEffect } from 'react';


const ViewListing = (props) => {

  const [items, setItems] = useState([props.location.state.items])

  console.log(items);

  return (
    <div className="view-listing mainContent">
        View Listing
    </div>
  );
};

export default ViewListing;
