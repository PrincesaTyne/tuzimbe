import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import AttendancesTable from "../../components/attendances/AttendancesTable";
import Sidebar from "../../components/layout/Sidebar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '1%',
    '& .head': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2%'
    },
    '& .title': {
      fontWeight: 600,
      fontSize: '1.5rem'
    }
  }
}))
const Attendances = () => {
  const classes = useStyles()
  return (
    <Sidebar>
      <Grid container className={classes.root}>
        <Grid item xs={12} className='head'>
          <Typography className='title'> Attendances</Typography>
          <Button variant='contained' color='primary'>Clockin/ Clockout</Button>
        </Grid>
        <Grid item container xs={12}>
          <AttendancesTable />
        </Grid>
      </Grid>
    </Sidebar>
  )
}

export default Attendances
