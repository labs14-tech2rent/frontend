import React, {useState} from 'react';
//import {connect} from 'react-redux';
//import {login, signUp, reset} from '../../actions';
import {useSelector, useDispatch} from 'react-redux'

const Login = (props) => {
//   state = {
	
// 	//credential state used for login
//     credentials: {
//         username: '',
//         password: '',
  
// 	},
	

// }
const [state, setState] = useState({
  credentials: {
    username: '',
    password: ''
  }
})

const [credentials, setCredentials] = useCredentials({username: '', password: ''})



const handleChange = e => {
  console.log(e.target.value)

  //ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
   setState({...state, credentials: { [e.target.name] : e.target.value}})
    // setCredentials(prevState => {
    //   return {...prevState, credentials: { [e.target.name] : e.target.value} }
    // })
  
 
}

const login = e => {
  e.preventDefault();
 //console.log(`LOGIN : ${this.state.credentials}`)
 dispatch(actions.login({credentials}))
 //when user logs in, send the info to the login fn from the actions file, then redirect to home route
//  this.props.login({credentials}).then(() => {
//    if(this.props.loggedIn === true) { //if logged in passes and user exists
//   this.props.history.push('/home')
//    }
// });
}

  let content = ( //  conditionally renders content based on login form or sign up form state. 
	
	<div className="App"> 
		<h1>Tech2Rent</h1>
	  <button onClick={props.auth.login} >Login/Register</button>
      
	  
    </div>
  ); 
  return content
  }


// const mapStateToProps = ({isLoggingIn, error, newUser, pending, loggedIn, auth}) => ({
//   isLoggingIn,
//   error,
//   newUser,
//   pending,
//   loggedIn,
//   auth


// grabbing login and signup from actions file... mapping the state to the props
export default Login
