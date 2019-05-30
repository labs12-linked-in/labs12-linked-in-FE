import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import logoBlue from '../../images/logoBlue.svg';

// **************** STYLED COMPONENETS ****************
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
  
  a {
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
    transition: all 0.1s ease;
    cursor: pointer;
    text-decoration: none;
    text-transform: none;

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

  p {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
    text-transform: none;

    @media (max-width: 650px) {
        display: none;
    }
  }
`;

const Right = styled.div`
  ${'' /* border: 1px solid red; */}
  margin-right: 20px;
  min-width: 210px;;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    padding-left: 8px;
  }
`;



class NavBar extends Component {

  logout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }
  
  render() {

    let pricingLink
    let line1
    let formsLink
    let line2
    let loginLink
    if (localStorage.getItem("id")) {
      pricingLink = <Link to="/pricing">Pricing</Link>
      line1 = <div>|</div>
      formsLink = <Link to="/forms">Templates</Link>
      line2 = <div>|</div>
      loginLink = <Link to="/" onClick={this.logout} >Logout</Link>
    } else {
      pricingLink = <Link to="/pricing">Pricing</Link>
      line1 = null
      formsLink = null
      line2 = <div>|</div>
      loginLink = <Link to="/login">Login</Link>
    }

    return (
      <NavWrapper>
        <NavDiv>
            <Left>
              <Link to="/"><img src={logoBlue} alt="LinkedIn Chrome Extension logo"/></Link>
              <Link to="/"><p>LinkedIn Chrome Extension</p></Link>
            </Left>
            <Right>
              <p>{formsLink}</p>
              <p>{line1}</p>
              <p>{pricingLink}</p>
              <p>{line2}</p>
              <p>{loginLink}</p>
            </Right>
        </NavDiv>
      </NavWrapper>
    )
  }
}

export default connect(null)(NavBar);
