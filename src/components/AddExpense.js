import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { Alert, Snackbar, TextField } from "@mui/material";
// import { DatePicker } from "@mui/material/date-picker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { addExp } from "../store/slices/listSlice";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",

  transform: "translate(-50%, -50%)",
  width: 700,
  height: 350,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function AddExpense() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toLocaleDateString()
  );
  const [item, setItem] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [snackbarOpen, setSnackbaropen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const budget = useSelector((state) => state.lists.budget);

  React.useEffect(() => {
    if (cost >= budget || !item) {
      setError(true);
    }
    else { 
      setError(false);
    }
  },[cost,item,selectedDate,budget])
  
  
  const handleItemChange = (event) => {
    const input = event.target.value;
    if (!/^[a-zA-Z]+$/.test(input) || input.length > 20) return;
    setItem(input);
  };

  const handleCostChange = (event) => {
    const input = Number(event.target.value);
    if (input <= 0) return;
    setCost(input);
  };

  const dispatch = useDispatch();
  const handleSave = () => {
    const payload = {
      item: item,
      cost: cost,
      date: selectedDate,
    };
    dispatch(addExp(payload));
    if (item !== "" && cost !== " ") {
      setSnackbaropen(true);
    }

    setOpen(false);
    setItem("");
    setCost("");
  };

  const snackbarClose = (event) => {
    setSnackbaropen(false);
    
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Expense
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={snackbarClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Expense Added successfully
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="item"
            label="Item"
            value={item}
            onChange={handleItemChange}
          />
          <TextField
            id="cost"
            label="Cost"
            type="number"
            value={cost}
            onChange={handleCostChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Expense Date"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" onClick={handleSave} disabled={error}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

