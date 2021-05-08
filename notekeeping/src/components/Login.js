import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import "./Login.css";
import { useStateValue } from "../StateProvider";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useStateValue();
  const login = () => {
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        alert("logged in");
        console.log(res.data[0].username);
        dispatch({
          type: "SET_USER",
          user: res.data[0].username,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid");
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Note Keeping</h1>
        <TextField
          id="standard-basic"
          label="Username"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/home">
          <Button variant="contained" onClick={login} color="primary">
            Login
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/">
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
