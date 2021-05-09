import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider"
export default function UserList() {
    const[suser,setSuser] = useState()
    const[{users}] = useStateValue([])
    const[{susername}, dispatch] =useStateValue()
    console.log("user list",users)
    const data=[]
    users.map((m) => {
      data.push(m.username)
     
  })
  return (
    <div className="userList">
    <Autocomplete
      id="combo-box-demo"
      options={data}
      
      style={{ width: 300 }}
      onInputChange={(e,v) => dispatch({
        type: "SET_SUSERNAME",
        susername: v,
      })}
      renderInput={(params) => <TextField {...params} label="Users" variant="outlined" />}
    />

    </div>
  );
  

}

