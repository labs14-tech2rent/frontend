import React from 'react'
import axios from 'axios'
import './profile.scss'
import Rating from './Rating'
//import Random from  '../../RandomUserApi'
class Profile extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            picture: '',
            location: ''
        }
    }
    componentDidMount() {
       axios
        .get("https://randomuser.me/api/?nat=us&?results=1&inc=name,picture,email,registered,location")
        .then( res => this.setState({user: res.data.results[0]}))
       
    }
    
    render() {
        return (
            <div className="profile-content">
                <div className="user-info">
                 {console.log(this.state.user.location.city)}
                    <img src={this.state.user.picture.large} alt=""/>
                    { this.state.user.name &&
                    <p style={{fontWeight: 'bold'}}>{this.state.user.name.first.charAt(0).toUpperCase() +
                        this.state.user.name.first.slice(1) + ' ' + 
                        this.state.user.name.last.charAt(0).toUpperCase() +
                        this.state.user.name.last.slice(1) + ' '
                    }</p> }
                    {this.state.user.location && 
                    <p>Owner of Tech: Located in {
                        this.state.user.location.city.charAt(0).toUpperCase() +
                        this.state.user.location.city.slice(1) + ', ' + 
                        this.state.user.location.state.charAt(0).toUpperCase() +
                        this.state.user.location.state.slice(1) + ' '
                    }</p>  }
                    <p>Freelance Photographer</p>
                    <br/>
                    <p> + Add Product</p>
                    <Rating />
                </div>

                <div className="products">
                    <h3>Prod 1</h3>
                    <h3>Prod 2</h3>
                    <h3>Prod 3</h3>
                </div>
            </div>
        )
    }
   
}

export default Profile