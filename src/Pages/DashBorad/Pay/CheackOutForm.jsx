import { Button, CircularProgress, Container } from "@mui/material";
import { padding } from "@mui/system"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CheackOutForm = ({ appointment }) => {
  const { price, _id, patientName } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://pure-reef-05928.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErr(error?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setErr("");
      // console.log(paymentMethod);
      setSuccess("Processing...");
      setProcessing(false);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setErr(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setErr("");
      // console.log(paymentIntent);
      setSuccess("Payment Success");
      setProcessing(false);
      //save payment status in database
      const payment = {
        amount: paymentIntent?.amount,
        transition: paymentIntent?.client_secret,
        createAt: paymentIntent?.createAt,
        last4: paymentMethod?.card?.last4      };
      console.log(payment)
      const url = `https://pure-reef-05928.herokuapp.com/appointments/${_id}`;
      fetch(url, {
        method: 'PUT', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
      .then(res=> console.log(res))
    }

    e.preventDefault();
  };
  return (
    <Container>
      <form style={{boxShadow: '1px 2px 5px #555',padding: '20px'}} onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <Button variant="outlined" color="success" type="submit" disabled={!stripe}>
            Pay ${price}
          </Button>
        )}
      </form>
      {err && <h4 style={{ color: "red" }}>{err}</h4>}
      {success && <h4 style={{ color: "green" }}>{success}</h4>}
    </Container>
  );
};

export default CheackOutForm;
