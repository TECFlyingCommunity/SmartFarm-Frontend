import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function card4() {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          card de clima
        </Typography>
        <Typography variant="h5" component="div">
          CA{bull}R{bull}D{bull}4
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          CLIMA
        </Typography>
        <Typography variant="body2">
          SMARTFARM 2022.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Visualizar</Button>
      </CardActions>
    </React.Fragment>
  );
}
