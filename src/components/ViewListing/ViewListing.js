/* eslint-disable array-callback-return */
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
import StateDropDown from './StateDropDown';

const ViewListing = props => {
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
      if (listing.zipcode && listing.name && listing.condition && listing.state)
        return (
          listing.condition.includes(item.condition) &&
          listing.state.includes(item.state) &&
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
          <label>State</label>
          <StateDropDown handleChange={handleChange}></StateDropDown>
          <label>Zipcode</label>
          <input name="zipcode" onChange={handleChange} type="number" />
          <label>Condition</label>
          <select name="condition" onChange={e => handleChange(e)}>
            <option value="">Choose Condition</option>
            <option>Like New</option>
            <option>Used (normal wear)</option>
            <option>Other (see description)</option>
          </select>
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
