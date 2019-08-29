import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Formik } from 'formik';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import yup from 'yup';
import { props } from 'bluebird';
import FileUpload from './FileUpload';
import { editItem } from '../../actions';
import { editUser } from '../../actions/Users/CRUD/editUser';

function EditPicForm(props) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [previewPics, setPreview] = useState([]);
  const [profile_picture, setPicture] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: props.id,
    name: props.name,
    auth0_user_id: localStorage.getItem('user_id'),
    profile_picture: '',
    email: props.email,
    street: props.street,
    city: 'Somewhere',
    state: 'KY',
    zip_code: '12345',
  });
 

  useEffect(() => {
    setUserInfo({
        ...userInfo,
        name: props.name,
        email: props.email,
        id: props.id,
        street: props.street !== null ? props.street : '123 Nowhere',
        city: props.city !== null ? props.city : "Noplace",
        zip_code: props.zip !== null ? props.zip : "12345",
        state: props.state !== null ? props.state : "NY",
        profile_picture: props.pic !== '' ? props.pic : ''
      });
    
  }, [props.pic]);

 

  const savePhotos = photo => {


    setPreview([...previewPics, photo]);
    console.log(photo);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
  };
  const photoHandler = e => {
    e.preventDefault()
    uploadAndSubmit(previewPics, userInfo.id, userInfo);
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
          setUserInfo({
            ...userInfo,
            profile_picture: res.data.Location,
          });
          console.log(photosAdded);
          console.log(userInfo)
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

    const images = { profile_picture };

    Object.assign(itemInfo, images);

    console.log(profile_picture);

    axios
      .put(
        `https://labstech2rentstaging.herokuapp.com/api/users/${id}`,
        userInfo
      )
      .then(res => {
        console.log(res);
        
      })
      .catch(err => {
        console.log(err);
      });
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
      .put(
        `https://labstech2rentstaging.herokuapp.com/api/users/${props.id}`,
        userInfo
      )
      .then(res => {
       window.location.reload()
      })
      .catch(err => {
        setFail(true)
      });
      
    }
    //uploadAndSubmit()
    setValidated(true);
    console.log(userInfo);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    
      <Form.Row>
    
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
          <p className="success">{success && "Image uploaded successfully!\nClick 'Submit' to Save Changes"}</p>
          <p className="error">
            {fail && 'Image failed. Please try again, or select another image.'}
          </p>
        </Form.Group>
      </Form.Row>
      <Form.Group></Form.Group>
      <Button
        className="submit-button"
        type="submit"
        onClick={() => {
          props.setSubmit(true);
        }}
      >
        Submit
      </Button>
      <p className="error">{fail && "Error submitting changes. Please check that all form fields are filled in or try again later"}</p>
    </Form>
  );
}

export default EditPicForm;


