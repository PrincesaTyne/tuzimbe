import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddContractor from "../../components/contractors/AddContractor";
import ContractorsTable from "../../components/contractors/ContractorsTable";
import Sidebar from "../../components/layout/Sidebar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "1%",
    "& .head": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2%",
    },
    "& .title": {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
  },
}));

const Contractors = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sidebar>
      <Grid container className={classes.root}>
        <Grid item xs={12} className="head">
          <Typography className="title"> Contractors</Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Contractor
          </Button>
          <AddContractor open={open} handleClose={handleClose} />
        </Grid>
        <Grid item container xs={12}>
          <ContractorsTable />
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default Contractors;
