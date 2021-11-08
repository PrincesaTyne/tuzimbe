import "../styles/globals.css";
import type { AppProps } from "next/app";
import head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>tuzimbe</title>
        <meta name="description" content="Musicology application" />
        {/* <link rel="icon" type="image/svg+xml" href="/images/logo.svg" /> */}
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
