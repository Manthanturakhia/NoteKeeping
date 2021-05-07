import { Button } from '@material-ui/core'
import React,{useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar.css"
import {useStateValue} from "../StateProvider"
import axios from "./axios"
import SidebarNotes from './SidebarNotes';
import NoteModal from './NoteModal';
function Sidebar() {
    const[{userNotes}] = useStateValue()
    console.log("notes",userNotes)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__addbtn">
                <Button >Add Note</Button>
                <Button onClick={this.handleClick} />
                  {this.state.clicked ? <NoteModal /> : null}
                </div>
               
                <AddIcon />
            </div>
            {
                    userNotes.map((m) =>(
                        //<h1>{m.noteid}</h1>
                        <SidebarNotes id={m.noteid} title={m.title} body={m.body} />
                    ))
                }
        </div>
    )
}

export default Sidebar
