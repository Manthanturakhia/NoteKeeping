import { Button, TextField } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./EditorWindow.css"
import {useStateValue} from "../StateProvider"
function EditorWindow({editTitle,editBody}) {
    const save = () => {
            
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
             <Button variant="contained" color="primary">
                 Discard
             </Button>
             </div>
             
        </div>

    )
}

export default EditorWindow
