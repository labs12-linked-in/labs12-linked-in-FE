import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoBlue from '../../images/logoBlue.svg';

const NavWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #283e48;
`;

const NavDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  background-color: #283e49;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  
  img {
      width: 30px;
      height: 40px;
  }

  h1 {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
  }
  
  a {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
    transition: all 0.1s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #0284b1;
    }
  }

  div {
    color: white;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  margin-left: 20px;
`;

const Right = styled.div`
  margin-right: 20px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let link

if (localStorage.getItem("id")) {
  link = <Link to="/">Logout</Link>
} else {
  link = <Link to="/login">Login</Link>
}

const navBar = props => (
  <NavWrapper>
    <NavDiv>
        <Left>
            <img src={logoBlue} alt="LinkedIn Chrome Extension logo"/>
            <h1>LinkedIn Chrome Extension</h1>
        </Left>
        <Right>
            <Link to="/forms">Forms</Link>
            <div>|</div> 
            {link}
            
        </Right>
    </NavDiv>
  </NavWrapper>
)

export default navBar;