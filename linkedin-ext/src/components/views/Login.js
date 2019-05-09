import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

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
    console.log("e", e);
    // console.log(this.props, "this props");
    // Prevents page reload
    console.log(" start handle click");
    e.preventDefault();
    console.log(e)
    
    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize("Yq_ObrXeRonGLhBwvd3nXD2oFlA");
    
    // Popup and ask for authorization
    window.OAuth.popup("linkedin2").done(function(token) {
      axios
        .post("https://linkedinextension.herokuapp.com/api/users/user", token)
        .then(response => {
          console.log(response, "res");
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("user_id", response.data.user_id);
          window.OAuth.redirect("linkedin2", "http://localhost:3000/forms");
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
