import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "./axios";
import Header from "./Header"
import Sidebar from "./Sidebar"
import "./Home.css"
import EditorWindow from "./EditorWindow";
import Login from "./Login";
import { Button } from "@material-ui/core";
import NoteModal from "./NoteModal";
function Home() {
  const [{ user }, dispatch] = useStateValue();
  const[{contributorList}] = useStateValue()
  const[{notePermissions}] = useStateValue()
  const[{noteAdded}] = useStateValue()
  const [{revoke}] = useStateValue();
  const[{users}] =useStateValue([])
  const[{editTitle,editBody,noteid,noteUpdated}] =useStateValue()
 const[{setNotePermission}] = useStateValue()
  console.log("userrrrr", user);
  useEffect( () => {
     axios.get(`/getNotes?username=${user}`).then((res) => {
      dispatch({
        type: "SET_USER_NOTES",
        userNotes: res.data,
      });
      console.log(res);
    });
  }, [user,noteUpdated]);
  useEffect(() => {
     axios.get(`/getContributorDetails?username=${user}`).then((res) => {
      console.log("contributpr",res)
      dispatch({
        type: "SET_CONTRIBUTOR_LIST",
        contributorList: res.data,
      });
      console.log("etst",res.data);
    });
  }, [user,noteUpdated,revoke,setNotePermission]);

  
  useEffect(() => {
   axios.get(`/getReaderDetails?username=${user}`).then((res) => {
      console.log("reader",res)
      dispatch({
        type: "SET_READER_LIST",
        readerList: res.data,
      });
     console.log("permissions",res)
    });
  }, [user,noteUpdated,revoke,setNotePermission]);

  useEffect(() => {
    axios.get(`/getNotePermissionDetails?username=${user}`).then((res) => {
      console.log("get note per",res)
      dispatch({
        type: "SET_NOTE_PERMISSION_DETAILS",
        notePermissions: res.data,
      });
      console.log("etst",res.data);
    });
    
  }, [user,noteUpdated,revoke,setNotePermission]);
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
