import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoBlue from '../../images/logoBlue.svg';

const FooterWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #283e48;
    align-items: center;
`;

const FooterContent = styled.div`
    ${'' /* border: 1px solid red; */}
    background-color: #283e49;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    width: 100%;
    color: white;
    margin-top: 20px;
  
  img {
      width: 30px;
      height: 40px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const Links = styled.div`
    ${'' /* border: 1px solid red; */}
    margin: 20px 20px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`;

const Contact = styled.div`

`;
const Features = styled.div`

`;
const Account = styled.div`

`;
const Company = styled.div`

`;

const Copyright = styled.div`
    ${'' /* border: 1px solid red; */}
    margin: 20px 20px;
    display: flex;
    align-items: center;
`;

const footer = props => (
    <FooterWrapper>
        <FooterContent>
            <Links>
                <Contact>
                    Contact
                </Contact>
                <Features>
                    Features
                </Features>
                <Account>
                    Account
                </Account>
                <Company>
                    Company
                </Company>
            </Links>
            <Copyright>
                <img src={logoBlue} alt="LinkedIn Chrome Extension logo"/>
                <p>LinkedIn Chrome Extension © 2019 </p>
            </Copyright>
        </FooterContent>
    </FooterWrapper>
)
  
export default footer;