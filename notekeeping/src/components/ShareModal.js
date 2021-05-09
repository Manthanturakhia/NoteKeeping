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
import PermissionList from './PermissionsList';
import "./ShareModal.css"
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

export default function ShareModal({id}) {
  const [open, setOpen] = React.useState(false);
  const[{user}] = useStateValue()
  const[{access,noteid,susername}] = useStateValue()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  
  const setPermission= () => {
    axios
      .post("/setAccess", {
        noteid: id,
        susername: susername,
        ousername: user,
        access: access,
        
      })
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        alert("set permission");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }

  return (
    <div className="shareModal">
        
     <div className="shareModal__icon">
        
      <IconButton onClick={handleClickOpen}>
          <ShareIcon />
      </IconButton>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Share Note</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <UserList />
          <br />
          <br />
          <br />
           <PermissionList />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={setPermission}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}