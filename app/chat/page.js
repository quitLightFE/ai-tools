"use client";

import {
  Box,
  Button,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

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

      setChat((prev) => [...prev, { ai: data.reply || "Ошибка ответа" }]);
    } catch (err) {
      setChat((prev) => [...prev, { ai: "Ошибка соединения" }]);
    }

    setLoading(false);
  }

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f7fa",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        AI Chat Demo
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {chat.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.user ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 1.5,
                maxWidth: "70%",
                borderRadius: 3,
                backgroundColor: msg.user ? "#1976d2" : "white",
                color: msg.user ? "white" : "black",
              }}
            >
              <Typography variant="body1">{msg.user || msg.ai}</Typography>
            </Paper>
          </Box>
        ))}

        {loading && (
          // </Box>
          <Paper
            elevation={2}
            sx={{
              p: 1.5,
              maxWidth: "70%",
              borderRadius: 3,
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
          backgroundColor: "white",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={sendMessage}
          disabled={loading}
          sx={{
            borderRadius: "30px",
            px: 3,
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
