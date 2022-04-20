import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appoinmentBg = {
  background: `url(${bg})`,
  marginTop: "100px",
  backgroundPosition: "center",
  backgroundColor: "rgba(45, 58, 74, .6)",
  backgroundBlendMode: "darken, luminosity",
  backgroundRepeat: 'no-repeat'
};

const AppoinmentBanner = () => {
  return (
    <>
      <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", marginTop: "-180px" }}
              src={doctor}
              alt="Doctor banner"
            />
          </Grid>
          <Grid
            sx={{ display: "flex", alignItems: "center", textAlign: "left" }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#11d0da", margin: "30px 0" }}
              >
                Appoinment
              </Typography>
              <Typography style={{ color: "white" }} variant="h2">
                Make An Appoinment Today
              </Typography>
              <Typography
                sx={{
                  color: "#ccc",
                  margin: "20px 0",
                  fontWeight: "200",
                  fontsize: "12",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                quam?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione, deserunt?
              </Typography>
              <Button sx={{ backgroundColor: "#11d0da" }} variant="contained">
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AppoinmentBanner;
