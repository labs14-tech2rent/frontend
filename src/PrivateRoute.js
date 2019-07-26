import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import Auth from './Auth'
import auth0 from 'auth0-js'
import axios from 'axios'
 ///make route private and spread in the rest of the props
 const PrivateRoute =  ( {component: Component, ...rest} )  => {
  

   
  return (
    
    <div>  
   
    <Route
    
      {...rest}
      
      render={(props) => {
    
      
             //if id token and access token are in local storage then render page
        if (localStorage.getItem("id_token") && localStorage.getItem("access_token")) {
          return <Component {...props}/>;
          // console.log("testing")

        } else { /// if not then redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
    </div>); 
};

const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps,{})(PrivateRoute);
// export default PrivateRoute;