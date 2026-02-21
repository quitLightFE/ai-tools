"use client";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ gap: 3 }}>
          <Typography variant="h6"> AI Explorer</Typography>
          <Button color="inherit" href="/" component={Link}>
            Home
          </Button>
          <Button color="inherit" href="/models" component={Link}>
            Models
          </Button>
          <Button color="inherit" href="chat" component={Link}>
            AI Chat
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
