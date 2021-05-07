import { Button } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__addbtn">
                <Button>Add Note</Button>
                </div>
                
                <AddIcon />
            </div>
        </div>
    )
}

export default Sidebar
