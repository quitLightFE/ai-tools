import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import UseHeader from "./UseHeader";

export default function Landing() {
  return (
    <UseHeader>
      <Box
        sx={{
          // backgroundImage: (theme) =>
          //   theme.palette.mode === "dark"
          //     ? `linear-gradient(to right, #ff00ff2f, #6a00ff2c)`
          //     : `linear-gradient(to right, #d0bcff94, #cccfff90)`,
          background: (t) =>
            t.palette.mode === "dark"
              ? `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3), transparent 40%),
      linear-gradient(135deg, #0f172a, #1e293b)`
              : `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3), transparent 45%),
      linear-gradient(135deg, #b0d8ff8e, #9bb2ff99)`,
        }}
      >
        <Container>
          <Box
            sx={{
              height: "calc(100vh - 64px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              //   color: "#ffffff",
            }}
            // color={"text.primary"}
          >
            <Typography
              variant="h2"
              gutterBottom
              color="textPrimary"
              fontWeight={700}
              sx={{
                textShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 -30px 0 #ffffff10"
                    : "0 -30px 0 #00000010",
              }}
            >
              Explore Modern AI Models
            </Typography>

            <Typography variant="h6" mb={4}>
              Discover powerful open-source AI models and try our live demo
              chat.
            </Typography>

            <Box display={"flex"} justifyContent={"center"}>
              <Button
                variant="neon"
                href="/chat"
                component={Link}
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                Try AI Chat
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </UseHeader>
  );
}
