import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <NoteOutlinedIcon />
            <Typography variant="h6">
                          Note Taking 
                </Typography>
            </div>
            <div className="header__right">
                <AccountCircleIcon />
            </div>
        {/* <AppBar position="static">
            <Toolbar>
                
                <Typography variant="h6">
                     Note Taking 
                </Typography>
                <AccountCircleIcon />
            </Toolbar>
        </AppBar> */}
        </div>
    )
}

export default Header
