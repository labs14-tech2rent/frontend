import React from 'react';
import { connect } from 'react-redux';
import { login, signUp, reset } from '../../actions';

class Login extends React.Component {
  state = {
    // credential state used for login
    credentials: {
      username: '',
      password: '',
    },
  };

  handleChange = e => {
    console.log(e.target.value);

    // ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
    if (this.state.loginForm === true) {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      // if the state of the form is signup, then set the inputs to the  state of user
      console.log('SIGNUP');
      this.setState({
        user: {
          ...this.state.user,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  login = e => {
    e.preventDefault();
    console.log(`LOGIN : ${this.state.credentials}`);
    // when user logs in, send the info to the login fn from the actions file, then redirect to home route
    this.props.login(this.state.credentials).then(() => {
      if (this.props.loggedIn === true) {
        // if logged in passes and user exists
        this.props.history.push('/home');
      }
    });
  };

  signup = e => {
    e.preventDefault();
    console.log(`SIGNUP: ${this.state.credentials}`);
    // when user signs up, send the info to the signup fn in the actions file,
    this.props.signUp(this.state.user).then(() => {
      if (this.props.error === false) {
        // if signup err = true, this means user exists, so do not run code below to return to login
        this.setState({
          loginForm: true,
          signupForm: false,
        });
      }
    });
  };

  changeForm = e => {
    e.preventDefault();
    // resets the form after submission
    this.props.reset();

    if (this.state.loginForm) {
      this.setState({ loginForm: false, signupForm: true });
      // this.setState({loginForm:false,signupForm:true}
    } else if (this.state.signupForm) {
      this.setState({ loginForm: true, signupForm: false });
    }
  };

  render() {
    return (
      //  conditionally renders content based on login form or sign up form state.

      <div className="App">
        <h1>Tech2Rent</h1>
        <button onClick={this.props.auth.login}>Login/Register</button>
      </div>
    );
  }
}

const mapStateToProps = ({
  isLoggingIn,
  error,
  newUser,
  pending,
  loggedIn,
  auth,
}) => ({
  isLoggingIn,
  error,
  newUser,
  pending,
  loggedIn,
  auth,
});
// grabbing login and signup from actions file... mapping the state to the props
export default connect(
  mapStateToProps,
  { login, signUp, reset }
)(Login);
