// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import StateSelect from './StateSelect';
// import Rating from '../Owner/Rating';
// import { editUser } from '../../actions/Users/CRUD/editUser';
// import camera from '../../Images/Bitmap-1.png';
// import vr from '../../Images/Bitmap-8.png';
// import cameratwo from '../../Images/Bitmap-10.png';
// import blankpic from '../../Images/blankprofile.jpg';

// const EditProfile = props => {
//   // console.log(credentials.user)
//   const [editName, setEditName] = useState(false);
//   const [editPic, setEditPic] = useState(false);
//   const [editLocation, setEditLocation] = useState(false);
//   const dispatch = useDispatch();
//   const [userInfo, setUserInfo] = useState({
//     id: props.id,
//     name: props.name,
//     auth0_user_id: localStorage.getItem('user_id'),
//     profile_picture: '',
//     email: props.email,
//     street: props.street,
//     city: 'Somewhere',
//     state: 'KY',
//     zip_code: '12345',
//   });

//   useEffect(() => {
//     setUserInfo({
//       ...userInfo,
//       name: props.name,
//       email: props.email,
//       id: props.id,
//       street: props.street,
//       city: props.city,
//       zip_code: props.zip,
//       state: props.state,
//     });
//   }, [
//     props.city,
//     props.email,
//     props.id,
//     props.name,
//     props.state,
//     props.street,
//     props.zip,
//     userInfo,
//   ]);

//   const handleName = e => {
//     props.handleName(e.target.value);
//     console.log(userInfo);
//   };

//   const handleStreet = e => {
//     console.log(e.target.value);
//     // console.log(props.handleStreet);
//     props.handleStreet(e.target.value);
//     // console.log(userInfo);
//   };

//   const handleCity = e => {
//     console.log(e.target.value);
//     props.handleCity(e.target.value);
//     // console.log(userInfo);
//   };

//   const handleZip = e => {
//     console.log(e.target.value);
//     props.handleZip(e.target.value);
//     // / console.log(userInfo);
//   };

//   const handleState = e => {
//     props.handleState(e);
//   };

//   return (
//     <div className="profile-content mainContent">
//       <div className="user-info">
//         <div className="image-container">
//           <div className="image-overlay">
//             <p>Change Profile Picture</p>
//           </div>
//           <img
//             className="profile-pic"
//             onClick={() => setEditPic(!editPic)}
//             src={blankpic}
//             alt=""
//           />
//         </div>
//         {editName ? (
//           <form>
//             <input
//               type="text"
//               onChange={handleName}
//               name="name"
//               value={userInfo.name}
//               placeholder={userInfo.name}
//             />
//             <button
//               onClick={e => {
//                 e.preventDefault();
//                 dispatch(editUser(userInfo.id, userInfo));
//                 setEditName(!editName);
//               }}
//             >
//               Update Name
//             </button>
//           </form>
//         ) : (
//           <div className="edit-content-container">
//             <p className="profile-edit-text">{userInfo.name}</p>
//             <button
//               onClick={() => {
//                 setEditName(!editName);
//               }}
//             >
//               Edit Name
//             </button>
//           </div>
//         )}
//         {editLocation ? (
//           <form onSubmit={editLocation}>
//             <input
//               type="text"
//               onChange={handleStreet}
//               name="street"
//               placeholder={
//                 userInfo.street === '' ? userInfo.street : '123 Nowhere Lane'
//               }
//               value={userInfo.street}
//             />
//             <input
//               type="text"
//               onChange={handleCity}
//               name="city"
//               placeholder={userInfo.city}
//               value={userInfo.city}
//             />

//             <StateSelect state={userInfo.state} handleState={handleState} />
//             <input
//               type="text"
//               onChange={handleZip}
//               name="zip"
//               placeholder={userInfo.zip_code}
//               value={userInfo.zip_code}
//             />

//             <button
//               onClick={e => {
//                 e.preventDefault();
//                 setEditLocation(!editLocation);
//                 dispatch(editUser(userInfo.id, userInfo));
//               }}
//             >
//               Update Location
//             </button>
//           </form>
//         ) : (
//           <div className="edit-content-container">
//             <p className="profile-edit-text">{`${userInfo.city} ${userInfo.state}, ${userInfo.zip_code}`}</p>
//             <button onClick={() => setEditLocation(!editLocation)}>
//               Edit Location
//             </button>
//           </div>
//         )}

//         <Rating />
//       </div>

//       <div className="products">
//         <img src={camera} alt="camera" />
//         <img src={vr} alt="vr" />
//         <img src={cameratwo} alt="camera" />
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
