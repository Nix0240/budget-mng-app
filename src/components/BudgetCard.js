import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addBudget } from "../store/slices/listSlice";

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
  const [inbug, setInbug] = useState(0);
  const [addbug, setAddbug] = useState(false);
  const budget = useSelector((state) => state.lists.budget);
  const spent = useSelector((state) => state.lists.spent);
  const remaining = useSelector((state) => state.lists.remaining);

  const dispatch = useDispatch();
  const handleSave = () => {
    const payload = { inbug: inbug };
    dispatch(addBudget(payload));
    setAddbug(false);
  };

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
                {!addbug ? (
                  <Typography variant="h4" color="text.secondary">
                    Rs {budget}
                  </Typography>
                ) : (
                  <Input
                    onChange={(e) => {
                      setInbug(e.target.value);
                    }}
                    value={inbug}
                  />
                )}
              </CardContent>
              <CardActions>
                {addbug ? (
                  <>
                    <Button onClick={handleSave}>SAVE</Button>
                    <Button
                      onClick={() => {
                        setInbug(budget);
                        setAddbug(false);
                      }}
                    >
                      CANCEL
                    </Button>
                  </>
                ) : (
                  <Button
                    size="medium"
                    onClick={() => {
                      setAddbug(true);
                    }}
                  >
                    {budget === 0 ? "ADD" : "EDIT"}
                  </Button>
                )}
              </CardActions>
            </Card>
            <Card sx={{ bgcolor: "lightgray", width: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="body" component="div">
                  MONEY SPENT
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Rs {spent}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: "lightgray", width: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="body" component="div">
                  REMAINING AMOUNT
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Rs {remaining}
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
