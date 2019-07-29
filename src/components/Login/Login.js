import React from 'react';
import { connect } from 'react-redux';
import { login, signUp, reset } from '../../actions';

class Login extends React.Component {
  render() {
    return (
      // conditionally renders content based on login form or sign up form state.

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
