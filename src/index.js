import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Auth0Provider } from "./react-auth0-wrapper";
import {BrowserRouter as Router,  withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import HomePage from './components/HomePage/HomePage'
import Register from './components/Register/Register'
import {rootReducer} from './reducers';
import { Route } from 'react-router-dom';
import config from './auth_config.json'
import checkUser from './checkUser'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    composeEnhancers(
        applyMiddleware(thunk,logger)
    ));
    
    
		// let MainComponent = "";
		// switch(checkUser()) {
		// 	case true :
		// 		MainComponent = window.location.replace('http://localhost:3000/register')
		// 		break;

		// 	case false:
		// 		MainComponent =  window.location.replace('http://localhost:3000/register')
		// 		break;
			
		// 	// default: 
		// 	// MainComponent =  window.location.replace('http://localhost:3000/')
        // } 
        
        
        const onRedirectCallback = appState => {
            window.history.replaceState(
              {},
              document.title,
              appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
            );
          };
          

const AppWithRouter = withRouter(App);
ReactDOM.render(
    <Auth0Provider 
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
    <Provider store={store} >
    <Router >
    <AppWithRouter />
    </Router>
    </Provider>
    </Auth0Provider>
    , document.getElementById('root'));
    

    
    

