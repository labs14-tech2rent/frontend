import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import ImagePreview from './ImagePreview';
import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';
import { createListing } from '../../actions';

const Form = props => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        'Put a descriptive title Ex: "Nikon COOLPIX P900 Digital Camera with 83x Optical Zoom"'
      ),
    // picture: yup.string().required('Upload Photos before posting'),
    price: yup
      .number('please only input numbers')
      .min(1)
      .positive('Number cannot be negative')
      .required('Enter a value'),
    city: yup
      .string()
      .trim()
      .required('Required'),
    state: yup
      .string()
      .trim()
      .required('Required'),
    zipcode: yup.number().required('Required'),
    category: yup.string().required('Choose a Category'),
    subcategory: yup
      .string()
      .trim()
      .required('Choose a SubCategory'),
    description: yup
      .string()
      .trim()
      .required('Description is required'),
    paymentType: yup.string().required('Select your payment preference'),
    condition: yup
      .string()
      .required(
        'Select the option that best describes your Equipment condition'
      ),
  });

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
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(props);
        console.log(values);
        const list = {
          users_ownerId: props.item.users_ownerId,
          name: values.name,
          picture: 'defdfsfdsfsdfs',
          price: values.price,
          city: values.city,
          state: values.state,
          zipcode: values.zipcode,
          category: values.category,
          sub_category: values.subcategory,
          description: values.picture,
          payment_type: values.paymentType,
          available: props.item.available,
          average_rating: props.item.picture,
          condition: values.condition,
        };
        console.log(list);
        props.listing.handleSubmit(props.item.users_ownerId, list);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div>
          <form>
            {/* {console.log(values)} */}
            {/* conditional render for image preview, will change this later on.  */}
            <br />
            <div className="left-side">
              <div className="image-items">
                {props.listing.picture ? (
                  <div className="image-preview">
                    <ImagePreview
                      image={props.listing.picture}
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
                  className={`description ${
                    errors.description && touched.description
                      ? 'input-error'
                      : ''
                  } ${
                    touched.description && !errors.description
                      ? 'input-correct'
                      : ''
                  }`}
                  required
                />
              </div>
            </div>
            <div className="right-side">
              <div>
                Product
                <input
                  name="name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`long-input ${
                    errors.name && touched.name ? 'input-error' : ''
                  } ${touched.name && !errors.name ? 'input-correct' : ''}`}
                />
                <div className="isa_error">
                  {errors.name && touched.name ? errors.name : null}
                </div>
              </div>
              <div>
                Price{' '}
                <input
                  name="price"
                  value={values.price}
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`long-input ${
                    errors.price && touched.price ? 'input-error' : ''
                  } ${touched.price && !errors.price ? 'input-correct' : ''}`}
                />
                <div className="isa_error">
                  {errors.price && touched.price ? errors.price : null}
                </div>
              </div>
              <div className="middle-row">
                <div className="city-input-field">
                  City{' '}
                  <input
                    name="city"
                    value={values.city}
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`medium-input ${
                      errors.city && touched.city ? 'input-error' : ''
                    } ${touched.city && !errors.city ? 'input-correct' : ''}`}
                  />
                  <div className="isa_error">
                    {errors.city && touched.city ? errors.city : null}
                  </div>
                </div>
                <div className="middle-row-field">
                  State
                  {/* put this into its own component */}
                  <StateDropDown
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    className={`${
                      errors.state && touched.state ? 'input-error' : ''
                    } ${touched.state && !errors.state ? 'input-correct' : ''}`}
                  />
                  <div className="isa_error">
                    {errors.state && touched.state ? errors.state : null}
                  </div>
                </div>
                <div className="middle-row-field">
                  Zipcode{' '}
                  <input
                    name="zipcode"
                    value={values.zipcode}
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`small-input ${
                      errors.zipcode && touched.zipcode ? 'input-error' : ''
                    } ${
                      touched.zipcode && !errors.zipcode ? 'input-correct' : ''
                    }`}
                  />
                  <div className="isa_error">
                    {errors.zipcode && touched.zipcode ? errors.zipcode : null}
                  </div>
                </div>
              </div>
              <div>
                Category{' '}
                <select
                  name="category"
                  value={values.category}
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`long-input ${
                    errors.category && touched.category ? 'input-error' : ''
                  } ${
                    touched.category && !errors.category ? 'input-correct' : ''
                  }`}
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
                <div className="isa_error">
                  {errors.category && touched.category ? errors.category : null}
                </div>
              </div>
              {/* very long file so I refactored it as its own component in ./SubCategory.js */}
              <SubCategory
                category={values.category}
                handleChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <div className="isa_error">
                {errors.subcategory && touched.subcategory
                  ? errors.subcategory
                  : null}
              </div>
              <div>
                Condition <br />
                <select
                  name="condition"
                  value={values.condition}
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`long-input ${
                    errors.condition && touched.condition ? 'input-error' : ''
                  } ${
                    touched.condition && !errors.condition
                      ? 'input-correct'
                      : ''
                  }`}
                >
                  <option value="" disabled>
                    Choose Condition
                  </option>
                  <option>Like New</option>
                  <option>Used (normal wear)</option>
                  <option>Other (see description)</option>
                </select>
                <div className="isa_error">
                  {errors.conditon && touched.conditon ? errors.conditon : null}
                </div>
              </div>
            </div>
          </form>
          <div className="bottom-row">
            <div className="payment">
              Payment Preference
              <div className="payment-options">
                <div className="option">
                  <input
                    className={`${
                      errors.paymentType && touched.paymentType
                        ? 'input-error'
                        : ''
                    } ${
                      touched.paymentType && !errors.paymentType
                        ? 'input-correct'
                        : ''
                    }`}
                    name="paymentType"
                    value="cash"
                    type="radio"
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={values.paymentType === 'both'}
                  />{' '}
                  Both
                </div>
              </div>
              <div className="isa_error">
                {errors.paymentType && touched.paymentType
                  ? errors.paymentType
                  : null}
              </div>
            </div>
            <div className="lower-buttons">
              <button className="cancel">Cancel</button>
              <button
                type="submit"
                onClick={handleSubmit}
                className={`${
                  props.listing.isSubmitting ? 'list disabled' : 'list'
                }`}
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
