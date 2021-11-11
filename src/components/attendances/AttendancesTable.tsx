import React, { useState } from "react";
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

const AttendancesTable = () => {
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
      title: "Contractor Name",
    },
    {
      title: "Arrival Time",
    },
    {
      title: "Departure Time",
    },
    {
      title: "",
    },
  ];

  const attendances = [
    { id: "1", name: "Johhhn Doe", toa: "", tod: "", hours: "5" },
    { id: "2", name: "Blue Sky", toa: "", tod: "", hours: "4" },
    { id: "3", name: "Green Beans", toa: "", tod: "", hours: "5" },
    { id: "4", name: "Apple Tree", toa: "", tod: "", hours: "3" },
    { id: "5", name: "Qwerty Asdfg", toa: "", tod: "", hours: "6" },
    { id: "6", name: "May Flower", toa: "", tod: "", hours: "4" },
  ];
  return (
    <Paper className={classes.root} elevation={0}>
      <CustomTable tableHeaders={tableHeaders} title="">
        {attendances
          ?.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map((attendance) => (
            <TableRow key={attendance.id} hover>
              <TableCell>{attendance.name}</TableCell>
              <TableCell>{attendance.toa}</TableCell>
              <TableCell>{attendance.tod}</TableCell>
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
        count={attendances?.length || 0}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 100]}
      />
    </Paper>
  );
};

export default AttendancesTable;
