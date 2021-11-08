import React, { JSXElementConstructor, ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import { RouteType } from "../../types/common";
import theme from "../../styles/theme";
import routes from "../../routes";
import { BsHammer } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: 1400,
    backgroundColor: theme.palette.primary.main,
  },
  drawer: {
    width: 260,
    flexShrink: 0,
    "& .MuiPaper-root": {
      backgroundColor: "#f4f4f4",
    },
  },
  drawerPaper: {
    width: 260,
    borderRight: "none",
    whiteSpace: "nowrap",
    backgroundColor: "#f4f4f4",
    padding: "0 5px 0 10px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    overflow: "auto",
    width: "100%",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "98%",
    padding: "2%",
    margin: "0 0 50 0auto",
    minHeight: "90vh",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

type SideBarItem = {
  route: RouteType;
};

type Sidebar = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

function Copyright() {
  return (
    <Typography
      align="center"
      style={{ fontSize: "0.825rem", color: "#6c757d" }}
    >
      <Link color="inherit" href="https://muzicology.herokuapp.com/">
        Tuzimbe {new Date().getFullYear()} | All Rights Reserved
      </Link>
    </Typography>
  );
}

export default function Sidebar({ children }: Sidebar) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const SideBarItem = ({ route }: SideBarItem) => {
    const router = useRouter();
    return (
      <ListItem
        button
        onClick={() => router.push(route.path)}
        style={{
          color:
            router.pathname === route.path
              ? theme.palette.primary.main
              : "#6c757d",
        }}
      >
        <ListItemIcon
          style={{
            color:
              router.pathname === route.path
                ? theme.palette.primary.main
                : "#6c757d",
          }}
        >
          {route.icon}
        </ListItemIcon>
        <ListItemText primary={route.name} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <Hidden mdUp>
              <MenuIcon style={{ width: 30, height: 30, color: "white" }} />
            </Hidden>
          </IconButton>
          <BsHammer color="#ffba01" size={20} />
          <Typography style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Tuzimbe
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={open}
          onClose={handleDrawerToggle}
        >
          <Toolbar />
          <div>
            <List>
              {routes?.main.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Box style={{ position: "absolute", bottom: 20, left: 10 }}>
              <Copyright />
            </Box>
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div>
            <List>
              {routes?.main.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Box style={{ position: "absolute", bottom: 20, left: 10 }}>
              <Copyright />
            </Box>
          </div>
        </Drawer>
      </Hidden>
      <Container className={classes.content}>
        <Toolbar />
        <Grid container className={classes.container}>
          {children}
        </Grid>
      </Container>
    </div>
  );
}
