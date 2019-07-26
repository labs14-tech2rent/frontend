import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../actions';
import './register.scss'

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
 this.props.addUser(this.state.credentials)
 this.props.history.push('/home')

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
    <div className="register"> 
    <h1>Register</h1>
    <p>Please complete your registration by confirming your name and email.</p>
      <form onSubmit={this.signup} className="register-form"> 
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={this.state.credentials.email } onChange={this.handleChange} required/>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={this.state.credentials.name} onChange={this.handleChange}  required/>
        <button>Submit</button>
        <button className="back" onClick={() => this.props.history.push('/login')}>Go Back</button>
      </form>
     
  
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