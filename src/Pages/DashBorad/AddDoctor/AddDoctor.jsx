import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";

const style = {
  boxShadow: "1px 2px 10px #5556",
  borderRadius: "12px",
  padding: "30px",
};
const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [massage, setMassage] = useState("");
  const [loader, setLoader] = useState(false);

  const addDoctor = (e) => {
    console.log("hello do you want to add a doctor");
    const formData = new FormData();
    setLoader(true);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    console.log(image);
    //fetch
    fetch("https://pure-reef-05928.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setMassage(`${name} added as a doctor`);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <form onSubmit={addDoctor} style={style}>
        {massage && <Alert severity="success">{massage}</Alert>}
        {loader && <Typography component='h6'>Loading...</Typography>}
        <Typography color="primary" variant="h4">
          Add Doctor
        </Typography>
        <TextField
          sx={{ m: 1 }}
          label="Name"
          onBlur={(e) => setName(e.target.value)}
          required
          variant="outlined"
        />
        <TextField
          sx={{ m: 1 }}
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          required
          variant="outlined"
        />
        <div style={{ margin: "10px" }}>
          <label>
            <Input
              required
              accept="image/*"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />{" "}
            <br />
            <Button sx={{ mt: 2 }} variant="contained" type="submit">
              Upload
            </Button>
          </label>
        </div>
      </form>
    </Container>
  );
};

export default AddDoctor;
