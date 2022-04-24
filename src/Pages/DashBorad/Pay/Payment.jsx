import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackOutForm from "./CheackOutForm";
import { Container } from '@mui/material';

const stripePromise = loadStripe(
  "pk_test_51KqbvtAneS8dfpAzXWh239rJRe1nP5NF5sRs7XA2dk7Ag8p58W48sJqgTbLx1LnKLBUKcW5Y0HIjKiV6vYxdUVQl00ALY1CTQz"
);
const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`https://pure-reef-05928.herokuapp.com/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
      });
  }, [id]);
  return (
    <Container>
      <div style={{color: '#555', margin: '40px 20px', border: '1px solid #ccc'}}>
        orderId : {id}
        <h4>{appointment.serviceName}</h4>
        <p>Cost: ${appointment.price} </p>
      </div>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheackOutForm appointment={appointment} />
        </Elements>
      )}
    </Container>
  );
};

export default Payment;
