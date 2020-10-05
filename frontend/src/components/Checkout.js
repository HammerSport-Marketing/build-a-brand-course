import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_fQMbieMo9lIO0XOD3Os9VXE8");
export default ({cart}) => (
     <div>
        <Elements stripe={stripePromise}>
              <CheckoutForm cart={cart} />
        </Elements>
   </div>
)
 
