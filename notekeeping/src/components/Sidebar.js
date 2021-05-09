import { Button } from '@material-ui/core'
import React,{useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar.css"
import {useStateValue} from "../StateProvider"
import axios from "./axios"
import SidebarNotes from './SidebarNotes';
import NoteModal from './NoteModal';
import ContributorSidebarNotes from './ContributorSidebarNotes'
function Sidebar() {
    const[{userNotes}] = useStateValue()
    const[{contributorList}] = useStateValue()
    const [{user,noteAdded}, dispatch] = useStateValue()
    useEffect(() => {
        axios.get(`/getNotes?username=${user}`).then((res) => {
          dispatch({
            type: "SET_USER_NOTES",
            userNotes: res.data,
          });
          console.log(res);
        });
        return () => {
          
        }
      }, [noteAdded]);  
   
    console.log("notes",userNotes)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            
                <div className="sidebar__addbtn">
                <NoteModal />
                
                </div>
              
            </div>
            
          
            <div className="sidebar__notes">
            {
                
                    userNotes.map((m) =>(
                        //<h1>{m.noteid}</h1>
                        <SidebarNotes id={m.noteid} title={m.title} body={m.body} />
                    ))
                    

             }
             {
                  contributorList.map((m) =>(
                    //<h1>{m.noteid}</h1>
                    <ContributorSidebarNotes id={m.noteid} title={m.title} body={m.body} />
                ))
             }
            </div>
            
        </div>
    )
}

export default Sidebar
