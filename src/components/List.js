import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const expenses = [
  { id: 1, item: "Groceries", cost: 50, date: new Date() },
  { id: 2, item: "Gas", cost: 30, date: new Date() },
  { id: 3, item: "Rent", cost: 1000, date: new Date() },
  { id: 4, item: "Food", cost: 500, date: new Date() },
  { id: 5, item: "travel", cost: 400, date: new Date() },
  { id: 6, item: "Shoping", cost: 300, date: new Date() },
  { id: 7, item: "Electricity", cost: 100, date: new Date() },
];

const ExpenseList = () => {
  return (
    <List>
      {expenses.map((expense) => (
        <ListItem key={expense.id}>
          <ListItemText
            primary={expense.item}
            secondary={`$${expense.cost} - ${expense.date.toDateString()}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
