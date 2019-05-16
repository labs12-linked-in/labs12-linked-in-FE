import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  background-color: #dedfe0;
`;

const NavDiv = styled.div`
  background-color: #24292d;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  img {
      width: 50px;
      height: 50px;
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
    margin-right: 10px;
    text-decoration: none;
    &:hover {
      color: #9f86ff;
    }
  }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    margin-left: 5px;
`;

const Right = styled.div`
    
`;

const navBar = props => (
  <UserWrapper>
    <NavDiv>
        <Left>
            {/* <img src={logoWhite} alt="GitHub Users logo"/> */}
            <h1>LinkedIn Chrome Extension</h1>
        </Left>
        <Right>
            <Link to="/forms"> Forms </Link>
            {/* <Link to="/dept">Departments</Link> */}
            <Link to="/">Logout</Link>
        </Right>
    </NavDiv>
  </UserWrapper>
)



export default navBar