import auth0 from 'auth0-js'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-gco3gwsp.auth0.com",
        clientID: "kFpGm0tbpc2lUax1Il5S0vS54opwh3iv",
        redirectUri: "http://localhost:3000/home",
        responseType: "token id_token",
        scope: "openid"
    })

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize()
    }
}