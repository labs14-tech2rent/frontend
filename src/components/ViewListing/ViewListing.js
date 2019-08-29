/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../actions';

const ViewListing = props => {
  console.log(props);
  const [item, setItem] = useState({
    name: '',
    state: '',
    zipcode: '',
    condition: '',
    payment_type: '',
  });

  const [listings, setListings] = useState([]);

  const items = useSelector(store => store.getItems.items.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    setListings(items);
  }, []);

  const handleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const findItem = e => {
    e.preventDefault();

    const results = items.filter(listing => {
      console.log(listing.zipcode, item.zipcode);
      if (listing.zipcode && listing.name && listing.condition)
        return (
          listing.condition.includes(item.condition) &&
          listing.zipcode.includes(item.zipcode) &&
          listing.name
            .toLowerCase()
            .includes(item.name ? item.name.toLowerCase() : '')
        );
    });

    setListings(results);
  };

  const handleClick = (e, id) => {
    e.preventDefault();

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
      return newLinks[0];
    }
  };

  const loadItems = arr =>
    arr.map((listings, i) => (
      <div
        key={i}
        onClick={e => handleClick(e, listings.id)}
        className="listing"
      >
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

  console.log(item);
  console.log(listings);

  return (
    <div className="view-listing mainContent view-listing-container">
      <div className="listing-form-container">
        <h2>Find Tech</h2>
        <form className="listing-form" onSubmit={findItem}>
          <label>Item Name</label>
          <input
            name="name"
            onChange={e => handleChange(e)}
            type="search"
            placeholder="Name, Brand, or Tech type"
          />
          <label>Zipcode</label>
          <input name="zipcode" onChange={e => handleChange(e)} type="number" />
          <label>Condition</label>
          <select name="condition" onChange={e => handleChange(e)}>
            <option value="">Choose Condition</option>
            <option>Like New</option>
            <option>Used (normal wear)</option>
            <option>Other (see description)</option>
          </select>
          {/* <input
            id="name"
            name="payment_type"
            value={item.payment_type}
            onChange={e => handleChange(e)}
            type="radio"
            placeholder="Form of Payment"
          /> */}
          <button type="submit">Find Your Tech</button>
        </form>
      </div>

      <div className="listings list1">
        {items ? loadItems(listings || items) : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default ViewListing;
