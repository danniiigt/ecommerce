import { lightTheme } from "@/themes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Provider as MobxProvider } from "mobx-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <MobxProvider>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      </SessionProvider>
    </MobxProvider>
  );
}
