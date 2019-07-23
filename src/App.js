import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Callback from './components/HomePage/Callback';
import Login from './components/Login/Login';
//import auth from './Auth'
import {connect} from 'react-redux';
class App extends React.Component {
	render() {
	return (
		<div className='App'>
			<header className='App-header'>
				
				<Route exact path='/home' component={this.props.auth.isAuthenticated() ? Login : HomePage} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/callback' component={Callback} />
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
