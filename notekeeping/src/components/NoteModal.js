import { Modal, RootRef } from '@material-ui/core'
import React from 'react'

function NoteModal() {
    return (
        <div className="noteModal">
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                
                container={() => RootRef.current}
                >
                <div>
                    <h2 id="server-modal-title">Server-side modal</h2>
                    <p id="server-modal-description">If you disable JavaScript, you will still see me.</p>
                </div> 
            </Modal>
        </div>
    )
}

export default NoteModal
