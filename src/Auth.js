/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js'
const LOGIN_SUCCESS_PAGE = "/home"
const LOGIN_FAILURE_PAGE = "/login"

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-gco3gwsp.auth0.com",
        clientID: "kFpGm0tbpc2lUax1Il5S0vS54opwh3iv",
        redirectUri: "http://localhost:3000/callback",
        responseType: "token id_token",
        audeince: "https://dev-gco3gwsp.auth0.com/userinfo",
        scope: "openid"
    })

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize()
    }

    handleAuthentication( ) {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime())
                localStorage.setItem("access_token", authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken)
                localStorage.setItem("expires_at", expiresAt)
                location.hash = ""
                location.pathname = LOGIN_SUCCESS_PAGE
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE
                console.log(err)
            }
        })
    }

    isAuthenticated() {
        console.log('checking auth')
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
        return new Date().getTime < expiresAt
    }
}