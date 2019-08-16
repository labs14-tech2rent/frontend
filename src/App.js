/* eslint-disable no-shadow */

import React, { useState } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './components/HomePage/HomePage';
import Callback from './components/HomePage/Callback';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import Profile from './components/Owner/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Register from './components/Register/Register';

import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import CreateListing from './components/CreateListing/CreateListing';
import ViewListing from './components/ViewListing/ViewListing';

const App = props => {
  const submit = useSelector(store => store.submit);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = e => {
    setName(e);
  };

  const handleEmail = e => {
    setEmail(e);
  };

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <header>
          <NavBar {...props} />
        </header>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />

          <Route exact path="/v2/logout" {...props} component={Login} />
          <Route exact path="/callback" component={Callback} />
          <PrivateRoute auth={submit} path="/home" component={HomePage} />
          <PrivateRoute
            {...props}
            exact
            path="/profile"
            name={name}
            component={Profile}
          />
          <Route
            {...props}
            exact
            path="/edit-profile"
            {...props}
            render={props => (
              <EditProfile
                {...props}
                name={name}
                email={email}
              />
            )}
          />
          <Route path="/create-listing" component={CreateListing} />
          <Route
            exact
            path="/register"
            {...props}
            render={props => (
              <Register
                {...props}
                handleName={handleName}
                handleEmail={handleEmail}
              />
            )}
          />
          <Route
            exact
            path="/view-listing"
            render={props => <ViewListing {...props} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

// grabbing login and signup from actions file... mapping the state to the props
export default App;
