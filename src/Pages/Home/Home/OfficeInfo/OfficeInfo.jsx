import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import React from "react";

const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "left",
  background: "#11d0d0",
  margin: '10px',
  height: '100px',
  padding: "10px",
  color: "#fff",
};
const OfficeInfo = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Box style={flex} >
              <WatchLaterOutlinedIcon
                sx={{ fontSize: "80px", px: 2 }}
              />
              <Box>
                <Typography>Opening Hours</Typography>
                <Typography sx={{fontSize: '12px'}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, quia.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box sx={flex} style={{background: '#3A4256'}}>
              <LocationOnIcon
                sx={{ fontSize: "80px", px: 2 }}
               />
              <Box>
                <Typography>Visit Our Location</Typography>
                <Typography sx={{fontSize: '12px'}}>
                  South Surma || Sylhet
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box style={flex}>
              <PhoneInTalkOutlinedIcon
                sx={{ fontSize: "80px", px: 2 }}
               />
              <Box>
                <Typography>Contact us now</Typography>
                <Typography sx={{fontSize: '12px'}}>
                  +01934523235
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OfficeInfo;
