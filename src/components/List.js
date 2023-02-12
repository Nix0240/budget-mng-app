import React, { useState } from "react";
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
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp, editExp } from "../store/slices/listSlice";

const ExpenseList = () => {
  const [snackbarOpen, setSnackbaropen] = React.useState(false);
  const expenses = useSelector((state) => {
    return state.lists.list;
  });
  const dispatch = useDispatch();

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // State to keep track of the form open state
  const [formOpen, setFormOpen] = useState(false);

  // State to keep track of the form input values
  const [formInput, setFormInput] = useState({
    item: "",
    cost: "",
    date: "",
  });

  // Helper function to handle form input change
  const handleFormInputChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(editExp(selectedItem.id, formInput));
    setFormOpen(false);
    setFormInput({ item: "", cost: "", date: "" });
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

  const handleDelete = () => {
    setOpen(true);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteExp(id));
    setOpen(false);
  };

  const handleCancelDelete = () => {
    setOpen(false);
  };

  const snackbarClose = (event) => {
    setSnackbaropen(false);
  };

  return (
    <>
      <List>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={snackbarClose}
        >
          <Alert severity="warning" sx={{ width: "100%" }}>
            Expense deleted successfully
          </Alert>
        </Snackbar>
        {expenses.map((expense, id) => (
          <ListItem key={id}>
            <ListItemText
              primary={expense.item}
              secondary={`Rs ${expense.cost} Dated: ${expense.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEdit(expense)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(expense.id)}>
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
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="item"
              value={formInput.item}
              onChange={handleFormInputChange}
              placeholder="Item"
            />
            <input
              type="text"
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
              <Button type="submit">Save</Button>
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
            <Button onClick={handleCancelDelete}>Cancel</Button>
            <Button onClick={() => handleConfirmDelete(selectedItem.id)}>
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExpenseList;

// {
/* <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleCancelDelete}
              // aria-labelledby="delete-confirmation-title"
              // aria-describedby="delete-confirmation-description"
            >
              <DialogTitle id="id">Delete Confirmation</DialogTitle>
              <DialogContent>
                <DialogContentText id="id">
                  Are you sure you want to delete this expense?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleConfirmDelete} color="primary">
                  Yes
                </Button>
                <Button onClick={handleCancelDelete} color="primary">
                  No
                </Button>
              </DialogActions>
            </Dialog>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList; */
//
