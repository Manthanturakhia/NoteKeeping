import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {useStateValue} from "../StateProvider"

import { IconButton } from '@material-ui/core';

import "./NoteModal.css";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


export default function ViewModal({title,body}) {
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
 
  
  return (
    <div className="noteModal">
      
      <div className="noteModal__add"> 
      
      <IconButton onClick={handleClickOpen}> <VisibilityOutlinedIcon  /></IconButton></div>
     
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Note</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            value={title}
            
          />
          <br />
          <br />
          <br />
           <TextField id="outlined-basic" multiline rows={15}
                fullWidth="true" label="Note" variant="outlined"
            style = {{width: 550}} 
            value={body}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}