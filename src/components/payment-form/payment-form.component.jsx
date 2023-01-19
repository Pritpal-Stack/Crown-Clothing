import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const [isProcessingPayment, setisProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !element) return;
    try {

      setisProcessingPayment(true)

      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((resp) => resp.json());
 
      const {
        paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: element.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });
      setisProcessingPayment(false)

      if(paymentResult.error) alert("Payment Failed");
      if(paymentResult.paymentIntent.status === 'succeeded') alert("Payment Successful");
 
    } catch (error) {
      setisProcessingPayment(false)

      console.log(error);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement></CardElement>
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE.inverted}> Pay Now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
