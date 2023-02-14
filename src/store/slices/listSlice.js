import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const ListSlice = createSlice({
  name: "list",
  initialState: { list: [], budget: 0, spent: 0, remaining: 0 },
  reducers: {
    addExp(state, action) {
      state.list.push({
        id: uuidv4(),
        item: action.payload.item,
        cost: action.payload.cost,
        date: action.payload.date,
      });
      let spent = 0;
      state.list.forEach((exp) => {
        spent += exp.cost;
      });
      state.spent = spent;
      state.remaining = state.budget - spent;
    },
    deleteExp(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
      console.log("hi" + action.payload);
      let spent = 0;
      state.list.forEach((exp) => {
        spent += exp.cost;
      });
      state.spent = spent;
      state.remaining = state.budget - spent;
    },
    editExp: (state, action) => {
      const { id, updates } = action.payload;
      console.log(action.payload);
      const index = state.list.findIndex((exp) => exp.id === id);
      state.list[index] = { ...state.list[index], ...updates };

      let spent = 0;
      state.list.forEach((exp) => {
        spent += Number(exp.cost);
      });
      state.spent = spent;
      state.remaining = state.budget - spent;
    },

    addBudget(state, action) {
      state.budget = action.payload.inbug;

      state.remaining = state.budget - state.spent;
    },
    filterByDate(state, action) {
      const { from, to } = action.payload;
      state.list = state.list.filter((exp) => {
        const date = new Date(exp.date);
        return date >= from && date <= to;
      });
    },
  },
});

export default ListSlice.reducer;
export const { addExp, addBudget, deleteExp, editExp, filterByDate } =
  ListSlice.actions;


