"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

export default function ThemeRegister({ children }) {
  const [isLight, setIsLight] = useState(true);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setIsLight((prev) => !prev),
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: isLight ? "light" : "dark" },
        typography: {
          fontFamily: `var(--inter-var), Arial, sans-serif`,
        },
        components: {
          MuiButton: {
            variants: [
              {
                props: { variant: "neon" },
                style: {
                  color: "inherit",
                  borderRadius: "15px",
                  border: `2px solid ${isLight ? "#9000ff00" : "#9000ffff"}`,
                  backgroundColor: "transparent",
                  boxShadow: "0 0 6px #b95effff, 0 0 20px #b95eff  inset",
                  textTransform: "unset",
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: "0 0 15px #b95eff, 0 0 25px #b95eff inset",
                    backgroundColor: "rgba(140, 0, 255, 0.1)",
                  },
                },
              },
            ],
          },
        },
      }),
    [isLight],
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
