import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          
          {/* Ul and Li */}
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="inherit">
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/home"
              >
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/doctors"
              >
                Doctors
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
