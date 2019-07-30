import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as actions from '../../actions';

import './homepage.scss';

const Main = props => {
  const userId = { auth0_user_id: localStorage.getItem('user_id') };
  const user = useSelector(store => store.getUser.user, shallowEqual);
  const dispatch = useDispatch();

  useCallback(() => dispatch(actions.getUserId(userId)), [dispatch, userId]);

  console.log(user);

  useEffect(actions.getUserId(userId));
  const logout = e => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    props.history.push('/login');
  };

  return (
    <div>
      <h1>Welcome to a Protected Page!</h1>
      {props.users
        ? props.users.map(user => (
            // map over the state of users
            <h3>{user.auth0_user_id}</h3>
          ))
        : null}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Main;
