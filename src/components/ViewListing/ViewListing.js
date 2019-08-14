import React, { useState, useEffect } from 'react';


const ViewListing = (props) => {

  const [items, setItems] = useState([props.location.state.items])

  console.log('items', items);

  return (
    <div className="view-listing mainContent">
        {items[0].map(item => {
            console.log('item', item);
            return <div key={item.id}>{item.name}</div>}
        )}
    </div>
  );
};

export default ViewListing;
