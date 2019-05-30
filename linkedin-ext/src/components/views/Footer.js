import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoBlue from '../../images/logoBlue.svg';

const FooterWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    position: absolute;
    bottom:0;
    width: 100%;
`;

const FooterContent = styled.div`
    ${'' /* border: 1px solid red; */}
    background-color: #283e49;
    width: 100%;
    color: white;
    display: flex;

    @media (max-width: 850px) {
        justify-content: center;
    }
  
  img {
      width: 30px;
      height: 40px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    color: white;
  }
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
            <Copyright>
                <img src={logoBlue} alt="LinkedIn Chrome Extension logo"/>
                <p>LinkedIn Chrome Extension © 2019 </p>
            </Copyright>
        </FooterContent>
    </FooterWrapper>
)
  
export default footer;