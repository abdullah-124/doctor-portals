import { Container, Typography } from "@mui/material";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

//fake data
const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi illum nihil.",
    img: fluoride,
  },
  {
    name: "Cavity Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi illum nihil.",
    img: cavity,
  },
  {
    name: "Whitening Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi illum nihil.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Container>
      <Typography sx={{fontWeight: 600, color: '#11d0da'}} variant="h6">Our Services</Typography>
      <Typography sx={{mb: 4}} variant="h4">Service We Provide</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service.name} service={service} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
