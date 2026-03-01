import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default function Message({ isUser, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 1.5,
          maxWidth: "70%",
          borderRadius: isUser ? "16px 16px 3px 16px" : "16px 16px 16px 3px",
          backgroundColor: (t) =>
            isUser
              ? "secondary.dark"
              : t.palette.mode === "dark"
                ? "#ffffff55"
                : "#ffffff",
          color: (theme) =>
            isUser
              ? "white"
              : theme.palette.mode === "dark"
                ? "#ffffff"
                : "#000000",
          boxShadow: isUser ? "5px 5px 0 #7979797f" : "-5px 5px 0 #7979797f",
          backdropFilter: "blur(4px)",
        }}
      >
        {isUser ? (
          <>{children}</>
        ) : (
          <Markdown
            rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkGfm]}
          >
            {children}
          </Markdown>
        )}
      </Paper>
    </Box>
  );
}
