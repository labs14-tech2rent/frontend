import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Main} />
      </header>
    </div>
  );
}

export default App;
