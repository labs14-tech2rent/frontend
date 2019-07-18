import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Route exact path='/home' component={HomePage} />
				<Route exact path='/login' component={Login} />
			</header>
		</div>
	);
}


export default App;
