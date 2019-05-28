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
        padding: 0 20px;
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
`;

const PlansWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    max-width: 90%;

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

    h3 {
        color: #ff6d66;
    }
`;

const PremiumPrice = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    background-color: #ff6d66;
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
    color: #ff6d66;
    font-weight: bold;
`;

const FormExplanation = styled.p`
    ${'' /* border: 1px solid red; */}
    color: #848484;
    font-size: 14px;
    margin: 30px 0 50px 0;
`;
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

    render() {

        return(
            <PageWrapper>
                <H1>Start scraping LinkedIn profiles for Free</H1>
                <h2>We offer two different plans: a free and a paid version. The free version has all the features of the paid version except the number of *forms you can create and save. The free plan lets you create a single form while the paid version lets you create an unlimited amount of forms for a one time payment of $9.99.</h2>
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
                            <p>Create 1 form</p>
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
                            <PremiumFeature>Create unlimited forms</PremiumFeature>
                        </Features>
                        <StripeCheckout 
                            stripeKey='pk_test_Uj7Gbd2xnQex3TDz8Z1haSDX0007YMEyvm'
                            token={this.handleToken}
                            amount={this.state.price * 100}
                            name='Premium'
                        />
                    </PremiumPlan>
                </PlansWrapper>
                <FormExplanation>
                    <p>*Form = a grouping of profile fields to scrape</p>
                </FormExplanation>
            </PageWrapper>
        )
    }
}

export default Checkout