import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Formik } from 'formik';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import yup from 'yup';
import { props } from 'bluebird';
import FileUpload from './FileUpload';
import { editItem } from '../../actions';

function FormExample(props) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    available: '',
    payment_type: '',
    picture: '',
    sub_category: '',
    condition: '',
    picture: '',
    users_ownId: '',
    id: '',
  });

  useEffect(() => {
    setItemInfo(props.currentItem);
  }, [props.currentItem]);

  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [previewPics, setPreview] = useState([]);
  const [picture, setPicture] = useState([]);

  const savePhotos = photo => {
    setPreview([...previewPics, photo]);
    console.log(photo);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
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
            picture: res.data.Location,
          });
          console.log(photosAdded);
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

  const removePhoto = file => {
    const removeFilter = previewPics.filter(
      photo => photo.file.lastModified !== file.lastModified
    );

    setPreview(removeFilter);
  };

  const uploadAndSubmit = (photos, id, itemInfo) => {
    console.log(photos);

    uploadPhotos(photos);

    const images = { picture };

    Object.assign(itemInfo, images);

    console.log(picture);

    axios
      .put(
        `https://labstech2rentstaging.herokuapp.com/api/items/${id}`,
        itemInfo
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    //
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const photoHandler = e => {
    uploadAndSubmit(previewPics, itemInfo.users_ownerId, itemInfo);
  };

  const handleSubmit = (e, msg) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setItemInfo({
        ...itemInfo,
      });
    }

    setValidated(true);
    dispatch(editItem(props.currentItem.id, itemInfo));
    console.log(itemInfo);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Item Name"
            value={itemInfo.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={itemInfo.description}
            maxLength="100"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              value={itemInfo.price}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a price.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            onChange={handleChange}
            value={itemInfo.category}
            placeholder="Category"
            as="select"
            required
          >
            <option selected disabled hidden>
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
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik04">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="Condition"
            name="condition"
            value={itemInfo.condition}
            as="select"
            required
          >
            <option selected disabled hidden>
              Condition:
            </option>
            <option>New</option>
            <option>Like New </option>
            <option>Used</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Available:</Form.Label>
          <Form.Control
            type="text"
            placeholder="# of Items Available"
            name="available"
            value={itemInfo.available}
            onChange={handleChange}
            as="select"
            required
          >
            <option selected disabled hidden>
              Is This Item Currently Rented Out?:
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>

          <Form.Control.Feedback type="invalid">
            Please Select Item Availability Status
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Payment Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Payment Type"
            as="select"
            name="payment_type"
            onChange={handleChange}
            value={itemInfo.payment_type}
            required
          >
            <option>Online</option>
            <option>Meet Up</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide a payment type.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Image</Form.Label>

          <FileUpload
            previewPics={previewPics}
            savePhotos={savePhotos}
            uploadPhotos={uploadPhotos}
            removePhoto={removePhoto}
          />

          <button onClick={photoHandler}>Upload Photo</button>
          <p className="uploading">{uploading && 'Uploading...'}</p>
          <p className="success">{success && 'Image uploaded successfully!'}</p>
          <p className="error">
            {fail && 'Image failed. Please try again, or select another image.'}
          </p>
        </Form.Group>
      </Form.Row>
      <Form.Group></Form.Group>
      <Button
        className="submit-button"
        type="submit"
        onClick={props.setChange(!props.change)}
      >
        Submit
      </Button>
    </Form>
  );
}

export default FormExample;

// <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         ...schema,
//         name: 'Item Name',
//         description: 'Description',
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>Item Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.name}
//               </Form.Control.Feedback>
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Description (Max: 100 Chars.)</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="description"
//                 value={values.description}
//                 onChange={handleChange}
//                 isValid={touched.description && !errors.description}
//                 maxLength="100"
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.description}
//               </Form.Control.Feedback>
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Category"
//                 name="category"
//                 value={values.category}
//                 onChange={handleChange}
//                 isInvalid={!!errors.category}
//                 as="select"
//                 required
//               >
//                 <option>Cameras</option>
//                 <option>Camera Accessories </option>
//                 <option>Lighting</option>
//                 <option>3D Printers</option>
//                 <option>Computers</option>
//               </Form.Control>
//               <Form.Control.Feedback type="invalid">
//                 {errors.category}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6" controlId="validationFormik04">
//               <Form.Label>Condition</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Condition"
//                 name="condition"
//                 value={values.category}
//                 onChange={handleChange}
//                 isInvalid={!!errors.condition}
//                 as="select"
//                 required
//               >
//                 <option>New</option>
//                 <option>Like New </option>
//                 <option>Used</option>
//               </Form.Control>
//               <Form.Control.Feedback type="invalid">
//                 {errors.condition}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label># Available</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="# Available"
//                 name="available"
//                 value={values.available}
//                 onChange={handleChange}
//                 isInvalid={!!errors.available}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.available}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik06">
//               <Form.Label>Payment Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Payment Type"
//                 name="payment_type"
//                 value={values.payment_type}
//                 onChange={handleChange}
//                 isInvalid={!!errors.payment_type}
//                 as="select"
//                 required
//               >
//                 <option>Online</option>
//                 <option>Meet Up</option>
//               </Form.Control>

//               <Form.Control.Feedback type="invalid">
//                 {errors.payment_type}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.Check
//               required
//               name="picture"
//               label="Agree to picture and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.picture}
//               feedback={errors.picture}
//               id="validationFormik0"
//               required
//             />
//           </Form.Group>
//           <Button
//             className="submit-button"
//             type="submit"
//             onClick={console.log(schema)}
//           >
//             Submit Form
//           </Button>
//         </Form>
//       )}
//     </Formik>
