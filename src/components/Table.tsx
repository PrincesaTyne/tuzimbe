import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight:'50vh',
    '& .MuiTableCell-head': {
      fontWeight: 600
    } 
  }
}))


export type CustomTableProps = {
  children: any
  title:string
  tableHeaders:{
    title:string,
    align?:any,
    width?:string,
    style?:Record<string, object>
  }[]
}

export default function CustomTable({children,tableHeaders,title}: CustomTableProps) {
  const classes = useStyles()
 
  return (
    <TableContainer className={`${classes.root} table-container`}>
      <Typography>{title}</Typography>
      <Table stickyHeader size="small" >
        <TableHead className='table-head'>
          <TableRow >
            {tableHeaders.map((header)=>(
              <TableCell key={header.title} align={header.align} style={header.style}>{header?.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
