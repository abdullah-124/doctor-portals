import {  Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import ReviewCard from "./ReviewCard"

// fake data /
const reviews = [
    {
        name: 'Winson Herry',
        place: 'California',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse rerum sapiente eius, tenetur cumque adipisci. Unde vero numquam dolor nemo aperiam corporis molestiae,`,
        photo: people1
    },
    {
        name: 'Winson Herry',
        place: 'California',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse rerum sapiente eius, tenetur cumque adipisci. Unde vero numquam dolor nemo aperiam corporis molestiae,`,
        photo: people2
    },
    {
        name: 'Winson Herry',
        place: 'California',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat esse rerum sapiente eius, tenetur cumque adipisci. Unde vero numquam dolor nemo aperiam corporis molestiae,`,
        photo: people3
    }
]

const Testimonial = () => {
  return (
    <Container sx={{ textAlign: "left", my: 4 }}>
      <Typography
        sx={{ color: "#11d0da", fontWeight: "bold", fontSize: "20px" }}
      >
        Testimonial
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "400" ,textAlign: 'center' }}>
        What's Our Patients <br /> Says
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          {
              reviews.map(review => <ReviewCard key={review.photo} review={review} />)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
