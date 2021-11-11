import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#198754",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: '7px',
            borderRadius: '25px',
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            backgroundColor: "#198754",
            borderRadius: '25px',
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#198754",
            borderRadius: '25px',
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              width: '10px',
              borderRadius: '25px',
            },
        },
      },
    },
  },
});

export default theme;
