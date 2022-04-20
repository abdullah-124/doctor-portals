import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login.png";

const Register = () => {
  const navigate = useNavigate()
  const { registerUser, user, loading, massage } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData)
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password.length < 5) {
      alert("Password must have 6 character");
      e.preventDefault();
    } else if (loginData.password !== loginData.password2) {
      alert("Password did not match");
      e.preventDefault();
      console.log(user);
    }
    registerUser(loginData.email, loginData.password, loginData.name);
    if(user.email){
      navigate(-1)
    }
    e.preventDefault();
  };
  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Container>
        {massage && (
          <Box>
            <Typography variant="h6">{massage}</Typography>
            <Link to="/home">Go home</Link>
          </Box>
        )}
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item md={6} xs={12}>
            <Typography variant="body1">Register</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                type="text"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                type="email"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                autoComplete="current-password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Confrim Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                autoComplete="current-password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>

              <Typography>
                Alredy register? <Link to="/login">login</Link>
              </Typography>
            </form>
          </Grid>
          <Grid item md={6} xs={12}>
            <img style={{ width: "100%" }} src={loginImage} alt="login" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
