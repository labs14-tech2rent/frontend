import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Callback from './components/HomePage/Callback';
import Login from './components/Login/Login';
import PrivateRoute from "./PrivateRoute";
import Profile from './components/Owner/Profile'
//import auth from './Auth'
import {connect} from 'react-redux';
class App extends React.Component {
	render() {
		let mainComponent = "";
		switch(this.props.location.pathname) {
			case "":
				mainComponent = <Route exact path='/login' {...this.props} component={Login} />
				break;

			case "/callback":
				mainComponent = <Route exact path='/callback' component={Callback } />  
				break;
	
			case "/home":
					mainComponent = <PrivateRoute exact path="/home" component={HomePage} />
					break;
			case "/profile":
				mainComponent = <Route exact path="/profile" component={Profile} />
				break;

			default: 
			mainComponent = <Route exact path='/login' component={Login} />	
		}
		
	return (
		<div className='App'>
			<header className='App-header'>
				{mainComponent}
			</header>
		</div>
	);
	}
}


const mapStateToProps = ({auth}) => ({
	
	auth
  
  });
  // grabbing login and signup from actions file... mapping the state to the props
  export default connect(mapStateToProps,{})(App)
