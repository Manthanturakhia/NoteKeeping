import React from 'react'
import "./SidebarNotes.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
function SidebarNotes({id,title,body}) {
   var body1 = body.substr(0,22)
   var title1 = title.substr(0,22)
    return (
        <div className="sidebarNotes">
           <div className="sidebarNotes__noteData">
                <h1>{title}</h1>
                <p>{body1}</p>
            </div>
            
            <div className="sidebarNotes__icons">
                 <ShareIcon />
                 <DeleteIcon />
            </div>
        </div>

    )
}

export default SidebarNotes
