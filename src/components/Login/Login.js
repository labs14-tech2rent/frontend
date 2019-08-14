/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {login, signUp, reset} from '../../actions';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const Login = props => {

  const [filter, setFilter] = useState('')
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://labstech2rentstaging.herokuapp.com/api/items',
      );
      const filtered = result.data.filter(item => item.name.toLowerCase().includes(filter));
      console.log(filtered);
      setItems(filtered);

    };

    fetchData();
  }, [filter]);

  function handleKeyPress(e) {
    if(e.key === 'Enter'){
      
      // props.history.push({
      //   pathname: '/view-listing',
      //   state: { items: items }
      // })
      
    }
  }

  const auth = useSelector(store => store.submit.auth);
  const content = ( //  conditionally renders content based on login form or sign up form state.
    <div className="App mainContent">
      <div className="section-1">
      <h2>Welcome back to the community.</h2>
        <button onClick={auth.login} className="login-button">
          Log in
        </button>
      </div>
      <div className="section-2">
        <p>
          By signing up, I agree to Tech2Rent{' '}
          <a className="privtermslink" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="privtermslink" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
  return content;
};

export default Login;
