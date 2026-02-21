"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function KimiVisionPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("Describe this image in one sentence.");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeImage() {
    if (!imageUrl) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl,
          prompt,
        }),
      });

      const data = await res.json();
      setResult(data.reply);
    } catch {
      setResult("Ошибка запроса");
    }

    setLoading(false);
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Kimi K2.5 Vision Demo
      </Typography>

      <Typography mb={4} color="text.secondary">
        Multimodal AI model capable of understanding images and text.
      </Typography>

      <Paper sx={{ p: 4, mb: 3 }}>
        <TextField
          fullWidth
          label="Image URL"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="Prompt"
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          onClick={analyzeImage}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </Button>
      </Paper>

      {imageUrl && (
        <Box mb={3}>
          <img
            src={imageUrl}
            alt="Preview"
            style={{
              maxWidth: "100%",
              borderRadius: 12,
            }}
          />
        </Box>
      )}

      {result && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">AI Response:</Typography>
          <Typography mt={1}>{result}</Typography>
        </Paper>
      )}
    </Container>
  );
}