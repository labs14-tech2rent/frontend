/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getPhotos } from '../../actions';

const ViewListing = props => {
  console.log(props);
  const [item, setItem] = useState({
    item: '',
  });

  const listing = useSelector(store => store.getItems.items.data);
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
    dispatch(getItems());
  }, [dispatch]);

  const handleChange = e => {
    setItem({
      [e.target.name]: e.target.value,
    });
  };

  const findItem = e => {
    e.preventDefault();
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(id);
    props.history.push(`/view-item/${id}`);
  };

  const imageChecker = image => {
    if (image !== null) {
      const checker = image.match(
        /(https:\/\/labs14-tech2rent-image-upload.s3.amazonaws.com\/[0-9][0-9][0-9][0-9][0-9][0-9])/
      );

      if (checker !== null) {
        return true;
      }
    }

    return false;
  };

  const getListingImages = picture => {
    const newLinks = picture.match(
      /(https:\/\/labs14-tech2rent-image-upload.s3.amazonaws.com\/[0-9][0-9][0-9][0-9][0-9][0-9])/
    );

    if (newLinks !== null) {
      console.log(newLinks[0]);
      return newLinks[0];
    }
  };

  const loadItems = arr =>
    arr.map(listings => (
      <div onClick={e => handleClick(e, listings.id)} className="listing">
        <h3>{listings.name}</h3>
        <img
          src={
            imageChecker(listings.picture)
              ? getListingImages(listings.picture)
              : 'http://www.stuartsteel.com/wp-content/themes/asenka/images/default-no-image.png'
          }
          alt="equipment"
        />
        <h4>{listings.price} per day</h4>
      </div>
    ));

  return (
    // <div className="view-listing mainContent">
    //     {items.map(item => {
    //         console.log('item', item);
    //         return <Link to={`/view-item/${item.id}`} key={item.id}>{item.name}</Link>}
    //     )}

    <div className="view-listing mainContent view-listing-container">
      <div className="listing-form-container">
        {console.log(listing)}
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
          {/* {/* <p className="addition">+ Add Additional Gear</p>

          <label>Location</label>
          <input type="text" placeholder="City or Zipcode" />

          <label>Booking Date</label>
          <input type="date" placeholder="MM/DDYY" /> */}

          <button type="submit">Find Your Tech</button>
        </form>
      </div>

      <div className="listings list1">
        {listing ? loadItems(listing) : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default ViewListing;
