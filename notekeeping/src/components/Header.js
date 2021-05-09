import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import {useStateValue} from "../StateProvider"
function Header() {
    const[{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <NoteOutlinedIcon />
            <Typography variant="h5">
                         <h3>Note Taking </h3>
                </Typography>
            </div>
            <div className="header__right">
                <h3>{user}</h3><AccountCircleIcon />
            </div>
        
        </div>
    )
}

export default Header
