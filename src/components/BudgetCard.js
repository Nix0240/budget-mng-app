import React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
const BudgetCard = () => {
  return (
    <Box height={70} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2} direction="row">
            <Card sx={{ width: 49 + "%", height: 180 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MY BUDGET
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs 5000
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">ADD</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MONEY SPENT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs 3000
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  REMAINING AMOUNT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs 2000
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
};

export default BudgetCard;
