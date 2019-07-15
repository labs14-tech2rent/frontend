import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
//import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const AppWithRouter = withRouter(App);
ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
