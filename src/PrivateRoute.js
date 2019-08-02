import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// /make route private and spread in the rest of the props
const PrivateRoute = ({ component: Component, ...rest }) => (
  <div>
    <Route
      {...rest}
      render={props => {
        // if id token and access token are in local storage then render page
        if (
          localStorage.getItem('id_token') &&
          localStorage.getItem('access_token')
        ) {
          return <Component {...props} />;
          // console.log("testing")

        } else { /// if not then redirect to login
          return <Redirect to="/" />;
        }
        // / if not then redirect to login
        return <Redirect to="/login" />;
      }}
    />
  </div>
);

export default connect(
  null,
  {}
)(PrivateRoute);
