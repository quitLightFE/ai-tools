"use client";

import UseHeader from "@/components/UseHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const models = [
  {
    name: "Mistral 7B",
    description: "Fast and lightweight open-source model.",
    link: "/models/mistral",
    buttonText: "Learn more",
  },
  {
    name: "GLM-5",
    description: "Advanced multilingual model.",
    link: "/models/glm",
    buttonText: "Learn more",
  },
  {
    name: "KIMI",
    description: "Advanced model for work with images",
    link: "/models/kimi",
    buttonText: "Try out",
  },
];

export default function ModelsPage() {
  return (
    <UseHeader>
      <Box
        flex={1}
        p={5}
        sx={{
          // backgroundImage: (theme) =>
          //   theme.palette.mode === "dark"
          //     ? `linear-gradient(to right, #ff00ff2f, #6a00ff2c)`
          //     : `linear-gradient(to right, #d0bcff94, #cccfff90)`,
          position: "relative",
          // minHeight: "100vh",
          background: (t) =>
            t.palette.mode === "dark"
              ? "#0f172a"
              : `radial-gradient(circle at 10% 20%, rgba(59,130,246,0.12), transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(168,85,247,0.12), transparent 50%),
      linear-gradient(135deg, #c3d2ffff, #f1f5f9)`,
          overflow: "hidden",

          "&::before": {
            content: '""',
            display: (t) => (t.palette.mode === "dark" ? "block" : "none"),
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #6365f18d, transparent 70%)",
            filter: "blur(80px)",
            top: -100,
            left: -100,
            zIndex: 2,
          },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          position={"relative"}
          zIndex={3}
        >
          AI Models
        </Typography>

        <Grid container spacing={1}>
          {models.map((model, i) => (
            <Grid zIndex={3} key={i} size={[12, 6, "grow"]}>
              <Card
                sx={{
                  mb: [3, 0],
                  height: "100%",
                  borderRadius: "20px",
                  bgcolor: (t) =>
                    t.palette.mode === "dark" ? "#100f2f" : "white",
                  color: "text.primary",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 0 5px purple",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    height: "100%",
                  }}
                >
                  <Typography variant="h5" fontWeight={700}>
                    {model.name}
                  </Typography>
                  <Typography mb={2}>{model.description}</Typography>
                  <Button
                    variant="neon"
                    component={Link}
                    href={model.link}
                    color="secondary"
                    sx={{ mt: "auto" }}
                  >
                    {model.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </UseHeader>
  );
}
