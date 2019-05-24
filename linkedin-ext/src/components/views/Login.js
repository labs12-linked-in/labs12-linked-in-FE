import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-width: 90%
  margin: 0 auto;
`;

const Steps = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
  margin: 70px auto 0 auto;
  align-items: center;
  width: 500px;
  max-width: 90%;
`;

const Install = styled.div`
  height: 50px;
  min-width: 50px;
  background-color: #cccccc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const SignIn = styled.div`
  height: 50px;
  min-width: 50px;
  background-color: #0084b1;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const Scrape = styled.div`
  height: 50px;
  min-width: 50px;
  background-color: #cccccc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #686868;
  font-weight: bold;
`;

const Line = styled.div`
  height: 5px;
  width: 200px;
  background-color: #cccccc;
`;

const StepsText = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
  margin: 10px auto 0 auto;
  align-items: center;
  width: 530px;
  max-width: 90%;
`;

const InstallText = styled.div`
  ${'' /* border: 1px solid red; */}
  padding-left: 5px;
  color: #cccccc;
`;

const SignInText = styled.div`
  ${'' /* border: 1px solid red; */}
  padding-right: 10px;
  color: #0084b1;
`;

const ScrapeText = styled.div`
  ${'' /* border: 1px solid red; */}
  padding-right: 15px;
  color: #686868;
`;

const MainContent = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SignInButton = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;
  padding-left: 10%;
  width: 450px;

  p {
    margin: 10px 0 0 0;
    font-size: 12px;
    color: #686868;
  }
`;

const Text = styled.div`
  ${'' /* border: 1px solid red; */}
  margin: 50px 50px 0 50px;
  width: 350px;
  padding-right: 5%;

  h1 {
    margin: 0;
  }

  ul {
    ${'' /* border: 1px solid red; */}
    padding-left: 30px;

    li {
      ${'' /* border: 1px solid red; */}
      padding-top 5px;
    }
  }
`;
// ****************************************************

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";
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
        localStorage.setItem("user_id", response.data.userInfo.user_id);
        localStorage.setItem("firstName", response.data.userInfo.first_name);
        localStorage.setItem("lastName", response.data.userInfo.last_name);
        localStorage.setItem("token", response.data.token);
        window.OAuth.redirect("linkedin2", `${deployedApp}/forms`);
      });
    });
  }

  render() {
    return (
      <PageWrapper>
        <Steps>
          <Install>1</Install>
          <Line />
          <SignIn>2</SignIn>
          <Line />
          <Scrape>3</Scrape>
        </Steps>
        <StepsText>
          <InstallText>Download</InstallText>
          <SignInText>Sign in</SignInText>
          <ScrapeText>Scrape</ScrapeText>
        </StepsText>
        <MainContent>
          <SignInButton>
            <a href="">
              <img
                src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
                alt="LinkedIn Sign In button"
                onClick={this.handleClick}
              />
            </a>
            <p>LinkedIn Chrome Extension</p>
            <p>only sees your name and email.</p>
          </SignInButton>
          <Text>
            <h1>LinkedIn scraping made easy!</h1>
          </Text>
        </MainContent>
      </PageWrapper>
    );
  }
}

export default Login;
