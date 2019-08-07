import axios from 'axios';

async function checkUser() {
  const users = [];

  await axios
    .get('https://labstech2rentstaging.herokuapp.com/api/users/userIDS')

    .then(res => {
      // filter through data and pull out all the auth0_user_id values from their objects
      res.data.filter(res => {
        // grab all the above values and push them inside users array
        users.push(res.auth0_user_id);
      });
    })
    .catch(err => err);

  return users.includes(localStorage.getItem('user_id'));
}

export default checkUser;
