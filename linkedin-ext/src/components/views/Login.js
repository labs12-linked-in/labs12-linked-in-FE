import React, { Component } from "react";
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";
const deployedApp = "https://linkedinextension.netlify.com";
const localApp = "http://localhost:3000";

class Login extends Component {
  componentDidMount() {
    console.log("mounted");
    const oauthScript = document.createElement("script");
    oauthScript.src =
      "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
    console.log(this.props);
  }

  handleClick(e) {
    // Prevents page reload
    e.preventDefault();
    console.log(e);

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize("Yq_ObrXeRonGLhBwvd3nXD2oFlA");

    // Popup and ask for authorization
    window.OAuth.popup("linkedin2").done(function(token) {
      axios.post(`${deployedDb}/api/users/user`, token).then(response => {
        console.log(response, "res");
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("firstName", response.data.first_name);
        localStorage.setItem("lastName", response.data.last_name);
        window.OAuth.redirect("linkedin2", `${deployedApp}/forms`);
      });
    });
  }

  render() {
    console.log(this.props);

    return (
      <a href="" onClick={this.handleClick}>
        Sign in with LinkedIn
      </a>
    );
  }
}

export default Login;
