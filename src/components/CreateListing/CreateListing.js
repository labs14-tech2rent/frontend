/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './_createListing.scss';

// import of other components I have made.
import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';
import { createListing, getUserId } from '../../actions';
import ImagePreview from './ImagePreview';
import cameraBanner from '../../images/banner.png';

const CreateListing = () => {
  const dispatch = useDispatch();
  const userToken = { auth0_user_id: localStorage.getItem('user_id') };
  const userId = useSelector(store => {
    if (store.getUser.user.length > 0) {
      return store.getUser.user[0].id;
    }
  });

  // react state
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
  const [available] = useState(true);
  const [average_rating] = useState(0);
  const [condition, setCondition] = useState('');

  // this is called to get the user id.
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
    average_rating,
    condition,
    sub_category: subcategory,
    city,
    state,
    zipcode,
  };

  const listingArr = Object.values(listing);
  const listingArrFilter = listingArr.filter(item => item !== '');

  return (
    <div className="create-listing">
      <div className="banner">
        <img src={cameraBanner} alt="" />
      </div>
      <div className="form-body">
        <form>
          {/* conditional render for image preview, will change this later on.  */}
          <br />
          <div className="left-side">
            <div className="image-items">
              {picture ? (
                <div className="image-preview">
                  <ImagePreview image={picture} count={count} />
                </div>
              ) : (
                <div className="image-holder">
                  <p>
                    Click Below <br />
                    to <br />
                    Add Images
                  </p>
                </div>
              )}
              <br />
              {/* The uploadcare uploader */}
              <Uploader
                className="upload"
                id="picture"
                onUploadComplete={info => {
                  setCount(info.count);
                  setPicture(info.uuid);
                }}
              />
            </div>
            <div className="description-div">
              Description{' '}
              <textarea
                name="description"
                value={description}
                type="text"
                onChange={e => setDescription(e.target.value)}
                className="description"
                required
              />
            </div>
          </div>
          <div className="right-side">
            Product{' '}
            <input
              name="name"
              value={name}
              type="text"
              onChange={e => setName(e.target.value)}
              className="long-input"
            />
            Price{' '}
            <input
              name="price"
              value={price}
              type="number"
              onChange={e => setPrice(e.target.value)}
              className="long-input"
            />
            <div className="middle-row">
              <div className="city-input-field">
                City{' '}
                <input
                  name="city"
                  value={city}
                  type="text"
                  onChange={e => setCity(e.target.value)}
                  className="medium-input"
                />
              </div>
              <div className="middle-row-field">
                State
                {/* put this into its own component */}
                <StateDropDown
                  handleChange={e => setLocation(e.target.value)}
                />
              </div>
              <div className="middle-row-field">
                Zipcode{' '}
                <input
                  name="zipcode"
                  value={zipcode}
                  type="number"
                  onChange={e => setZipcode(e.target.value)}
                  className="small-input"
                />
              </div>
            </div>
            <div>
              Category{' '}
              <select
                name="category"
                value={category}
                type="text"
                onChange={e => setCategory(e.target.value)}
                className="long-input"
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
            </div>
            {/* very long file so I refactored it as its own component in ./SubCategory.js */}
            <SubCategory
              category={category}
              handleChange={e => setSubCat(e.target.value)}
            />
            <div>
              Condition <br />
              <select
                name="condition"
                value={condition}
                type="text"
                onChange={e => setCondition(e.target.value)}
                className="long-input"
              >
                <option value="" disabled>
                  Choose Condition
                </option>
                <option>Like New</option>
                <option>Used (normal wear)</option>
                <option>Other (see description)</option>
              </select>
            </div>
          </div>
        </form>
        <div className="bottom-row">
          <div className="payment">
            Payment Preference
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
          </div>
          <div className="lower-buttons">
            <button className="cancel">Cancel</button>
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(createListing(userId, listing));
              }}
              className={`${
                listingArrFilter.length === 14 ? 'list' : 'list disabled'
              }`}
              disabled={listingArrFilter.length < 14}
            >
              List Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
