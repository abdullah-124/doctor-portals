import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
    borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
  const {user} = useAuth()

  const { name, time, price } = booking;
  const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
  const [bookingInfo, setBookingInfo]  = useState(initialInfo)
  // console.log(user.displayName)
  const handleOnBlur = (e) =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo}
    newInfo[field] = value;
    setBookingInfo(newInfo);
    console.log(newInfo)

  }
    const handleBookingSubmit = (e) =>{
        alert('submitting')
        
        //collect data
        const appointment = {
          ...bookingInfo,
          time,
          serviceName: name,
          price: price,
          date: date.toLocaleDateString()
        }
        //send to the server
        // console.log(appointment)
        fetch('https://pure-reef-05928.herokuapp.com/appointments',{
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            setBookingSuccess(true)
            handleBookingClose()
          }
        })

        
        e.preventDefault()
    }
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography  variant="caption">
          Price: ${price}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
            sx={{width: '90%', m: 1}}
              label="Time"
              id="outlined-size-small"
              defaultValue={time}
              disabled
              size="small"
            />
            <TextField
            sx={{width: '90%', m: 1}}
              label="Name"
              name="patientName"
              id="outlined-size-small"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
            sx={{width: '90%', m: 1}}
              label="Phone"
              name='phone'
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue='Your Phone Number'
              size="small"
            />
            <TextField
            sx={{width: '90%', m: 1}}
              label="Email"
              name="email"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue={user.email? user.email : 'Enter Email'}
              size="small"
            />
            <TextField
            sx={{width: '90%', m: 1}}
              label="Time"
              disabled
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button  type="submit" variant="contained" sx={{background: '#11d0da'}}>Send</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
