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
//   ></Box>
// );

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const BudgetCard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Card sx={{ bgcolor: "lightgray", width: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  MY BUDGET
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Rs 5000
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">ADD</Button>
              </CardActions>
            </Card>
            <Card sx={{ bgcolor: "lightgray", width: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="body" component="div">
                  MONEY SPENT
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Rs 3000
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: "lightgray", width: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="body" component="div">
                  REMAINING AMOUNT
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Rs 2000
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        {/* <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid> */}
      </Grid>
    </Box>
  );
};

export default BudgetCard;
