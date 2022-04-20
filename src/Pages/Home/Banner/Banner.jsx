import { Button, Container, Grid, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerBg = {
  marginTop: "40px",
  background: `url(${bg})`,
  backgroundPosition: "center",
  // backgroundColor: "#000",
  // backgroundBlendMode: "sharp",
  backgroundRepeat: "no-repeat",
};
const verticalCenter = {
  display: "flex",
  height: "450px",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid style={verticalCenter} container spacing={2}>
        <Grid style={{ textAlign: "left" }} item xs={12} md={5}>
          <Typography variant="h3">Your new smaile start here</Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", color: "gray", fontWeight: "100" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus fugiat, accusamus ab explicabo commodi nobis itaque
            omnis ipsam magnam hic dolor
          </Typography>
          <Button sx={{ border: "1px solid #11d0da", color: "gray", mt: 2 }}>
            Get Appoinment
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
