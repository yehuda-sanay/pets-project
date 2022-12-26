import "./Register.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    console.log(e.target.name,"value",e.target.value);
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:8080/users/signup", {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        phone: inputs.phone,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/login"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Signup</Typography>

          <TextField
            name="firstName"
            onChange={handleChange}
            value={inputs.firstName}
            variant="outlined"
            placeholder="First Name"
            margin="normal"
            type="text"
          />
          <TextField
          name="lastName"
          value={inputs.lastName}
            variant="outlined"
            placeholder="Last Name"
            margin="normal"
            type="text"
            onChange={handleChange}
          />
          <TextField
          name="email"
          value={inputs.email}
            variant="outlined"
            placeholder="Email"
            margin="normal"
            type={"email"}
            onChange={handleChange}
          />
          <TextField
          name="phone"
          value={inputs.phone}
            variant="outlined"
            placeholder="Phone Number"
            margin="normal"
            type="text"
            onChange={handleChange}
          />
           <TextField
           name="password"
          value={inputs.password}
           variant="outlined"
            placeholder="Password"
             margin="normal"
             type="password"
             onChange={handleChange}
              />

          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Register;
