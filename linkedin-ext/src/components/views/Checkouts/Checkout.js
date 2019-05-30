import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import reducers from '../../../reducers';

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        ${'' /* border: 1px solid red; */}
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 40px;
        padding: 0 40px;
        text-align: center;
        max-width: 1100px;
    }
`;

const H1 = styled.h1`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    font-weight: 400;
    margin: 20px;
    font-size: 26px;
    text-align: center;
    ${'' /* padding: 0 40px; */}
`;

const PlansWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    max-width: 90%;

    @media (max-width: 850px) {
        flex-direction: column;
    }

    h3 {
        font-size: 26px;
        color: #273e49;
    }
`;

const FreePlan = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    margin-right: 10px;
    width: 350px;
    height: 350px;

    @media (max-width: 850px) {
        margin-right: 0;
        width: 325px;
    }
`;

const FreePrice = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    background-color: #273e49;
    padding: 10px 0;
    
    p {
        ${'' /* border: 1px solid red; */}
        margin: 0;
        color: white
        font-weight: 600;
        font-size: 14px;
    }
`;


const PremiumPlan = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.2);
    background-color: white;
    margin-left: 10px;
    width: 350px;
    height: 350px;

    @media (max-width: 850px) {
        margin-left: 0;
        margin-top: 30px;
        width: 325px;
    }

    h3 {
        color: #007096;
    }
`;

const PremiumPrice = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    background-color: #007096;
    padding: 10px 0;
    
    p {
        ${'' /* border: 1px solid red; */}
        margin: 0;
        color: white
        font-weight: 600;
        font-size: 14px;
    }
`;

const Amount = styled.div`
    font-size: 24px;
    color: white;
    font-weight: 600;
`;

const Features = styled.div`
    ${'' /* border: 1px solid red; */}

`;

const PremiumFeature = styled.p`
    color: #007096;
    font-weight: bold;
`;

const FormExplanation = styled.p`
    ${'' /* border: 1px solid red; */}
    color: #848484;
    font-size: 14px;
    margin: 20px 0 120px 0;
`;

const Purchase = styled.button`
    overflow: hidden; 
    display: inline-block; 
    background: linear-gradient(rgb(40, 160, 229), rgb(1, 94, 148)); 
    border: 0px; 
    padding: 1px; 
    text-decoration: none; 
    border-radius: 5px; 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px; 
    cursor: pointer; 
    visibility: visible; 
    user-select: none;
`

const Span = styled.span`
    background-image: linear-gradient(rgb(125, 197, 238), rgb(0, 140, 221) 85%, rgb(48, 162, 228)); 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
    font-size: 14px; position: relative; 
    padding: 0px 12px; 
    display: block; 
    height: 30px; 
    line-height: 30px; 
    color: rgb(255, 255, 255); 
    font-weight: bold; 
    box-shadow: rgba(255, 255, 255, 0.25) 0px 1px 0px inset; 
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px; 
    border-radius: 4px;

`
// ****************************************************

toast.configure()

class Checkout extends Component {
    
    state = {
        name: 'Premium',
        price: 9.99,
        description: 'Full feature on the extension'
    }

    handleToken = async (token) => {
        const product = this.state
        const response = await axios.post(
            'https://linkedinextension.herokuapp.com/api/payment/checkout', {token, product}
        )
        console.log('token',token)
        const { status } = response.data
        console.log('Response:', response.data)

        if(status === 'success') {
            await axios.post('https://linkedinextension.herokuapp.com/api/users/upgrade', {user_id: window.localStorage.getItem("user_id")})
            toast('Payment Sent. You are now a premium user!', {type: 'success'})
            
        } else {
            toast('Something Went Wrong, Please try again later', {type: 'error'})
        }
    }

    toLogin = () => {
        this.props.history.push('/login')
    }

    render() {

        let login = null;

        if (localStorage.getItem('id')) {
            login = (
                <StripeCheckout 
                            stripeKey='pk_test_Uj7Gbd2xnQex3TDz8Z1haSDX0007YMEyvm'
                            token={this.handleToken}
                            amount={this.state.price * 100}
                            name='Premium'
                />
            )
        } else {
            login = (
                <Purchase onClick={this.toLogin}><Span>Login To Purchase</Span></Purchase>
            )
        }

        return(
            <PageWrapper>
                <H1>Start scraping LinkedIn profiles for Free</H1>
                <h2>We offer two different plans: a free and a paid version. The free version has all the features of the paid version except the number of scraping *templates you can create and save. The free plan lets you create a single template while the paid version lets you create an unlimited amount of templates for a one time payment of $9.99.</h2>
                <PlansWrapper>
                    <FreePlan>
                    <h3>Starter</h3>
                        <FreePrice>
                            <Amount>FREE</Amount>
                            <p>No credit card needed.</p>
                        </FreePrice>
                        <Features>
                            <p>Access to scraping tool</p>
                            <p>Unlimited scraping</p>
                            <p>Create 1 scraping template</p>
                        </Features>
                    </FreePlan>
                    <PremiumPlan>
                        <h3>{this.state.name}</h3>
                        <PremiumPrice>
                            <Amount>{this.state.price} USD</Amount>
                            <p>One time payment.</p>
                        </PremiumPrice>
                        <Features>
                            <p>Access to scraping tool</p>
                            <p>Unlimited scraping</p>
                            <PremiumFeature>Create unlimited scraping templates</PremiumFeature>
                        </Features>
                        {login}
                    </PremiumPlan>
                </PlansWrapper>
                <FormExplanation>
                    <p>*Template = a grouping of profile fields to scrape</p>
                </FormExplanation>
            </PageWrapper>
        )
    }
}

export default Checkout