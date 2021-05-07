import React, { useState } from "react";
import { Button, InputLabel, TextField } from "@material-ui/core";

import axios from "./axios";
import Login from "./Login";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    axios.post("/register", {
      name: name,
      username: username,
      password: password,
      email: email,
    });
    if (username && email && password) {
      alert("User Registered");
    } else {
      alert("Username/UserType/Password is required");
    }

    setName("");
    setPassword("");
    setUserName("");
    setEmail("");
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>REGISTER</h1>

        <TextField
          id="standard-basic"
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          type="password"
          label="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Email ID"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <Button variant="contained" onClick={register} color="primary">
          Register
        </Button>
        <Link
          to={{
            pathname: "/Login",
          }}
        >
          <br />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
