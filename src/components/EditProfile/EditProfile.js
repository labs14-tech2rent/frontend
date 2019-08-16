import React, { useState } from 'react';

import StateSelect from './StateSelect';
import Rating from '../Owner/Rating';

import camera from '../../Images/Bitmap-1.png';
import vr from '../../Images/Bitmap-8.png';
import cameratwo from '../../Images/Bitmap-10.png';
import blankpic from '../../Images/blankprofile.jpg';

const EditProfile = props => {
  // console.log(credentials.user)
  const [editName, setEditName] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: props.name,
    profile_picture: '',
    email: props.email,
    city: 'Somewhere',
    state: 'KY',
    zip: '12345',
  });

  const handleChange = e => {
    // if the login form state is true, then set the state of the
    // inputs when typed to equal that of credentials
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleState = e => {
    // if the login form state is true, then set the state of
    // the inputs when typed to equal that of credentials
    setUserInfo({
      ...userInfo,
      state: e,
    });
    // console.log('hello');
  };

  return (
    <div className="profile-content mainContent">
      <div className="user-info">
        <div className="image-container">
          <div className="image-overlay">
            <p>Change Profile Picture</p>
          </div>
          <img
            className="profile-pic"
            onClick={() => setEditPic(!editPic)}
            src={blankpic}
            alt=""
          />
        </div>
        {editName ? (
          <form>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={userInfo.name}
            />
            <button
              onClick={e => {
                e.preventDefault();
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
          <form onSubmit={editLocation}>
            <input
              type="text"
              onChange={handleChange}
              name="city"
              placeholder={userInfo.city}
              value={userInfo.location}
            />

            <StateSelect state={userInfo.state} handleState={handleState} />

            <input
              type="text"
              onChange={handleChange}
              name="zip"
              placeholder={userInfo.zip}
              value={userInfo.zip}
            />
            <button
              onClick={e => {
                e.preventDefault();
                setEditLocation(!editLocation);
              }}
            >
              Update Location
            </button>
          </form>
        ) : (
          <div className="edit-content-container">
            <p className="profile-edit-text">{`${userInfo.city} ${userInfo.state}, ${userInfo.zip}`}</p>
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
