import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import Callback from './components/HomePage/Callback';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import Profile from './components/Owner/Profile';
import Register from './components/Register/Register';
//import CreateListing from './components/CreateListing/CreateListing';
import createAuth0Client from '@auth0/auth0-spa-js';
import NavBar from "./components/NavBar";
// import auth from './Auth'
class App extends React.Component {
  render() {
    return (
	  <div className="App">
		<header>
			<NavBar />
		</header>
        <Route exact path="/login" {...this.props} component={Login} />
        <Route exact path="/callback" component={Callback} />
        <Route path="/home" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
// grabbing login and signup from actions file... mapping the state to the props
export default connect(
  mapStateToProps,
  {}
)(App);