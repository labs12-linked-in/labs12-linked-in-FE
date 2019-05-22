import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure()

class Checkout extends Component {

    state = {
        name: 'Pro Account',
        price: 10.00,
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
            toast('success! Check U are VIP Now', {type: 'success'})
            
        } else {
            toast('Something Went Wrong, Please try again later', {type: 'error'})
        }
    }

    render() {

        return(
            <div className='container'>
                <div className='product'>
                    <h1>{this.state.name}</h1>
                    <h3>On Sale ${this.state.price}</h3>
                </div>
                <StripeCheckout
                    stripeKey='pk_test_Uj7Gbd2xnQex3TDz8Z1haSDX0007YMEyvm'
                    token={this.handleToken}
                    amount={this.state.price * 100}
                    name='Pro Account'

                />
            </div>
        )
    }
}

export default Checkout