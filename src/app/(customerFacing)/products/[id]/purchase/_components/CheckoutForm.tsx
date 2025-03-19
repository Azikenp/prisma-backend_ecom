"use client"

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type CheckoutFormProps = {
  product: { id: string };
  clientSecret: string;
};

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const CheckoutForm = ({ product, clientSecret }: CheckoutFormProps) => {
  return (
    <Elements options={{ clientSecret }} stripe={stripe}>
      <Form />
    </Elements>
  );
};

export default CheckoutForm;

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
