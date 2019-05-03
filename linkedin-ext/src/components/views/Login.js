import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 1px 1px #C9C9C9;
  max-width: 300px;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #0073b1;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  &:hover {
    opacity: 0.8;
  }
`;


class Login extends Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Button
            href="https://linkedinextension.herokuapp.com/api/auth/linkedin/callback" target="_blank">Login with LinkedIn </Button>
          {/* <a href="http://localhost:9001/apiauth/google/callback">   */}
          {/* < div class="g-signin2" data-onsuccess="onSignIn"></div> */}
          {/* </a> */}
        </Wrapper>
      </div>
    )
  }
}


export default Login;
