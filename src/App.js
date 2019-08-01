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
import CreateListing from './components/CreateListing/CreateListing';

//Components
import Footer from './components/Footer/Footer';
import NavBarUnAuth from './components/NavBar/NavBarUnAuth';

// import auth from './Auth'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBarUnAuth />
        <Route exact path="/login" {...this.props} component={Login} />
        <Route exact path="/callback" component={Callback} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route path="/create-listing" component={CreateListing} />
        <Footer />
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
