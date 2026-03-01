"use client";

import { ThemeContext } from "@/components/ThemeRegister";
import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useState, useRef, useEffect, useContext } from "react";
import { ArrowBackIos, Send } from "@mui/icons-material";
import Message from "@/components/Message";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;
    setChat((prev) => [...prev, { user: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);

      setChat((prev) => [...prev, { ai: data.reply || "Ошибка ответа" }]);
    } catch (err) {
      setChat((prev) => [...prev, { ai: "Ошибка соединения" }]);
    }

    setLoading(false);
  }

  const { toggleColorMode } = useContext(ThemeContext);

  const toggleBodyClass = () => {
    document.body.classList.toggle("dark");
    toggleColorMode();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#0f172a" : "white",
          color: (theme) => (theme.palette.mode === "dark" ? "white" : "black"),
          fontWeight: 600,
        }}
      >
        <Typography variant="h5" fontWeight={"bolder"}>
          AI Chat Demo
        </Typography>
        <IconButton
          onClick={toggleBodyClass}
          sx={{
            ml: "auto",
          }}
        >
          <ContrastIcon />
        </IconButton>
        <IconButton
          sx={{ p: 1, borderRadius: 1000 }}
          onClick={() => router.back()}
        >
          <ArrowBackIos /> Back
        </IconButton>
      </AppBar>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          backgroundImage: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(to right, #ff00ff2f, #6a00ff2c)`
              : `linear-gradient(to right, #bcc0ff94, #d1c0ff90)`,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {chat.map((msg, index) => (
          <Message key={index} isUser={!!msg.user}>
            {msg.user || msg.ai}
          </Message>
        ))}
        {!chat.length && (
          <Box position={"absolute"} top={"20%"} left={0} right={0} p={2}>
            <Typography
              variant="h5"
              color="textDisabled"
              fontWeight={500}
              textAlign={"center"}
            >
              Try out our demo chat with AI
            </Typography>
          </Box>
        )}

        {loading && (
          // </Box>
          <Paper
            elevation={2}
            sx={{
              p: 1.5,
              maxWidth: "70%",
              borderRadius: "16px 16px 16px 3px",
              boxShadow: "-5px 5px 0 #7979797f",
              bgcolor: (t) =>
                t.palette.mode === "dark" ? "#ffffff55" : "#ffffff",
            }}
          >
            <Skeleton sx={{ fontSize: "1rem" }} variant="text" />
            <Skeleton sx={{ fontSize: "1rem" }} width={"80%"} variant="text" />
            <Skeleton sx={{ fontSize: "1rem" }} width={"70%"} variant="text" />
          </Paper>
        )}

        <div ref={bottomRef} />
      </Box>

      {/* Input */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #ddd",
          display: "flex",
          gap: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#0f172a" : "#ffffff",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
            },
          }}
        />

        <IconButton
          variant="contained"
          onClick={sendMessage}
          disabled={loading}
          // color="secondary"
          sx={{
            borderRadius: "30px",
            px: 2,
            bgcolor: (theme) => `secondary.${theme.palette.mode}`,
            color: "#ffffff",
            "&:hover svg": {
              transform: "rotate(-30deg) translate(9px, -5px)",
            },
            "& svg": {
              transition: "0.3s",
              transform: "rotate(-30deg)",
            },
          }}
        >
          <Send style={{ marginLeft: 5 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
