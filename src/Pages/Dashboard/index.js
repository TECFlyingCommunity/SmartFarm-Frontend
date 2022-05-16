import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card1 from "../../Components/DashboardLayout/Cards/card1";
import Card2 from "../../Components/DashboardLayout/Cards/card2";
import Card3 from "../../Components/DashboardLayout/Cards/card3";
import Card4 from "../../Components/DashboardLayout/Cards/card4";
import Card5 from "../../Components/DashboardLayout/Cards/card5";
import Card6 from "../../Components/DashboardLayout/Cards/card6";

export default function BackgroundColor() {
  return (
    <div style={{ margin: 30, padding: 30 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              p: 2,
            }}
          >
            <Card1 />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "secondary.main",
              color: "secondary.contrastText",
              p: 2,
            }}
          >
            <Card2 />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{ bgcolor: "error.main", color: "error.contrastText", p: 2 }}
          >
            <Card3 />
          </Box>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Box
            sx={{
              bgcolor: "warning.main",
              color: "warning.contrastText",
              p: 2,
            }}
          >
            <Card4 />
          </Box>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Box sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}>
            <Card5 />
          </Box>
        </Grid>
        <Grid item xs={10} sm={2}>
          <Box
            sx={{
              bgcolor: "success.main",
              color: "success.contrastText",
              p: 2,
            }}
          >
            <Card6 />
          </Box>
        </Grid>

        <Grid item xs={10} sm={2}>
          <Box
            sx={{
              bgcolor: "success.main",
              color: "success.contrastText",
              p: 2,
            }}
          >
            <Card6 />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
