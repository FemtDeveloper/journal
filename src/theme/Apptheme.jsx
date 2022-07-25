import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { puprpleTheme } from "./purpleTheme";

export const Apptheme = ({ children }) => {
  return (
    <ThemeProvider theme={puprpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
