import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Multiplication from "./pages/Multiplication";

import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "./themes";

export default function MiniDrawer() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navigation />
        <Container>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace={true} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/multiplication" element={<Multiplication />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
