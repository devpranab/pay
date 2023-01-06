import React, { useMemo, useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useResponsiveFontSize from "./useResponsiveFontSize";
import "./CardForm.css";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
        console.log('[error]', error);
    } else {
        console.log('[PaymentMethod]', paymentMethod);
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Card number</label>
        <CardNumberElement options={options} />

        <label>Expiration date</label>
        <CardExpiryElement options={options} />

        <label>CVC</label>
        <CardCvcElement options={options} />

        <button className="mt-2 px-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>

    </div>
  );
};

export default SplitCardForm;
