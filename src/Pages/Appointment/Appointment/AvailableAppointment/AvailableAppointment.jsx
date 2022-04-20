import { Alert, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "../../Booking/Booking";

//fake data
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9:00AM",
    space: "10",
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "9:00AM - 11:00AM",
    space: "8",
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "11:00AM - 1:00PM",
    space: "2",
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "2:00PM - 4:00PM",
    space: "6",
  },
  {
    id: 5,
    name: "Cracked teeth.",
    time: "4:00PM - 6:00PM",
    space: "5",
  },
  {
    id: 6,
    name: "Crowns",
    time: "7:00PM - 9:00PM",
    space: "4",
  },
];

const AvailableAppointment = ({ date, setDate }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <Container>
      <h2 style={{ color: "#11d0da" }}>
        Available Appointment On {date.toDateString()}
      </h2>
      {bookingSuccess && <Alert severity="success">Appointment added successful</Alert>}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {bookings.map((booking) => (
          <Booking key={booking.id} setBookingSuccess={setBookingSuccess} booking={booking} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
