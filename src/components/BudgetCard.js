import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addBudget } from "../store/slices/listSlice";

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
