import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ButtonAppBar() {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button color="inherit">
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/home">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/appointment"
            >
              Appointment
            </Link>
          </Button>
          {user?.email ? (
            <Box>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
              to="/dashboard/home"
              >
                Dashboard
              </Link>
            </Box>
          ) : (
            <Button color="inherit">
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
