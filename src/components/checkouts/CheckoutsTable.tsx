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

const CheckoutsTable = () => {
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
      title: "Material name",
    },
    {
      title: "Quantity",
    },
    {
      title: "Cost",
    },
    {
      title: "Date Checked Out",
    },
    {
      title: "",
    },
  ];

  const checkouts = [
    { id: "1", name: "Sand", quantity: "50", date: "" },
    { id: "2", name: "Cement", quantity: "300", date: "" },
    { id: "3", name: "Bricks", quantity: "50", date: "" },
    { id: "4", name: "Water", quantity: "3000", date: "" },
    { id: "5", name: "Nails", quantity: "100", date: "" },
    { id: "6", name: "Stones", quantity: "50", date: "" },
  ];

  return (
    <Paper className={classes.root} elevation={0}>
      <CustomTable tableHeaders={tableHeaders} title="">
        {checkouts
          ?.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map((checkout) => (
            <TableRow key={checkout.id} hover>
              <TableCell>{checkout.name}</TableCell>
              <TableCell>{checkout.quantity}</TableCell>
              <TableCell></TableCell>
              <TableCell>{checkout.date}</TableCell>
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
        count={checkouts?.length || 0}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 100]}
      />
    </Paper>
  );
};

export default CheckoutsTable;
