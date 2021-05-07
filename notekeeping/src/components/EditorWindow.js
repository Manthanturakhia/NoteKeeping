import { TextField } from '@material-ui/core'
import React from 'react'

function EditorWindow() {
    return (
        <div className="editorWindow">
            <h1>this is the editor</h1>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
        </div>
    )
}

export default EditorWindow
