import React from 'react';
import { Formik, Field } from 'formik';

import './listing.scss';

const Listing = () => (
  <div className="listing-main-body">
    <img
      className="banner"
      src="https://picsum.photos/1024/78"
      alt="banner"
    ></img>
    <div>
      <h3>Find Tech</h3>
      <Formik
        initialValues={{
          name: '',
          zipcode: '',
          booking_date: ' ',
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
          <form>
            <Field
              component="input"
              name="name"
              placeholder="Name, Brand, or Tech type"
            ></Field>
            <Field
              component="input"
              name="zipcode"
              placeholder="City or Zipcode"
            ></Field>
            <Field type="date" component="input" name="booking_date"></Field>
            <button>Find Your Tech</button>
          </form>
        )}
      </Formik>
      <img src="https://picsum.photos/310" alt="tech photos"></img>
    </div>
  </div>
);

export default Listing;
