import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
  name: "list",
  initialState: { list: [], budget: 0, spent: 0, remaining: 0 },
  reducers: {
    addExp(state, action) {
      state.list.push({
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
      state.list.splice(action.payload, 1);
      // console.log("hi" + action.payload);
    },
    editExp(state, action) {},

    addBudget(state, action) {
      state.budget = action.payload.inbug;
    },
  },
});

// console.log(ListSlice.actions);

export default ListSlice.reducer;
export const { addExp, addBudget, deleteExp } = ListSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const ListSlice = createSlice({
//   name: "list",
//   initialState: [],
//   reducers: {
//     addExp(state, action) {
//       state.push(action.payload);
//     },
//     deleteExp(state, action) {},
//     editExp(state, action) {},
//   },
// });

// console.log(ListSlice);

// export default ListSlice.reducer;
// export const { addExp } = ListSlice.actions;
