import React,{useState} from 'react'
import "./SidebarNotes.css"
import DeleteIcon from '@material-ui/icons/Delete';

import { IconButton } from '@material-ui/core';
import axios from "./axios"
import {useStateValue} from "../StateProvider"

import ViewModal from './ViewModal';
function ReaderSidebarNotes({id,title,body,owner}) {
    const [{user,noteAdded,editTitle,editBody}, dispatch] = useStateValue()
    
   var body1 = body.substr(0,30)
   var title1 = title.substr(0,22)
  
   const[newBody,setBody] = useState("")
   const[newTitle,setTitle] = useState("")

    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
               <h5>{owner}</h5>
                <h1>{title}</h1>
                <p>{body1}</p>
            </div>
            
            <div className="sidebarNotes__icons">
            {/* <IconButton onClick={editNote}> <EditIcon /> </IconButton> */}
            
                
                <ViewModal title={title} body={body}/>
                
            </div>
        </div>

    )
}

export default ReaderSidebarNotes
