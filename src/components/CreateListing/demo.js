import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import ImagePreview from './ImagePreview';
import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';

const Form = () => {
  const [name] = useState('');
  const [picture] = useState('');
  const [price] = useState('');
  const [city] = useState('');
  const [state] = useState('');
  const [zipcode] = useState('');
  const [category] = useState('');
  const [subcategory] = useState('');
  const [description] = useState('');
  const [paymentType] = useState('');
  const [count, setCount] = useState(0);
  const [available] = useState(true);
  const [averageRating] = useState(0);
  const [condition] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name,
        picture,
        price,
        city,
        state,
        zipcode,
        category,
        subcategory,
        description,
        paymentType,
        condition,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
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
                className="description"
                required
              />
            </div>
          </div>
          <div className="right-side">
            Product{' '}
            <input
              name="name"
              value={values.name}
              type="text"
              onChange={handleChange}
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
      )}
    </Formik>
  );
};

export default Form;
