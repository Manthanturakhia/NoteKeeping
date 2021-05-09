import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditorWindow from "./EditorWindow"
import {useStateValue} from "../StateProvider"
import axios from "./axios"
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import "./NoteModal.css"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const[body,setBody] = useState("")
  const[title,setTitle] = useState("")
  const[{user,noteAdded},dispatch] = useStateValue()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const addNote = () =>{
    axios
    .post("/addNotes", {
     
      username: user,
      title: title,
      body: body,
    })
    .then((res) => {
      console.log(res.data);
      alert("Note Added");
      dispatch({
        type: "SET_NOTE_ADDED",
        noteAdded: title,
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Something went Wrong Please try Again!");
    });
   
    setTitle("");
    setBody("");
    setOpen(false);
  }

  return (
    <div className="noteModal">
      
      <div className="noteModal__add"> <h2>Add Note</h2>
      <IconButton onClick={handleClickOpen}> <AddIcon /></IconButton></div>
     
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <br />
           <TextField id="outlined-basic" multiline rows={15}
                fullWidth="true" label="Note" variant="outlined"
            style = {{width: 550}} 
            onChange={(e) => setBody(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addNote} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}