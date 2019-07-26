/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './createListing.scss';

import SubCategory from './SubCategory';
import StateDropDown from './StateDropDown';
import Uploader from '../Uploader/Uploader';
// should have an option for if they want price to be per day of weekly
// location should be expanded more to have city, state, and zipcode
// going to discussing adding more options to item table.
class CreateListing extends Component {
  state = {
    name: '',
    picture: '',
    price: '',
    city: '',
    state: '',
    zipcode: '',
    category: '',
    subcategory: '',
    description: '',
    payment_type: '',
  };

  // handles the changes for every input, radio and dropdown field
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handles the upload info for uploadcare uploader
  uploadImage = info => {
    console.log(info);
    this.setState({
      pictures: info.uuid,
    });
  };

  // still waiting on endpoint
  handleSubmit = () => {};

  render() {
    console.log(this.state);
    return (
      <div>
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
          {/* The uploadcare uploader */}
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
            state:
            <StateDropDown handleChange={this.handleChange} />
            zipcode:{' '}
            <input
              name="zipcode"
              value={this.state.zipcode}
              type="number"
              onChange={this.handleChange}
            />
          </div>
          Category:{' '}
          <select
            name="category"
            value={this.state.category}
            type="text"
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option>Mounts</option>
            <option>Cameras</option>
            <option>Lenses</option>
            <option>Lighting</option>
            <option>Support Equipment</option>
            <option>Accessories</option>
          </select>
          {/* very long file so I refactored it as its own component in ./SubCategory.js */}
          <SubCategory
            category={this.state.category}
            handleChange={this.handleChange}
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
      </div>
    );
  }
}
export default CreateListing;
