import React, { useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import type { NextPage } from "next";
import Sidebar from "../components/layout/Sidebar";
import { Grid, Typography } from "@material-ui/core";
import { BsClock, BsPaintBucket } from "react-icons/bs";
import { Doughnut, Bar } from "react-chartjs-2";
import { useMemo, useState } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    Height: "100%",
    display: "flex",
    justifyContent: "center",
    "& .card": {
      margin: "3% auto",
      padding: "7%",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid green",
      borderRadius: "5px",
    },
    "& #clock-card": {
      padding: "4%",
    },
    "& #item1": {
      paddingLeft: "15%",
    },
    "& #item2": {
      display: "flex",
      justifyContent: "center",
    },
  },
  topRow: {
    flexGrow: 1,
    marginBottom: "3%",
    "& .card": {
      width: "90%",
      height: "200px",
    },
    "& .title": {
      fontSize: "1.1rem",
      fontWeight: "bold",
      paddingTop: "4%",
    },
    "& .employeeNo": {
      fontWeight: "bold",
      marginTop: "5%",
      color: "gray",
    },
    "& .checkout-btn": {
      backgroundColor: "black",
      color: "white",
      marginBottom: "4%",
    },
  },
  bottomRow: {
    "& .card": {
      width: "95%",
      height: "300px",
    },
    "& .doughnut": {
      maxWidth: "250px",
      maxHeight: "250px",
    },
    "& .text": {
      fontWeight: "bold",
      marginTop: "5%",
    },
    "& .total-title": {
      fontWeight: "bold",
      fontSize: "1rem",
      marginBottom: "4%",
      justify: "center",
    },
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const [dailyCost, setDaily] = useState();
  const [weeklyCost, setWeekly] = useState();
  const [monthlyCost, setMonontly] = useState();

  useEffect(() => {
    monthlyCosts().then((res: any) => {
      const data = res.data.data[0].monthlycost;
      setMonontly(data);
    });

    weeklyCosts().then((res: any) => {
      const data = res.data.data[0].weeklycost;
      setWeekly(data);
    });

    dailyCosts().then((res: any) => {
      const data = res.data.data[0].dailycost;
      setDaily(data)
    });
  }, []);

  const monthlyCosts = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3030/checkouts/monthly_material_cost"
      );
      return data;
    } catch (err) {
      return err;
    }
  };
  const weeklyCosts = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3030/checkouts/weekly_material_cost"
      );
      return data;
    } catch (err) {
      return err;
    }
  };
  const dailyCosts = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3030/checkouts/daily_material_cost"
      );
      return data;
    } catch (err) {
      return err;
    }
  };

  const dailyDetailedCosts = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const dailyDetailedCostsOptions: any = {
    title: {
      display: true,
      text: "Daily Material Cost",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };

  const data = useMemo(
    () => ({
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          data: [10, 20, 30, 40, 50],
          backgroundColor: "#2196F3",
        },
      ],
    }),
    []
  );

  const options: any = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Sidebar>
      <Grid container className={classes.root}>
        <Grid item container xs={12} className={classes.topRow}>
          <Grid item xs={12} sm={6} lg={3}>
            <div className="card" id="clock-card">
              <Grid item xs={12}>
                <Button onClick={() => monthlyCosts()}>yyyy</Button>
                <BsClock color="red" size={50} />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" size="large">
                  CLOCK IN
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" size="small">
                  CLOCK OUT
                </Button>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className="card">
              <Grid item xs={12}>
                <Typography className="title">Contractor Attendance</Typography>
              </Grid>
              <Grid item container xs={12}>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>Today:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>20%</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>This week:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>40%</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>This month:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>30%</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography className="employeeNo">
                <i>No of employees: 23</i>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className="card">
              <Grid item xs={12}>
                <Typography className="title">Materials Total Cost</Typography>
              </Grid>
              <Grid item container xs={12}>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>Today:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>{`${dailyCost} shs`}</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>This week:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>{`${weeklyCost} shs`}</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={8} id="item1">
                    <Typography>This month:</Typography>
                  </Grid>
                  <Grid item xs={4} id="item2">
                    <Typography>{`${monthlyCost} shs`}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography className="employeeNo">
                <i>No of Materials: 5</i>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className="card">
              <Button variant="contained" className="checkout-btn">
                Checkout material Now
              </Button>
              <BsPaintBucket color="#ffba01" size={70} />
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} className={classes.bottomRow}>
          <Grid item xs={12} sm={8} lg={4}>
            <div className="card">
              <Grid item xs={12}>
                <Doughnut
                  className="doughnut"
                  data={dailyDetailedCosts}
                  options={dailyDetailedCostsOptions}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className="text">
                  <i>Daily Material Cost</i>
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} lg={5}>
            <div className="card">
              <Bar data={data} options={options} />
              <Typography className="text">
                <i>Weekly Material Cost</i>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} lg={3}>
            <div className="card">
              <Typography className="total-title">
                <i>Summary of Expenditures this month</i>
              </Typography>
              <Grid item container xs={12}>
                <Grid item container xs={12}>
                  <Grid item xs={7} id="item1">
                    <Typography>Today:</Typography>
                  </Grid>
                  <Grid item xs={5} id="item2">
                    <Typography>20%</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={7} id="item1">
                    <Typography>This week:</Typography>
                  </Grid>
                  <Grid item xs={5} id="item2">
                    <Typography>40%</Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={7} id="item1">
                    <Typography>This month:</Typography>
                  </Grid>
                  <Grid item xs={5} id="item2">
                    <Typography>30%</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default Home;
