import React from 'react';
import './App.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import Callback from './components/HomePage/Callback';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import Profile from './components/Owner/Profile';
import Register from './components/Register/Register';
import auth0Client from './Auth';

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer"
// import auth from './Auth'
class App extends React.Component {

  render() {
    return (
    <div className="App">
    <BrowserRouter>
      <header>
        <NavBar {...this.props}/>
        
      </header>
      <Switch>
          
          <Route exact path="/" {...this.props} component={Login} />
          <Route exact path="/callback" component={Callback} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
       </Switch>
       <footer>
        <Footer />
       </footer>
        </BrowserRouter>
        
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
