import { Button, TextField } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./EditorWindow.css"
import {useStateValue} from "../StateProvider"
import axios from "./axios"
function EditorWindow({editTitle,editBody,noteid}) {
    const[{noteUpdated},dispatch] = useStateValue()
     const save = () => {
        axios
        .post("/updateNoteById", {
          noteid: noteid,
          title:title,
          body: body,
        })
        .then((res) => {
          console.log(res.data);
          alert("Note Updated");
          dispatch({
            type: "SET_NOTE_UPDATED",
            noteUpdated: true,
          });
          
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
      
      };
     
    var [title, setTitle] = useState("")
    var[body,setBody] = useState("")
      
    console.log("edittitldoe",editTitle)
    useEffect(() => {
       setTitle(editTitle)
       setBody(editBody)
       console.log("called")
    }, [editTitle,editBody])
    
    return (
        <div className="editorWindow">
          
            <TextField id="outlined-basic" fullWidth="true" label="Title" variant="outlined"
            style = {{width: 850}} 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <TextField id="outlined-basic" multiline rows={25}
                fullWidth="true" label="Note" variant="outlined"
            style = {{width: 850}} 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <div className="editorWindow__btn">
             <Button variant="contained" color="primary" onClick={save} >
                 Save
             </Button>
             
             </div>
             
        </div>

    )
}

export default EditorWindow
