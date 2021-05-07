import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "./axios";
import Header from "./Header"
import Sidebar from "./Sidebar"

import "./Home.css"
function Home() {
  const [{ user }, dispatch] = useStateValue();
  const [{ userNotes }] = useStateValue([]);

  console.log("userrrrr", user);
  useEffect(() => {
    axios.get(`/getNotes?username=${user}`).then((res) => {
      dispatch({
        type: "SET_USER_NOTES",
        userNotes: res.data,
      });
      console.log(res);
    });
  }, [user]);
  return (
    <div className="home">
      
      <Header />
      <Sidebar />
      <h1>HOME PAGE</h1>

      

      {user &&
          <h1>sdklfhd</h1>
      }
    </div>
  );
}

export default Home;
