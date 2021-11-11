import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomTable from "../Table";
import {
  Paper,
  TableRow,
  TableCell,
  TablePagination,
  Theme,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    padding: "3% 2%",
    "& .pagination": {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2%",
    },
  },
}));

const ContractorsTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPagePage] = useState<number>(5);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrMsg, setShowErrMsg] = useState<boolean>(false);

  const handlePageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPagePage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaders = [
    {
      title: "Name",
    },
    {
      title: "ID",
    },
    {
      title: "Email",
    },
    {
      title: "Age",
    },
    {
      title: "Gender",
    },
    {
      title: "Role",
    },
    {
      title: "",
    },
  ];

  const contractors = [
    {
      id: "1",
      name: "Johhhn Doe",
      email: "john.doe@tuzimbe.com",
      age: "45",
      sex: "Female",
      role: "Manager",
    },
    {
      id: "2",
      name: "Blue Sky",
      email: "blue.sky@tuzimbe.com",
      age: "18",
      sex: "Male",
      role: "Porter",
    },
    {
      id: "3",
      name: "Green Beans",
      email: "green.beans@tuzimbe.com",
      age: "28",
      sex: "Female",
      role: "Carpenter",
    },
    {
      id: "4",
      name: "Apple Tree",
      email: "apple.tree@tuzibe.com",
      age: "30",
      sex: "Male",
      role: "Builder",
    },
    {
      id: "5",
      name: "Qwerty Asdfg",
      email: "qwerty@tuzimbe.com",
      age: "25",
      sex: "Female",
      role: "Carpenter",
    },
    {
      id: "6",
      name: "May Flower",
      email: "may.flower@tuzimbe.com",
      age: "34",
      sex: "Male",
      role: "Porter",
    },
  ];

  return (
    <Paper className={classes.root} elevation={0}>
      <CustomTable tableHeaders={tableHeaders} title="">
        {contractors
          ?.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map((contractor) => (
            <TableRow key={contractor.id} hover>
              <TableCell>{contractor.name}</TableCell>
              <TableCell>{contractor.id}</TableCell>
              <TableCell>{contractor.email}</TableCell>
              <TableCell>{contractor.age}</TableCell>
              <TableCell>{contractor.sex}</TableCell>
              <TableCell>{contractor.role}</TableCell>

              <TableCell align="center">
                <Button color="primary" variant="outlined">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </CustomTable>

      <TablePagination
        className="pagination"
        component="div"
        count={contractors?.length || 0}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 100]}
      />
    </Paper>
  );
};

export default ContractorsTable;
