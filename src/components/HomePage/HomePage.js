import React from 'react';
import {getData, logOut} from '../../actions'
import {connect} from 'react-redux';
class Main extends React.Component {
   
  componentDidMount() {
	this.props.getData()
  }
	render() {

	return (
		<div>
			<h1>Hello World</h1>
		</div>
	); 
}
};

const mapStateToProps = (state) => ({
    credentials: state.credentials,
    users: state.users,
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps,{getData, logOut})(Main)
