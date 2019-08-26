import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ViewListing = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://labstech2rentstaging.herokuapp.com/api/items',
      );
      setItems(result.data);
    };
    fetchData();
  }, []);

  console.log('items', items);

  return (
    <div className="view-listing mainContent">
        {items.map(item => {
            console.log('item', item);
            return <Link to={`/view-item/${item.id}`} key={item.id}>{item.name}</Link>}
        )}
    </div>
  );
};

export default ViewListing;
