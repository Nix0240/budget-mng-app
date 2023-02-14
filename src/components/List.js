import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
  Alert,
  DialogContentText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp, editExp } from "../store/slices/listSlice";
import CloseIcon from "@mui/icons-material/Close";


const ExpenseList = () => {
  const [snackbarOpen, setSnackbaropen] = React.useState({
    open: false,
    severity: "",
    msg: "",
  });
  const expenses = useSelector((state) => {
    return state.lists.list;
  });
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    item: "",
    cost: "",
    date: "",
  });

  const handleFormInputChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    console.log("hello1");
    dispatch(editExp({ id: selectedItem.id, updates: formInput }));
    setFormOpen(false);
    setFormInput({ item: "", cost: "", date: "" });
    setSnackbaropen({
      open: true,
      severity: "success",
      msg: "Edited successfully",
    });
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setFormInput({ item: item.item, cost: item.cost, date: item.date });
    setFormOpen(true);
  };

  // const deleteItem = (id) => {
  //   dispatch(deleteExp(id));
  //   setSnackbaropen(true);
  // };

  const [open, setOpen] = useState(false);
  // const dispatch = useDispatch();

  const handleDelete = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteExp(id));
    setOpen(false);
    setSnackbaropen({
      open: true,
      severity: "warning",
      msg: "Expense deleted successfully",
    });
  };

  const handleCancelDelete = () => {
    setOpen(false);
  };

  const snackbarClose = () => {
    setSnackbaropen({
      open: false,
      severity: "",
      msg: "",
    });
  };

  const [rows, setRows] = useState(expenses);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    setRows(expenses);
  }, [expenses]);

  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
    if (searchedVal !== " ") {
      const filteredRows = expenses.filter((row) => {
        return row.item.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    } else {
      setRows(expenses);
    }
  };

  const cancelSearch = () => {
    setSearched("");
    setRows(expenses);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          direction: "column",
          justifyContent: "space-around",
        }}
      >
        <TextField
          value={searched}
          onChange={(e) => requestSearch(e.target.value)}
          id="outlined-basic"
          label="Search by name"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={cancelSearch}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          direction: "column",
          justifyContent: "space-around",
        }}
      ></div>

      <List>
        <Snackbar
          open={snackbarOpen.open}
          autoHideDuration={2000}
          onClose={snackbarClose}
        >
          <Alert severity={snackbarOpen.severity} sx={{ width: "100%" }}>
            {snackbarOpen.msg}
          </Alert>
        </Snackbar>
        {rows.map((expense) => (
          <ListItem key={expense.id}>
            <ListItemText
              primary={expense.item}
              secondary={`Rs ${expense.cost} Dated: ${expense.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEdit(expense)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(expense)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog open={formOpen} onClose={() => setFormOpen(false)}>
        <DialogTitle>Edit Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the expense details below and click on the save button
          </DialogContentText>
          <form>
            <input
              type="text"
              name="item"
              value={formInput.item}
              onChange={handleFormInputChange}
              placeholder="Item"
            />
            <input
              type="number"
              name="cost"
              value={formInput.cost}
              onChange={handleFormInputChange}
              placeholder="Cost"
            />
            <input
              type="text"
              name="date"
              value={formInput.date}
              onChange={handleFormInputChange}
              placeholder="Date"
            />
            <DialogActions>
              <Button onClick={() => setFormOpen(false)}>Cancel</Button>
              <Button onClick={handleFormSubmit}>Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={open} onClose={handleCancelDelete}>
        <DialogTitle>Delete Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this expense?
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCancelDelete}>NO</Button>
            <Button onClick={() => handleConfirmDelete(selectedItem.id)}>
              YES
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExpenseList;

