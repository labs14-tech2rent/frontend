/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';

import './homepage.scss';

const Main = props => {
  const userId = { auth0_user_id: localStorage.getItem('user_id') };
  const user = useSelector(store => store.getUser.user);
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    window.location.pathname = "/"
  };

  useEffect(() => {
    dispatch(actions.getUserId(userId));
  }, []);
  return (
    <div>
      <h1>Welcome to a Protected Page!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Main;
