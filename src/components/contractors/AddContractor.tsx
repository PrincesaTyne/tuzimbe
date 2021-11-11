import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Dialog,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { validateFields, roles } from "../../utils";

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

const fields = ["name", "email", "age", "gender", "role"];

type AddContractor = {
  open: boolean;
  handleClose: () => void;
};

type ValuesType = {
  name?: string | null
  email?: string | null
  age?: number | null
  gender?: string | null
  role?: string | null
}

export default function AddContractor({ open, handleClose }: AddContractor) {
  const classes = useStyles();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    age: 18,
    gender: "",
    role: "",
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
                Add Contractor Form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                variant="outlined"
                label="Contractor Name"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("name")}
                error={
                  formik.touched.name && Boolean(formik.errors.name)
                }
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                variant="outlined"
                label="Email"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("email")}
                error={
                  formik.touched.email && Boolean(formik.errors.email)
                }
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="age"
                variant="outlined"
                type='number'
                label="Age"
                size="small"
                fullWidth
                required
                {...formik.getFieldProps("age")}
                error={
                  formik.touched.age && Boolean(formik.errors.age)
                }
                helperText={formik.touched.age && formik.errors.age}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="gender"
                fullWidth
                noOptionsText="No Genders Added Yet"
                options={['Female', 'Male']}
                getOptionLabel={(option) => option}
                renderOption={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Gender"
                    size="small"
                    fullWidth
                    required
                    InputProps={{ ...params.InputProps, type: "search" }}
                    {...formik.getFieldProps("gender")}
                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                    helperText={formik.touched.gender && formik.errors.gender}
                  />
                )}
                onChange={(_, newValue) => {
                  formik.values.gender = newValue
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="role"
                fullWidth
                noOptionsText="No Roles Added Yet"
                options={roles && roles}
                getOptionLabel={(option) => option}
                renderOption={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Role"
                    size="small"
                    fullWidth
                    required
                    InputProps={{ ...params.InputProps, type: "search" }}
                    {...formik.getFieldProps("role")}
                    error={formik.touched.role && Boolean(formik.errors.role)}
                    helperText={formik.touched.role && formik.errors.role}
                  />
                )}
                onChange={(_, newValue) => {
                  formik.values.role = newValue
                }}
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
