import { Button, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import "./EditorWindow.css"
function EditorWindow() {
    const save = () => {
        
      };
    const [title, setTitle] = useState("")
    const[body,setBody] = useState("")
    return (
        <div className="editorWindow">
           
            <TextField id="outlined-basic" fullWidth="true" label="Title" variant="outlined"
            style = {{width: 850}} 
            onChange={(e) => setTitle(e.target.value)}/>
            <TextField id="outlined-basic" multiline rows={25}
                fullWidth="true" label="Note" variant="outlined"
            style = {{width: 850}} 
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
