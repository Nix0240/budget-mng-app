import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp } from "../store/slices/listSlice";

const ExpenseList = () => {
  const [snackbarOpen, setSnackbaropen] = React.useState(false);
  const expenses = useSelector((state) => {
    return state.lists.list;
  });
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteExp(id));
    setSnackbaropen(true);
  };

  const snackbarClose = (event) => {
    setSnackbaropen(false);
  };

  return (
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
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteItem(id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
