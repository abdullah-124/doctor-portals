import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import React from "react";
const doctorCard = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "1px 2px 5px #555",
}
const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={doctorCard}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="p">
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 150, width: 130 }}
          image={`data:image/*;base64,${image}`}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default Doctor;
