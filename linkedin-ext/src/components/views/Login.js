
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

class Login extends Component {
  
  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src =
    "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
    
    document.body.appendChild(oauthScript);
  }
  
  loggedin() {
    if (localStorage.getItem('user_id')) {
      return this.props.history.push('/forms')
    } else {
      return this.props.history.push('/')
    }
  }
  
  handleClick(e, loggedin) {
    // Prevents page reload
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
        localStorage.setItem('user_id', response.data.user_id);
      });

    });
  }
  
  render() {
    return (
      <a href="" onClick={() => this.handleClick(this.loggedin)}>
        Sign in with LinkedIn
      </a>
    );
  }
}

export default Login;