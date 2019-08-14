import React, { useState, useEffect } from 'react';

import Rating from '../Owner/Rating';

// import Random from  '../../RandomUserApi'
// import logo from '../../images/t2rlogo.png'
import camera from '../../Images/Bitmap-1.png';
import vr from '../../Images/Bitmap-8.png';
import cameratwo from '../../Images/Bitmap-10.png';
import blankpic from '../../Images/blankpic.jpg';

const EditProfile = props => {
  // console.log(credentials.user)
  const [editName, setEditName] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Peter Stone',
    pic: '',
    location: 'Seattle, WA',
  });

  const handleChange = e => {
    // ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-content mainContent">
      <div className="user-info">
        <img
          className="profile-pic"
          onClick={() => setEditPic(!editPic)}
          src={blankpic}
          alt=""
        />
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
              name="location"
              value={userInfo.location}
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
            <p className="profile-edit-text">{userInfo.location}</p>
            <button onClick={() => setEditLocation(!editLocation)}>
              Edit Location
            </button>
          </div>
        )}

        <Rating />
      </div>

      <div className="products">
        {console.log(`${editName} and ${editPic} and ${editLocation}`)}
        <img src={camera} alt="camera" />
        <img src={vr} alt="vr" />
        <img src={cameratwo} alt="camera" />
      </div>
    </div>
  );
};

export default EditProfile;
