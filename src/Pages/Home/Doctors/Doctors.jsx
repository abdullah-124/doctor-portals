import {
  Box,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://pure-reef-05928.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return doctors.length === 0 ? (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  ) : (
    <Container>
      <h4>Our Special Doctors{doctors.length}</h4>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Doctors;
