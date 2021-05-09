import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStateValue } from '../StateProvider';
import { Button } from '@material-ui/core';
import axios from "./axios"
const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});
const btn =1;
function createData(username, access_type, btn,sno) {
  return { username, access_type , btn,sno};
}



export default function RevokeUsersTable({id}) {
    const [{notePermissions}] = useStateValue()
    const[{revoke},dispatch] = useStateValue()
     const deleteAccess =(row) => {
        console.log("row",row)
         axios
        .post("/revokeAccess", {
        sno:row.sno,
        
        })
        .then((res) => {
        console.log(res.data);
        alert("Access Revoked");
        dispatch({
            type: "SET_REVOKE",
            revoke: row.sno,
          });
         })
        .catch((err) => {
        console.log(err);
        alert("Something went wrong");
        });

    }
    const rows = [];
      notePermissions.map((m) => {
          if(m.noteid==id){
            rows.push(createData(m.susername,m.access,btn,m.sno))
          }
          
      })
      console.log("readersssss",notePermissions)
  const classes = useStyles();
  
  return (
   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Access Given</TableCell>
            <TableCell align="right">Revoke Access</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.access_type}</TableCell>
              <TableCell align="right">{btn && <Button onClick={()=>deleteAccess(row)}>REVOKE</Button>}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}