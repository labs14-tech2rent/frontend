import React from 'react';
import Auth from '../../Auth';

class Callback extends React.Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
    console.log('testing callback');
  }

  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Callback;
