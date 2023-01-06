import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MN87ySGo3lHFbtsqrc85fpl7rgtnZI1ytPJHHmB5SXQmWWue0CIPybNCn2kWJ8Ofsn5swTvyBbvQqcH903VEyAR00WODOkRT7');

const ProcessPayment = () => {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '{{CLIENT_SECRET}}',
//   };

  return (
    <Elements stripe={stripePromise}>
      <CardElement options={{
       style: {
        base: {
           fontSize: '16px',
           color: '#424770',
           '::placeholder': {
            color: 'aab7c4'
           }
        },
        invalid: {
            color: '#9e2146'  
        }
       }
      }}/>
    </Elements>
  );
};

export default ProcessPayment;