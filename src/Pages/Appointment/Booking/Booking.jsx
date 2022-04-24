import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = (props) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space, price } = props.booking;
  const setBookingSuccess = props.setBookingSuccess
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 3 }} elevation={3}>
          <Typography variant="h5" sx={{ color: "#11d0da", fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption">Available space: {space}</Typography>
          <Typography variant="h5">Price: ${price}</Typography>
          <br />
          <Button
            onClick={handleBookingOpen}
            sx={{ border: "1px solid #11d0da", color: "#11d0ff" }}
            variant="outlined"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={props.booking}
        date={props.date}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Booking;
