// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getPhotos } from '../../actions';

const ViewListing = props => {
  const [item, setItem] = useState({
    item: '',
  });

  const itemStore = useSelector(store => store.getPhotos.photos);
  const itemStores = useSelector(store => store.getItems.items);
  const dispatch = useDispatch();


  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://labstech2rentstaging.herokuapp.com/api/items',
  //     );
  //     setItems(result.data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);


  const handleChange = e => {
    setItem({
      [e.target.name]: e.target.value,
    });
  };

  const findItem = e => {
    e.preventDefault();
    console.log(item.item);
    dispatch(getPhotos(item.item));
  };
  return (

    // <div className="view-listing mainContent">
    //     {items.map(item => {
    //         console.log('item', item);
    //         return <Link to={`/view-item/${item.id}`} key={item.id}>{item.name}</Link>}
    //     )}

    <div className="view-listing mainContent view-listing-container">
      <div className="listing-form-container">
        {console.log(itemStore)}
        <h2>Find Tech</h2>
        <form className="listing-form" onSubmit={findItem}>
          <label htmlFor="name">Item Name</label>
          <input
            id="name"
            name="item"
            value={item.item}
            onChange={handleChange}
            type="text"
            placeholder="Name, Brand, or Tech type"
          />
          <p className="addition">+ Add Additional Gear</p>

          <label>Location</label>
          <input type="text" placeholder="City or Zipcode" />

          <label>Booking Date</label>
          <input type="date" placeholder="MM/DDYY" />

          <button type="submit">Find Your Tech</button>
        </form>
      </div>

      <div className="listings list1">
        {itemStores === []
          ? // if items exists in item database, map over them and display... else show nothing
            // this conditional is needed as items are not mounted when page first loads
            itemStore.map(item => (
              <div>
                <h3>{item.category}</h3>
                <img src={item.picture} alt="item picture" title="item photo" />
              </div>
            ))
          : null}
        {itemStore
          ? // if items exists in item database, map over them and display... else show nothing
            // this conditional is needed as items are not mounted when page first loads
            // //***same as  above... connected to flickrAPI for test data/
            itemStore.map(photo => (
              <div>
                <h3>{photo.title}</h3>
                <img
                  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
                  key={photo.id}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ViewListing;
