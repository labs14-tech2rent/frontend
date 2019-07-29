import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Login = props => {
  const auth = useSelector(store => store.submit.auth);
  const content = (
    <div className="App">
      <h1>Tech2Rent</h1>
      <button onClick={auth.login}>Login/Register</button>
    </div>
  );
  return content;
};

// grabbing login and signup from actions file... mapping the state to the props
export default Login;
