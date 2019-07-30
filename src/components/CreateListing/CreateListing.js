/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unused-state */
import React, { Component, useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './createListing.scss';

import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';
import { createListing, getUserId } from '../../actions';

// remind change avarage_raiting to average_rating

const CreateListing = () => {
  const dispatch = useDispatch();
  const userToken = { auth0_user_id: localStorage.getItem('user_id') };
  const userId = useSelector(store => {
    if (store.getUser.user.length > 0) {
      return store.getUser.user[0].id;
    }
  });

  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setLocation] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubCat] = useState('');
  const [description, setDescription] = useState('');
  const [paymentType, setPayment] = useState('');
  const [count, setCount] = useState(0);
  const [available, setAvailable] = useState(true);
  const [avarage_raiting, setRating] = useState(0);
  const [condition, setCondition] = useState('worn');

  useEffect(() => {
    dispatch(getUserId(userToken));
  }, []);

  const listing = {
    users_ownerId: userId,
    name,
    price,
    picture,
    category,
    description,
    available,
    payment_type: paymentType,
    avarage_raiting,
    condition,
    sub_category: subcategory,
    city,
    state,
    zipcode,
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(createListing(userId, listing));
        }}
      >
        title:{' '}
        <input
          name="name"
          value={name}
          type="text"
          onChange={e => setName(e.target.value)}
        />
        price:{' '}
        <input
          name="price"
          value={price}
          type="number"
          onChange={e => setPrice(e.target.value)}
        />
        <br />
        {/* The uploadcare uploader */}
        <Uploader
          id="picture"
          onUploadComplete={info => {
            setCount(info.count);
            setPicture(info.uuid);
          }}
        />
        <br />
        <div>
          city:{' '}
          <input
            name="city"
            value={city}
            type="text"
            onChange={e => setCity(e.target.value)}
          />
          state:
          <StateDropDown handleChange={e => setLocation(e.target.value)} />
          zipcode:{' '}
          <input
            name="zipcode"
            value={zipcode}
            type="number"
            onChange={e => setZipcode(e.target.value)}
          />
        </div>
        Category:{' '}
        <select
          name="category"
          value={category}
          type="text"
          onChange={e => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Choose Category
          </option>
          <option>Mounts</option>
          <option>Cameras</option>
          <option>Lenses</option>
          <option>Lighting</option>
          <option>Support Equipment</option>
          <option>Accessories</option>
        </select>
        {/* very long file so I refactored it as its own component in ./SubCategory.js */}
        <SubCategory
          category={category}
          handleChange={e => setSubCat(e.target.value)}
        />
        Description:{' '}
        <input
          name="description"
          value={description}
          type="text"
          onChange={e => setDescription(e.target.value)}
        />
        Payment Preference:
        <div className="payment-options">
          <div className="option">
            <input
              name="paymentType"
              value="cash"
              type="radio"
              onChange={e => setPayment(e.target.value)}
              checked={paymentType === 'cash'}
            />{' '}
            Cash
          </div>
          <div className="option">
            <input
              name="paymentType"
              value="card"
              type="radio"
              onChange={e => setPayment(e.target.value)}
              checked={paymentType === 'card'}
            />{' '}
            Card
          </div>
          <div className="option">
            <input
              name="paymentType"
              value="both"
              type="radio"
              onChange={e => setPayment(e.target.value)}
              checked={paymentType === 'both'}
            />{' '}
            Both
          </div>
        </div>
        <button>List Item</button>
      </form>
    </div>
  );
};

export default CreateListing;
