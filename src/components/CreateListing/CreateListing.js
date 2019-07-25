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
    location: '',
    category: '',
    description: '',
    payment_type: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {};

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        name:{' '}
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
        {/* Picture:{' '}
        <input
          name="picture"
          value={this.state.picture}
          type="file"
          onChange={this.handleChange}
        /> */}
        <Uploader
          id="file"
          name="picture"
          onChange={this.handleChange}
          onUploadComplete={info => console.log('Upload completed:', info)}
        />
        Location:{' '}
        <input
          name="location"
          value={this.state.location}
          type="text"
          onChange={this.handleChange}
        />
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
