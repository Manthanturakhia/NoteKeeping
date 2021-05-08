import React,{useState} from 'react'
import "./SidebarNotes.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';
import axios from "./axios"
import {useStateValue} from "../StateProvider"
import EditIcon from '@material-ui/icons/Edit';
function SidebarNotes({id,title,body}) {
    const [{user,noteAdded}, dispatch] = useStateValue()
   var body1 = body.substr(0,22)
   var title1 = title.substr(0,22)
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
                noteAdded: true,
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
        
   }
    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
                <h1>{title}</h1>
                <p>{body1}</p>
            </div>
            
            <div className="sidebarNotes__icons">
            <IconButton onClick={editNote}> <EditIcon /> </IconButton>
                <IconButton><ShareIcon /> </IconButton>
                <IconButton onClick={deleteNote}> <DeleteIcon /> </IconButton>
                
            </div>
        </div>

    )
}

export default SidebarNotes
