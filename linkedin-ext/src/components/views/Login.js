    
import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src =
      "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e) {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize("Yq_ObrXeRonGLhBwvd3nXD2oFlA");

    // Popup and ask for authorization
    window.OAuth.popup("linkedin2").done(function(result) {
      console.log("linkedin:", result);
      axios
        .post("https://linkedinextension.herokuapp.com/api/users/user", {
          result
        })
        .then(response => {
          console.log(response);
          localStorage.setItem('first_name', response.data.first_name)
          localStorage.setItem('last_name', response.data.last_name)
          localStorage.setItem('user_id', response.data.user_id)
        });
    });
  }

  render() {
    return (
      <a href="" onClick={this.handleClick.bind(this)}>
        {" "}
        Sign in with LinkedIn{" "}
      </a>
    );
  }
}

export default Login;