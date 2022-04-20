import {  Card, CardContent, Grid, CardMedia, Typography } from "@mui/material";
import React from "react";

const Service = (props) => {
    const {name, description, img} = props.service
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
      <CardMedia
        component="img"
        style={{width: 'auto', height: '80px', margin: '0 auto'}}
        image={img}
        alt="Paella dish"
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color='text.secondary' variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
