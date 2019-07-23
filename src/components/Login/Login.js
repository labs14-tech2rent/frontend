import React from 'react';
import {connect} from 'react-redux';
import {login, signUp, reset} from '../../actions';


class Login extends React.Component {
  state = {
	  // login and signup form state set for conditional rendering
    loginForm: true,
	signupForm: false,
	
	//credential state used for login
    credentials: {
        username: '',
        password: '',
  
	},
	
	//user state used for signup
    user: {
        username: '',
        password: '',
  
        }
}

handleChange = e => {
  console.log(e.target.value)

  //ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
  if (this.state.loginForm === true) {
    
  this.setState({
      credentials: {
          ...this.state.credentials,
          [e.target.name] : e.target.value

      }
  })
  } else  { // if the state of the form is signup, then set the inputs to the  state of user
      console.log('SIGNUP')
      this.setState({
          user: {
              ...this.state.user,
              [e.target.name] : e.target.value
          }
      })
  }
 
}

login = e => {
  e.preventDefault();
 console.log(`LOGIN : ${this.state.credentials}`)
 //when user logs in, send the info to the login fn from the actions file, then redirect to home route
 this.props.login(this.state.credentials).then(() => {
   if(this.props.loggedIn === true) { //if logged in passes and user exists
  this.props.history.push('/home')
   }
});
}

signup = e => {
  e.preventDefault();
 console.log(`SIGNUP: ${this.state.credentials}`)
 //when user signs up, send the info to the signup fn in the actions file, 
this.props.signUp(this.state.user).then( () => {
  if (this.props.error === false) { //if signup err = true, this means user exists, so do not run code below to return to login
    this.setState({
      loginForm: true,
      signupForm: false
    })
    }
})
}

changeForm = e => {
  e.preventDefault();
  //resets the form after submission
   this.props.reset()

  if (this.state.loginForm) {
    this.setState({loginForm:false,signupForm:true})
    //this.setState({loginForm:false,signupForm:true}
  } else if (this.state.signupForm) {
    this.setState({loginForm:true,signupForm:false})
  }
}

  render() {
  return ( //  conditionally renders content based on login form or sign up form state. 
	<div className="App"> 

	<h1>{this.state.loginForm ? "Login" : "Sign Up"}</h1>
      <form onSubmit={ this.state.loginForm ? this.login : this.signup}> 
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" value={this.state.loginForm ? this.state.credentials.username : this.state.user.username } onChange={this.handleChange} required/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={this.state.loginForm ? this.state.credentials.password : this.state.user.password} onChange={this.handleChange} required/>
        <button>{this.state.loginForm ? "Log In" : "Submit" }</button>
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
// grabbing login and signup from actions file... mapping the state to the props
export default connect(mapStateToProps,{login, signUp, reset})(Login)
