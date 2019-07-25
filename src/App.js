import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import CreateListing from './components/CreateListing/CreateListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route path="/create-listing" component={CreateListing} />
      </header>
    </div>
  );
}

export default App;
