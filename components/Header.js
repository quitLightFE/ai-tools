"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import { ThemeContext } from "./ThemeRegister";

export default function Header() {
  const { toggleColorMode } = useContext(ThemeContext);
  const theme = useTheme();
  const toggleBodyClass = () => {
    document.body.classList.toggle("dark");
    toggleColorMode();
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            gap: 3,
            // bgcolor: (theme) =>
            //   theme.palette.mode === "dark" ? "#0f172a" : "white",
            " & a": {
              color: theme.palette.mode === "dark" ? "white" : "black",
            },
            background: (t) =>
              t.palette.mode === "dark"
                ? `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3), transparent 40%),
      linear-gradient(135deg, #0f172a, #1e293b)`
                : `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3), transparent 45%),
      linear-gradient(135deg, #daedffff, #ccd8ffff)`,
          }}
        >
          <Typography variant="h6" color="text.primary" fontWeight={700}>
            AI Explorer
          </Typography>
          <Box>
            <Button href="/" component={Link}>
              Home
            </Button>
            <Button href="/models" component={Link}>
              Models
            </Button>
            <Button href="chat" component={Link}>
              AI Chat
            </Button>
          </Box>
          <IconButton
            onClick={toggleBodyClass}
            sx={{
              ml: "auto",
            }}
          >
            <ContrastIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
}
