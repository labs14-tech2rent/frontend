import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ImagePreview from './ImagePreview';
import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';
import { createListing } from '../../actions';

const Form = props => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Required'),
  });

  console.log(props.item);

  return (
    <Formik
      initialValues={{
        name: props.listing.name,
        picture: props.listing.picture,
        price: props.listing.price,
        city: props.listing.city,
        state: props.listing.state,
        zipcode: props.listing.zipcode,
        category: props.listing.category,
        subcategory: props.listing.subcategory,
        description: props.listing.description,
        paymentType: props.listing.paymentType,
        condition: props.listing.condition,
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        return errors;
      }}
      onSubmit={() => {
        props.listing.handleSubmit(props.listing.userId, props.listing.item);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div>
          {console.log(errors.name)}
          <form>
            {/* {console.log(values)} */}
            {/* conditional render for image preview, will change this later on.  */}
            <br />
            <div className="left-side">
              <div className="image-items">
                {props.listing.picture ? (
                  <div className="image-preview">
                    <ImagePreview
                      image={props.listing.item.picture}
                      count={props.listing.count}
                    />
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
                  value={values.picture}
                  className="upload"
                  id="picture"
                  onUploadComplete={info => {
                    console.log(info);
                    props.listing.setCount(info.count);
                    props.listing.setPicture(info.uuid);
                  }}
                />
              </div>
              <div className="description-div">
                Description{' '}
                <textarea
                  name="description"
                  value={values.description}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="description"
                  required
                />
              </div>
            </div>
            <div className="right-side">
              Product {errors.name}
              <input
                name="name"
                value={values.name}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                className="long-input"
              />
              Price{' '}
              <input
                name="price"
                value={values.price}
                type="number"
                onChange={handleChange}
                className="long-input"
              />
              <div className="middle-row">
                <div className="city-input-field">
                  City{' '}
                  <input
                    name="city"
                    value={values.city}
                    type="text"
                    onChange={handleChange}
                    className="medium-input"
                  />
                </div>
                <div className="middle-row-field">
                  State
                  {/* put this into its own component */}
                  <StateDropDown handleChange={handleChange} />
                </div>
                <div className="middle-row-field">
                  Zipcode{' '}
                  <input
                    name="zipcode"
                    value={values.zipcode}
                    type="number"
                    onChange={handleChange}
                    className="small-input"
                  />
                </div>
              </div>
              <div>
                Category{' '}
                <select
                  name="category"
                  value={values.category}
                  type="text"
                  onChange={handleChange}
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
                category={values.category}
                handleChange={handleChange}
              />
              <div>
                Condition <br />
                <select
                  name="condition"
                  value={values.condition}
                  type="text"
                  onChange={handleChange}
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
                    onChange={handleChange}
                    checked={values.paymentType === 'cash'}
                  />{' '}
                  Cash
                </div>
                <div className="option">
                  <input
                    name="paymentType"
                    value="card"
                    type="radio"
                    onChange={handleChange}
                    checked={values.paymentType === 'card'}
                  />{' '}
                  Card
                </div>
                <div className="option">
                  <input
                    name="paymentType"
                    value="both"
                    type="radio"
                    onChange={handleChange}
                    checked={values.paymentType === 'both'}
                  />{' '}
                  Both
                </div>
              </div>
            </div>
            <div className="lower-buttons">
              <button className="cancel">Cancel</button>
              <button
                onClick={handleSubmit}
                className={`${
                  props.listing.isSubmitting ? 'list disabled' : 'list'
                }`}
                // disabled={listingArrFilter.length < 14 || isSubmitting}
                disabled={props.listing.isSubmitting}
              >
                List Item
              </button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Form;
