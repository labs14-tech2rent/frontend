import React from 'react'
import axios from 'axios'
import './profile.scss'

//import Random from  '../../RandomUserApi'
class Profile extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            picture: '',
        }
    }
    componentDidMount() {
       axios
        .get("https://randomuser.me/api/?results=4&inc=name,picture,email,registered,location")
        .then( res => this.setState({user: res.data.results[0]}))
       
    }
    
    render() {
        return (
            <div>
                <div>
                 
                    <img src={this.state.user.picture.large} alt=""/>
                    { this.state.user.name &&
                    <p>{this.state.user.name.first.charAt(0).toUpperCase() +
                        this.state.user.name.first.slice(1) + ' ' + 
                        this.state.user.name.last.charAt(0).toUpperCase() +
                        this.state.user.name.last.slice(1) + ' '
                    }</p> }
                    <p>Owner of Tech: Located in Queens, NY</p> 
                    <p> + Add Product</p>
                </div>
            </div>
        )
    }
   
}

export default Profile