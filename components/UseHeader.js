import React from "react";
import Header from "./Header";
import { Box, Toolbar } from "@mui/material";

export default function UseHeader({ children }) {
  return (
    <>
      <Header />
      <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
        <Toolbar />
        {children}
      </Box>
    </>
  );
}
