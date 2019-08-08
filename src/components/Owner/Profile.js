import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Rating from './Rating';
// import Random from  '../../RandomUserApi'
// import logo from '../../images/t2rlogo.png'
import camera from '../../Images/Bitmap-1.png';
import vr from '../../Images/Bitmap-8.png';
import cameratwo from '../../Images/Bitmap-10.png';

const Profile = props => {
 

  const [user, setUser] = useState({
    
      name: '',
      email: '',
      picture: '',
      location: '',
    
  });

 

  useEffect(() => {
    axios
    .get(
      'https://randomuser.me/api/?nat=us&?results=1&inc=name,picture,email,registered,location'
    )
    .then(res => {console.log(res)
      setUser( res.data.results[0]  )})
  
  }, []);



  
    return (
      
      //console.log(credentials.user)
      
      <div className="profile-content mainContent">
        <div className="user-info">
          <img src={user.picture.large} alt="" />
          {user.name && (
            <p style={{ fontWeight: 'bold' }}>
              {`${user.name.first.charAt(0).toUpperCase() +
                user.name.first.slice(
                  1
                )} ${user.name.last
                .charAt(0)
                .toUpperCase()}${user.name.last.slice(1)} `}
            </p>
          )}
          {user.location && (
            <p>
              Owner of Tech: Located in{' '}
              {`${user.location.city.charAt(0).toUpperCase() +
                user.location.city.slice(1)}, 
                ${user.location.state
                .charAt(0)
                .toUpperCase()}${user.location.state.slice(1)} `}
            </p>
          )}
          <p>Freelance Photographer</p>
          <br />
          <p className="addProduct" onClick={() => props.history.push('/create-listing')}> + Add Product</p>

          <Rating />

        </div>

        <div className="products">
          <img src={camera} alt="camera" />
          <img src={vr} alt="vr" />
          <img src={cameratwo} alt="camera" />
        </div>
      </div>
    );
  
}

export default Profile;
