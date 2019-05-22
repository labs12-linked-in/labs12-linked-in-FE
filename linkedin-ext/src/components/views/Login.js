import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar/NavBar.js";
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 90vh;
`;

const SignInButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const deployedDb = "https://linkedinextension.herokuapp.com";
// const localDb = "http://localhost:9001";
const deployedApp = "https://linkedinextension.netlify.com";
const localApp = "http://localhost:3000";

class Login extends Component {
  componentDidMount() {
    // console.log("mounted");
    const oauthScript = document.createElement("script");
    oauthScript.src =
      "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
    // console.log(this.props);
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
        localStorage.setItem("id", response.data.userInfo.id);
        localStorage.setItem("firstName", response.data.userInfo.first_name);
        localStorage.setItem("lastName", response.data.userInfo.last_name);
        localStorage.setItem("token", response.data.token);
        window.OAuth.redirect("linkedin2", `${localApp}/forms`);
      });
    });
  }

  render() {
    return (
      <PageWrapper>
        <SignInButton>
          <a href="">
            <img
              src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
              alt="LinkedIn Sign In button"
              onClick={this.handleClick}
            />
          </a>
        </SignInButton>
      </PageWrapper>
    );
  }
}

export default Login;
