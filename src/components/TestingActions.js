import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItems } from '../actions/Items/CRUD/getItems';
import { getUserItems } from '../actions/Items/CRUD/getUserItems';
import { getItemById } from '../actions/Items/CRUD/getItemById';

const TestingActions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getUserItems(27));
    dispatch(getItemById(1));
  });

  return <div>Hello</div>;
};

export default TestingActions;
