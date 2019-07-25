import React, { Component } from 'react';
import Uploader from '../Uploader/Uploader';
import 'bootstrap/dist/css/bootstrap.css';
import './createListing.scss';
// should have an option for if they want price to be per day of weekly
// location should be expanded more to have city, state, and zipcode
class CreateListing extends Component {
  state = {
    name: '',
    picture: '',
    price: '',
    city: '',
    state: '',
    zipcode: '',
    category: '',
    description: '',
    payment_type: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  uploadImage = info => {
    console.log(info);
    this.setState({
      pictures: info.uuid,
    });
  };

  handleSubmit = e => {};

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        title:{' '}
        <input
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}
        />
        price:{' '}
        <input
          name="price"
          value={this.state.price}
          type="number"
          onChange={this.handleChange}
        />
        <br />
        <Uploader
          id="picture"
          onUploadComplete={info => this.uploadImage(info)}
        />
        <br />
        <div>
          city:{' '}
          <input
            name="city"
            value={this.state.city}
            type="text"
            onChange={this.handleChange}
          />
          state:{' '}
          <select name="state" onChange={this.handleChange}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          zipcode:{' '}
          <input
            name="zipcode"
            value={this.state.zipcode}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        Category:{' '}
        <input
          name="category"
          value={this.state.category}
          type="text"
          onChange={this.handleChange}
        />
        Description:{' '}
        <input
          name="description"
          value={this.state.description}
          type="text"
          onChange={this.handleChange}
        />
        Payment Preference:
        <div className="payment-options">
          <div className="option">
            <input
              name="payment_type"
              value="cash"
              type="radio"
              onChange={this.handleChange}
              checked={this.state.payment_type === 'cash'}
            />{' '}
            Cash
          </div>
          <div className="option">
            <input
              name="payment_type"
              value="card"
              type="radio"
              onChange={this.handleChange}
              checked={this.state.payment_type === 'card'}
            />{' '}
            Card
          </div>
          <div className="option">
            <input
              name="payment_type"
              value="both"
              type="radio"
              onChange={this.handleChange}
              checked={this.state.payment_type === 'both'}
            />{' '}
            Both
          </div>
        </div>
        <button>List Item</button>
      </form>
    );
  }
}
export default CreateListing;
