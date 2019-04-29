import React, { Component } from 'react';
import uuid from 'uuid'
import styled from 'styled-components';

import apiInfo from '../../credentials/linkedin-api-keys.json';

const { CLIENT_ID } = JSON.parse(JSON.stringify(apiInfo));

console.log(CLIENT_ID);

const BASE_LINK = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code';
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/api/auth/verifying');
const LINK = `${BASE_LINK}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;



const LoginWrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 1px 1px #C9C9C9;
  max-width: 300px;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginButton = styled.button`
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
    verifyWithLinkedIn = () => {
        const id = uuid.v4();
        window.open(`${LINK}&state=${id}&scope=r_liteprofile`);
    }

    render() {
        return (
            <LoginWrapper>
                <LoginButton onClick={this.verifyWithLinkedIn}>Login with LinkedIn</LoginButton>
            </LoginWrapper>
        )
    }
}

export default Login;
