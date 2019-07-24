import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

 ///make route private and spread in the rest of the props
 const PrivateRoute =  ( {component: Component, ...rest} )  => {
  return (
    <div>  
   
    <Route
      {...rest}
      render={(props) => {

        if (localStorage.getItem("id_token") && localStorage.getItem("access_token")) {
          return <Component {...props}/>;
          // console.log("testing")

        } else {
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