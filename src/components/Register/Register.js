import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../actions';
import './register.scss'

const Register = props => {
  const [credentials, setCredentials] = useState({ email: '', auth0_user_id: ''})
  const dispatch = useDispatch()
  

  const handleChange = e => {
    console.log(e.target.value)
    
    //ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
    // setState({...state, credentials: { [e.target.name] : e.target.value}})
      setCredentials({ ...credentials, [e.target.name] : e.target.value, auth0_user_id: localStorage.getItem('user_id')})
    
      console.log(credentials)
     
  }
  

  // setMessage(prevState => {
  //   return { ...prevState, message: val }
  // });
  const signup = e => {
    e.preventDefault();
   
   console.log(credentials)
   dispatch(actions.addUser(credentials))
   props.history.push('/home')

  }



 
  return ( // Line 62, 63, 72, 73, 75 -- conditionally renders content based on login form or sign up form state. 63 calls a separate fn based on form state
    <div className="register"> 
    <h1>Register</h1>
    <p>Please complete your registration by confirming your name and email.</p>
      <form onSubmit={signup} className="register-form"> 
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} required/>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" onChange={handleChange}  required/>
        <button>Submit</button>
        <button className="back" onClick={() => props.history.push('/login')}>Go Back</button>
      </form>
     
  
    </div>
  );
  
}



export default Register