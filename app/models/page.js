"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const models = [
  {
    name: "Mistral 7B",
    description: "Fast and lightweight open-source model.",
    link: "/models/mistral",
  },
  {
    name: "GLM-5",
    description: "Advanced multilingual model.",
    link: "/models/glm",
  },
];

export default function ModelsPage() {
  return (
    <Box p={5}>
      <Typography variant="h3" gutterBottom>
        AI Models
      </Typography>

      {models.map((model, i) => (
        <Card key={i} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">{model.name}</Typography>
            <Typography mb={2}>{model.description}</Typography>
            <Button variant="contained" component={Link} href={model.link}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
