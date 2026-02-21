// "use client";

// export default function Home() {
//   return <div className="p-10 max-w-2xl mx-auto">

//   </div>;
// }

"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Explore Modern AI Models
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Discover powerful open-source AI models and try our live demo chat.
        </Typography>

        <Button variant="contained" size="large" component={Link} href="/chat">
          Try AI Chat
        </Button>
      </Box>

      {/* Models Section */}
      <Box my={10}>
        <Typography variant="h4" gutterBottom>
          Popular Models
        </Typography>

        <Button variant="outlined" component={Link} href="/models">
          View All Models
        </Button>
      </Box>
    </Container>
  );
}
