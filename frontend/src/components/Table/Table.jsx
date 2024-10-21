import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
function createData(name, trackingId , date , status) {
  return { name, trackingId , date , status};
}

const rows = [
    createData("Alpha Widget", 10293847, "14 February 2021", "Approved"),
createData("Beta Gadget", 20384756, "3 March 2020", "Pending"),
createData("Gamma Device", 30495867, "8 June 2022", "Rejected"),
createData("Delta Tool", 40586978, "21 October 2021", "Approved"),
createData("Epsilon Apparatus", 50678989, "11 December 2023", "Pending"),

];
const makeStyles=(status)=>{
    if(status==="Approved"){
        return{
            background:'#ACE1AF',
            color:'green'
        }}
    else if(status==='Pending'){
            return{
background:'#ffadad8f',
color:'red'
            }
        }
        else{
            return{
                background:'#59bfff',
                color:'white'
            }
        }
}

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{
        boxShadow: '0px 13px 20px 0px #80808029'
    }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status"
                style={
                    makeStyles(row.status)
                }
                >
         {row.status}
                </span>
              </TableCell>
              <TableCell align="left" className='details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}