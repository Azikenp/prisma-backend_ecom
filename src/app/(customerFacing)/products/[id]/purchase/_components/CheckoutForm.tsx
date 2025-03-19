"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

type CheckoutFormProps = {
  product: {
    id: string;
    imagePath: string;
    name: string;
    description: string;
    priceInCents: number;
  };
  clientSecret: string;
};

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const CheckoutForm = ({ product, clientSecret }: CheckoutFormProps) => {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="flex gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
          <Image src={product.imagePath} fill alt={product.name} />
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripe}>
        <Form />
      </Elements>
    </div>
  );
};

export default CheckoutForm;

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
