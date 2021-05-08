import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "./axios";
import Header from "./Header"
import Sidebar from "./Sidebar"
import SidebarNotes from "./SidebarNotes"

import "./Home.css"
import EditorWindow from "./EditorWindow";
import Login from "./Login";
import { Button } from "@material-ui/core";
import NoteModal from "./NoteModal";
function Home() {
  const [{ user }, dispatch] = useStateValue();
  const [{ userNotes }] = useStateValue([]);
  const[{users}] =useStateValue([])
  const[{editTitle,editBody,noteid,noteUpdated}] =useStateValue()
  // useEffect(() => {
  //   console.log("props",editTitle)
    
  // }, [editTitle,editBody])
  console.log("userrrrr", user);
  useEffect(() => {
    axios.get(`/getNotes?username=${user}`).then((res) => {
      dispatch({
        type: "SET_USER_NOTES",
        userNotes: res.data,
      });
      console.log(res);
    });
  }, [user,noteUpdated]);
  

  return (
    <div className="home">
      {
         !user ?(
           <Login />
         ):(
           <>
          <Header />
          <div className="home__body">
              <div className="home__sidebar">
                <Sidebar />
                
              </div>
            
            <div className="home__editorWindow">
            <EditorWindow editTitle={editTitle} editBody={editBody} noteid={noteid}/>
               
                </div>
        </div>
       
        </>
         )
         
      }
      
 
    </div>
  );
}

export default Home;
