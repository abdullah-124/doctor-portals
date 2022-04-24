import * as React from "react";
import { Alert, Typography, Button, Container, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";

const style = {
  marginTop: "20px",
  boxShadow: "1px 2px 10px #5556",
  borderRadius: "12px",
  padding: "30px",
};

const MakeAdmin = () => {
  const [email, setEmail] = React.useState("");
  const [success, setSuceess] = React.useState(false);
  const { token } = useAuth();

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://pure-reef-05928.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuceess(true);
        }
    });
    e.preventDefault();
  };
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleAdminSubmit} style={style}>
        {success && <Alert severity="success">{email} is now an admin}</Alert>}
        <Box>
          <Typography color="primary" variant="h5">
            Add Admin
          </Typography>
          <TextField
            sx={{ m: 1 }}
            label="Name"
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
          />

          <Button sx={{ mt: 2 }} variant="contained" type="submit">
            Add
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default MakeAdmin;
