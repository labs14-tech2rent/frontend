import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registered } from './actions/registered';

const RunRegister = props => {
  console.log('OSjfAJFLASJFLJFLSJFL');
  useDispatch(registered());
};

export default RunRegister;
