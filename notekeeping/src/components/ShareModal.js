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
import ShareIcon from '@material-ui/icons/Share';
import {IconButton} from '@material-ui/core'
import UserList from "./UserList"
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  
 

  return (
    <div>
     
      <IconButton onClick={handleClickOpen}>
          <ShareIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <UserList />
          <br />
          <br />
          <br />
           <TextField id="outlined-basic" multiline rows={15}
                fullWidth="true" label="Note" variant="outlined"
            style = {{width: 550}} 
          
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}