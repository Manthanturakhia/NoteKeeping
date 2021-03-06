import React,{useState} from 'react'
import "./SidebarNotes.css"

import { IconButton } from '@material-ui/core';
import axios from "./axios"
import {useStateValue} from "../StateProvider"
import EditIcon from '@material-ui/icons/Edit';


import "./ContributorSidebarNotes.css"
function ContributorSidebarNotes({id,title,body,owner}) {
    const [{user,noteAdded,editTitle,editBody}, dispatch] = useStateValue()
    
   var body1 = body.substr(0,30)
   var title1 = title.substr(0,22)
  
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
        // dispatch({
        //   type: "SET_USER_NOTES",
        //   userNotes: res.data,
        // });
        console.log(res);
      });
   }
    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
                
               <h5>{owner}</h5>
                <h1>{title}</h1>
                <p>{body1}</p>
               
                
            </div>
            
            <div className="sidebarNotes__icons">
            
            <IconButton onClick={editNote}> <EditIcon /> </IconButton>
               
                
                
            </div>
        </div>

    )
}

export default ContributorSidebarNotes
