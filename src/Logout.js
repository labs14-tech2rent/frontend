// Script uses auth0.js. See Remarks for details.
import auth0 from 'auth0-js';
export default () => {
    var webAuth = new auth0.WebAuth({
        domain:       'dev-gco3gwsp.auth0.com',
        clientID:     'kFpGm0tbpc2lUax1Il5S0vS54opwh3iv'
      });
      
      webAuth.logout({
        returnTo: 'http://localhost:3000/v2/logout',
        client_id: 'kFpGm0tbpc2lUax1Il5S0vS54opwh3iv'
      });
}