import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider"
export default function PermissionList() {
    const[access,setAccess] = useState()
  const data = [
      'Contributor',
      'Reader'
  ]  

  return (
      <div className="permissionList">
    <Autocomplete
      id="combo-box-demo"
      options={data}
      //getOptionLabel={(data) => data}
      style={{ width: 300 }}
      onInputChange={(e,v) => setAccess(v)}
      renderInput={(params) => <TextField {...params} label="Permissions" variant="outlined" />}
    />
    
    </div>
  );

}

