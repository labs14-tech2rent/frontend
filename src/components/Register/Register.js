import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../actions';


class Register extends React.Component {
  state = {
    loginForm: true,
    signupForm: false,
    credentials: {
        auth0_user_id: '',
		email: '',
		name: ''
   
    }
}

handleChange = e => {
  console.log(e.target.value)
  if (this.state.loginForm === true) {
     
  this.setState({
      credentials: {
		   ...this.state.credentials,
		   auth0_user_id: localStorage.getItem('user_id'),
           [e.target.name] : e.target.value

      }
  })
  } else  {
      console.log('SIGNUP')
      this.setState({
          user: {
              ...this.state.user,
              [e.target.name] : e.target.value
          }
      })
  }
 
}


signup = e => {
  e.preventDefault();
 console.log(this.state.credentials)
 this.props.addUser()
// this.props.signUp(this.state.user).then( () => {
//   if (this.props.error === false) { //if signup err = true, this means user exists, so do not run code below to return to login
//     this.setState({
//       loginForm: true,
//       signupForm: false
//     })
//     }
// })
}

changeForm = e => {
  e.preventDefault();
   this.props.reset()

  if (this.state.loginForm) {
    this.setState({loginForm:false,signupForm:true})
    //this.setState({loginForm:false,signupForm:true}
  } else if (this.state.signupForm) {
    this.setState({loginForm:true,signupForm:false})
  }
}

  render() {
  return ( // Line 62, 63, 72, 73, 75 -- conditionally renders content based on login form or sign up form state. 63 calls a separate fn based on form state
    <div className="App"> 
    <h1>{this.state.loginForm ? "Login" : "Sign Up"}</h1>
      <form onSubmit={this.signup}> 
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={this.state.credentials.email } onChange={this.handleChange} required/>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={this.state.credentials.name} onChange={this.handleChange}  required/>
        <button>Submit</button>
      </form>
      {this.props.error && this.state.loginForm && <p className="error">Invalid Username or Password</p>}
      {this.props.error && this.state.signupForm && <p className="error">User already exists, please select another username</p>}
      {this.props.newUser && this.state.loginForm && <p className="new-user">You have successfully created a new user</p>}
      <p>Not a registered user?</p>
      <button className="register" onClick={this.changeForm}> 
        {this.state.loginForm ? "Register" : "Go Back"} 
      </button>
    </div>
  );
  }
}

const mapStateToProps = ({isLoggingIn, error, newUser, pending, loggedIn}) => ({
  isLoggingIn,
  error,
  newUser,
  pending,
  loggedIn

});

export default connect(mapStateToProps,{addUser})(Register)