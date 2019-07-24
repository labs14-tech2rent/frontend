import React from 'react';
//import getData and logOut fns from actions so they can be called here
import {getData, logOut} from '../../actions'
import './homepage.scss'
//connect to reaxt redux store
import {connect} from 'react-redux';
class Main extends React.Component {
   
  componentDidMount() {
	  // grab the list of users from getData -- this is in the SUBMIT fns in the actions file
	this.props.getData()
  }

   logout = e => {
		localStorage.removeItem("access_token")
		localStorage.removeItem("id_token")
		localStorage.removeItem("expires_at")
		localStorage.removeItem('user_id')
		this.props.history.push('/login')
   }
	render() {

	return (
		
		<div>
			<h1>Welcome to a Protected Page!</h1>
				{this.props.users.map(user => 
					//map over the state of users
					<h3>{user.username}</h3>)}
					<button onClick={this.logout}>Log Out</button>
		</div> 
	); 
}
};


//set the new state of these keys to equal what it was set in the reducers file
const mapStateToProps = (state) => ({
    credentials: state.credentials,
    users: state.users,
    user: state.user,
	error: state.error,
	auth: state.auth
})

/// map over the state and set them to prop, also grab the getData fn and logOut fn so they can be referenced and called
export default connect(mapStateToProps,{getData, logOut})(Main)
