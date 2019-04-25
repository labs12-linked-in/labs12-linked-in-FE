import auth0 from 'auth0-js';


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-8cy-0eia.auth0.com',
        clientID: 'IS47HQ6p16NVC8svRM1xVwDu6zpsU1m1',
        redirectUri: 'http://localhost:3000/#/callback',
        responseType: 'token id_token',
        scope: 'openid'
    })

    login() {
        this.auth0.authorize();
    }
}