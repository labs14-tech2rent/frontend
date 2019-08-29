import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field } from 'formik';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
// regex for later on will delete later.
// .match(/(https:\/\/labs14-tech2rent-image-upload.s3.amazonaws.com\/[0-9][0-9][0-9][0-9][0-9][0-9])/)

import StateDropDown from './StateDropDown';
import { validationSchema } from './yupSchema';

import FileUpload from './FileUploader';

const ListingForm = props => {
  const [previewPics, setPreview] = useState([]);
  const [validated, setValidated] = useState(false);
  const [picture, setPicture] = useState([]);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [itemInfo, setItemInfo] = useState({
    name: props.listing.name,
    price: props.listing.price,
    city: props.listing.city,
    state: props.listing.state,
    zipcode: props.listing.zipcode,
    category: props.listing.category,
    description: props.listing.description,
    payment_type: props.listing.paymentType,
    condition: props.listing.condition,
    picture: '',
  });

  const handleChange = e => {
    //
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const savePhotos = photo => {
    setPreview([...previewPics, photo]);
  };

  const photoHandler = e => {
    e.preventDefault();
    uploadAndSubmit(previewPics, props.id, itemInfo);
  };

  const uploadPhotos = form => {
    const photosAdded = [];
    console.log(form.length);

    form.map((photo, i) => {
      const formData = new FormData();
      console.log(photo.file);
      setUploading(true);
      formData.append('name', photo.file);
      axios
        .post(
          'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture',
          formData
        )
        .then(res => {
          console.log(res);
          photosAdded.push(res.data.Location);
          setPicture(photosAdded);
          console.log('photo is ADDED');
          setItemInfo({
            ...itemInfo,
            picture: res.data.Location,
          });
          console.log(photosAdded);
          console.log(itemInfo);
          setFail(false);
          setSuccess(true);
          setUploading(false);
        })
        .catch(err => {
          console.log(err);
          setSuccess(false);
          setFail(true);
          setUploading(false);
        });
    });
  };
  /// function that uploads the photos and submits the form
  const uploadAndSubmit = (photos, id, itemInfo) => {
    console.log(photos);

    uploadPhotos(photos);

    const images = { picture };

    Object.assign(itemInfo, images);

    console.log(picture);

    axios
      .post(
        `https://labstech2rentstaging.herokuapp.com/api/users/${props.id}/items`,
        itemInfo
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

 

  // this is to remove an unwanted photo from the list that gets submitted.
  const removePhoto = file => {
    const removeFilter = previewPics.filter(
      photo => photo.file.lastModified !== file.lastModified
    );

    setPreview(removeFilter);
  };

  const handleSubmit = (e, msg) => {
    e.preventDefault();
    // setItemInfo({
    //   ...itemInfo,
    // });
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // setItemInfo({
      //   ...itemInfo,
      // });

      axios
        .post(
          `https://labstech2rentstaging.herokuapp.com/api/users/${props.id}/items`,
          itemInfo
        )
        .then(res => {
          window.location.pathname = '/profile';
        })
        .catch(err => {
          setFail(true);
        });
    }
    // uploadAndSubmit()
    setValidated(true);
    console.log(itemInfo);
  };

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
        payment_type: props.listing.paymentType,
        condition: props.listing.condition,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // values that get submitted to the api.
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

        // calling the function
        console.log(values);
        uploadAndSubmit(previewPics, list.users_ownerId, list);
      }}
    >
      {({
        values,
        errors,
        touched,

        handleBlur,
      }) => (
        <div className="form-wrapper">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* conditional render for image preview, will change this later on.  */}
            <div className="left-side">
              <FileUpload
                previewPics={previewPics}
                savePhotos={savePhotos}
                uploadPhotos={uploadPhotos}
                removePhoto={removePhoto}
              />

              <button className="upload-btn" onClick={photoHandler}>
                Upload Photo
              </button>
              <p className="uploading">{uploading && 'Uploading...'}</p>
              <p className="success">
                {success &&
                  "Image uploaded successfully!\nClick 'Submit' to Save Changes"}
              </p>
              <p className="error">
                {fail &&
                  'Image failed. Please try again, or select another image.'}
              </p>

              <div className="condition">
                <Form.Label>Condition</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  placeholder="Condition"
                  name="condition"
                  className="long-input"
                  value={itemInfo.condition}
                  as="select"
                  required
                >
                  <option selected hidden>
                    Choose Condition:
                  </option>
                  <option>New</option>
                  <option>Like New </option>
                  <option>Used</option>
                </Form.Control>
              </div>
              <div className="description-div">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="description"
                  className="description"
                  onChange={handleChange}
                  value={itemInfo.description}
                  as="textarea"
                  maxLength="100"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill out description.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="right-side">
              <div>
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  className="long-input"
                  placeholder="Item Name"
                  value={itemInfo.name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please input an item name.
                </Form.Control.Feedback>
              </div>
              <div>
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      id="inputGroupPrepend"
                      className="price-tag"
                    >
                      $
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    name="price"
                    className="long-input price"
                    onChange={handleChange}
                    placeholder="Price"
                    aria-describedby="inputGroupPrepend"
                    value={itemInfo.price}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please input a price.
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="middle-row">
                <div className="city-input-field">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    className="long-input city"
                    onChange={handleChange}
                    placeholder="City"
                    aria-describedby="inputGroupPrepend"
                    value={itemInfo.city}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please input a city.
                  </Form.Control.Feedback>
                </div>
                <div className="middle-row-field">
                  State
                  {/* put this into its own component */}
                  <StateDropDown handleChange={handleChange} />
                </div>
                <div className="middle-row-field">
                  Zipcode{' '}
                  <Form.Control
                    type="number"
                    name="zipcode"
                    className="long-input city"
                    onChange={handleChange}
                    placeholder="Zip"
                    aria-describedby="inputGroupPrepend"
                    value={itemInfo.zipcode}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please input a zip code.
                  </Form.Control.Feedback>
                </div>
              </div>
              <div>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  className="long-input"
                  onChange={handleChange}
                  value={itemInfo.category}
                  placeholder="Category"
                  as="select"
                  required
                >
                  <option selected hidden>
                    Select Category:
                  </option>
                  <option>Cameras</option>
                  <option>Camera Accessories </option>
                  <option>Lighting</option>
                  <option>3D Printers</option>
                  <option>Computers</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a category.
                </Form.Control.Feedback>
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
              <div className="payment-options">
                <Form.Label>Payment Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Payment Type"
                  as="select"
                  name="payment_type"
                  className="long-input payment-input"
                  onChange={handleChange}
                  value={itemInfo.payment_type}
                  required
                >
                  <option selected disabled hidden>
                    Payment Type:
                  </option>
                  <option>Online</option>
                  <option>Meet Up</option>
                  <option>Both</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide a payment type.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form>
          <div className="bottom-row">
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

export default ListingForm;
