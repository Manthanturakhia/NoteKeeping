import React,{useState} from 'react'
import "./SidebarNotes.css"
import DeleteIcon from '@material-ui/icons/Delete';

import { IconButton } from '@material-ui/core';
import axios from "./axios"
import {useStateValue} from "../StateProvider"
import EditIcon from '@material-ui/icons/Edit';
import ShareModal from "./ShareModal"
import RevokeAccess from "./RevokeAccess"
function SidebarNotes({id,title,body}) {
    const [{user,noteAdded,editTitle,editBody}, dispatch] = useStateValue()
    
   var body1 = body.substr(0,10)
   var title1 = title.substr(0,5)
   const deleteNote = () => {
            axios
            .post("/deleteNote", {
            
            username: user,
            id: id,
            })
            .then((res) => {
            console.log(res.data);
            alert("Note Deleted");
            dispatch({
                type: "SET_NOTE_ADDED",
                noteAdded: id,
              });
            })
            .catch((err) => {
            console.log(err);
            alert("Something went wrong");
            });
      
   }
   const[newBody,setBody] = useState("")
   const[newTitle,setTitle] = useState("")
   const editNote = () => {
    axios.get(`/getNoteFromId?id=${id}`).then((res) => {
        
        console.log("data",res.data)
        res.data.map((m)=>{
            dispatch({
                type: "SET_EDIT_TITLE",
                editTitle: m.title,
              });
              dispatch({
                type: "SET_EDIT_BODY",
                editBody: m.body,
              });
              dispatch({
                type: "SET_NOTE_ID",
                noteid: m.noteid,
              });
            console.log("ampp",m.body)
        })
     
        console.log(res);
      });
   }
    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
                <h1>{title1}</h1>
                <p>{body1}</p>
            </div>
            
            <div className="sidebarNotes__icons">
            <IconButton> <RevokeAccess id={id}/> </IconButton>  
            <IconButton onClick={editNote}> <EditIcon /> </IconButton>
                <IconButton><ShareModal id={id}/> </IconButton>
                <IconButton onClick={deleteNote}> <DeleteIcon /> </IconButton>
                
            </div>
        </div>

    )
}

export default SidebarNotes
