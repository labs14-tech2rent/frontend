import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StateSelect from './StateSelect';
import Rating from '../Owner/Rating';
import { editUser } from '../../actions/Users/CRUD/editUser';
import camera from '../../Images/Bitmap-1.png';
import vr from '../../Images/Bitmap-8.png';
import cameratwo from '../../Images/Bitmap-10.png';
import blankpic from '../../Images/blankprofile.jpg';
import FileUpload from '../Owner/FileUpload';
import EditPicModal from './EditPicModal';
import axios from 'axios'
const EditProfile = props => {
  // console.log(credentials.user)
  const [previewPics, setPreview] = useState([]);
  const [profile_picture, setPicture] = useState([]);
  const [editName, setEditName] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

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
  }, [
    props.city,
    props.email,
    props.id,
    props.name,
    props.state,
    props.street,
    props.zip
  ]);

  const handleInput = e => {
    //setName(e.target.value)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  };



  const handleState = e => {
    setUserInfo({
      ...userInfo,
      state: e
    })
  };

  return (
    <div className="profile-content mainContent">
      <div className="user-info">
        <div className="image-container">
          <div className="image-overlay" onClick={ e => {
            setModalShow(true)}}>
          
          
          <p>Change Profile Picture</p>
          
          </div>
          <img
            className="profile-pic"
            onClick={() => setEditPic(!editPic)}
            src={props.pic !== '' ? props.pic : blankpic}
            alt=""
          />
          
            <EditPicModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={props.id}
            pic={props.pic}
          />
        
        </div>
        {editName ? (
          <form>
            <input
              type="text"
              onChange={handleInput}
              name="name"
              value={userInfo.name}
              placeholder={userInfo.name}
            />
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(editUser(userInfo.id, userInfo));
                setEditName(!editName);
              }}
            >
              Update Name
            </button>
          </form>
        ) : (
          <div className="edit-content-container">
            <p className="profile-edit-text">{userInfo.name}</p>
            <button
              onClick={() => {
                setEditName(!editName);
              }}
            >
              Edit Name
            </button>
          </div>
        )}
        {editLocation ? (
          <form>
            <input
              type="text"
              onChange={handleInput}
              name="street"
              placeholder={
                userInfo.street === '' ? userInfo.street : '123 Nowhere Lane'
              }
              value={userInfo.street}
            />
            <input
              type="text"
              onChange={handleInput}
              name="city"
              placeholder={userInfo.city}
              value={userInfo.city}
            />

            <StateSelect state={userInfo.state} handleState={handleState} />
            <input
              type="text"
              onChange={handleInput}
              name="zip_code"
              placeholder={userInfo.zip_code}
              value={userInfo.zip_code}
            />

            <button
              onClick={e => {
                e.preventDefault();
                setEditLocation(!editLocation);
                dispatch(editUser(userInfo.id, userInfo));
              }}
            >
              Update Location
            </button>
          </form>
        ) : (
          <div className="edit-content-container">
            <p className="profile-edit-text">{`${userInfo.city} ${userInfo.state}, ${userInfo.zip_code}`}</p>
            <button onClick={() => setEditLocation(!editLocation)}>
              Edit Location
            </button>
          </div>
        )}

        <Rating />
      </div>

      <div className="products">
        <img src={camera} alt="camera" />
        <img src={vr} alt="vr" />
        <img src={cameratwo} alt="camera" />
      </div>
    </div>
  );
};

export default EditProfile;
