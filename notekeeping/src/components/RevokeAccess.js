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
import "./NoteModal.css";

import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import RevokeUsersTable from './RevokeUsersTable';

export default function RevokeAccess({id}) {
  const [open, setOpen] = React.useState(false);
//   const[body,setBody] = useState("")
//   const[title,setTitle] = useState("")
  const[{user,noteAdded},dispatch] = useStateValue()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  
  return (
    <div className="noteModal">
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Note
      </Button> */}
      <div className="noteModal__add"> 
      
      <IconButton onClick={handleClickOpen}> <FormatListBulletedOutlinedIcon/> </IconButton></div>
     
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Revoke Access</DialogTitle>
        <DialogContent>
          <RevokeUsersTable id={id} />
          
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