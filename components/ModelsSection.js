import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ModelsSection() {
  return (
    <Box my={10}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Popular Models
        </Typography>

        <Button variant="neon" component={Link} href="/models">
          View All Models
        </Button>
      </Container>
    </Box>
  );
}
