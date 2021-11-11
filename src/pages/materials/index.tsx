import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import AddMaterial from "../../components/materials/AddMaterial";
import MaterialsTable from "../../components/materials/MaterialsTable";

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
const Materials = () => {
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
          <Typography className="title"> Materials</Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Material
          </Button>
          <AddMaterial open={open} handleClose={handleClose} />
        </Grid>
        <Grid item container xs={12}>
          <MaterialsTable />
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default Materials;
