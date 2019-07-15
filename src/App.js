import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Route exact path='/' component={HomePage} />
			</header>
		</div>
	);
}

export default App;
