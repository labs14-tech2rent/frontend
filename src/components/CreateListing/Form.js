import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field } from 'formik';

// .match(/(https:\/\/labs14-tech2rent-image-upload.s3.amazonaws.com\/[0-9][0-9][0-9][0-9][0-9][0-9])/)

import StateDropDown from './StateDropDown';
import { validationSchema } from './yupSchema';

import FileUpload from './FileUploader';

const Form = props => {
  const [previewPics, setPreview] = useState([]);
  const [picture, setPicture] = useState([]);

  const savePhotos = photo => {
    setPreview([...previewPics, photo]);
    console.log(photo);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
  };

  const uploadPhotos = (form, id, listing) => {
    const photosAdded = [];
    console.log(form.length);

    form.map((photo, i) => {
      const formData = new FormData();
      console.log(photo.file);

      formData.append('name', photo.file);
      axios
        .post(
          'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture',
          formData
        )
        .then(res => {
          if (i === form.length - 1) {
            photosAdded.push(res.data.Location);
            setPicture(photosAdded);

            const images = {
              picture: photosAdded,
            };

            Object.assign(listing, images);
            console.log(listing);
            console.log(picture);

            props.listing.handleSubmit(id, listing);
          }
          console.log(res);
          photosAdded.push(res.data.Location);
          setPicture(photosAdded);
          console.log(picture);
        })
        .catch(err => {
          console.log(err);
        });
    });

    // axios({
    //   method: 'post',
    //   url:
    //     'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture',
    //   data: form,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } },
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(form);
    //     console.log(err);
    //   });

    // axios.post(
    //   'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture'
    // );
  };

  const removePhoto = file => {
    const removeFilter = previewPics.filter(
      photo => photo.file.lastModified !== file.lastModified
    );

    setPreview(removeFilter);
  };

  const uploadAndSubmit = (photos, id, listing) => {
    console.log(photos);

    uploadPhotos(photos);

    const images = {
      picture,
    };

    Object.assign(listing, images);
    console.log(listing);
    console.log(picture);

    props.listing.handleSubmit(id, listing);
  };

  // previewPics.map(obj => console.log(obj));
  console.log(picture);
  return (
    <Formik
      initialValues={{
        name: props.listing.name,
        price: props.listing.price,
        city: props.listing.city,
        state: props.listing.state,
        zipcode: props.listing.zipcode,
        category: props.listing.category,
        description: props.listing.description,
        paymentType: props.listing.paymentType,
        condition: props.listing.condition,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const list = {
          users_ownerId: props.listing.userId,
          name: values.name,
          price: values.price,
          city: values.city,
          state: values.state,
          zipcode: values.zipcode,
          category: values.category,
          sub_category: 'Default',
          description: values.description,
          payment_type: values.paymentType,
          available: props.listing.available,
          average_rating: props.listing.average_rating,
          condition: values.condition,
        };

        uploadPhotos(previewPics, list.users_ownerId, list);

        console.log(list);
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
        <div className="form-wrapper">
          <button onClick={() => uploadPhotos(previewPics)}>test</button>
          <form>
            {/* conditional render for image preview, will change this later on.  */}
            <div className="left-side">
              <FileUpload
                previewPics={previewPics}
                savePhotos={savePhotos}
                uploadPhotos={uploadPhotos}
                removePhoto={removePhoto}
              ></FileUpload>
              <div className="condition">
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
                  {errors.condition && touched.condition
                    ? errors.condition
                    : null}
                </div>
              </div>
              <div className="description-div">
                <span>Description </span>
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
                />
                <div className="isa_error">
                  {errors.description && touched.description
                    ? errors.description
                    : null}
                </div>
              </div>
            </div>
            <div className="right-side">
              <div>
                Product
                <Field
                  component="input"
                  name="name"
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
              {/* very long file so I refactored it as its own component in ./SubCategory.js
              <SubCategory
                category={values.category}
                handleChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              /> */}
            </div>
          </form>
          <div className="bottom-row">
            <div
              className={`payment ${
                errors.paymentType && touched.paymentType ? 'isa_error' : ''
              }`}
            >
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
                  <span>Card</span>
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
            </div>
            <div className="lower-buttons">
              <button className="cancel">Cancel</button>
              <button
                type="submit"
                onClick={handleSubmit}
                className={`${
                  props.listing.isSubmitting
                    ? 'footer-button__dark border-dark__hover disabled'
                    : 'footer-button__dark border-dark__hover'
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
