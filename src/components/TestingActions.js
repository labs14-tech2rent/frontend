import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getListings } from '../actions/Listings/getListings';

const TestingActions = () => {
  const dispatch = useDispatch();
  const hello = 'hi';

  useEffect(() => {
    dispatch(getListings);
  });

  return <div>Hello</div>;
};

export default TestingActions;
