import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/styles";
import { Grid, Dialog, TextField, Typography, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { validateFields, roles, measurements } from "../../utils";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "90%",
    margin: "0 auto",
    padding: "6%",
    "& .MuiTextField-root": {
      width: "90%",
    },
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiAutocomplete-root": {
      display: "flex",
      justifyContent: "center",
    },
  },
  dialog: {
    height: "90%",
  },
});

const fields = ["name", "quantity", "price", "measurement"];

type AddMaterial = {
  open: boolean;
  handleClose: () => void;
};

type ValuesType = {
  name?: string;
  quantity?: number;
  price?: number;
  measurement?: string;
};

export default function AddMaterial({ open, handleClose }: AddMaterial) {
  const classes = useStyles();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const initialValues = {
    name: "",
    quantity: 0,
    price: 0,
    measurement: "",
  };

  const validationSchema = Yup.object().shape(validateFields(fields));

  const onSubmit = async (values: ValuesType) => {
    if (!values) {
      return;
    } else {
      console.log(values);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleCancel = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <form
          onSubmit={formik.handleSubmit}
          className={classes.root}
          autoComplete="off"
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Add Material Form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                variant="outlined"
                label="Material Name"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="quantity"
                variant="outlined"
                type="number"
                label="Quantity"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("quantity")}
                error={
                  formik.touched.quantity && Boolean(formik.errors.quantity)
                }
                helperText={formik.touched.quantity && formik.errors.quantity}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="measurement"
                fullWidth
                noOptionsText="No Measurements Added Yet"
                options={measurements}
                getOptionLabel={(option) => option}
                renderOption={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Measurement"
                    size="small"
                    fullWidth
                    required
                    InputProps={{ ...params.InputProps, type: "search" }}
                    {...formik.getFieldProps("measurement")}
                    error={
                      formik.touched.measurement &&
                      Boolean(formik.errors.measurement)
                    }
                    helperText={
                      formik.touched.measurement && formik.errors.measurement
                    }
                  />
                )}
                onChange={(_, newValue) => {
                  formik.values.measurement = newValue;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="price"
                variant="outlined"
                type="number"
                label="Unit Price"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("price")}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginTop: "3%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="reset"
                variant="contained"
                onClick={handleCancel}
                style={{
                  textTransform: "none",
                  margin: "0% 2%",
                  backgroundColor: "gray",
                  color: "white",
                  width: "20%",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ textTransform: "none", margin: "0% 2%", width: "20%" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </>
  );
}
