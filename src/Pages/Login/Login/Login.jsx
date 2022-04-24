import React from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../images/login.png";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser, loading, massage, user, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  if (user.email) {
    navigate(-1);
  }
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(loginData)
  };
  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Container>
        {massage && <Typography variant="h6">{massage}</Typography>}
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item md={6} xs={12}>
            <Typography variant="body1">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                onBlur={handleOnChange}
                autoComplete="current-password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              <Typography>
                New user? <Link to="/register">register</Link>
              </Typography>
              <Typography variant="h4">------------------</Typography>
              <Button
                onClick={signInWithGoogle}
                variant="contained"
                startIcon={<GoogleIcon />}
              >
                Continue Google
              </Button>
            </form>
          </Grid>
          <Grid item md={6} xs={12}>
            <img style={{ width: "100%" }} src={loginImage} alt="Login" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
