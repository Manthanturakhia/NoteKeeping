import React from 'react'
import "./SidebarNotes.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
function SidebarNotes({id,title,body}) {
   
    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            
            <div className="sidebarNotes__icons">
                 <ShareIcon />
                 <DeleteIcon />
            </div>
        </div>

    )
}

export default SidebarNotes
